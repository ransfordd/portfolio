import type { Metadata } from "next";
import { Outfit, JetBrains_Mono, Syne } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ransfordfrimpong.com";

export const metadata: Metadata = {
  title: "Ransford Frimpong | Portfolio",
  description:
    "Portfolio of Ransford Frimpong—Full-stack developer & cybersecurity enthusiast. ISC2 CC, Google Cybersecurity, PLP Web Development.",
  openGraph: {
    title: "Ransford Frimpong | Portfolio",
    description:
      "Portfolio of Ransford Frimpong—Full-stack developer & cybersecurity enthusiast. ISC2 CC, Google Cybersecurity, PLP Web Development.",
    url: siteUrl,
    siteName: "Ransford Frimpong Portfolio",
    type: "website",
    images: [{ url: "/images/me.jpg", width: 512, height: 512, alt: "Ransford Frimpong" }],
  },
  twitter: {
    card: "summary",
    title: "Ransford Frimpong | Portfolio",
    description:
      "Full-stack developer & cybersecurity enthusiast. ISC2 CC, Google Cybersecurity, PLP Web Development.",
  },
  metadataBase: new URL(siteUrl),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${jetbrainsMono.variable} ${syne.variable}`}>
      <body className="min-h-screen bg-[var(--background)] font-sans antialiased">
        <a
          href="#main-content"
          className="absolute left-0 top-0 z-[100] -translate-y-full rounded bg-accent px-4 py-2 text-white transition focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-white"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
