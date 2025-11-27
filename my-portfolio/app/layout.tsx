import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const interFont = Inter({
    subsets: ['latin'],
    weight: ["400", "500", "600"],
    variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "raazan's page",
  description: "welcome to my page!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interFont.variable} grayscale antialiased`}
      >
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
