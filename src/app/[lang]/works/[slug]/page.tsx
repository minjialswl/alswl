import { Fragment } from "react";
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

function getVideoEmbedSrc(src: string) {
  if (src.includes("youtube.com/embed/")) {
    return src;
  }

  const shortUrlMatch = src.match(/youtu\.be\/([^?]+)/);

  if (shortUrlMatch) {
    return `https://www.youtube.com/embed/${shortUrlMatch[1]}`;
  }

  const watchUrlMatch = src.match(/[?&]v=([^&]+)/);

  if (watchUrlMatch) {
    return `https://www.youtube.com/embed/${watchUrlMatch[1]}`;
  }

  return src;
}

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

  const description = lang === "ko" ? work.description.ko : work.description.en;
  const descriptionLink =
    "descriptionLink" in work ? work.descriptionLink : undefined;

  const renderDescription = () => {
    if (!descriptionLink) {
      return description;
    }

    const linkText =
      lang === "ko" ? descriptionLink.ko : descriptionLink.en;
    const [beforeLink, afterLink] = description.split(linkText);

    return (
      <>
        {beforeLink}
        <a
          href={descriptionLink.href}
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-[0.12em]"
        >
          {linkText}
        </a>
        {afterLink}
      </>
    );
  };

  const renderVideo = (
    video: {
      src: string;
      title: string;
      caption?: {
        ko: string;
        en: string;
        href?: string;
      };
    },
    key: string,
  ) => (
    <div
      key={key}
      className="w-full flex justify-center"
    >
      <div className="relative w-[75vw] portrait:w-[95vw] portrait:mx-auto">
        <iframe
          src={getVideoEmbedSrc(video.src)}
          title={video.title}
          className="w-[70vw] portrait:w-[95vw] aspect-video block"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
        {video.caption && (
          <div className="w-[70vw] portrait:w-[95vw] mt-[0.6vh] text-right text-[0.8125rem] text-black leading-[1.2]">
            {video.caption.href ? (
              <a
                href={video.caption.href}
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-[0.12em]"
              >
                {lang === "ko" ? video.caption.ko : video.caption.en}
              </a>
            ) : (
              lang === "ko" ? video.caption.ko : video.caption.en
            )}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="fixed z-0 overflow-y-auto overscroll-none pointer-events-auto landscape:left-[20vw] landscape:right-0 landscape:top-0 landscape:bottom-0 portrait:inset-0">

      <div className="min-h-[100svh] flex flex-col gap-[2vh] pt-[10vh] pb-[12vh] portrait:pt-[20vh]">

        {work.description && (
          <div className="sticky top-[4vh] portrait:top-[13vh] z-20 w-full flex justify-center">
            <div className="relative w-[75vw] portrait:w-[95vw] portrait:mx-auto">
              <p className="w-[70vw] portrait:w-[95vw] text-left text-[0.9rem] text-black [text-shadow:0_0_3px_#ffffff] leading-[1.2] whitespace-pre-line landscape:font-normal">
                {renderDescription()}
              </p>
            </div>
          </div>
        )}

        {work.images.map((image, index) => (
          <Fragment key={`image-group-${index}`}>
            <figure
              className="w-full flex justify-center"
            >
              <div className="relative w-[75vw] portrait:w-[95vw] portrait:mx-auto">

                <img
                  src={assetPath(image.src)}
                  alt=""
                  className="w-[70vw] portrait:w-[95vw] h-auto block"
                />

                {"caption" in image && image.caption && (
                  <figcaption className="w-[70vw] portrait:w-[95vw] mt-[0.6vh] text-right text-[0.8125rem] text-black leading-[1.2]">
                    {"href" in image.caption ? (
                      <a
                        href={image.caption.href}
                        target="_blank"
                        rel="noreferrer"
                        className="underline underline-offset-[0.12em]"
                      >
                        {lang === "ko" ? image.caption.ko : image.caption.en}
                      </a>
                    ) : (
                      lang === "ko" ? image.caption.ko : image.caption.en
                    )}
                  </figcaption>
                )}
              </div>
            </figure>

            {"videos" in work && work.videos
              ?.filter((video) => "afterImageIndex" in video && video.afterImageIndex === index)
              .map((video, videoIndex) => renderVideo(video, `video-after-${index}-${videoIndex}`))}
          </Fragment>
        ))}

        {"videos" in work && work.videos
          ?.filter((video) => !("afterImageIndex" in video))
          .map((video, index) => renderVideo(video, `video-end-${index}`))}

      </div>

    </div>
  );
}
