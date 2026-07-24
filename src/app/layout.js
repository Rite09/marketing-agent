import { Plus_Jakarta_Sans } from "next/font/google";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import LenisProvider from "@/components/layout/LenisProvider";
import { SITE_URL, siteMetadata } from "@/lib/constants";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: siteMetadata.title,
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: SITE_URL,
    siteName: siteMetadata.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: siteMetadata.socialImage,
        width: 1200,
        height: 630,
        alt: siteMetadata.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [siteMetadata.socialImage],
  },
};

export const viewport = {
  themeColor: "#f8f9fb",
};

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MarketingAgency",
    name: siteMetadata.name,
    url: SITE_URL,
    email: siteMetadata.email,
    telephone: siteMetadata.phone,
    description: siteMetadata.description,
    areaServed: "Worldwide",
    sameAs: [siteMetadata.whatsapp],
  };

  return (
    <html
      lang="en"
      className={`${jakarta.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full bg-[var(--color-background)] font-sans text-[var(--color-text)]"
        suppressHydrationWarning
      >
        <LenisProvider>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </LenisProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
