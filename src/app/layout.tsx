import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

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
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
