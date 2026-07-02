import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space", display: "swap" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  title: { default: "Instrumentation Hub", template: "%s – Instrumentation Hub" },
  description: "The world\u2019s most comprehensive free engineering knowledge platform for Instrumentation, PLC, SCADA, DCS, Process Control & Industrial Automation professionals.",
  keywords: ["instrumentation", "PLC", "SCADA", "DCS", "process control", "industrial automation", "engineering", "I&C"],
  openGraph: {
    title: "Instrumentation Hub",
    description: "Free engineering knowledge platform for instrumentation & automation professionals.",
    type: "website",
    siteName: "Instrumentation Hub",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
