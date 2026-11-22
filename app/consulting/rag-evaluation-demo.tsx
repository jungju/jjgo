import type { SiteLocale } from "../site-spec";

const sampleDocuments = [
  {
    id: "P-01",
    ko: "500만 원 이상의 발주서는 발행 전에 재무팀의 승인을 받아야 합니다.",
    en: "Purchase orders of KRW 5 million or more require approval from the finance team before issuance.",
  },
  {
    id: "P-02",
    ko: "설비 긴급 수리는 운영 책임자가 승인합니다. 구매팀에는 1영업일 안에 알립니다.",
    en: "For emergency equipment repair, the operations supervisor approves the request. Notify procurement within one business day.",
  },
  {
    id: "P-03",
    ko: "공급업체 견적서는 발행일부터 달력 기준 30일 동안 유효합니다.",
    en: "Supplier quotations are valid for 30 calendar days from the date of issuance.",
  },
] as const;

type DocumentId = (typeof sampleDocuments)[number]["id"];

const questions = [
  {
    id: "Q1",
    expected: "P-01",
    retrieved: "P-01",
    answerPassed: true,
    ko: {
      question: "500만 원 이상 발주서는 누가 승인하나요?",
      answer: "발행 전에 재무팀 승인이 필요합니다. [P-01]",
    },
    en: {
      question: "Who approves purchase orders of KRW 5 million or more?",
      answer: "The finance team must approve them before issuance. [P-01]",
    },
  },
  {
    id: "Q2",
    expected: "P-03",
    retrieved: "P-03",
    answerPassed: true,
    ko: {
      question: "공급업체 견적서는 언제까지 유효한가요?",
      answer: "발행일부터 달력 기준 30일 동안 유효합니다. [P-03]",
    },
    en: {
      question: "How long are supplier quotations valid?",
      answer: "They are valid for 30 calendar days from issuance. [P-03]",
    },
  },
  {
    id: "Q3",
    expected: "P-02",
    retrieved: null,
    answerPassed: false,
    ko: {
      question: "기계가 갑자기 고장 나면 누구에게 결재를 받아야 하나요?",
      answer: "검색 결과에서 승인자를 확인할 수 없습니다.",
    },
    en: {
      question: "Who signs off on urgent machine repairs?",
      answer: "The retrieved material does not identify an approver.",
    },
  },
  {
    id: "Q4",
    expected: null,
    retrieved: null,
    answerPassed: true,
    ko: {
      question: "출장비를 환급받을 수 있나요?",
      answer: "샘플 문서에서 출장비 환급 규정을 확인할 수 없습니다.",
    },
    en: {
      question: "Can we reimburse travel expenses?",
      answer:
        "The sample documents do not specify a travel reimbursement policy.",
    },
  },
] satisfies {
  id: string;
  expected: DocumentId | null;
  retrieved: DocumentId | null;
  answerPassed: boolean;
  ko: { question: string; answer: string };
  en: { question: string; answer: string };
}[];

