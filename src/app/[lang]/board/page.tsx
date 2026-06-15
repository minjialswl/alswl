import BoardCanvas from "@/components/BoardCanvas";
import { languages } from "@/data/languages";

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export default function BoardPage() {
  return <BoardCanvas />;
}
