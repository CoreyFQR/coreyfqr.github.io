import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const prophet = localFont({
  src: [
    {
      path: "../Prophet/Prophet Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../Prophet/Prophet Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../Prophet/Prophet Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../Prophet/Prophet Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../Prophet/Prophet Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../Prophet/Prophet Extrabold.otf",
      weight: "800",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-prophet",
});

export const metadata: Metadata = {
  title: "Corey Foo Quan Rui",
  description:
    "Portfolio of Corey Foo Quan Rui, an engineer, researcher, and maker focused on creativity and learning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={prophet.variable}>
      <body>{children}</body>
    </html>
  );
}
