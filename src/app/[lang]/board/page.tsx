import { boardItems } from "@/data/board";
import { languages } from "@/data/languages";
import { assetPath } from "@/lib/assetPath";

type Props = {
  params: Promise<{
    lang: string;
  }>;
};

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export default async function BoardPage({ params }: Props) {
  const { lang } = await params;

  return (
    <div className="w-full h-full overflow-y-auto pr-[2vw]">

      <div className="grid grid-cols-2 gap-x-[2vw] gap-y-[4vh]">

        {boardItems.map((item) => (
          <article
            key={item.id}
            className="flex flex-col gap-[1vh]"
          >
            <img
              src={assetPath(item.image)}
              alt=""
              className="w-full h-auto block"
            />

            <p className="leading-[0.95]">
              {lang === "ko" ? item.text.ko : item.text.en}
            </p>
          </article>
        ))}

      </div>

    </div>
  );
}
