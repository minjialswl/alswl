import { works } from "@/data/works";

type Props = {
  params: Promise<{
    lang: string;
    slug: string;
  }>;
};

export default async function WorkPage({ params }: Props) {
  const { lang, slug } = await params;

  const work = works.find((item) => item.slug === slug);

  if (!work) {
    return <div>Not Found</div>;
  }

  return (
    <article className="max-w-4xl">
      <h1 className="text-4xl mb-4">
        {work.title[lang as "ko" | "en"]}
      </h1>

      <p className="text-zinc-500 mb-12">
        {work.description[lang as "ko" | "en"]}
      </p>

      <div className="flex flex-col gap-16">
        {work.images.map((image) => (
          <figure key={image} className="flex flex-col gap-3">
            <img
              src={image}
              alt=""
              className="w-full object-cover"
            />

            <figcaption className="text-sm text-zinc-500">
              {work.caption[lang as "ko" | "en"]}
            </figcaption>
          </figure>
        ))}
      </div>
    </article>
  );
}