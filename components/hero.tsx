"use client"

import { motion } from "framer-motion"
import { Download, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { generateCV } from "@/lib/generate-cv"
import type { ProfileContact } from "@/types/profile"
import { useLanguage } from "@/contexts/language-context"

interface HeroProps {
  name: string
  contact: ProfileContact
}

export default function Hero({ name, contact }: HeroProps) {
  const { t } = useLanguage()

  const handleDownloadCV = () => {
    generateCV()
  }

  return (
    <section className="py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col space-y-4"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary">{name}</h1>
          <p className="text-xl text-muted-foreground">{t("hero.profession")}</p>

          <div className="flex flex-col space-y-2 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>{contact.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>{contact.email}</span>
            </div>
          </div>

          <div className="pt-4">
            <Button onClick={handleDownloadCV} className="gap-2">
              <Download className="h-4 w-4" />
              {t("hero.download")}
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
            <Image src="/images/yohani.jpg" alt="Yohani Ade Fadila" fill className="object-cover" priority />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
