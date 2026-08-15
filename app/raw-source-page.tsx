function extractMain(source: string) {
  return source.match(/<main[\s\S]*<\/main>/)?.[0] ?? source;
}

function adaptConsultingNavigation(source: string) {
  return source
    .replaceAll('href="/method"', 'href="/consulting"')
    .replaceAll(">방법론<", ">컨설팅<")
    .replaceAll("방법 보기", "컨설팅 보기")
    .replaceAll("일하는 방법 보기", "컨설팅 보기")
    .replaceAll("사용자 피드백, XP·애자일, DevOps와 단순한 조직 구조로 제품을 만드는 방식입니다.", "AI Native 조직, AX, 플랫폼 엔지니어링을 통해 실행 가능한 변화를 만듭니다.")
    .replaceAll("사용자 피드백과 XP·애자일을 바탕으로 작게 만들고 검증하며, 개발과 운영을 하나의 흐름으로 연결합니다.", "조직, 비즈니스, 기술 기반을 함께 살펴보고 AI 시대에 필요한 실행 구조를 만듭니다.")
    .replaceAll("피드백과 실험을 반복하며 제품과 조직을 개선하는 방식.", "AI Native 조직, AX, 플랫폼 엔지니어링 컨설팅.");
}

export function RawSourcePage({ source }: { source: string }) {
  return (
    <div
      className="jhub-web-app-root jhub-web-app-root--jjgo2"
      data-jhub-web-app="jjgo2"
      data-jhub-web-app-kind="static-content-site"
      dangerouslySetInnerHTML={{ __html: adaptConsultingNavigation(extractMain(source)) }}
    />
  );
}
