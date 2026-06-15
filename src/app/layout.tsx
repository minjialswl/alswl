import type { Metadata } from "next";
import { Gothic_A1 } from "next/font/google";
import "./globals.css";

const gothicA1 = Gothic_A1({
  weight: ["100", "200", "300", "400"],
  subsets: ["latin"],
  display: "swap",
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "정민지 JungMinji",
  description: "정민지 JungMinji",
  icons: {
    icon: `${basePath}/jungminji-icon.png`,
    shortcut: `${basePath}/jungminji-icon.png`,
    apple: `${basePath}/jungminji-icon.png`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={gothicA1.className}>{children}</body>
    </html>
  );
}
