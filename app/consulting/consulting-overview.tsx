import { ConsultingDetail } from "./consulting-components";
import { aiNativeConsulting } from "./consulting-data";
import { aiNativeConsultingEn } from "./consulting-data-en";
import type { SiteLocale } from "../site-spec";
import { JsonLd, serviceJsonLd } from "../seo";

export function ConsultingOverview({ locale }: { locale: SiteLocale }) {
  const service = locale === "ko" ? aiNativeConsulting : aiNativeConsultingEn;
  return (
    <>
      <JsonLd
        data={serviceJsonLd({
          locale,
          path: "/consulting",
          name: service.detailTitle,
          description: service.summary,
        })}
      />
      <ConsultingDetail locale={locale} service={service} />
    </>
  );
}
