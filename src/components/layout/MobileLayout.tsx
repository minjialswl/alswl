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
  return (
    <div className="fixed inset-0 isolate w-full h-[100svh] overflow-hidden overscroll-none flex flex-col text-[0.85rem]">

      {/* TOP */}
      <header className="shrink-0 px-[3vw] pt-[0.5vh] pb-[1vh] flex items-start justify-between">

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
        <div className="absolute top-[2vh] left-[3vw] z-[100] max-h-[42vh] overflow-y-auto pr-[2vw] leading-[0.95] pointer-events-auto [text-shadow:0_0_3px_#ffffff]">

          <Sidebar lang={lang} variant="mobile" />

        </div>

        {/* IMAGE / PAGE CONTENT */}
        <div className="absolute inset-x-[5vw] inset-y-[2vh] z-0">

          {children}

        </div>

      </main>

      {/* FOOTER */}
      <footer className="shrink-0 h-[14svh] px-[3vw] pt-[3vh] pb-[0.5vh] leading-[0.95] grid grid-cols-1 grid-rows-2">

        <div className="relative z-50 row-start-1 self-start justify-self-start max-w-[75vw] whitespace-pre-line pointer-events-auto [text-shadow:0_0_3px_#ffffff]">
          {bio}
        </div>

        <div className="relative z-50 row-start-2 self-end justify-self-end whitespace-nowrap pointer-events-auto font-light [text-shadow:0_0_3px_#ffffff]">
          contact: alswlleft@gmail.com
        </div>

      </footer>

    </div>
  );
}
