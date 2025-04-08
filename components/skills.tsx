"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/contexts/language-context"

interface SkillsProps {
  skills: string[]
}

export default function Skills({ skills }: SkillsProps) {
  const { t, language } = useLanguage()

  // English translations for skills
  const getEnglishSkills = () => {
    return [
      "Able to work independently and effectively in a team",
      "Accustomed to working with deadlines and consistent in completing tasks on time",
      "Meticulous and systematic in data processing and administrative documentation",
      "Skilled in managing social media accounts for branding and promotional needs",
      "Creative in designing visual content for both digital and print needs",
      "Capable of preparing work reports and documentation in a structured and comprehensive manner",
      "Adaptive to new technologies and dynamic work environments",
      "Possessing basic photography and videography skills for content development",
      "Efficient in data entry and document archiving",
      "Communicative and able to build harmonious working relationships",
    ]
  }

  const displaySkills = language === "id" ? skills : getEnglishSkills()

  return (
    <section id="skills" className="py-12 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-primary">{t("skills.title")}</h2>

        <div className="bg-card rounded-lg p-6 shadow-sm border">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {displaySkills.map((skill, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex items-start gap-2"
              >
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span>{skill}</span>
              </motion.li>
            ))}
          </ul>

          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">{t("skills.hardskills")}</h3>
            <div className="flex flex-wrap gap-2">
              <Badge>Adobe Photoshop</Badge>
              <Badge>Adobe Illustrator</Badge>
              <Badge>Microsoft Office</Badge>
              <Badge>Canva</Badge>
              <Badge>{language === "id" ? "Video Editing" : "Video Editing"}</Badge>
              <Badge>{language === "id" ? "Desain Grafis" : "Graphic Design"}</Badge>
              <Badge>{language === "id" ? "Administrasi Perkantoran" : "Office Administration"}</Badge>
              <Badge>{language === "id" ? "Pengelolaan Media Sosial" : "Social Media Management"}</Badge>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-4">{t("skills.softskills")}</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">{language === "id" ? "Komunikasi Efektif" : "Effective Communication"}</Badge>
              <Badge variant="outline">{language === "id" ? "Kerja Tim" : "Teamwork"}</Badge>
              <Badge variant="outline">{language === "id" ? "Manajemen Waktu" : "Time Management"}</Badge>
              <Badge variant="outline">{language === "id" ? "Pemecahan Masalah" : "Problem Solving"}</Badge>
              <Badge variant="outline">{language === "id" ? "Adaptabilitas" : "Adaptability"}</Badge>
              <Badge variant="outline">{language === "id" ? "Kreativitas" : "Creativity"}</Badge>
              <Badge variant="outline">{language === "id" ? "Ketelitian" : "Attention to Detail"}</Badge>
              <Badge variant="outline">{language === "id" ? "Kemampuan Organisasi" : "Organizational Skills"}</Badge>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
