import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Virtual Genesis | Where New Begins",
  description:
    "Faith-inspired apparel, artwork, coaching and resources designed to inspire your journey. Premium lifestyle brand for the modern believer.",
  keywords: [
    "Christian apparel",
    "faith-based clothing",
    "Christian lifestyle brand",
    "faith inspired art",
    "Christian podcast",
    "faith coaching",
  ],
  openGraph: {
    title: "Virtual Genesis | Where New Begins",
    description:
      "Faith-inspired apparel, artwork, coaching and resources designed to inspire your journey.",
    type: "website",
    siteName: "Virtual Genesis",
  },
  twitter: {
    card: "summary_large_image",
    title: "Virtual Genesis | Where New Begins",
    description:
      "Faith-inspired apparel, artwork, coaching and resources designed to inspire your journey.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth`}>
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&f[]=general-sans@200,300,400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
