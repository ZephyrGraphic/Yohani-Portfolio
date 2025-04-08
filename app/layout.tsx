import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { LanguageProvider } from "@/contexts/language-context"

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
})

export const metadata: Metadata = {
  title: "Yohani Ade Fadila | Portfolio",
  description: "Portfolio website for Yohani Ade Fadila, a Graphic Design Professional",
  metadataBase: new URL("https://yohani-ade-fadila.vercel.app"),
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://yohani-ade-fadila.vercel.app",
    title: "Yohani Ade Fadila | Portfolio",
    description: "Desainer Grafis Profesional & Administrator",
    siteName: "Yohani Ade Fadila Portfolio",
    images: [
      {
        url: "/images/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Yohani Ade Fadila - Desainer Grafis Profesional & Administrator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yohani Ade Fadila | Portfolio",
    description: "Desainer Grafis Profesional & Administrator",
    images: ["/images/thumbnail.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        {/* Tambahan meta tags untuk Open Graph dan Twitter */}
        <meta property="og:image" content="https://yohani-ade-fadila.vercel.app/images/thumbnail.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image" content="https://yohani-ade-fadila.vercel.app/images/thumbnail.png" />
      </head>
      <body className={`${jakarta.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
