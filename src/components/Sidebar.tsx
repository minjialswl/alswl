"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ExhibitionsNav from "@/components/ExhibitionsNav";
import { exhibitions } from "@/data/exhibitions";
import { works } from "@/data/works";

type Props = {
  lang: string;
  variant?: "desktop" | "mobile";
  onOpenBoard: () => void;
};

function renderEnglish(text: string) {
  return text.split(/([A-Za-z0-9][A-Za-z0-9'’:\-. ]*)/g).map((part, index) =>
    /[A-Za-z0-9]/.test(part) ? (
      <span key={index}>{part}</span>
    ) : (
      part
    ),
  );
}

export default function Sidebar({
  lang,
  variant = "desktop",
  onOpenBoard,
}: Props) {
  const pathname = usePathname();
  const [isWorksOpen, setIsWorksOpen] = useState(false);
  const [hoveredExhibitionSlug, setHoveredExhibitionSlug] = useState<
    string | null
  >(null);
  const worksLabel = lang === "ko" ? "works" : "works";
  const boardLabel = lang === "ko" ? "board" : "board";
  const isMobile = variant === "mobile";
  const currentExhibition = exhibitions.find((exhibition) =>
    pathname.includes(`/exhibitions/${exhibition.slug}`),
  );
  const activeExhibition = exhibitions.find(
    (exhibition) =>
      exhibition.slug ===
      (hoveredExhibitionSlug ?? currentExhibition?.slug),
  );
  const visibleWorkSlugs = new Set<string>(activeExhibition?.workSlugs ?? []);

  useEffect(() => {
    setIsWorksOpen(false);
  }, [pathname]);

  const worksList = (
    <div className={`mt-[1vh] flex flex-col ${isMobile ? "gap-[0.9vh] border-l border-current pl-[0.5em]" : "gap-[0.9vh] pl-[0.5em]"}`}>
      {works.map((work) => (
        <Link
          key={work.slug}
          href={`/${lang}/${work.slug}`}
          className={
            isMobile
              ? "hover:underline underline-offset-[0.12em]"
              : `hover:underline underline-offset-[0.12em] transition-[color,text-shadow] duration-700 ease-in-out ${
                  activeExhibition && !visibleWorkSlugs.has(work.slug)
                    ? "pointer-events-none text-white [text-shadow:none]"
                    : "hover:text-black"
                }`
          }
          onClick={() => {
            if (isMobile) {
              setIsWorksOpen(false);
            }
          }}
        >
          {lang === "ko" ? renderEnglish(work.title.ko) : work.title.en}
        </Link>
      ))}
    </div>
  );

  return (
    <nav className="leading-[0.95] pointer-events-auto">

      {isMobile ? (
        <details
          open={isWorksOpen}
          onToggle={(event) => setIsWorksOpen(event.currentTarget.open)}
        >
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

          <div className="mt-[5vh]">
            <ExhibitionsNav
              lang={lang}
              variant="desktop"
              onActiveChange={setHoveredExhibitionSlug}
            />
          </div>
        </>
      )}

      <div className={isMobile ? "mt-[2vh]" : "mt-[5vh]"}>
        <button
          type="button"
          className={`cursor-pointer border-0 bg-transparent p-0 font-inherit text-inherit [text-shadow:inherit] hover:underline underline-offset-[0.12em] ${
            isMobile ? "" : "hover:text-black"
          }`}
          onClick={onOpenBoard}
        >
          {boardLabel}
        </button>
      </div>

    </nav>
  );
}
