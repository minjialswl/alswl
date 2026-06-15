# 포트폴리오 콘텐츠 수정 매뉴얼

VS Code에서 `my-webpage` 폴더를 연 상태를 기준으로 설명합니다.

## 기본 주의사항

- 이미지 파일명과 코드의 경로는 대소문자까지 정확히 같아야 합니다.
- 파일명에는 한글과 공백 대신 영문, 숫자, `-`를 사용하는 편이 안전합니다.
- 웹 이미지는 `.jpg`, `.jpeg`, `.png`, `.webp`를 권장합니다.
- `.heic` 파일은 브라우저에 따라 표시되지 않으므로 사용하지 않습니다.
- 배열에서 항목의 순서를 바꾸면 사이드바와 상세 페이지의 이미지 순서도 바뀝니다.
- 코드 항목 사이의 쉼표(`,`), 따옴표, 중괄호를 삭제하지 않도록 주의합니다.

## 1. 작업 추가

### 1-1. 이미지 폴더 만들기

`public/images/workimg` 안에 작업 전용 폴더를 만듭니다.

예:

```text
public/images/workimg/new-work/
├── 01.jpg
├── 02.jpg
└── 03.jpg
```

폴더 이름은 아래 데이터의 `slug`와 같게 만드는 것을 권장합니다.

### 1-2. 작업 데이터 추가하기

다음 파일을 엽니다.

```text
src/data/works.ts
```

`works` 배열 안에서 원하는 위치에 다음 형식의 항목을 추가합니다.

```ts
{
  slug: "new-work",

  title: {
    ko: "새 작업",
    en: "New Work",
  },

  description: {
    ko: "<새 작업>, 2026, 재료, 크기",
    en: "<New Work>, 2026, materials, dimensions",
  },

  images: [
    {
      src: "/images/workimg/new-work/01.jpg",
    },
    {
      src: "/images/workimg/new-work/02.jpg",
    },
  ],
},
```

`slug` 규칙:

- 다른 작업과 중복되지 않는 고유한 값이어야 합니다.
- 영문, 숫자, `-` 사용을 권장합니다.
- 상세 페이지 주소가 됩니다. 위 예시는 `/ko/new-work/`입니다.

### 1-3. 이미지 캡션 추가하기

캡션이 필요한 이미지에만 `caption`을 추가합니다.

```ts
{
  src: "/images/workimg/new-work/02.jpg",
  caption: {
    ko: "한국어 캡션 ©촬영자",
    en: "English caption ©Photographer",
  },
},
```

캡션에 외부 링크가 필요하면 `href`를 추가합니다.

```ts
caption: {
  ko: "한국어 캡션",
  en: "English caption",
  href: "https://example.com",
},
```

### 1-4. 유튜브 영상 추가하기

작업의 마지막 이미지 다음에 영상을 표시하려면 `videos`를 추가합니다.

```ts
videos: [
  {
    src: "https://youtu.be/VIDEO_ID",
    title: "New Work",
  },
],
```

특정 이미지 다음에 영상을 표시하려면 `afterImageIndex`를 추가합니다. 숫자는 `0`부터 시작합니다.

```ts
videos: [
  {
    src: "https://youtu.be/VIDEO_ID",
    title: "New Work",
    afterImageIndex: 1,
  },
],
```

`afterImageIndex: 1`은 두 번째 이미지 다음이라는 뜻입니다.

영상 아래 캡션도 추가할 수 있습니다.

```ts
caption: {
  ko: "한국어 영상 캡션",
  en: "English video caption",
},
```

## 2. 전시 추가

### 2-1. 이미지 폴더 만들기

`public/images/exhibitionimg` 안에 전시 전용 폴더를 만듭니다.

예:

```text
public/images/exhibitionimg/new-exhibition/
├── 01.jpg
├── 02.jpg
└── 03.jpg
```

### 2-2. 전시 데이터 추가하기

다음 파일을 엽니다.

```text
src/data/exhibitions.ts
```

`exhibitions` 배열 안에서 원하는 위치에 다음 항목을 추가합니다.

