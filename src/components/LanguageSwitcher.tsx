"use client";

import { usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const pathname = usePathname();

  const koPath = pathname.replace(/^\/(ko|en)/, "/ko");
  const enPath = pathname.replace(/^\/(ko|en)/, "/en");

  return (
    <div className="flex justify-end mb-10 gap-4">
      <a href={koPath}>ko</a>
      <a href={enPath}>en</a>
    </div>
  );
}