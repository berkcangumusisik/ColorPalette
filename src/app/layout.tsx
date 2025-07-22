import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Renk Paleti - AI ile Güçlendirilmiş Renk Üreticisi",
  description: "Yapay zeka teknolojisi ile istediğiniz her sahne, ruh hali veya konsept için mükemmel renk paletleri oluşturun. Ücretsiz ve kullanımı kolay.",
  keywords: "renk paleti, AI, yapay zeka, renk üretici, tasarım, sanat, web tasarım",
  authors: [{ name: "Renk Paleti Ekibi" }],
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  themeColor: "#6366F1",
  openGraph: {
    title: "Renk Paleti - AI ile Renk Üreticisi",
    description: "Yapay zeka ile istediğiniz konsept için mükemmel renk paletleri oluşturun.",
    type: "website",
    locale: "tr_TR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Renk Paleti - AI ile Renk Üreticisi",
    description: "Yapay zeka ile mükemmel renk paletleri oluşturun.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased min-h-screen bg-black text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
