import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tulio Salvatierra - Full-Stack Developer & IT Solutions",
  description: "Chicago-based full-stack developer creating modern web experiences and comprehensive IT support for businesses",
  keywords: ["full-stack developer", "web development", "IT solutions", "Chicago", "React", "Next.js", "TypeScript"],
  authors: [{ name: "Tulio Salvatierra" }],
  creator: "Tulio Salvatierra",
  openGraph: {
    title: "Tulio Salvatierra - Full-Stack Developer",
    description: "Chicago-based full-stack developer creating modern web experiences",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tulio Salvatierra - Full-Stack Developer",
    description: "Chicago-based full-stack developer creating modern web experiences",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Add any additional custom HTML tags here */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://tuliosalvatierra.com" />
        {/* Google Analytics, Google Tag Manager, or other scripts can go here */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
