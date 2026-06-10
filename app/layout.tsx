import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "./components/nav";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joseph Lorenzo Bautista",
  description: "personal portfolio site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jetBrainsMono.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full text-white font-mono">
        <div className="crt-texture" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-6xl">
          <Nav />
          <main className="px-6 pb-10 pt-2 sm:px-8 lg:pb-14 lg:pt-3">{children}</main>
        </div>
      </body>
    </html>
  );
}
