export type BoardItem =
  | {
      type: "image";
      src: string;
    }
  | {
      type: "video";
      src: string;
      poster?: string;
    }
  | {
      type: "youtube";
      src: string;
      title: string;
    };

// 새 보드 이미지와 영상은 public/images/boardimg에 넣고 아래에 추가합니다.
export const boardItems: BoardItem[] = [
  { type: "image", src: "/images/boardimg/024.jpg" },
  { type: "image", src: "/images/boardimg/023.jpg" },
  { type: "image", src: "/images/boardimg/022.jpg" },
  { type: "image", src: "/images/boardimg/021.jpeg" },
  { type: "image", src: "/images/boardimg/020.jpeg" },
  { type: "image", src: "/images/boardimg/019.jpg" },
  { type: "image", src: "/images/boardimg/018.jpeg" },
  { type: "image", src: "/images/boardimg/017.gif" },
  { type: "image", src: "/images/boardimg/016.jpg" },
  { type: "image", src: "/images/boardimg/015.jpeg" },
  { type: "image", src: "/images/boardimg/014.jpeg" },
  { type: "image", src: "/images/boardimg/013.jpeg" },
  { type: "image", src: "/images/boardimg/012.jpg" },
  { type: "image", src: "/images/boardimg/011.jpeg" },
  { type: "image", src: "/images/boardimg/010.jpeg" },
  { type: "image", src: "/images/boardimg/009.JPG" },
  { type: "image", src: "/images/boardimg/008.jpg" },
  { type: "image", src: "/images/boardimg/007.jpeg" },
  { type: "image", src: "/images/boardimg/006.jpeg" },
  { type: "image", src: "/images/boardimg/005.jpeg" },
  { type: "image", src: "/images/boardimg/004.jpeg" },
  { type: "image", src: "/images/boardimg/003.jpeg" },
  { type: "image", src: "/images/boardimg/002.jpeg" },
  { type: "image", src: "/images/boardimg/001.jpg" },
];
