import { notFound } from "next/navigation";
import { exhibitions } from "@/data/exhibitions";
import { languages } from "@/data/languages";
import { assetPath } from "@/lib/assetPath";

type Props = {
  params: Promise<{
    lang: string;
    slug: string;
  }>;
};

export function generateStaticParams() {
  return languages.flatMap((lang) =>
    exhibitions.map((exhibition) => ({
      lang,
      slug: exhibition.slug,
    })),
  );
}

export default async function ExhibitionPage({ params }: Props) {
  const { lang, slug } = await params;
  const exhibition = exhibitions.find((item) => item.slug === slug);

  if (!exhibition) {
    notFound();
  }

  return (
    <div className="fixed z-0 overflow-y-auto overscroll-none pointer-events-auto landscape:left-[20vw] landscape:right-0 landscape:top-0 landscape:bottom-0 portrait:inset-0">

      <div className="min-h-[100svh] flex flex-col gap-[2vh] pt-[10vh] pb-[12vh] portrait:pt-[20vh]">

        <div className="sticky top-[4vh] portrait:top-[13vh] z-20 w-full flex justify-center">
          <div className="relative w-[70vw] portrait:w-[90vw] portrait:mx-auto">
            <p className="w-[60vw] portrait:w-[90vw] text-left text-[0.9rem] text-black [text-shadow:0_0_3px_#ffffff] leading-[1.2] whitespace-pre-line landscape:font-normal">
              {"descriptionHref" in exhibition ? (
                <a
                  href={exhibition.descriptionHref}
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-[0.12em]"
                >
                  {lang === "ko"
                    ? exhibition.description.ko
                    : exhibition.description.en}
                </a>
              ) : (
                lang === "ko"
                  ? exhibition.description.ko
                  : exhibition.description.en
              )}
            </p>
          </div>
        </div>

        {exhibition.images.map((image, index) => (
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

              {"caption" in image && image.caption && (
                <figcaption className="w-[60vw] portrait:w-[90vw] mt-[0.6vh] text-right text-[0.8125rem] text-black leading-[1.2]">
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
