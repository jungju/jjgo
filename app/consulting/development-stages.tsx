import type { SiteLocale } from "../site-spec";

const developmentStageCopy = {
  ko: {
    eyebrow: "DEVELOPMENT METHOD",
    title: "목표와 단계에 맞는 구성을 선택합니다.",
    body: "0→1, 1→10, 10→100에서 검증할 것과 운영 책임은 달라집니다. 팀, 기술, 운영의 복잡도를 현재 목표에 맞춥니다.",
    labels: {
      goal: "목표",
      team: "팀",
      technology: "기술",
      operations: "운영",
    },
    note: "숫자는 회사 규모가 아니라 제품의 검증·확장 단계를 뜻합니다. 실제 구성은 도메인, 위험 수준, 팀 역량에 따라 달라집니다.",
    stages: [
      {
        phase: "0 → 1",
        title: "핵심 가설 검증",
        goal: "가장 작은 제품으로 문제와 핵심 가치가 맞는지 확인합니다.",
        team: "제품·디자인·개발이 가까이 협업하는 소수의 다기능 팀",
        technology: "검증된 기술, 관리형 서비스, 단순한 애플리케이션 구조",
        operations: "짧은 배포 주기, 핵심 로그, 직접적인 사용자 피드백",
      },
      {
        phase: "1 → 10",
        title: "반복 가능한 제품화",
        goal: "검증된 가치를 안정적인 사용과 반복 가능한 개발 흐름으로 만듭니다.",
        team: "제품 책임을 분명히 두고 필요한 전문 역할을 단계적으로 보강",
        technology: "도메인 경계, 자동 테스트·CI/CD, 기본 관찰 가능성",
        operations: "기본 SLO와 장애 대응, 사용·품질 지표, 점진적 표준화",
      },
      {
        phase: "10 → 100",
        title: "안정적인 확장",
        goal: "사용자와 팀이 늘어도 품질, 속도, 비용을 관리합니다.",
        team: "자율적인 제품 팀을 플랫폼·SRE·보안 역량이 공통 지원",
        technology: "확인된 부하·소유 경계만 분리하고 셀프서비스 플랫폼 적용",
        operations: "용량·비용·SLO 관리, 정책 자동화, 점진적 배포와 복구",
      },
    ],
  },
  en: {
    eyebrow: "DEVELOPMENT METHOD",
    title: "Choose the setup that fits the goal and stage.",
    body: "0→1, 1→10, and 10→100 involve different unknowns and operating responsibilities. Match the team, technology, and operational complexity to the current goal.",
    labels: {
      goal: "Goal",
      team: "Team",
      technology: "Technology",
      operations: "Operations",
    },
    note: "The ranges describe stages of product validation and scale, not literal company size. The right setup depends on the domain, risk, and team capability.",
    stages: [
      {
        phase: "0 → 1",
        title: "Validate the core hypothesis",
        goal: "Use the smallest viable product to test the problem and core value.",
        team: "A small cross-functional group with product, design, and engineering working closely",
        technology:
          "Proven tools, managed services, and a simple application architecture",
        operations:
          "Short release cycles, essential telemetry, and direct user feedback",
      },
      {
        phase: "1 → 10",
        title: "Build repeatable delivery",
        goal: "Turn validated value into reliable use and a repeatable delivery flow.",
        team: "Clear product ownership, adding specialist roles as needs emerge",
        technology:
          "Clear domain boundaries, automated tests and CI/CD, baseline observability",
        operations:
          "Basic SLOs and incident response, usage and quality metrics, gradual standardization",
      },
      {
        phase: "10 → 100",
        title: "Operate at scale",
        goal: "Manage quality, speed, and cost as users and teams grow.",
        team: "Autonomous product teams supported by shared platform, SRE, and security capabilities",
        technology:
          "Split only where load or ownership boundaries are proven, with self-service platforms",
        operations:
          "Capacity, cost, and SLO management; policy automation; progressive delivery and recovery",
      },
    ],
  },
} as const;

export function DevelopmentStages({ locale = "ko" }: { locale?: SiteLocale }) {
  const content = developmentStageCopy[locale];
  const headingId = `development-stages-${locale}`;

  return (
    <section className="forest2-consulting-stages" aria-labelledby={headingId}>
      <header>
        <p>{content.eyebrow}</p>
        <h2 id={headingId}>{content.title}</h2>
        <span>{content.body}</span>
      </header>
      <div className="forest2-consulting-stage-grid">
        {content.stages.map((stage) => (
          <article key={stage.phase}>
            <span>{stage.phase}</span>
            <h3>{stage.title}</h3>
            <dl>
              <div>
                <dt>{content.labels.goal}</dt>
                <dd>{stage.goal}</dd>
              </div>
              <div>
                <dt>{content.labels.team}</dt>
                <dd>{stage.team}</dd>
              </div>
              <div>
                <dt>{content.labels.technology}</dt>
                <dd>{stage.technology}</dd>
              </div>
              <div>
                <dt>{content.labels.operations}</dt>
                <dd>{stage.operations}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
      <p className="forest2-consulting-stage-note">{content.note}</p>
    </section>
  );
}
