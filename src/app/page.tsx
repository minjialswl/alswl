"use client";

import { useEffect } from "react";

export default function RootPage() {
  useEffect(() => {
    window.location.replace(new URL("ko/", window.location.href));
  }, []);

  return (
    <main className="min-h-[100svh] flex items-center justify-center text-sm">
      <a href="ko/">민지 Minji</a>
    </main>
  );
}
