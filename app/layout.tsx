import SyncUser from "@/components/SyncUser";
import { AnchoredToastProvider, ToastProvider } from "@/components/ui/toast";
import { TanStackQueryProvider } from "@/providers/tanstack-provider";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Bricolage_Grotesque, Geist_Mono } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteConfig = {
  name: "Wrkks",
  description:
    "Turn your resume into a stunning personal website in seconds. Import from LinkedIn or PDF to create a professional online presence instantly—no coding required.",
  url: process.env.SITE_URL ?? "https://wrkks.vercel.app", // Replace with your production URL
  ogImage: "/og-image.png",
  links: {
    twitter: "https://twitter.com/utkarshdev_",
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Wrkks – Turn Your Resume into a Professional Website in Seconds",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    // Core Product Keywords
    "resume to website",
    "LinkedIn to portfolio",
    "personal website builder",
    "automatic portfolio generator",
    "convert resume to web page",
    "free personal site builder",

    // Niche/Job Seeker Keywords
    "portfolio for developers",
    "professional online CV",
    "interactive resume",
    "no-code portfolio builder",
    "digital resume website",

    // Brand Keywords
    "Wrkks builder",
    "Wrkks portfolio",
    "Wrkks resume",
  ],
  authors: [{ name: "Utkarsh", url: "https://github.com/dev-o-los" }],
  creator: "Utkarsh",
  publisher: "Wrkks",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "Wrkks – Instant Personal Websites from Your Resume",
    description:
      "Stop sending PDFs. Start sending links. Convert your resume or LinkedIn profile into a stunning, high-converting personal website instantly.",
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Wrkks - Resume to Website Converter Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wrkks – The Fastest Way to Build Your Personal Brand",
    description:
      "Import your resume and get a professional website in seconds. No design skills needed.",
    images: [siteConfig.ogImage],
    creator: "@utkarshdev_",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Wrkks",
    description:
      "Convert your resume PDF or LinkedIn profile into a stunning personal website in seconds.",
    applicationCategory: "DesignApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Person",
      name: "Utkarsh",
    },
    featureList: [
      "LinkedIn profile import",
      "Resume PDF parsing",
      "Instant website generation",
      "Customizable templates",
      "One-click deployment",
    ],
  };
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${bricolage.className} ${geistMono.variable} antialiased`}
        >
          <TanStackQueryProvider>
            <ToastProvider>
              <AnchoredToastProvider>
                <ThemeProvider
                  attribute="class"
                  defaultTheme="system"
                  enableSystem
                  disableTransitionOnChange
                >
                  <SyncUser />
                  {children}
                  <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                  />
                </ThemeProvider>
              </AnchoredToastProvider>
            </ToastProvider>
          </TanStackQueryProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
