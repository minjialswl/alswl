"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const pathname = usePathname();

  const switchedPath = pathname.startsWith("/ko")
    ? pathname.replace("/ko", "/en")
    : pathname.replace("/en", "/ko");

  return (
    <Link href={switchedPath}>
      {pathname.startsWith("/ko") ? (
        <span className="font-light">en</span>
      ) : (
        "ko"
      )}
    </Link>
  );
}
