import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Grammar Mastery — 長文読解のための英文法",
  description: "文法の力で長文読解を攻略しよう",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="font-sans tracking-tight antialiased">
        {children}
      </body>
    </html>
  );
}