```ts
{
  slug: "new-exhibition",

  title: {
    ko: "새 전시",
    en: "New Exhibition",
  },

  description: {
    ko: "2026 ⟪새 전시⟫ 전시장, 단체전, 서울",
    en: "2026 ⟪New Exhibition⟫, Venue, Group Exhibition, Seoul",
  },

  images: [
    {
      src: "/images/exhibitionimg/new-exhibition/01.jpg",
    },
    {
      src: "/images/exhibitionimg/new-exhibition/02.jpg",
      caption: {
        ko: "©촬영자",
        en: "©Photographer",
      },
    },
  ],

  workSlugs: ["new-work"],
},
```

`workSlugs`에는 이 전시에 포함되는 작업의 `slug`를 입력합니다.

```ts
workSlugs: ["new-work", "another-work"],
```

전시 description 전체에 외부 링크를 연결하려면 다음 값을 추가합니다.

```ts
descriptionHref: "https://example.com",
```

## 3. 보드 이미지 또는 영상 추가

### 3-1. 이미지 넣기

새 이미지나 영상 파일을 다음 폴더에 넣습니다.

```text
public/images/boardimg
```

예:

```text
public/images/boardimg/022.jpg
public/images/boardimg/board-video.mp4
```

### 3-2. 보드 데이터에 경로 추가하기

다음 파일을 엽니다.

```text
src/data/board.ts
```

`boardItems` 배열의 원하는 위치에 항목을 추가합니다.

```ts
export const boardItems = [
  { type: "image", src: "/images/boardimg/01.jpeg" },
  { type: "image", src: "/images/boardimg/022.jpg" },
];
```

로컬 영상은 다음 형식으로 추가합니다. 호환성을 위해 H.264 방식의 `.mp4` 파일을 권장합니다.

```ts
{
  type: "video",
  src: "/images/boardimg/board-video.mp4",
},
```

영상 재생 전에 보일 표지 이미지를 지정할 수도 있습니다.

```ts
{
  type: "video",
  src: "/images/boardimg/board-video.mp4",
  poster: "/images/boardimg/board-video-poster.jpg",
},
```

유튜브 영상은 파일을 넣지 않고 링크만 추가합니다.

```ts
{
  type: "youtube",
  src: "https://youtu.be/VIDEO_ID",
  title: "보드 영상 제목",
},
```

배열에 적힌 순서대로 보드의 3열 그리드에 표시됩니다. 파일만 폴더에 넣고 이 배열에 추가하지 않으면 화면에 표시되지 않습니다. GitHub는 큰 파일 업로드를 제한하므로 용량이 큰 영상은 유튜브 사용을 권장합니다.

## 4. BIO 변경

다음 파일을 엽니다.

```text
src/app/[lang]/layout.tsx
```

`const bio` 안의 한국어와 영어 문장을 수정합니다.

```ts
const bio =
  lang === "ko"
    ? "새 한국어 BIO"
    : "New English BIO";
```

문장 안에서 줄을 바꾸려면 `\n`을 입력합니다.

```ts
"첫 번째 줄\n두 번째 줄"
```

한국어와 영어를 모두 수정해야 언어 전환 시 내용이 일치합니다.

## 5. 메인 이미지 변경

현재 메인 이미지는 다음 파일입니다.

```text
public/main-image.jpg
```

가장 간단한 방법:

1. 새 이미지의 파일명을 `main-image.jpg`로 변경합니다.
2. 기존 `public/main-image.jpg`를 새 파일로 교체합니다.

다른 파일명이나 확장자를 사용하려면 다음 파일도 수정합니다.

```text
src/components/MainImage.tsx
```

예를 들어 새 파일이 `public/main-image.png`라면:

```tsx
src={assetPath("/main-image.png")}
```

브라우저에 이전 이미지가 남아 있으면 강력 새로고침하거나 파일명을 변경합니다.

## 변경 내용 확인

개발 서버 실행:

```bash
npm run dev
```

브라우저에서 다음 주소를 확인합니다.

```text
http://localhost:3000/ko/
http://localhost:3000/en/
```

배포 전 오류 확인:

```bash
npm run build
```

빌드가 실패하면 오류 메시지에 표시된 파일명과 줄 번호를 먼저 확인합니다.
