import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jay Pawar | AI Full Stack Developer & Graphic Designer",
  description: "Portfolio of Jay Pawar. I blend premium visual design with advanced artificial intelligence engineering to build world-class digital products.",
  keywords: "Jay Pawar, Full Stack Developer, AI Developer, Graphic Designer, Next.js, React, Web Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-background text-foreground antialiased selection:bg-black selection:text-white`}>
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
        <Toaster position="bottom-right" toastOptions={{
          style: {
            background: 'white',
            color: 'black',
            border: '1px solid rgba(0,0,0,0.05)',
            boxShadow: '0 8px 30px rgba(0,0,0,0.04)',
            borderRadius: '12px',
          },
        }} />
      </body>
    </html>
  );
}
