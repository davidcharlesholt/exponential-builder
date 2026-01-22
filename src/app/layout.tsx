import type { Metadata } from "next";
import { DM_Sans, Source_Serif_4 } from "next/font/google";
import { Sidebar } from "@/components/sidebar";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "David Holt — Build Once. Compound Daily.",
  description:
    "Exploring what happens when indie hackers stop grinding for output and start designing leverage.",
  metadataBase: new URL("https://exponentialbuilder.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://exponentialbuilder.com",
    siteName: "ExponentialBuilder",
    title: "David Holt — Build Once. Compound Daily.",
    description:
      "Exploring what happens when indie hackers stop grinding for output and start designing leverage.",
    images: [
      {
        url: "/og-image.png", // You'll need to add this image
        width: 1200,
        height: 630,
        alt: "ExponentialBuilder - Build Once. Compound Daily.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "David Holt — Build Once. Compound Daily.",
    description:
      "Exploring what happens when indie hackers stop grinding for output and start designing leverage.",
    images: ["/og-image.png"], // You'll need to add this image
    creator: "@davidholt", // Update with your actual Twitter handle
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
  return (
    <html lang="en" className={`${dmSans.variable} ${sourceSerif.variable}`}>
      <body className="font-body antialiased">
        {/* Outer wrapper with max-width to maintain layout alignment */}
        <div className="relative mx-auto max-w-7xl">
          {/* 12-column grid: sidebar 4 cols, main 8 cols on lg+ */}
          <div className="grid min-h-screen grid-cols-1 lg:grid-cols-12">
            {/* Sidebar - stacked on mobile, sticky left column on desktop */}
            <aside className="relative z-10 bg-white dark:bg-background lg:col-span-4 lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto">
              <Sidebar />
            </aside>

            {/* Main Content - 8 columns on desktop */}
            <main className="relative z-10 lg:col-span-8">
              {/* Background extends beyond container to right edge */}
              <div className="pointer-events-none absolute inset-y-0 -right-[100vw] left-0 bg-zinc-50/80 dark:bg-zinc-900/30 lg:block hidden" />
              
              {/* Content (relative to show above background) */}
              <div className="relative">
                {children}
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
