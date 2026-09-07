"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, X } from "lucide-react";
import { localizedSitePath, pagePath, type SiteLocale } from "../site-spec";
import type { Work } from "./works-data";
import { worksCopy } from "./works-copy";
import { WorkStatus } from "./work-status";

export function WorkDialog({
  work,
  works,
  locale,
  onClose,
  onSelect,
}: {
  work: Work;
  works: Work[];
  locale: SiteLocale;
  onClose: () => void;
  onSelect: (work: Work) => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const copy = worksCopy[locale];
  const relatedWorks = works
    .filter(
      (item) => item.collection === work.collection && item.id !== work.id,
    )
    .slice(0, 3);

  useEffect(() => {
    const dialog = dialogRef.current!;
    const trigger = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    const containFocus = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;
      const controls = dialog.querySelectorAll<HTMLElement>(
        "button:not(:disabled), a[href]",
      );
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    const closeOnBackdrop = (event: MouseEvent) => {
      if (event.target !== dialog) return;
      const bounds = dialog.getBoundingClientRect();
      if (
        event.clientX < bounds.left ||
        event.clientX > bounds.right ||
        event.clientY < bounds.top ||
        event.clientY > bounds.bottom
      )
        dialog.close();
    };
    dialog.addEventListener("mousedown", closeOnBackdrop);
    dialog.addEventListener("keydown", containFocus);
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.removeEventListener("mousedown", closeOnBackdrop);
      dialog.removeEventListener("keydown", containFocus);
      dialog.close();
      document.body.style.overflow = overflow;
      trigger?.focus({ preventScroll: true });
    };
  }, []);

  useEffect(() => {
    dialogRef.current?.scrollTo(0, 0);
    dialogRef.current
      ?.querySelector<HTMLButtonElement>("button")
      ?.focus({ preventScroll: true });
  }, [work.id]);

  return (
    <dialog
      ref={dialogRef}
      className="forest2-work-preview"
      aria-labelledby="work-preview-title"
      onClose={(event) => {
        if (!event.currentTarget.open) onClose();
      }}
    >
      <button
        className="forest2-work-preview-close"
        aria-label={copy.close}
        type="button"
        onClick={() => dialogRef.current?.close()}
      >
        <X size={22} aria-hidden="true" />
      </button>
      <div className="forest2-work-preview-media">
        <img src={work.image} alt={`${work.title} ${copy.alt}`} />
      </div>
      <div className="forest2-work-preview-content">
        <div className="forest2-work-preview-meta">
          <span>{work.category}</span>
          <WorkStatus status={work.status} locale={locale} />
        </div>
        <h2 id="work-preview-title">{work.title}</h2>
        <p className="forest2-work-preview-copy">{work.description}</p>

        <div className="forest2-work-detail-grid">
          <section>
            <span>WHY</span>
            <h3>{copy.purpose}</h3>
            <p>{work.purpose}</p>
          </section>
          <section>
            <span>BUILD</span>
            <h3>{copy.build}</h3>
            <ul>
              {work.technologies.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>{work.roles.join(" · ")}</p>
          </section>
          <section className="forest2-work-detail-update">
            <span>NOW</span>
            <h3>{copy.now}</h3>
            <p>{work.update}</p>
          </section>
        </div>

        {work.internalPage ? (
          <a
            className="forest2-work-primary-action"
            href={localizedSitePath(locale, pagePath(work.internalPage))}
          >
            {work.actionLabel}
            <ArrowRight />
          </a>
        ) : work.url ? (
          <a
            className="forest2-work-primary-action"
            href={work.url}
            target="_blank"
            rel="noreferrer"
          >
            {work.actionLabel}
            <ArrowRight />
          </a>
        ) : null}

        {relatedWorks.length > 0 && (
          <section
            className="forest2-work-related"
            aria-labelledby="related-title"
          >
            <div>
              <span>RELATED WORKS</span>
              <h3 id="related-title">{copy.related}</h3>
            </div>
            <div>
              {relatedWorks.map((work) => (
                <button
                  key={work.id}
                  type="button"
                  onClick={() => onSelect(work)}
                >
                  <img src={work.image} alt="" />
                  <span>
                    <strong>{work.title}</strong>
                    <em>{work.category}</em>
                  </span>
                  <ArrowRight />
                </button>
              ))}
            </div>
          </section>
        )}
      </div>
    </dialog>
  );
}
