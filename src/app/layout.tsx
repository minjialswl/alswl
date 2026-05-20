import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "민지 Minji",
  description: "민지 Minji portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
