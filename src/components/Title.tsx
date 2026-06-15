import Link from "next/link";

type Props = {
  lang: string;
};

export default function Title({ lang }: Props) {
  return (
    <Link href={`/${lang}`}>
      Home
    </Link>
  );
}
