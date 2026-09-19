import type { ConsultingService } from "./consulting-data";

export const aiNativeConsultingEn: ConsultingService = {
  slug: "ai-native",
  number: "01",
  english: "AI NATIVE CONSULTING",
  title: "AI Native",
  shortTitle: "AI Native",
  summary:
    "Connect how teams work, AI and RAG services, and platform operations so AI delivers practical outcomes.",
  detailTitle: "AI Native Consulting",
  detailSummary:
    "Design how people and AI work together, validate services against real work, and build the foundation to operate them reliably. Connect organization, product, and platform in one delivery flow.",
  image: "/a/generated/consulting/ai-native-honeybees-v3.webp",
  keywords: [
    "Organization & workflows",
    "AI · RAG · Agents",
    "Platform & operations",
  ],
  proofTitle: "Connect organizational change to products and operations.",
  proofBody:
    "AI Native takes clear ownership, evaluation against real work, and repeatable delivery. Drawing on product development, AI productization, and cloud platform operations, I help teams build a system they can keep running and improving.",
  metrics: [
    {
      value: "16 yrs",
      label: "Product engineering",
      detail: "From Daum, Kakao, and NCSOFT to AI product organizations",
    },
    {
      value: "~2 months",
      label: "Product redesign",
      detail:
        "Reframed a product operated for more than two years as a new AI-based product",
    },
    {
      value: "About 200",
      label: "Kubernetes clusters",
      detail: "Designed, built, and operated through NCSOFT KaaS",
    },
    {
      value: "1,000+",
      label: "Cluster nodes",
      detail: "Across AWS, GCP, OpenStack, and bare-metal environments",
    },
    {
      value: "15+",
      label: "Cloud services",
      detail: "Integrated into an internal micro-frontend cloud portal",
    },
    {
      value: "Up to 80%",
      label: "Model lead-time reduction",
      detail:
        "Reduced the time to bring new AI models into service through standardization",
    },
  ],
  metricsNote:
    "Source: self-reported project records in Jungju Lee’s portfolio and résumé.",
  expertise: [
    {
      title: "Organization & Workflow Design",
      body: "Define human and AI roles, decision rights, and review responsibilities. Embed reusable AI workflows in planning, development, review, testing, and knowledge sharing.",
    },
    {
      title: "Real Work & Evaluation",
      body: "Build evaluation sets from real questions, documents, and edge cases. Prioritize workflows using quality, cost, latency, and security constraints.",
    },
    {
      title: "AI, RAG & Agent Delivery",
      body: "Compare models, prompts, retrieval, and reranking. Connect task decomposition, routing, tool calls, failure handling, and human review into an operational service.",
    },
    {
      title: "Developer Platform & Automation",
      body: "Design shared environments and self-service paths around developer needs. Connect CI/CD, IaC, service catalogs, and Kubernetes where needed.",
    },
    {
      title: "Quality & Operational Governance",
      body: "Define data access, evaluation logs, monitoring, and SLOs. Manage quality regressions, incidents, deployment, recovery, and cost.",
    },
    {
      title: "Adoption & Capability",
      body: "Turn validated workflows into playbooks, training, and coaching. Use adoption, business outcomes, and delivery time to improve how teams work.",
    },
  ],
  situations: [
    "AI expertise stays with individuals and needs to become a shared way of working.",
    "An AI or RAG proof of concept needs to become a dependable service for real work.",
    "Inconsistent development and deployment practices create operational friction as AI adoption grows.",
  ],
  outcomes: [
    {
      title: "AI Native operating model",
      body: "An actionable roadmap covering principles, roles, data boundaries, approval and review criteria, and priorities.",
    },
    {
      title: "Validated workflows & evaluation sets",
      body: "Real-work scenarios, quality, cost, and latency criteria, AI and RAG configurations, agent flows, and reusable playbooks.",
    },
    {
      title: "Repeatable delivery & operations",
      body: "Reference architecture, development and deployment automation, observability, incident response, and cost management.",
    },
  ],
  process: [
    {
      period: "Context & goals",
      title: "Discover & prioritize",
      body: "Review workflows, data, and delivery practices. Select one high-value workflow and agree on quality, cost, and latency criteria.",
    },
    {
      period: "Roles & architecture",
      title: "Design the system",
      body: "Define human and AI ownership, AI and RAG configurations, platform boundaries, and evaluation. Match scope to the current stage.",
    },
    {
      period: "Real-work validation",
      title: "Build & pilot",
      body: "Implement and evaluate the workflow with one team. Connect review, exception handling, and development and deployment automation.",
    },
    {
      period: "Continuous improvement",
      title: "Operate & expand",
      body: "Track quality, adoption, cost, and feedback. Expand validated practices through standards and training, and refine operating criteria.",
    },
  ],
};
