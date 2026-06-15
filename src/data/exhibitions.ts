// 새 전시는 아래 형식으로 한 항목만 추가하면 됩니다.
// workSlugs에는 src/data/works.ts의 slug를 입력합니다.
export const exhibitions = [
  {
    slug: "mildam-mention-mansion",
    title: {
      ko: "밀담 멘션 맨숀",
      en: "Mildam Mention Mansion",
    },
    description: {
      ko: "2024 ⟪밀담 멘션 맨숀⟫ 그블루 갤러리, 단체전, 서울",
      en: "2024 ⟪Mildam Mention Mansion⟫, Gblue Gallery, Group Exhibition, Seoul",
    },
    images: [
      {
        src: "/images/exhibitionimg/mildam-mention-mansion/01.jpg",
      },
      {
        src: "/images/exhibitionimg/mildam-mention-mansion/02.jpg",
      },
      {
        src: "/images/exhibitionimg/mildam-mention-mansion/03.jpg",
      },
      {
        src: "/images/exhibitionimg/mildam-mention-mansion/04.jpg",
      },
      {
        src: "/images/exhibitionimg/mildam-mention-mansion/05.jpg",
        caption: {
          ko: "©고정균",
          en: "©Jeongkyun Goh",
        },
      },
    ],
    workSlugs: ["negative-drawing", "psyche", "smokingroom"],
  },
  {
    slug: "cushion-attack",
    title: {
      ko: "쿠셔닝 어택",
      en: "Cushion Attack",
    },
    description: {
      ko: "2023 ⟪쿠셔닝 어택⟫ YPC SPACE, 2인전, 서울",
      en: "2023 ⟪Cushion Attack⟫ YPC SPACE, Duo Exhibition, Seoul",
    },
    descriptionHref: "https://yellowpenclub.com/exhibition/506",
    images: [
      {
        src: "/images/exhibitionimg/cushioning-attack/01.jpg",
      },
      {
        src: "/images/exhibitionimg/cushioning-attack/02.jpg",
      },
      {
        src: "/images/exhibitionimg/cushioning-attack/03.jpg",
      },
      {
        src: "/images/exhibitionimg/cushioning-attack/04.jpg",
      },
      {
        src: "/images/exhibitionimg/cushioning-attack/05.jpg",
        caption: {
          ko: "©이의록",
          en: "©Uirock Lee",
        },
      },
    ],
    workSlugs: ["achillesPiercing", "keloid", "plasterKnife"],
  },
] as const;
