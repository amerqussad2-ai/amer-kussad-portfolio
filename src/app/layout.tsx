import type { Metadata } from "next";
import { Bodoni_Moda, Manrope } from "next/font/google";
import CustomCursor from "@/components/CustomCursor";
import "./globals.css";
import "./portfolio-v2.css";

const displayFont = Bodoni_Moda({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-display",
  display: "swap",
});

const sansFont = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Amer Kussad — Front-End Developer",
  description: "Selected work and front-end development portfolio of Amer Kussad, building thoughtful web experiences with React, Next.js and TypeScript.",
  openGraph: {
    title: "Amer Kussad — Front-End Developer",
    description: "Digital experiences, built to feel different.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={displayFont.variable + " " + sansFont.variable + " h-full"}>
      <body className="min-h-full flex flex-col">
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
