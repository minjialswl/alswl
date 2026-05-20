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
      ? "서울시와 경기도의 경계에서 기계거나 기계가 아닌 조각과 설치 작업을 만듭니다.\n자세한 것은 '이미지들'을 참고해주세요."
      : "I create mechanical and non-mechanical sculpture and installation works in Seoul.\nFor more details, please refer to the 'Images' section.";

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
