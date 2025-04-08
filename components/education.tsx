"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Education as EducationType } from "@/types/profile"
import { useLanguage } from "@/contexts/language-context"

interface EducationProps {
  education: EducationType[]
}

export default function Education({ education }: EducationProps) {
  const { t, language } = useLanguage()

  // English translations for education achievements
  const getEnglishAchievements = (achievements: string[]) => {
    return [
      "Won 1st Place in the Independence-themed poster making competition to celebrate Indonesian Independence Day in 2019",
      "Received certification for passing the Final Competency Test organized by the school in 2022",
      "Earned certification with Excellent marks in the Internship program",
    ]
  }

  return (
    <section id="education" className="py-12 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-primary">{t("education.title")}</h2>

        {education.map((edu, index) => (
          <Card key={index} className="mb-6">
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  <CardTitle className="text-xl">{edu.institution}</CardTitle>
                </div>
                <span className="text-sm font-medium text-muted-foreground bg-secondary px-2 py-1 rounded">
                  {edu.period}
                </span>
              </div>
              <p className="text-muted-foreground">
                {language === "en" ? "Computer and Network Engineering" : edu.major}
              </p>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {(language === "id" ? edu.achievements : getEnglishAchievements(edu.achievements)).map(
                  (achievement, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      className="flex items-start gap-2"
                    >
                      <Award className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm">{achievement}</span>
                    </motion.li>
                  ),
                )}
              </ul>
            </CardContent>
          </Card>
        ))}
      </motion.div>
    </section>
  )
}
