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

const roboto = localFont({
  src: [
    {
      path: "../Roboto/static/Roboto-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../Roboto/static/Roboto-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../Roboto/static/Roboto-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../Roboto/static/Roboto-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../Roboto/static/Roboto-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Corey Foo Quan Rui",
  description:
    "Portfolio of Corey Foo Quan Rui, an engineer, researcher, and maker focused on creativity and learning.",
  icons: {
    icon: "/CF.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${prophet.variable} ${roboto.variable}`}>
      <body>{children}</body>
    </html>
  );
}
