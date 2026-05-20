import Link from "next/link";
import { works } from "@/data/works";

type Props = {
  lang: string;
  variant?: "desktop" | "mobile";
};

function renderLightEnglish(text: string) {
  return text.split(/([A-Za-z0-9][A-Za-z0-9'’:\-. ]*)/g).map((part, index) =>
    /[A-Za-z0-9]/.test(part) ? (
      <span key={index} className="font-light">
        {part}
      </span>
    ) : (
      part
    ),
  );
}

export default function Sidebar({ lang, variant = "desktop" }: Props) {
  const worksLabel = lang === "ko" ? "작업들" : "Works";
  const boardLabel = lang === "ko" ? "보드" : "Board";
  const isMobile = variant === "mobile";
  const worksList = (
    <div className={`mt-[1vh] flex flex-col gap-[0.3vh] pl-[0.5em] ${isMobile ? "border-l border-current" : ""}`}>
      {works.map((work) => (
        <Link
          key={work.slug}
          href={`/${lang}/${work.slug}`}
        >
          {lang === "ko" ? renderLightEnglish(work.title.ko) : work.title.en}
        </Link>
      ))}
    </div>
  );

  return (
    <nav className={`leading-[0.95] pointer-events-auto`}>

      {isMobile ? (
        <details>
          <summary className="block cursor-pointer list-none [&::-webkit-details-marker]:hidden">
            {worksLabel}
          </summary>

          {worksList}
        </details>
      ) : (
        <>
          <div>
            {worksLabel}
          </div>

          {worksList}
        </>
      )}

      <div className="mt-[2vh]">
        <Link href={`/${lang}/board`}>
          {boardLabel}
        </Link>
      </div>

    </nav>
  );
}
