import type { SiteLocale } from "../site-spec";
import type { Work } from "./works-data";
import { worksCopy } from "./works-copy";

export function WorkStatus({
  status,
  locale,
}: {
  status: Work["status"];
  locale: SiteLocale;
}) {
  return (
    <span className={`forest2-works-status forest2-works-status--${status}`}>
      {worksCopy[locale].status[status]}
    </span>
  );
}
