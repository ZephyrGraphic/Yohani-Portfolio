"use client"

import { motion } from "framer-motion"
import { Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

interface AboutProps {
  about: string
}

export default function About({ about }: AboutProps) {
  const { t, language } = useLanguage()

  const socialLinks = [
    { icon: <Instagram className="h-5 w-5" />, url: "https://www.instagram.com/Haszny21", label: "Instagram" },
    // Tambahkan TikTok dengan menggunakan ikon yang tersedia
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5"
        >
          <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
          <path d="M15 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
          <path d="M15 8v8a4 4 0 0 1-4 4" />
          <line x1="15" y1="4" x2="15" y2="12" />
        </svg>
      ),
      url: "https://www.tiktok.com/@Haszny21",
      label: "TikTok",
    },
  ]

  // English translation for the about text
  const aboutEn =
    "I, Yohani Ade Fadila, am a Professional Graphic Designer and former Administrator with an educational background in Computer and Network Engineering. With a solid understanding of technology, I have diverse work experience in Information, Marketing, Administration, Social Media Management, and Graphic Design."

  return (
    <section id="about" className="py-12 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-primary">{t("about.title")}</h2>

        <div className="bg-card rounded-lg p-6 shadow-sm border">
          <p className="text-card-foreground leading-relaxed mb-6">{language === "id" ? about : aboutEn}</p>

          <div className="flex flex-wrap gap-3">
            {socialLinks.map((link, index) => (
              <Button key={index} variant="outline" size="icon" asChild className="rounded-full">
                <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                  {link.icon}
                </a>
              </Button>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
