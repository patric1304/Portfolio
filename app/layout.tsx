import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import AnimatedBackground from "./components/AnimatedBackground";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  title: "Patric Portfolio",
  description: "Bridging low-level logic with high-level design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${space.variable} antialiased bg-ink-950`}>
        <AnimatedBackground />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
