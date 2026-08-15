import type { Metadata } from "next";
import { ConsultingDetail } from "../../../consulting/consulting-components";
import { consultingServicesEn } from "../../../consulting/consulting-data-en";

const service = consultingServicesEn[0];

export const metadata: Metadata = { title: service.title, description: service.summary };

export default function EnglishAiNativePage() {
  return <ConsultingDetail service={service} services={consultingServicesEn} locale="en" />;
}
