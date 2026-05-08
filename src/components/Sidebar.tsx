import { works } from "@/data/works";

type Props = {
  lang: string;
};

export default function Sidebar({ lang }: Props) {
  return (
    <aside className="w-64 p-8 h-screen flex flex-col justify-between text-sm">
      <div>
        <a
          href={`/${lang}`}
          className="block mb-10"
        >
          민지 Jung Minji
        </a>

        <nav className="flex flex-col gap-1">
          <div className="flex flex-col space-y-[1px]">
            <p>{lang === "ko" ? "작업" : "Works"}</p>

            <div className="flex flex-col space-y-[1px]">
              {works.map((work) => (
                <a
                  key={work.slug}
                  href={`/${lang}/${work.slug}`}
                >
                  {work.title[lang as "ko" | "en"]}
                </a>
              ))}
            </div>
          </div>

          <a href={`/${lang}/board`}>
            {lang === "ko" ? "보드" : "Board"}
          </a>
        </nav>
      </div>
    </aside>
  );
}