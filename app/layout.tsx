import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloatingButton } from "@/components/layout/WhatsAppFloatingButton";
import { siteConfig } from "@/lib/site-config";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteUrl = "https://kasabeauty.vercel.app"; // trocar pelo domínio real ao publicar

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.name} — ${siteConfig.address.neighborhood}, ${siteConfig.address.city}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.tagline,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.tagline,
    url: siteUrl,
    siteName: siteConfig.name,
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.tagline,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${inter.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-charcoal focus:px-4 focus:py-2 focus:text-ivory"
        >
          Pular para o conteúdo
        </a>
        <Header />
        <main id="conteudo" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppFloatingButton />
        <script
          type="application/ld+json"
          // Schema.org LocalBusiness — ajuda o Google a entender o negócio.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BeautySalon",
              name: siteConfig.name,
              image: `${siteUrl}/og-image.jpg`,
              address: {
                "@type": "PostalAddress",
                streetAddress: siteConfig.address.street,
                addressLocality: siteConfig.address.city,
                addressRegion: siteConfig.address.state,
                addressCountry: "BR",
              },
              url: siteUrl,
              sameAs: [siteConfig.instagramUrl],
            }),
          }}
        />
      </body>
    </html>
  );
}
