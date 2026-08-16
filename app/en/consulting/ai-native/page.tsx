import type { Metadata } from "next";
import { ConsultingDetail, consultingServiceBySlug } from "../../../consulting/consulting-components";
import { consultingServicesEn } from "../../../consulting/consulting-data-en";

const service = consultingServiceBySlug(consultingServicesEn, "ai-native");

export const metadata: Metadata = { title: service.title, description: service.summary };

export default function EnglishAiNativePage() {
  return <ConsultingDetail service={service} services={consultingServicesEn} locale="en" />;
}
