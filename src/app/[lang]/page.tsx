import MainImage from "@/components/MainImage";
import { languages } from "@/data/languages";

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export default function Home() {
  return <MainImage />;
}
