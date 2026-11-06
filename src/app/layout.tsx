import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Maritime Services & Vessel Logistics Nigeria`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "maritime services nigeria",
    "ship chandling lagos",
    "crew management nigeria",
    "marine equipment supply nigeria",
    "bunker supply lagos",
    "underwater hull cleaning nigeria",
    "tugboat hire nigeria",
    "barge hire onne lagos",
    "service boats logistics nigeria",
    "asanti shores limited",
    "kirikiri maritime services",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} - Premier Maritime Services & Logistics`,
    description: siteConfig.description,
    images: [
      {
        url: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&h=630&q=85",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Maritime Operations and Vessel Support`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Nigerian Maritime Services & Vessel Logistics`,
    description: siteConfig.description,
    images: [
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&h=630&q=85",
    ],
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
    canonical: siteConfig.url,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
      { url: "/images/brand/logo-ship.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/favicon.ico`,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.street,
      addressLocality: siteConfig.contact.address.city,
      addressRegion: siteConfig.contact.address.state,
      addressCountry: "NG",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.contact.phone,
        contactType: "customer service",
        areaServed: "NG",
        availableLanguage: ["English"],
      },
    ],
    areaServed: [
      { "@type": "AdministrativeArea", name: "Lagos Port Complex" },
      { "@type": "AdministrativeArea", name: "Tin Can Island Port" },
      { "@type": "AdministrativeArea", name: "Kirikiri Lighter Terminal" },
      { "@type": "AdministrativeArea", name: "Onne Port & Free Zone" },
      { "@type": "AdministrativeArea", name: "Warri Port Complex" },
      { "@type": "AdministrativeArea", name: "Calabar Port" },
      { "@type": "AdministrativeArea", name: "Offshore Gulf of Guinea" },
    ],
    knowsAbout: [
      "Ship and Crew Management",
      "Ship Chandling and Provisions",
      "Marine Equipment Sales & Supply",
      "Bunker and Fresh Water Supply",
      "Underwater Hull Cleaning and Inspections",
      "Tugboats and Barges Charter",
      "Offshore Crew and Service Boats Logistics",
    ],
  };

  return (
    <html
      lang="en"
      className={`${jakartaSans.variable} ${inter.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-[#17212B] font-sans selection:bg-[#D9A441] selection:text-[#0B1F33]">
        <Navbar />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
