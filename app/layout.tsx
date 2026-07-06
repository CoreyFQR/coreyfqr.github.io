import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Quanrui Fu / Corey Fu",
  description:
    "Quanrui Fu / Corey Fu 的个人作品集。保持思考，保持学习，保持创造。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
