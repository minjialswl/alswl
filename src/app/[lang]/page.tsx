import MainImage from "@/components/MainImage";
import { languages } from "@/data/languages";

type Props = {
  params: Promise<{
    lang: string;
  }>;
};

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export default async function Home({ params }: Props) {
  await params;

  return <MainImage />;
}
