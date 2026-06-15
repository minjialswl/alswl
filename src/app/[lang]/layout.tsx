import DesktopLayout from "@/components/layout/DesktopLayout";
import MobileLayout from "@/components/layout/MobileLayout";
import { languages } from "@/data/languages";

type Props = {
  children: React.ReactNode;

  params: Promise<{
    lang: string;
  }>;
};

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: Props) {
  const { lang } = await params;

  const bio =
    lang === "ko"
      ? "정민지의 작업을 아카이브하기 위한 사이트입니다.\n궁금하신 것이 있다면 메일 주세요→→→ "
      : "This is a personal archive of Jung Minji’s work.\nPlease email me with any questions.→→→ ";
  return (
    <>
      <div className="landscape-layout">
        <DesktopLayout
          lang={lang}
          bio={bio}
        >
          {children}
        </DesktopLayout>
      </div>

      <div className="portrait-layout">
        <MobileLayout
          lang={lang}
          bio={bio}
        >
          {children}
        </MobileLayout>
      </div>
    </>
  );
}
