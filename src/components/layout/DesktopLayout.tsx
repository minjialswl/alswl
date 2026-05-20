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
  return (
    <div className={`w-full h-[100svh] overflow-hidden flex flex-col text-sm ${lang === "en" ? "font-light" : "font-extralight"}`}>

      {/* TOP */}
      <header className="relative h-[2svh] shrink-0 px-[1.5vw] py-[2vh] flex items-start justify-between pointer-events-none">

        <div className="relative z-30 pointer-events-auto [text-shadow:0_0_2px_#000000]">
          <Title lang={lang} />
        </div>

        <div className="relative z-30 pointer-events-auto [text-shadow:0_0_2px_#000000]">
          <LanguageSwitcher />
        </div>

      </header>

      {/* MIDDLE */}
      <main className="flex-1 min-h-0 px-[1.5vw] py-[2vh] flex overflow-hidden">

        <div className="relative z-30 w-[20vw] pt-[2vh] shrink-0 [text-shadow:0_0_2px_#000000]">
          <Sidebar lang={lang} variant="desktop" />
        </div>

        <div className="flex-1 min-h-0 relative overflow-hidden">
          {children}
        </div>

      </main>

      {/* BOTTOM */}
      <footer className="relative h-[2svh] shrink-0 px-[1.5vw] py-[2vh] flex items-end justify-between leading-[0.95] pointer-events-none">

        <div className="relative z-30 max-w-[48vw] whitespace-pre-line pointer-events-auto [text-shadow:0_0_2px_#000000]">
          {bio}
        </div>

        <div className="relative z-30 whitespace-nowrap pointer-events-auto font-light [text-shadow:0_0_2px_#000000]">
          contact:alswlleft@gmail.com
        </div>

      </footer>

    </div>
  );
}
