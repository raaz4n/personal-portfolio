import type { Metadata } from "next";
import { Inter, Stack_Sans_Headline, Figtree } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const figtreeFont = Figtree({
    subsets: ['latin'],
    weight: ["400", "500", "600"],
    variable: "--font-figtree"
});

const interFont = Inter({
    subsets: ['latin'],
    weight: ["400", "500", "600"],
    variable: "--font-inter",
});

const stackFont = Stack_Sans_Headline({
    subsets: ['latin'],
    weight: ["400", "500", "600", "700"],
    variable: "--font-stack"
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
    <html lang="en" suppressHydrationWarning>
        <body className={`${figtreeFont.variable} ${stackFont.variable} ${interFont.variable}`} >
            <script>
                const theme = localStorage.getItem("theme") || "dark";
                document.documentElement.dataset.theme = theme;
            </script>
            <Navbar></Navbar>
            {children}
        </body>
    </html>
  );
}
