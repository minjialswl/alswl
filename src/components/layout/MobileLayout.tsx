"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import BoardCanvas from "@/components/BoardCanvas";
import ExhibitionsNav from "@/components/ExhibitionsNav";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Sidebar from "@/components/Sidebar";
import Title from "@/components/Title";

type Props = {
  children: React.ReactNode;
  lang: string;
  bio: string;
};

export default function MobileLayout({
  children,
  lang,
  bio,
}: Props) {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);
  const langIndex = pathSegments.lastIndexOf(lang);
  const routeSegments = pathSegments.slice(langIndex + 1);
  const isHomePage = routeSegments.length === 0;
  const [isBoardOpen, setIsBoardOpen] = useState(false);

  return (
    <div className="fixed inset-0 isolate w-full h-[100svh] overflow-hidden overscroll-none flex flex-col text-[0.9rem] font-normal">

      {/* TOP */}
      <header className="shrink-0 px-[2vw] pt-[0vh] pb-[1vh] flex items-start justify-between">

        <div className="relative z-50 pointer-events-auto [text-shadow:0_0_3px_#ffffff]">
          <Title lang={lang} />
        </div>

        <div className="relative z-50 pointer-events-auto [text-shadow:0_0_3px_#ffffff]">
          <LanguageSwitcher />
        </div>

      </header>

      {/* MAIN */}
      <main className="relative flex-1 min-h-0 overflow-hidden">

        {/* SIDEBAR */}
        <div className="absolute top-0 left-0 z-[100] w-[82vw] max-h-[60vh] overflow-y-auto px-[2vw] pt-[2vh] pb-[6vh] pr-[8vw] leading-[0.95] pointer-events-auto [text-shadow:0_0_3px_#ffffff]">

          <Sidebar
            lang={lang}
            variant="mobile"
            onOpenBoard={() => setIsBoardOpen(true)}
          />

        </div>

        <div className="absolute top-[2vh] right-[2vw] z-[110] max-w-[62vw] pointer-events-auto [text-shadow:0_0_3px_#ffffff]">
          <ExhibitionsNav
            lang={lang}
            variant="mobile"
          />
        </div>

        {/* IMAGE / PAGE CONTENT */}
        <div className="absolute inset-x-[5vw] inset-y-[2vh] z-0">

          {children}

        </div>

      </main>

      {isHomePage && (
        <footer className="shrink-0 h-[14svh] px-[2vw] pt-[2.4vh] pb-[0.5vh] leading-[1] grid grid-cols-1 grid-rows-[auto_1fr_auto]">

          <div className="relative z-50 row-start-1 w-[100vw] box-border self-start justify-self-start whitespace-pre-line pointer-events-auto [text-shadow:0_0_3px_#ffffff]">
            {bio}
          </div>

          <div className="relative z-50 row-start-3 self-end justify-self-end whitespace-nowrap pointer-events-auto font-normal tracking-[0.02em] [text-shadow:0_0_3px_#ffffff]">
            contact: jung0minji@gmail.com
          </div>

        </footer>
      )}

      {isBoardOpen && (
        <BoardCanvas onClose={() => setIsBoardOpen(false)} />
      )}

    </div>
  );
}
