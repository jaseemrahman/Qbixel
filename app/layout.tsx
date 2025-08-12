import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import "./globals.css";

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Qbixel Technologies - Web Development & Digital Solutions",
  description:
    "Qbixel Technologies delivers modern, scalable, and user-focused digital solutions. We build custom websites, web apps, and e-commerce platforms to help businesses grow online.",
  keywords: [
    "Qbixel",
    "Qbixel Technologies",
    "web development company",
    "Next.js development",
    "Django development",
    "custom websites",
    "e-commerce development",
    "website design",
    "full stack development",
    "web application development",
    "SEO friendly websites"
  ],
  authors: [{ name: "Qbixel Technologies", url: "https://qbixel.vercel.app/" }],
  creator: "Qbixel Technologies",
  publisher: "Qbixel Technologies",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Qbixel Technologies - Web Development & Digital Solutions",
    description:
      "We create high-performance websites, web apps, and e-commerce solutions tailored for your business growth.",
    url: "https://qbixel.vercel.app/",
    siteName: "Qbixel Technologies",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Qbixel Technologies",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Qbixel Technologies - Web Development & Digital Solutions",
  //   description:
  //     "Modern, scalable, and user-focused web development solutions for your business.",
  //   images: ["/og-image.png"],
  //   creator: "@qbixel", // Replace if you have Twitter handle
  // },
  alternates: {
    canonical: "https://qbixel.vercel.app/",
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
