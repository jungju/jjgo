import type { Note } from "./notes-data";

export const singleFileOwnershipNote: Note = {
  page: "noteSingleFileOwnership",
  category: "DATA & OPERATIONS",
  date: "2026-10-03",
  sample: false,
  image: "/a/generated/notes/single-file-database-ownership.webp",
  imageAlt: {
    ko: "실로 연결된 문서 카드가 든 투명한 보관함과 황동 열쇠, 뒤편의 작은 백업 상자",
    en: "A transparent cabinet of connected document cards, a brass key and a smaller backup box",
  },
  ko: {
    title: "파일은 하나인데, 누가 닫아야 할까",
    summary:
      "LatticeDB의 한 파일에 그래프와 검색을 모으면 편해진다. 그 파일을 누가 열고, 어디까지 함께 바꾸고, 어떻게 되살릴지는 여전히 남는다.",
    sources: [
      {
        label: "GeekNews · LatticeDB",
        href: "https://news.hada.io/topic?id=34517",
      },
      {
        label: "LatticeDB · README와 운영 범위",
        href: "https://github.com/jeffhajewski/latticedb",
      },
    ],
    sections: [
      {
        title: "상자가 줄면 이삿짐은 가벼워진다",
        paragraphs: [
          "문서 하나를 고쳤는데 검색에는 옛 문장이 나온다면, 어디를 열어봐야 할까. 본문을 담은 곳, 벡터를 담은 곳, 문서끼리 연결해 둔 곳. 이사를 끝냈는데 주소 변경은 아직 남아 있는 느낌이다.",
          "GeekNews에서 LatticeDB를 보고 눈에 들어온 건 ‘한 파일’이라는 말이었다. README는 그래프, 벡터 검색, 전문 검색을 한 저장소에서 다루는 임베디드 DB라고 설명한다. 별도 DB 서버를 띄우지 않는 로컬 도구를 생각하면 매력적인 모양이다.",
          "가령 개인 자료 검색 앱을 만든다고 해보자. 문서에 작성자를 연결하고, 문단을 검색하고, 검색 결과에서 원문으로 돌아간다. 이 예에서는 파일 수보다 문서의 버전을 맞추는 일이 더 신경 쓰인다.",
          "본문을 고친 뒤 임베딩 생성이 실패했다. 화면은 새 문장을 보여주는데 검색은 전날 문장을 찾는다. 저장소가 나뉘어 있다면 무엇이 끝났고 무엇이 남았는지 따로 표시해야 한다.",
          "한곳에 모으면 그 조율을 줄일 여지가 있다. 그래도 어떤 변경을 함께 확정할지는 앱이 정해야 한다. 새 임베딩을 준비할 때까지 기존 버전을 보여줄지, 수정 중이라고 표시할지. 같은 파일에 있다는 이유만으로 이 선택이 정해지지는 않는다.",
        ],
      },
      {
        title: "열쇠는 몇 개여야 할까",
        paragraphs: [
          "그런데 README에서 다음으로 읽어야 할 문장은 덜 화려하다. LatticeDB는 한 머신의 한 소유 프로세스를 전제로 하는 single-writer 모델이다. 여러 앱이 동시에 같은 DB에 쓰거나 네트워크로 여러 클라이언트를 받으려면 다른 구조를 권한다.",
          "앞의 앱에 문서 수집기를 붙인다고 해보자. 화면을 띄우는 프로그램이 파일을 열고, 뒤에서 도는 수집기도 같은 파일을 열면 될 것 같아진다. 파일 경로 하나만 서로 알려주면 되니까.",
          "여기서 ‘하나’의 뜻이 바뀐다. 파일 하나로 묶은 설계에, 독립된 주인 둘을 들여놓으려는 것이다.",
          "이 예라면 DB를 소유한 프로세스로 쓰기 요청을 모으는 방식을 먼저 검토하겠다. 수집기는 처리할 자료를 넘기고, 소유 프로세스가 순서와 실패 처리를 관리한다. 그것이 불편하다면 여러 프로세스가 접근할 서버형 DB가 더 잘 맞을 수 있다.",
          "앱을 종료할 때도 같은 질문이 남는다. 수집 중인 자료는 취소할까, 끝내고 닫을까. 재시작하면 어디서 이어갈까. DB 서버 하나를 없앴다고 프로그램의 종료 순서까지 없어지는 건 아니다.",
        ],
      },
      {
        title: "복사한 상자가 열리는지",
        paragraphs: [
          "README에는 WAL을 통한 장애 복구와 실행 중 사용할 수 있는 lattice backup, 지속적인 변경 백업이 나온다. 지속 백업은 클러스터링이 아니라고도 선을 긋는다. 파일을 다른 곳으로 보낸다고 그곳이 곧바로 두 번째 운영 서버가 되지는 않는다.",
          "앞의 자료 앱을 새 노트북으로 옮긴다고 해보자. 바탕화면에 파일이 보이면 안심하기 쉽다. 하지만 알고 싶은 건 파일이 도착했느냐보다 어느 수정까지 들어 있느냐다.",
          "그래서 이 예의 이사 절차에는 백업을 별도 위치에서 열어보는 일을 넣고 싶다. 마지막으로 확정한 문서 버전을 확인하고, 그 문서가 검색에서도 같은 내용으로 나오는지 본다. 복사 완료 표시로 대신하기에는 목적이 조금 다르다.",
          "프로세스가 갑자기 꺼진 상황과 디스크를 잃어버린 상황도 나눠 생각해야 한다. 잘못 지운 문서를 되돌리고 싶은 상황은 또 다르다. 복구 기능이 있다는 말 뒤에는 어느 시점으로 돌아갈지 정하는 사람이 필요하다.",
          "이 글은 LatticeDB를 직접 운영한 후기나 성능 비교는 아니다. 공개 문서의 사용 범위를 읽고, 작은 자료 앱을 가정해 남는 일을 따라가 본 것이다.",
          "한 파일은 확실히 이삿짐을 줄여준다. 새 노트북에서 그 파일을 처음 열 사람에게는 질문 하나를 같이 건네야겠다.",
          "이 안에는 어디까지 들어 있나요?",
        ],
      },
    ],
  },
  en: {
    title: "One database file, but who closes it?",
    summary:
      "LatticeDB brings graph and search into one file. Ownership, update boundaries and a tested way back still need a place in the application.",
    sources: [
      {
        label: "GeekNews · LatticeDB",
        href: "https://news.hada.io/topic?id=34517",
      },
      {
        label: "LatticeDB · README and operational scope",
        href: "https://github.com/jeffhajewski/latticedb",
      },
    ],
    sections: [
      {
        title: "Fewer boxes to move",
        paragraphs: [
          "You edit a document, but search still returns its old wording. Where do you look? The document store, the vector store, the place that holds its relationships? It feels like finishing a move while your mail keeps going to the old address.",
          "The phrase that caught my attention in the GeekNews item about LatticeDB was ‘one file.’ Its README describes an embedded database combining a graph, vector search and full-text search. That is an appealing shape for a local application.",
          "Imagine a personal research app. Authors connect to documents, paragraphs are searchable, and results lead back to the original. In this example, keeping versions together matters more than the number of files.",
          "An edit saves, then embedding generation fails. The reader sees the new wording while search retrieves yesterday’s paragraph. Separate stores leave the application tracking which step finished and which one is still waiting.",
          "Bringing the data together offers a chance to reduce that coordination. The app must still choose what becomes visible together. Keep the previous version until the new embedding is ready? Show the edit as pending? Sharing a file does not make that decision.",
        ],
      },
      {
        title: "How many keys?",
        paragraphs: [
          "The next detail in the README is less glamorous: one owning process on one machine, with a single-writer model. It recommends a different architecture for multiple independent applications writing to the same database or clients connecting over a network.",
          "Now give the imaginary research app a background importer. It is tempting to have the interface open the file and let the importer open it too. All they would need to exchange is a path.",
          "But that changes the meaning of ‘one.’ We have put the data in one home, then proposed two independent owners.",
          "For this app, I would first consider routing writes through the process that owns the database. The importer hands over prepared material; the owner manages ordering and failure. If that arrangement is awkward, a server database serving several processes may fit the workload better.",
          "Closing the app also needs a decision. Cancel an import, or finish it before exiting? Where should a restart pick up? Removing a separate database service does not remove the application’s shutdown sequence.",
        ],
      },
      {
        title: "Open the box you copied",
        paragraphs: [
          "The README documents WAL recovery, a live lattice backup command and continuous backup. It distinguishes that backup from clustering. Shipping changes elsewhere does not make the destination another operating database server.",
          "Suppose the research app moves to a new laptop. Seeing its file on the desktop is reassuring. The more useful question is which committed edit came with it.",
          "I would include opening the backup in a separate location in this hypothetical move. Check the last committed document version, then search for that document and compare the content. A completed copy is answering a different question.",
          "A process stopping unexpectedly, a lost disk and an accidentally deleted document also call for different recovery plans. Someone still has to decide which point the application should return to.",
          "This is a reading of the project’s documented boundaries, followed through an imagined small app. I have not operated LatticeDB or reproduced its performance claims.",
          "One file certainly reduces the luggage. I would send one question along with it for the person opening it on the new laptop.",
          "How much of the last edit is actually in here?",
        ],
      },
    ],
  },
};
