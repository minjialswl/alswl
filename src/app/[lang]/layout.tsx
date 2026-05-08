import LanguageSwitcher from "@/components/LanguageSwitcher";
import Sidebar from "@/components/Sidebar";

type Props = {
  children: React.ReactNode;

  params: Promise<{
    lang: string;
  }>;
};

export default async function LangLayout({
  children,
  params,
}: Props) {
  const { lang } = await params;

  return (
   <div className="flex min-h-screen text-sm">
     <Sidebar lang={lang} />

     <main className="flex-1 p-8 relative">
       <LanguageSwitcher />

       {children}

       <div className="fixed left-8 bottom-8 whitespace-nowrap z-20">
      {lang === "ko"
        ? "서울시와 경기도의 경계에서 기계거나 기계가 아닌 조각과 설치 작업을 만듭니다. 자세한 것은 '이미지들'을 참고해주세요."
        : "Sculptural and installation works based in Seoul."}
       </div>

       <div className="fixed right-8 bottom-8 z-20">
      alswlleft@gmail.com
       </div>
     </main>
   </div>
  );
}