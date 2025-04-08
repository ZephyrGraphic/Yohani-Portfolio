"use client"

import { motion } from "framer-motion"
import { Instagram, Mail, Phone } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export default function Footer() {
  const { t, language } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-muted/40">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div>
            <h3 className="text-lg font-bold mb-4">Yohani Ade Fadila</h3>
            <p className="text-sm text-muted-foreground mb-4">
              {language === "id"
                ? "Desainer Grafis Profesional & Administrator dengan pengalaman di bidang teknologi, informasi, dan administrasi perkantoran."
                : "Professional Graphic Designer & Administrator with experience in technology, information, and office administration."}
            </p>

            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/Haszny21"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com/@Haszny21"
                aria-label="TikTok"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
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
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">{t("footer.contact")}</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+62 831-1667-4772</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>YohaniAdeFadila@gmail.com</span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>
            &copy; {currentYear} Yohani Ade Fadila. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  )
}
