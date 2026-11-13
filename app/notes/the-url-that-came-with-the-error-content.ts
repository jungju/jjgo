import type { Note } from "./notes-data";

export const errorUrlNote: Note = {
  page: "noteErrorUrl",
  category: "CODE & OPERATIONS",
  date: "2026-11-14",
  sample: false,
  relatedPages: ["noteQueryCharacters", "noteWaitingRequests"],
  image: "/a/generated/notes/the-url-that-came-with-the-error.webp",
  imageAlt: {
    ko: "프린터에서 나온 진단 종이의 시계와 경로 표시는 돋보기 아래 남겨두고, 끝부분은 산호색 덮개로 가리는 손을 그린 그림",
    en: "A hand covers the tail of a printed diagnostic ticket with a coral sleeve while a magnifying glass keeps its clock and path marks visible",
  },
  ko: {
    title: "실패 이유 옆에 주소도 함께 찍혔다",
    summary:
      "가짜 URL을 넣은 Go 오류를 문자열로 만들었더니 쿼리 값도 따라왔다. 그 값은 지우고, 어떤 실패였는지 묻는 기능은 남겨봤다.",
    sources: [
      {
        label: "commitlog · Go url.Error 쿼리 마스킹 기록",
        href: "https://velog.io/@commitlog/go-url-error-query-masking",
      },
      {
        label: "Go · net/url.Error",
        href: "https://pkg.go.dev/net/url#Error",
      },
      {
        label: "Go · http.Client.Do 오류 계약",
        href: "https://pkg.go.dev/net/http#Client.Do",
      },
    ],
    sections: [
      {
        title: "오류 한 줄에 따라온 것",
        paragraphs: [
          "가짜 주소를 넣은 Go 오류를 하나 만들고 문자열로 출력했다. 끝에는 context deadline exceeded가 붙었다. 그런데 그 앞에 요청 주소와 recipient=demo-person도 같이 있었다.",
          "실제 사람이나 비밀 값을 넣은 것은 아니다. 주소는 example.invalid로 만들었고, demo-person은 예제를 위한 표식이다. HTTP 요청도 보내지 않았다.",
          "url.Error 객체의 URL 칸에 주소를, 원인 칸에 context.DeadlineExceeded를 직접 넣었다. 실제 서버가 시간을 넘겨 응답한 일을 재현한 것이 아니라, 이 오류를 문자열로 읽으면 무엇이 나오는지 본 것이다. 실행 환경은 Go 1.27.0이었다.",
          "나는 실패한 이유를 한 줄로 보려 했는데, 주소에 달린 다른 정보도 같은 줄로 건너왔다.",
          "Go의 url.Error는 작업, URL, 원인 오류를 담는다. http.Client.Do 문서도 반환되는 오류의 형식을 *url.Error로 설명한다. 단순히 ‘요청 실패’라는 문장 하나만 든 객체는 아니었다.",
          "오류 로그의 쿼리를 마스킹한 개발 기록을 읽다가 이 예를 만들어봤다. 실제 요청 없이 오류 객체에서 확인할 수 있는 부분부터 보았다.",
          "URL은 요청을 보낼 때는 필요한 정보였을 수 있다. 그런데 실패 이유를 읽는 사람에게도 그 값이 전부 필요할지는 다른 질문이었다.",
          "내 예에서는 recipient 뒤의 표식이 없어도, 어느 경로를 대상으로 어떤 원인을 넣어 만든 오류인지는 설명할 수 있었다. 그래서 이번에는 그 부분을 빼보기로 했다.",
        ],
      },
      {
        title: "지운 다음에도 물어볼 수 있을까",
        paragraphs: [
          "주소를 파싱해 쿼리를 비우고 새 url.Error를 만들었다. 작업을 나타내는 Op와 원인인 Err는 그대로 넘겼다. 처음 만든 오류는 바꾸지 않았다.",
          "다시 출력한 문자열에는 /report와 context deadline exceeded가 남았다. recipient와 demo-person은 사라졌다.",
          "그 정도로 끝내면, 메시지를 전부 빈칸으로 만드는 코드도 ‘가려졌다’는 검사에는 통과할 수 있겠다. 그래서 남아 있어야 할 것도 같이 봤다.",
          "새 오류의 Timeout()은 true였고, errors.Is로 context.DeadlineExceeded인지 물어도 true가 나왔다. 앞의 것은 이 예제의 타임아웃 분류가 남았다는 뜻이고, 뒤의 것은 원인 오류를 따라갈 수 있다는 뜻이다. 실제 대기 시간을 잰 결과는 아니다.",
          "이 대목이 좋았다. 사람에게 보여줄 문장에서 값을 덜어내면서, 코드가 실패 원인을 묻는 통로는 같이 지우지 않아도 됐다.",
          "물론 이번 예에서 지운 것은 URL의 쿼리뿐이다. 경로나 주소의 다른 부분, 더 안쪽 오류 문장에 값이 들어 있는 경우까지 처리한 것은 아니다. 실제 로그가 어느 경로로 저장되는지나 이미 남아 있는 기록도 확인하지 않았다.",
          "그래서 이것을 모든 로그에 붙이면 끝나는 마스킹 함수라고 부르고 싶지는 않다. 지금 출력한 줄에서 무엇이 빠지고 무엇이 남았는지 확인한 작은 예다.",
          "내가 이 예를 실제 작업에 가져간다면, ‘표식이 없어졌나’ 옆에 ‘무슨 실패였는지는 아직 알 수 있나’도 적어두고 싶다. 가린 뒤에 읽을 사람이 남아 있으니까.",
          "다시 오류 한 줄을 본다. 받는 사람을 뜻하던 가짜 표식은 없다. Get, /report, context deadline exceeded는 남아 있다.",
          "이번에는 무엇을 숨겼는지뿐 아니라, 무엇을 다시 물어볼 수 있는지도 보인다.",
        ],
      },
    ],
  },
  en: {
    title: "The URL came along with the error",
    summary:
      "Turning a Go error containing a fake URL into text carried its query value along too. I removed that value and checked what could still be learned about the failure.",
    sources: [
      {
        label: "commitlog · Redacting queries from Go url.Error",
        href: "https://velog.io/@commitlog/go-url-error-query-masking",
      },
      {
        label: "Go · net/url.Error",
        href: "https://pkg.go.dev/net/url#Error",
      },
      {
        label: "Go · http.Client.Do error contract",
        href: "https://pkg.go.dev/net/http#Client.Do",
      },
    ],
    sections: [
      {
        title: "What travelled into the error line",
        paragraphs: [
          "I constructed a Go error with a fake address and printed its string. It ended with context deadline exceeded. Before that came the request address, including recipient=demo-person.",
          "No real person or secret was involved. The address used example.invalid, and demo-person was an invented marker. I sent no HTTP request.",
          "I put the address directly into a url.Error’s URL field and context.DeadlineExceeded into its cause. This did not reproduce a server taking too long to respond; it checked what text this constructed error produced. The run used Go 1.27.0.",
          "I wanted one line describing the failure. Other details attached to the address travelled into the same line.",
          "Go’s url.Error holds an operation, a URL, and an underlying error. The http.Client.Do documentation also describes returned errors as *url.Error. The object contains more than a generic request-failed sentence.",
          "Reading an account of masking queries in error logs prompted the example. I started with the part I could inspect in an error object without making a request.",
          "A value may belong in an outgoing request. Whether everybody reading a failure needs that value is another question.",
          "In my example, removing the recipient marker would still leave a path and the cause used to construct the error. I tried leaving that detail out.",
        ],
      },
      {
        title: "What can still be asked afterward?",
        paragraphs: [
          "I parsed the address, cleared its query, and constructed a new url.Error. I kept Op, the operation, and Err, the cause. The original error stayed unchanged.",
          "The new string retained /report and context deadline exceeded. Neither recipient nor demo-person remained.",
          "Stopping there would let a function that blanked the entire message pass an absence check. I looked for things that should survive too.",
          "Timeout() on the new error returned true. Asking errors.Is whether its cause was context.DeadlineExceeded also returned true. Those checks showed the timeout classification and access to the cause in this example. They did not measure elapsed waiting time.",
          "I liked that distinction. Removing a value from the human-readable message did not require erasing the route by which code could ask about the failure.",
          "This example removed only the URL query. It did not handle values in a path, other address components, or an inner error’s own text. I did not inspect an actual system’s log routing or previously stored records either.",
          "I would not call this a function that can be attached to every log and finish the job. It is a small check of what disappeared from one constructed line and what remained.",
          "If I carried the example into real work, I would put “can I still identify the failure?” beside “has the marker gone?” Somebody still has to read the result.",
          "Back at the error line, the invented recipient marker is absent. Get, /report, and context deadline exceeded remain.",
          "Now I can see both what was hidden and what can still be asked.",
        ],
      },
    ],
  },
};
