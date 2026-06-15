"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import BoardCanvas from "@/components/BoardCanvas";

const BoardOverlayContext = createContext<(() => void) | null>(null);

export function useBoardOverlay() {
  const openBoard = useContext(BoardOverlayContext);

  if (!openBoard) {
    throw new Error("useBoardOverlay must be used inside BoardOverlayHost");
  }

  return openBoard;
}

type Props = {
  children: ReactNode;
};

export default function BoardOverlayHost({ children }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const openBoard = useMemo(() => () => setIsOpen(true), []);

  return (
    <BoardOverlayContext.Provider value={openBoard}>
      {children}
      {isOpen && <BoardCanvas onClose={() => setIsOpen(false)} />}
    </BoardOverlayContext.Provider>
  );
}
