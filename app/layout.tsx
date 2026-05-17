import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { PageTransition } from "@/components/layout/PageTransition";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.michaelangelo-digital.co.uk"),
  title: {
    default: "Michaelangelo Digital | Automation systems and websites",
    template: "%s | Michaelangelo Digital",
  },
  description:
    "Michaelangelo Digital builds enquiry automation systems and websites for small business owners in the UK. Save time, stop missing leads, and focus on the work that matters.",
  openGraph: {
    title: "Michaelangelo Digital",
    description:
      "Automation systems and websites for small business owners who are tired of manual work.",
    url: "https://www.michaelangelo-digital.co.uk",
    siteName: "Michaelangelo Digital",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Michaelangelo Digital",
    description:
      "Automation systems and websites for small business owners who are tired of manual work.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="bg-cream text-body font-sans antialiased">
        <LoadingScreen />
        <Navbar />
        <PageTransition>
          <main id="main" className="min-h-screen">
            {children}
          </main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  );
}
