"use client";

import { useState } from "react";
import BoardCanvas from "@/components/BoardCanvas";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Sidebar from "@/components/Sidebar";
import Title from "@/components/Title";

type Props = {
  children: React.ReactNode;
  lang: string;
  bio: string;
};

export default function DesktopLayout({
  children,
  lang,
  bio,
}: Props) {
  const [isBoardOpen, setIsBoardOpen] = useState(false);

  return (
    <div className="w-full h-[100svh] overflow-hidden flex flex-col text-[0.9rem] font-extralight">

      {/* TOP */}
      <header className="relative h-[2svh] shrink-0 px-[0.5vw] py-[1vh] flex items-start justify-between pointer-events-none">

        <div className="relative z-30 pointer-events-auto [text-shadow:0_0_1.5px_#000000]">
          <Title lang={lang} />
        </div>

        <div className="relative z-30 pointer-events-auto [text-shadow:0_0_1.5px_#000000]">
          <LanguageSwitcher />
        </div>

      </header>

      {/* MIDDLE */}
      <main className="flex-1 min-h-0 px-[0.5vw] py-[1vh] mt-[5vh] flex overflow-hidden">

        <div className="relative z-30 w-[20vw] pt-[2vh] shrink-0 [text-shadow:0_0_1.5px_#000000]">
          <Sidebar
            lang={lang}
            variant="desktop"
            onOpenBoard={() => setIsBoardOpen(true)}
          />
        </div>

        <div className="flex-1 min-h-0 relative overflow-hidden">
          {children}
        </div>

      </main>

      {/* BOTTOM */}
      <footer className="relative h-[2svh] shrink-0 px-[0.5vw] py-[1vh] flex items-end justify-between leading-[1] pointer-events-none">

        <div className="relative z-30 max-w-[48vw] whitespace-pre-line pointer-events-auto [text-shadow:0_0_1.5px_#000000]">
          {bio}
        </div>

        <div className="relative z-30 whitespace-nowrap pointer-events-auto tracking-[0.02em] [text-shadow:0_0_1.5px_#000000]">
          contact:jung0minji@gmail.com
        </div>

      </footer>

      {isBoardOpen && (
        <BoardCanvas onClose={() => setIsBoardOpen(false)} />
      )}

    </div>
  );
}
