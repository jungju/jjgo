import posthog from "posthog-js";

const projectToken = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;

// Local previews, automation and an explicit owner opt-out do not create visits.
const trackingAllowed =
  typeof window !== "undefined" &&
  window.location.hostname === "jjgo.io" &&
  !navigator.webdriver &&
  (() => {
    try {
      return localStorage.getItem("jjgo.analytics.disabled") !== "1";
    } catch {
      return false;
    }
  })();

if (projectToken && trackingAllowed) {
  try {
    posthog.init(projectToken, {
      api_host:
        process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",
      defaults: "2026-05-30",
      autocapture: true,
      capture_pageview: "history_change",
      capture_pageleave: true,
      disable_session_recording: true,
      person_profiles: "identified_only",
    });
    const start = () => {
      const article = document.querySelector<HTMLElement>(".notes-prose");
      const page = window.location.pathname;
      const locale = page.startsWith("/en/") ? "en" : "ko";
      const capture = (
        event: string,
        details: Record<string, string | number> = {},
      ) =>
        posthog.capture(event, {
          page,
          locale,
          measurement_version: 1,
          ...details,
        });
      document.addEventListener("click", (event) => {
        const link = (event.target as Element | null)?.closest?.("a");
        if (!link) return;
        const target = new URL(link.href, window.location.href);
        if (target.origin !== window.location.origin) return;
        if (target.pathname.endsWith("/feed.xml"))
          capture("rss_click", { target: target.pathname });
        else if (link.closest(".notes-related"))
          capture("related_article_click", { target: target.pathname });
        else if (/^\/(en\/)?consulting(?:\/|$)/.test(target.pathname))
          capture("consulting_cta_click", { target: target.pathname });
      });
      if (!article) return;
      let activeMs = 0;
      let lastTick = performance.now();
      let wasVisible = document.visibilityState === "visible";
      let reachedHalf = false;
      const tick = () => {
        const now = performance.now();
        if (wasVisible) activeMs += Math.min(now - lastTick, 1500);
        lastTick = now;
        wasVisible = document.visibilityState === "visible";
        if (wasVisible) {
          const rect = article.getBoundingClientRect();
          reachedHalf ||= window.innerHeight >= rect.top + rect.height / 2;
        }
        if (activeMs < 30000 || !reachedHalf) return;
        // Unique per PostHog session and article; storage failure skips the event.
        try {
          const key = `jjgo.engaged:${posthog.get_session_id()}:${page}`;
          if (!sessionStorage.getItem(key)) {
            capture("article_engaged", {
              active_seconds: Math.floor(activeMs / 1000),
              depth_percent: 50,
            });
            sessionStorage.setItem(key, "1");
          }
        } catch {
          // Storage restrictions must not interrupt reading the article.
        } finally {
          clearInterval(timer);
        }
      };
      const timer = window.setInterval(tick, 1000);
      document.addEventListener("visibilitychange", tick);
      window.addEventListener(
        "pagehide",
        () => {
          clearInterval(timer);
          document.removeEventListener("visibilitychange", tick);
        },
        { once: true },
      );
    };
    if (document.readyState === "loading")
      document.addEventListener("DOMContentLoaded", start, { once: true });
    else start();
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.warn("PostHog initialization failed", error);
    }
  }
}
