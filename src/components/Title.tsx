import Link from "next/link";

type Props = {
  lang: string;
};

export default function Title({ lang }: Props) {
  return (
    <Link href={`/${lang}`}>
      {lang === "ko" ? (
        <>
          민지 <span className="font-light">Minji</span>
        </>
      ) : (
        <span className="font-light">Minji</span>
      )}
    </Link>
  );
}
