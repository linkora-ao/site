import { Icon } from "@components/atoms/icon";
import type { ServiceSectionProps } from "./types";

export function ForWhomSection({ content }: ServiceSectionProps) {
  return (
    <section className="sec bg-background" id="para-quem">
      <div className="container">
        <div className="g2 stack grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-[clamp(48px,5.56vw,80px)] items-start">
          <div>
            <div className="eyebrow">Para quem é</div>
            <h2 className="disp h-lg display text-[length:clamp(33px,3.47vw,50px)] leading-[1.05] mt-[20px]">É para ti se…</h2>
            <ul className="list-none mt-[40px] p-0">
              {content.who.map((w) => (
                <li key={w} className="ok reveal">
                  <span className="ck">
                    <Icon name="check" size={15} />
                  </span>
                  <span>{w}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="on-n reveal relative overflow-hidden bg-primary text-background rounded-[20px] py-[clamp(32px,3.33vw,48px)] px-[clamp(29px,3.06vw,44px)] shadow-card">
            <div
              className="max-sm:hidden absolute -right-[clamp(36px,4.17vw,60px)] -bottom-[clamp(36px,4.17vw,60px)] rounded-full bg-accent size-[180px]"
              aria-hidden="true"
            ></div>
            <div className="relative">
              <div className="eyebrow">O problema</div>
              <h3 className="disp display mt-[20px] text-[length:clamp(26px,2.64vw,38px)] leading-[1.08]">
                {content.pain.title}
              </h3>
              <p className="mt-[22px] text-[17.5px] leading-[1.65] text-muted-on-primary max-w-[440px]">
                {content.pain.text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
