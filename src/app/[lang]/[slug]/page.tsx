import { notFound } from "next/navigation";
import { languages } from "@/data/languages";
import { works } from "@/data/works";
import { assetPath } from "@/lib/assetPath";

type Props = {
  params: Promise<{
    lang: string;
    slug: string;
  }>;
};

export function generateStaticParams() {
  return languages.flatMap((lang) =>
    works.map((work) => ({
      lang,
      slug: work.slug,
    })),
  );
}

export default async function WorkPage({ params }: Props) {
  const { lang, slug } = await params;

  const work = works.find((work) => work.slug === slug);

  if (!work) {
    notFound();
  }

  return (
    <div className="fixed z-0 overflow-y-auto overscroll-none pointer-events-auto landscape:left-[20vw] landscape:right-0 landscape:top-0 landscape:bottom-0 portrait:inset-0">

      <div className="min-h-[100svh] flex flex-col gap-[2vh] pt-[10vh] pb-[12vh] portrait:pt-[13vh]">

        {work.images.map((image, index) => (
          <figure
            key={index}
            className="w-full flex justify-center"
          >
            <div className="relative w-[70vw] portrait:w-[90vw] portrait:mx-auto">

              <img
                src={assetPath(image.src)}
                alt=""
                className="w-[60vw] portrait:w-[90vw] h-auto block"
              />

              {image.caption && (
                <figcaption className="w-[60vw] portrait:w-[90vw] mt-[0.6vh] text-left text-[0.8125rem] text-black leading-[0.95]">
                  {lang === "ko" ? image.caption.ko : image.caption.en}
                </figcaption>
              )}
            </div>
          </figure>
        ))}

      </div>

    </div>
  );
}
