import { Mail } from "lucide-react";
import type { Locale } from "../language-toggle";

const contactEmail = "leejungju.go@gmail.com";

const copy = {
  ko: {
    emailLabel: "보내실 이메일",
    guide: "메일에는 아래 내용만 간단히 적어주세요.",
    items: ["소속과 현재 계신 위치(도시 또는 시간대)", "나누고 싶은 주제 한두 줄", "가능한 커피챗 시간대 2~3개"],
  },
  en: {
    emailLabel: "Send your note to",
    guide: "Please keep your email to these three details.",
    items: ["Your organization and current location or time zone", "A line or two about the topic", "Two or three time windows that work for you"],
  },
} as const;

export function CoffeeChatContact({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <section className="forest2-coffee-contact">
      <div className="forest2-coffee-address">
        <span>
          <Mail size={17} aria-hidden="true" />
          {t.emailLabel}
        </span>
        <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
      </div>
      <div className="forest2-coffee-request-guide">
        <h3>{t.guide}</h3>
        <ol>
          {t.items.map((item, index) => (
            <li key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              {item}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
