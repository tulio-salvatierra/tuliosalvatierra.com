import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/smooth-scroll";
import StructuredData from "@/components/structured-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tuliosalvatierra.com"),
  title: {
    default: "Tulio Salvatierra - Full-Stack Developer & IT Solutions | Chicago",
    template: "%s | Tulio Salvatierra"
  },
  description: "Chicago-based full-stack developer specializing in React, Next.js, TypeScript, and modern web development. Offering custom web applications, e-commerce solutions, and comprehensive IT support for businesses in Chicago and surrounding areas.",
  keywords: [
    "full-stack developer",
    "web development",
    "IT solutions",
    "Chicago developer",
    "React developer",
    "Next.js developer",
    "TypeScript developer",
    "web developer Chicago",
    "custom web development",
    "e-commerce development",
    "IT support Chicago",
    "full-stack engineer",
    "Node.js developer",
    "PostgreSQL developer",
    "MongoDB developer",
    "AWS cloud solutions"
  ],
  authors: [{ name: "Tulio Salvatierra", url: "https://tuliosalvatierra.com" }],
  creator: "Tulio Salvatierra",
  publisher: "Tulio Salvatierra",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tuliosalvatierra.com",
    siteName: "Tulio Salvatierra - Full-Stack Developer",
    title: "Tulio Salvatierra - Full-Stack Developer & IT Solutions | Chicago",
    description: "Chicago-based full-stack developer creating modern web experiences and comprehensive IT support for businesses. Specializing in React, Next.js, TypeScript, and cloud solutions.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tulio Salvatierra - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tulio Salvatierra - Full-Stack Developer & IT Solutions",
    description: "Chicago-based full-stack developer creating modern web experiences and comprehensive IT support for businesses",
    creator: "@tuliosalvatierra",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://tuliosalvatierra.com",
  },
  category: "Technology",
  classification: "Portfolio",
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#16a34a" />
        <meta name="geo.region" content="US-IL" />
        <meta name="geo.placename" content="Chicago" />
        <meta name="geo.position" content="41.8781;-87.6298" />
        <meta name="ICBM" content="41.8781, -87.6298" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StructuredData />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
