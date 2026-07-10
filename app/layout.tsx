import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
