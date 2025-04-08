"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { saveToLocalStorage, loadFromLocalStorage } from "@/lib/storage"

type Language = "id" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface LanguageProviderProps {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>("id")
  const [translations, setTranslations] = useState<Record<string, Record<string, string>>>({})
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Load language preference from localStorage
    const savedLanguage = loadFromLocalStorage("language") as Language
    if (savedLanguage) {
      setLanguageState(savedLanguage)
    }

    // Load translations
    const translationsData = {
      // Header
      "nav.profile": {
        id: "Profil",
        en: "Profile",
      },
      "nav.education": {
        id: "Pendidikan",
        en: "Education",
      },
      "nav.experience": {
        id: "Pengalaman",
        en: "Experience",
      },
      "nav.skills": {
        id: "Keterampilan",
        en: "Skills",
      },
      "nav.portfolio": {
        id: "Portofolio",
        en: "Portfolio",
      },
      "nav.competencies": {
        id: "Kompetensi",
        en: "Competencies",
      },

      // Hero
      "hero.profession": {
        id: "Desainer Grafis Profesional & Administrator",
        en: "Professional Graphic Designer & Administrator",
      },
      "hero.download": {
        id: "Download CV",
        en: "Download CV",
      },

      // About
      "about.title": {
        id: "Profil Profesional",
        en: "Professional Profile",
      },

      // Education
      "education.title": {
        id: "Pendidikan",
        en: "Education",
      },

      // Experience
      "experience.title": {
        id: "Pengalaman Profesional",
        en: "Professional Experience",
      },

      // Tools
      "tools.title": {
        id: "Keterampilan Teknis",
        en: "Technical Skills",
      },

      // Projects
      "projects.title": {
        id: "Portofolio Proyek",
        en: "Project Portfolio",
      },
      "projects.view": {
        id: "Lihat Projek",
        en: "View Project",
      },

      // Skills
      "skills.title": {
        id: "Kompetensi",
        en: "Competencies",
      },
      "skills.hardskills": {
        id: "Hard Skills",
        en: "Hard Skills",
      },
      "skills.softskills": {
        id: "Soft Skills",
        en: "Soft Skills",
      },

      // Footer
      "footer.rights": {
        id: "Hak Cipta Terpelihara",
        en: "All Rights Reserved",
      },
      "footer.contact": {
        id: "Kontak",
        en: "Contact",
      },
    }

    setTranslations(translationsData)
    setIsLoaded(true)
  }, [])

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage)
    saveToLocalStorage("language", newLanguage)
  }

  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key not found: ${key}`)
      return key
    }
    return translations[key][language] || key
  }

  if (!isLoaded) {
    return null
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
