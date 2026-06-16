"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { assetPath } from "@/lib/assetPath";

export default function MainImage() {
  const [isStatementOpen, setIsStatementOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsStatementOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <div className="w-full h-full min-h-0 overflow-hidden flex items-end justify-end">

      <button
        type="button"
        aria-label="메인 스테이트먼트 보기"
        className="ml-auto flex justify-end cursor-zoom-in border-0 bg-transparent p-0"
        onClick={() => setIsStatementOpen(true)}
      >
        <img
          src={assetPath("/main-image.jpg")}
          alt=""
          className="
            pt-[10vh]

            max-w-[56vw]
            max-h-[56vh]

            portrait:max-w-[65vw]
            portrait:max-h-[65%]

            w-auto
            h-auto
          
            mr-[2vw]
            mb-[5vh]
            portrait:mr-[0vw]
            portrait:translate-y-[5vh]

            object-contain
            block
          "
        />
      </button>

      {isMounted &&
        isStatementOpen &&
        createPortal(
          <button
            type="button"
            aria-label="메인 스테이트먼트 닫기"
            className="fixed inset-0 z-[1000] flex cursor-zoom-out items-center justify-center border-0 bg-white/75 p-[4vw] backdrop-blur-[3px]"
            onClick={() => setIsStatementOpen(false)}
          >
            <img
              src={assetPath("/main-statement.jpg")}
              alt=""
              className="max-h-[90svh] max-w-[90vw] object-contain"
            />
          </button>,
          document.body,
        )}

    </div>
  );
}
