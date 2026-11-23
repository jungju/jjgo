import type { Note } from "./notes-data";

export const fileFingerprintNote: Note = {
  page: "noteFileFingerprint",
  category: "FILES & EVIDENCE",
  date: "2026-11-23",
  sample: false,
  relatedPages: ["noteApprovalVersion", "noteWikiSource"],
  image: "/a/generated/notes/same-text-different-fingerprint.webp",
  imageAlt: {
    ko: "닮은 종이 문서 두 장이 서로 다른 황동 지문 표식과 실로 연결된 그림",
    en: "Two similar paper documents linked by thread to different brass fingerprint tokens",
  },
  ko: {
    title: "같은 문장인데, 파일 지문은 달랐다",
    summary:
      "Ready와 그 끝에 줄바꿈을 넣은 텍스트를 비교했다. SignuDoc의 사본 확인 설명을 읽으며, 같은 뜻과 같은 파일을 구분하고 싶어졌다.",
    sources: [
      {
        label: "SignuDoc · 공식 README의 사본 확인 설명",
        href: "https://github.com/NYLLON-SOFTWARE/SignuDoc",
      },
    ],
    sections: [
      {
        title: "끝의 한 글자",
        paragraphs: [
          "Ready라는 짧은 영문 문자열을 두 개 만들었다. 한쪽은 그 다섯 글자만 있고, 다른 쪽에는 마지막에 줄바꿈 하나가 더 있다. 문장만 읽으면 같은 말이다.",
          "UTF-8 바이트를 세니 5개와 6개였다. Node에서 SHA-256을 계산한 결과도 달랐다. 실제 PDF나 서명 파일을 시험한 것이 아니라, 줄바꿈 하나를 넣은 작은 텍스트 예다.",
          "이 차이를 생각하게 된 것은 SignuDoc의 파일 확인 설명이었다. 공식 README는 완성된 사본이 사이트가 만든 파일과 정확히 같은지 지문으로 확인하는 방식을 소개한다. 여기서 붙잡는 대상은 읽은 문장의 뜻보다 파일 자체다.",
          "문서가 같다는 말을 할 때 나는 어느 쪽을 묻는지 먼저 정하고 싶다. 같은 내용을 읽었는지, 받은 파일을 그대로 가지고 있는지. 두 질문의 답이 늘 같이 움직이지는 않는다.",
          "가령 누군가 문서를 열어 읽고 다시 저장한 뒤 보내줬다고 해보자. 내용은 그대로라고 말한다. 그 설명이 성실하더라도, 원래 파일의 바이트까지 그대로라는 확인은 아직 아니다. 실제 업체나 계약의 사례는 아니다.",
        ],
      },
      {
        title: "무엇이 같다는 확인인가",
        paragraphs: [
          "앞의 두 문자열에서도 지문이 다르다는 사실만으로 문장의 의미가 바뀌었다고 말할 수는 없다. 이 예에서 달라진 것은 끝의 줄바꿈이었다. 무엇이 달라졌는지 알려면 다시 비교할 일이 남는다.",
          "반대로 문장을 눈으로 읽고 같다고 느꼈다는 설명도 파일 일치 확인을 대신하지 않는다. 화면이 보여주는 것과 저장된 바이트를 같은 대상으로 놓으면, 서로 다른 질문을 한 번에 끝낸 것처럼 보인다.",
          "그래서 문서 사본을 확인하는 기능이라면 기준 파일을 어디서 가져왔는지도 알고 싶다. 출처를 모르는 지문 하나와 일치했다고 해서, 내가 의도한 원본을 받았다는 설명까지 생기는 것은 아니다.",
          "이 작은 계산으로 SignuDoc의 PDF 봉인이나 전자서명 검증을 평가한 것은 아니다. 법적 효력이나 누가 서명했는지에 관한 판단도 하지 않았다. 여기서 직접 확인한 것은 두 텍스트의 바이트와 해시뿐이다.",
          "파일을 주고받는 화면이라면 같은 파일이라는 확인과 내용을 검토했다는 확인을 구분해 보여주고 싶다. 사람에게 필요한 다음 행동이 다를 수 있기 때문이다. 사본을 다시 받을지, 바뀐 내용을 읽을지부터 달라진다.",
          "처음의 Ready 옆에는 줄바꿈 하나가 남아 있다. 읽을 말은 같았지만 파일은 달랐다. 다음에 문서를 다시 저장해 보내기 전에는, 읽기 편한 사본과 받은 원본을 나란히 남겨두고 싶다.",
        ],
      },
    ],
  },
  en: {
    title: "The same words, a different file fingerprint",
    summary:
      "Comparing Ready with the same text plus a newline, after reading SignuDoc’s copy-checking description. The same meaning and the same file are different questions.",
    sources: [
      {
        label: "SignuDoc · Official README on checking a copy",
        href: "https://github.com/NYLLON-SOFTWARE/SignuDoc",
      },
    ],
    sections: [
      {
        title: "One extra character at the end",
        paragraphs: [
          "I made two short strings containing Ready. One ends after its five letters; the other adds a newline. Read as a sentence, they say the same thing.",
          "Their UTF-8 lengths were five and six bytes. Calculating SHA-256 in Node produced different digests too. This was a small text example, not a test of a PDF or a signed file.",
          "The prompt was SignuDoc’s description of checking a finished copy. Its official README describes comparing a fingerprint to establish whether a copy is exactly the file the site produced. The object of that comparison is the file, rather than the meaning of its sentence.",
          "Before saying two documents are the same, I would like to settle which question I mean: did we read the same content, or do we retain the same file? The answers need not move together.",
          "Imagine someone opening a document, reading it and saving another copy to send back. They say the content is unchanged. Even an honest account does not yet establish byte-for-byte identity. This is a fictional document exchange, not a real agreement or company incident.",
        ],
      },
      {
        title: "Which kind of match?",
        paragraphs: [
          "A different fingerprint also does not, by itself, establish changed meaning. In our two strings, the difference was a final newline. Finding out what changed still requires a comparison.",
          "Conversely, reading the words and finding them equivalent does not establish file identity. Treating the rendered view and stored bytes as one object can make two different checks appear finished at once.",
          "For a copy-checking feature, I would also want to know where the reference file came from. Matching a fingerprint of unknown origin does not establish that I received the original I intended.",
          "This calculation did not evaluate SignuDoc’s PDF seals or electronic-signature validation. It makes no judgment about legal effect or who signed a document. The direct observations here are the bytes and hashes of two text strings.",
          "In a document-sharing interface, I would distinguish a matching-file result from a content-review result. They can lead to different next actions: obtain the original copy again, or read the changed content.",
          "A newline remains beside the original Ready. The words were the same; the bytes were different. Before saving another document to send back, I would like to keep the received original beside the copy made for reading.",
        ],
      },
    ],
  },
};
