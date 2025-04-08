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
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://yohani-portfolio.vercel.app",
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
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${jakarta.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'