const demoCopy = {
  ko: {
    label: "데모 · 가상 샘플 문서",
    title: "RAG 평가 리포트 데모",
    description:
      "가상의 구매 규정 문서 3개와 질문 4개로 검색 결과와 답변을 함께 검토했습니다. 샘플 규모에서 평가 절차를 보여주기 위해 만든 리포트입니다.",
    retrieval: "근거 문서 검색 적중",
    answer: "응답 판정 통과",
    method:
      "영문 질문과 문서에 공통으로 등장한 단어 수(관사·전치사 등 제외)로 상위 문서 1개를 골랐습니다. 공통 단어가 없으면 검색 결과를 비웠습니다. 답변 예시는 문서 근거와 일치하는지, 근거가 없는 질문에 답변을 보류했는지로 판정했습니다.",
    sources: "가상 샘플 문서 3개 보기",
    examples: "질문별 평가",
    expected: "기대 근거",
    retrieved: "검색 결과",
    sampleAnswer: "답변 예시",
    none: "없음",
    grounded: "근거에 맞는 답변",
    miss: "검색 누락",
    abstained: "적절한 답변 보류",
    finding:
      "Q3에서는 문서의 ‘설비 긴급 수리’와 질문의 ‘갑자기 고장’이 같은 업무를 가리켜도 키워드 검색에 걸리지 않았습니다. 다음 실험에서는 동의어를 추가하거나 의미 기반 검색을 결합해 Q3의 누락을 줄이고, 근거가 없는 Q4는 계속 답변을 보류하는지 확인합니다.",
  },
  en: {
    label: "Demo · Fictional sample documents",
    title: "RAG evaluation report demo",
    description:
      "This report walks through retrieval and answer review using three fictional procurement documents and four questions.",
    retrieval: "Evidence retrieval hits",
    answer: "Response checks passed",
    method:
      "The retriever selects the single English document with the most distinct words in common with each question, excluding common function words. Zero overlap returns no document. The answer examples are written from the retrieved context and checked for support or appropriate abstention.",
    sources: "View all three fictional source documents",
    examples: "Question-by-question review",
    expected: "Expected evidence",
    retrieved: "Retrieved",
    sampleAnswer: "Sample answer",
    none: "None",
    grounded: "Supported answer",
    miss: "Retrieval miss",
    abstained: "Appropriate abstention",
    finding:
      "Q3 uses “urgent machine repairs,” while the policy says “emergency equipment repair.” The next run could add synonyms or combine keyword and semantic search, then check that Q3 is retrieved and Q4 still receives no unsupported answer.",
  },
} as const;

export function RagEvaluationDemo({ locale }: { locale: SiteLocale }) {
  const text = demoCopy[locale];
  const answerable = questions.filter(({ expected }) => expected !== null);
  const hits = answerable.filter(
    ({ expected, retrieved }) => expected === retrieved,
  );
  const passes = questions.filter(({ answerPassed }) => answerPassed);

  return (
    <section
      className="forest2-consulting-detail-section rag-demo"
      id="rag-evaluation-demo"
      aria-labelledby="rag-evaluation-demo-title"
    >
      <header>
        <p>{text.label}</p>
        <h2 id="rag-evaluation-demo-title">{text.title}</h2>
        <span>{text.description}</span>
      </header>
      <dl className="rag-demo-scores">
        <div>
          <dt>{text.retrieval}</dt>
          <dd>
            {hits.length}/{answerable.length}
          </dd>
        </div>
        <div>
          <dt>{text.answer}</dt>
          <dd>
            {passes.length}/{questions.length}
          </dd>
        </div>
      </dl>
      <p className="rag-demo-method">{text.method}</p>
      <details className="rag-demo-documents">
        <summary>{text.sources}</summary>
        <ul>
          {sampleDocuments.map((document) => (
            <li key={document.id}>
              <strong>{document.id}</strong> {document[locale]}
            </li>
          ))}
        </ul>
      </details>
      <h3 className="rag-demo-examples-title">{text.examples}</h3>
      <div className="rag-demo-cases">
        {questions.map(({ id, expected, retrieved, [locale]: example }) => (
          <article key={id}>
            <p className="rag-demo-verdict">
              {expected !== retrieved
                ? text.miss
                : expected === null
                  ? text.abstained
                  : text.grounded}
            </p>
            <h4>
              {id}. {example.question}
            </h4>
            <dl>
              <div>
                <dt>{text.expected}</dt>
                <dd>{expected ?? text.none}</dd>
              </div>
              <div>
                <dt>{text.retrieved}</dt>
                <dd>{retrieved ?? text.none}</dd>
              </div>
            </dl>
            <p>
              <strong>{text.sampleAnswer}</strong> {example.answer}
            </p>
          </article>
        ))}
      </div>
      <p className="rag-demo-finding">{text.finding}</p>
    </section>
  );
}
