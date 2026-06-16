"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { boardItems } from "@/data/board";
import { assetPath } from "@/lib/assetPath";

type Props = {
  onClose?: () => void;
};

export default function BoardCanvas({ onClose }: Props) {
  const [isMounted, setIsMounted] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") {
        return;
      }

      if (selectedImage) {
        setSelectedImage(null);
        return;
      }

      onClose?.();
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [onClose, selectedImage]);

  if (!isMounted) {
    return null;
  }

  return createPortal(
    <div className="fixed inset-0 z-[1000] overflow-y-auto overscroll-contain">
      <div className="fixed inset-0 bg-white/20 backdrop-blur-[3px]" />

      <div className="relative z-[1] grid grid-cols-3 items-center gap-[1vw] px-[5vw] py-[8vh] portrait:gap-[1.5vw] portrait:px-[3vw] portrait:py-[7vh]">
        {boardItems.map((item, index) => (
          <button
            key={item.src}
            type="button"
            aria-label={`보드 이미지 ${index + 1} 크게 보기`}
            className="w-full cursor-zoom-in border-0 bg-transparent p-0 transition-transform duration-200 hover:z-[80] hover:scale-[1.02]"
            onClick={() => setSelectedImage(item.src)}
          >
            <img
              src={assetPath(item.src)}
              alt=""
              className="h-auto w-full bg-white object-contain"
            />
          </button>
        ))}
      </div>

      <button
        type="button"
        aria-label="보드 닫기"
        className="fixed right-[2vw] top-[1.5vh] z-[220] cursor-pointer border-0 bg-transparent p-0 text-[1.6rem] font-extralight leading-none text-black [text-shadow:0_0_5px_rgba(0,0,0,0.65)] portrait:right-[3vw] portrait:top-[1vh]"
        onClick={() => {
          if (onClose) {
            onClose();
            return;
          }

          window.history.back();
        }}
      >
        ×
      </button>

      {selectedImage && (
        <button
          type="button"
          aria-label="확대 이미지 닫기"
          className="fixed inset-0 z-[200] flex cursor-zoom-out items-center justify-center border-0 bg-white/75 p-[4vw] backdrop-blur-[8px]"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={assetPath(selectedImage)}
            alt=""
            className="max-h-[90svh] max-w-[90vw] object-contain"
          />
        </button>
      )}
    </div>,
    document.body,
  );
}
