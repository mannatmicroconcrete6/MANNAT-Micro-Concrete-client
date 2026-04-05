import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import { TrackingProvider } from "@/components/providers/TrackingProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import SmoothScroll from "@/components/providers/SmoothScroll";
import LayoutHandler from "@/components/layout/LayoutHandler";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://www.mannatmicroconcrete.site"),
  alternates: {
    canonical: "/",
  },
  title: "Mannat Micro Concrete | Luxury Finishes & Premium Micro Concrete",
  description: "Explore the finest Micro Concrete, Microcement, Epoxy, and Venetian Plaster finishes for luxury homes, offices, and commercial spaces across India. Perfect for seamless, zero-joint walls and floors.",
  keywords: [
    "Micro Concrete",
    "Micro Concrete India",
    "Micro Concrete Flooring",
    "Micro Concrete Walls",
    "Microcement India", 
    "Microcement Flooring",
    "Seamless Wall Surfaces", 
    "Modern Wall Texture Design",
    "Venetian Plaster New Delhi", 
    "Epoxy Flooring Mumbai", 
    "Luxury Interior Finishes", 
    "Mannat Micro Concrete", 
    "Architectural Finishes India",
    "Polished Concrete Look Flooring",
    "Waterproof Toilet Microcement",
    "Micro Concrete Contractors",
    "Lime Wash Walls India",
    "Interior Renovation Delhi NCR",
    "Luxury Home Decor Mumbai"
  ],
  authors: [{ name: "Mannat Micro Concrete" }],
  openGraph: {
    title: "Mannat Micro Concrete | Premium Micro Concrete Specialist",
    url: "https://www.mannatmicroconcrete.site",
    siteName: "Mannat Micro Concrete",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    description: "Discover seamless Micro Concrete and Microcement finishes perfectly blended for luxurious spaces, floors, and walls.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mannat Micro Concrete | Premium Micro Concrete Specialist",
    description: "Discover seamless Micro Concrete and Microcement finishes perfectly blended for luxurious spaces, floors, and walls.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: "https://lh3.googleusercontent.com/d/1rjha7IkwcHFlzTSeQdw5ojgRqCJouQCI",
    apple: "https://lh3.googleusercontent.com/d/1rjha7IkwcHFlzTSeQdw5ojgRqCJouQCI",
  },
  verification: {
    google: "google5816ae710b2c445b",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Mannat Micro Concrete",
  "image": "https://www.mannatmicroconcrete.site/logo.png",
  "logo": "https://www.mannatmicroconcrete.site/logo.png",
  "description": "Expert artisans specializing in Micro Concrete, Microcement, Epoxy, and Venetian Plaster finishes for aesthetic flooring, walls, and luxury interiors (Pan-India).",
  "@id": "https://www.mannatmicroconcrete.site",
  "url": "https://www.mannatmicroconcrete.site",
  "telephone": "+91-9540490459",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "B II -924 Madanpur khadar extn",
    "addressLocality": "New Delhi",
    "postalCode": "110076",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 28.5284,
    "longitude": 77.3033
  },
  "areaServed": [
    { "@type": "City", "name": "New Delhi" },
    { "@type": "City", "name": "Mumbai" },
    { "@type": "City", "name": "Bangalore" },
    { "@type": "City", "name": "Hyderabad" },
    { "@type": "City", "name": "Ahmedabad" },
    { "@type": "City", "name": "Pune" },
    { "@type": "City", "name": "Chennai" }
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-9540490459",
    "contactType": "customer service",
    "availableLanguage": ["English", "Hindi"]
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://www.instagram.com/mannat_micro_concrete",
    "https://www.facebook.com/mannatmicroconcrete"
  ],
  "priceRange": "₹₹₹"
};

const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager - Optimized Load */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${gtmId}');`,
          }}
        />
        <script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          suppressHydrationWarning
        />
      </head>
      <body className={`${inter.className} bg-white text-black antialiased transition-colors duration-500 noise-overlay`}>
        {/* Google Tag Manager (noscript) */}
        {gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        {/* End Google Tag Manager (noscript) */}
        <TrackingProvider>
          <SmoothScroll>
            <LayoutHandler>
              {children}
            </LayoutHandler>
          </SmoothScroll>
        </TrackingProvider>
      </body>
    </html>
  );
}

