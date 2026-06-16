"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { exhibitions } from "@/data/exhibitions";

type Props = {
  lang: string;
  variant: "desktop" | "mobile";
  onActiveChange?: (slug: string | null) => void;
};

export default function ExhibitionsNav({
  lang,
  variant,
  onActiveChange,
}: Props) {
  const pathname = usePathname();
  const isMobile = variant === "mobile";
  const [isExhibitionsOpen, setIsExhibitionsOpen] = useState(false);

  useEffect(() => {
    setIsExhibitionsOpen(false);
  }, [pathname]);

  const exhibitionsList = (
    <div className={`mt-[1vh] flex flex-col gap-[0.9vh] ${isMobile ? "border-r border-current pr-[0.5em]" : "pl-[0.5em]"}`}>
      {exhibitions.map((exhibition) => {
        const title =
          lang === "ko" ? exhibition.title.ko : exhibition.title.en;
        const href = `/${lang}/exhibitions/${exhibition.slug}`;

        if (isMobile) {
          return (
            <Link
              key={exhibition.slug}
              href={href}
              className="text-right hover:underline underline-offset-[0.12em]"
              onClick={() => setIsExhibitionsOpen(false)}
            >
              {title}
            </Link>
          );
        }

        return (
          <Link
            key={exhibition.slug}
            href={href}
            className="hover:text-black hover:underline underline-offset-[0.12em]"
            onMouseEnter={() => onActiveChange?.(exhibition.slug)}
            onMouseLeave={() => onActiveChange?.(null)}
            onFocus={() => onActiveChange?.(exhibition.slug)}
            onBlur={() => onActiveChange?.(null)}
          >
            {title}
          </Link>
        );
      })}
    </div>
  );

  return (
    <nav className={isMobile ? "text-right leading-[0.95]" : ""}>
      {isMobile ? (
        <details
          open={isExhibitionsOpen}
          onToggle={(event) => setIsExhibitionsOpen(event.currentTarget.open)}
        >
          <summary className="block cursor-pointer list-none [&::-webkit-details-marker]:hidden">
            exhibitions
          </summary>

          {exhibitionsList}
        </details>
      ) : (
        <>
          <div>
            exhibitions
          </div>

          {exhibitionsList}
        </>
      )}
    </nav>
  );
}
