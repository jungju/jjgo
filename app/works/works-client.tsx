"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { SiteLayout } from "../site-layout";
import { localizedSitePath, pagePath, type SiteLocale } from "../site-spec";
import {
  collectionsForLocale,
  worksForLocale,
  type CollectionId,
  type Work,
} from "./works-data";
import { worksCopy } from "./works-copy";
import { WorkStatus } from "./work-status";
import { WorkDialog } from "./work-dialog";

export function WorksClient({ locale = "ko" }: { locale?: SiteLocale }) {
  const [activeCollection, setActiveCollection] = useState<CollectionId>("web");
  const [selected, setSelected] = useState<Work | null>(null);

  const copy = worksCopy[locale];
  const collections = collectionsForLocale(locale);
  const works = worksForLocale(locale);
  const featuredWorks = [5, 3, 4]
    .map((id) => works.find((work) => work.id === id))
    .filter((work): work is Work => Boolean(work));
  const collectionCounts = Object.fromEntries(
    collections.map((collection) => [
      collection.id,
      works.filter((work) => work.collection === collection.id).length,
    ]),
  ) as Record<CollectionId, number>;
  const active =
    collections.find((collection) => collection.id === activeCollection) ??
    collections[0];
  const collectionWorks = works.filter(
    (work) => work.collection === activeCollection,
  );

  return (
    <>
      <SiteLayout
        locale={locale}
        page="works"
        className="forest2-site--works-hub"
      >
        <section className="page-frame forest2-works-frame">
          <div className="page-shell forest2-works-shell">
            <header className="forest2-works-hero" data-visual-id="works-intro">
              <p>WORKS &amp; EXPERIMENTS</p>
              <h1>{copy.heroTitle}</h1>
              <span>{copy.heroBody}</span>
            </header>

            <section
              className="forest2-works-featured"
              aria-labelledby="featured-title"
            >
              <header className="forest2-works-section-head">
                <div>
                  <p>NOW BUILDING</p>
                  <h2 id="featured-title">{copy.featuredTitle}</h2>
                </div>
                <span>{copy.featuredBody}</span>
              </header>
              <div className="forest2-works-featured-grid">
                {featuredWorks.map((work, index) => {
                  const cardClass = `forest2-works-featured-card${index === 0 ? " forest2-works-featured-card--lead" : ""}`;
                  const cardContent = (
                    <>
                      <div className="forest2-works-featured-media">
                        <img
                          src={work.image}
                          alt={`${work.title} ${copy.alt}`}
                          loading={index === 0 ? "eager" : "lazy"}
                          fetchPriority={index === 0 ? "high" : "auto"}
                        />
                      </div>
                      <div className="forest2-works-featured-copy">
                        <div className="forest2-works-card-meta">
                          <span>
                            {index === 0 ? "CURRENT FOCUS" : "FEATURED"}
                          </span>
                          <WorkStatus status={work.status} locale={locale} />
                        </div>
                        <h3>{work.title}</h3>
                        <p>{work.description}</p>
                        <span className="forest2-works-card-action">
                          {work.actionLabel}
                          <ArrowRight />
                        </span>
                      </div>
                    </>
                  );
                  return work.internalPage ? (
                    <a
                      key={work.id}
                      className={cardClass}
                      href={localizedSitePath(
                        locale,
                        pagePath(work.internalPage),
                      )}
                    >
                      {cardContent}
                    </a>
                  ) : (
                    <button
                      key={work.id}
                      className={cardClass}
                      type="button"
                      onClick={() => setSelected(work)}
                      aria-haspopup="dialog"
                    >
                      {cardContent}
                    </button>
                  );
                })}
              </div>
              <div
                className="forest2-works-public-links"
                aria-label={
                  locale === "ko" ? "공개 운영 주소" : "Public live URLs"
                }
              >
                <span>
                  {locale === "ko" ? "공개 운영 주소" : "PUBLIC & LIVE"}
                </span>
                <a
                  href="https://okgo4.jjgo.io"
                  target="_blank"
                  rel="noreferrer"
                >
                  okgo4.jjgo.io
                  <ArrowRight />
                </a>
                <a
                  href="https://mytoon.jjgo.io"
                  target="_blank"
                  rel="noreferrer"
                >
                  mytoon.jjgo.io
                  <ArrowRight />
                </a>
                <a href="https://slop.jjgo.io" target="_blank" rel="noreferrer">
                  slop.jjgo.io
                  <ArrowRight />
                </a>
              </div>
            </section>

            <section
              className="forest2-works-collections"
              aria-labelledby="collections-title"
            >
              <header className="forest2-works-section-head">
                <div>
                  <p>COLLECTIONS</p>
                  <h2 id="collections-title">{copy.collectionsTitle}</h2>
                </div>
                <span>{copy.collectionsBody}</span>
              </header>
              <div className="collection-filters">
                {collections.map((collection) =>
                  collection.id === "roblox" ? (
                    <a
                      key={collection.id}
                      href={localizedSitePath(locale, pagePath("roblox"))}
                    >
                      {collection.title}
                      <ArrowRight size={16} aria-hidden="true" />
                    </a>
                  ) : (
                    <button
                      key={collection.id}
                      type="button"
                      aria-pressed={activeCollection === collection.id}
                      aria-controls="works-collection-list"
                      onClick={() => setActiveCollection(collection.id)}
                    >
                      {collection.title}
                      <span>{collectionCounts[collection.id]}</span>
                    </button>
                  ),
                )}
              </div>
            </section>

            <section
              className="forest2-works-list"
              id="works-collection-list"
              aria-labelledby="works-list-title"
              aria-live="polite"
            >
              <header className="forest2-works-list-head">
                <div>
                  <p>SELECTED COLLECTION</p>
                  <h2 id="works-list-title" tabIndex={-1}>
                    {active.title}
                  </h2>
                  <span>{active.description}</span>
                </div>
                <div className="forest2-works-list-summary">
                  <strong>
                    {String(collectionCounts[active.id]).padStart(2, "0")}
                  </strong>
                  <span>{copy.workCount}</span>
                </div>
              </header>

              {activeCollection === "comics" && (
                <div className="forest2-works-comics-link">
                  <span>{copy.comicsBody}</span>
                  <a
                    href="https://mytoon.jjgo.io"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {copy.comicsAction}
                    <ArrowRight />
                  </a>
                </div>
              )}

              {collectionWorks.length > 0 ? (
                <div
                  className="forest2-works-grid"
                  data-visual-id="works-gallery"
                >
                  {collectionWorks.map((work) => {
                    const cardContent = (
                      <>
                        <div className="forest2-works-card-media">
                          <img
                            src={work.image}
                            alt={`${work.title} ${copy.alt}`}
                            loading="lazy"
                          />
                          <span>{work.category}</span>
                        </div>
                        <div className="forest2-works-card-body">
                          <h3>{work.title}</h3>
                          <p>{work.description}</p>
                          <div>
                            <WorkStatus status={work.status} locale={locale} />
                            <span className="forest2-works-card-action">
                              {work.actionLabel}
                              <ArrowRight />
                            </span>
                          </div>
                        </div>
                      </>
                    );
                    return work.internalPage ? (
                      <a
                        key={work.id}
                        className="forest2-works-card"
                        href={localizedSitePath(
                          locale,
                          pagePath(work.internalPage),
                        )}
                      >
                        {cardContent}
                      </a>
                    ) : (
                      <button
                        key={work.id}
                        className="forest2-works-card"
                        type="button"
                        onClick={() => setSelected(work)}
                        aria-haspopup="dialog"
                      >
                        {cardContent}
                      </button>
                    );
                  })}
                </div>
              ) : (
                <div className="forest2-works-empty">
                  <span>{active.index}</span>
                  <h3>{active.emptyLabel}</h3>
                  <p>{copy.emptyBody}</p>
                </div>
              )}
            </section>
          </div>
        </section>
      </SiteLayout>
      {selected && (
        <WorkDialog
          work={selected}
          works={works}
          locale={locale}
          onClose={() => setSelected(null)}
          onSelect={setSelected}
        />
      )}
    </>
  );
}
