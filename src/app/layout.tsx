import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Providers from "@/shared/Providers";
import Script from "next/script"; // ✅ import this

const cairo = Cairo({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: {
    default: "شركة فهد السويلم للمحاماة والاستشارات القانونية",
    template: "%s | شركة فهد السويلم للمحاماة والاستشارات القانونية",
  },
  description:
    "شركة رائدة في مجال المحاماة والاستشارات القانونية في المملكة العربية السعودية. نقدم خدمات قانونية متكاملة تلبي احتياجات الأفراد والشركات مع الالتزام بالمعايير المهنية والأخلاقية",
  keywords: [
    "محاماة",
    "استشارات قانونية",
    "قانون سعودي",
    "محامي",
    "خدمات قانونية",
    "شركة محاماة",
    "فهد السويلم",
    "المملكة العربية السعودية",
    "Fahad Al Suwailem",
    "Law Firm",
    "Legal Consultancy",
    "Saudi Arabia",
    "Legal Services",
  ],
  authors: [{ name: "شركة فهد السويلم للمحاماة والاستشارات القانونية" }],
  creator: "شركة فهد السويلم للمحاماة والاستشارات القانونية",
  publisher: "شركة فهد السويلم للمحاماة والاستشارات القانونية",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "شركة فهد السويلم للمحاماة والاستشارات القانونية",
    description:
      "شركة رائدة في مجال المحاماة والاستشارات القانونية في المملكة العربية السعودية",
    url: "https://fahadalsuwailemlawfirm.com",
    siteName: "شركة فهد السويلم للمحاماة والاستشارات القانونية",
    locale: "ar_SA",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "شركة فهد السويلم للمحاماة والاستشارات القانونية",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "شركة فهد السويلم للمحاماة والاستشارات القانونية",
    description:
      "شركة رائدة في مجال المحاماة والاستشارات القانونية في المملكة العربية السعودية",
    images: ["/og-image.png"],
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
    canonical: "https://fahadalsuwailemlawfirm.com",
    languages: {
      "ar-SA": "https://fahadalsuwailemlawfirm.com/ar",
      "en-US": "https://fahadalsuwailemlawfirm.com/en",
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "Legal Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WGP2FPXP');
            `,
          }}
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
      </head>
      <body
        suppressHydrationWarning
        className={`${cairo.className} antialiased`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WGP2FPXP"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
