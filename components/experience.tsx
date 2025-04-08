"use client"

import { motion } from "framer-motion"
import { Briefcase, CheckCircle2 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Experience as ExperienceType } from "@/types/profile"
import { useLanguage } from "@/contexts/language-context"

interface ExperienceProps {
  experience: ExperienceType[]
}

export default function Experience({ experience }: ExperienceProps) {
  const { t, language } = useLanguage()

  // English translations for experience
  const getEnglishExperience = () => {
    return [
      {
        period: "2021",
        company: "Java Computer",
        position: "Internship",
        description:
          "Responsible for assisting staff in the Marketing division and Inventory Data Management during the internship period",
      },
      {
        period: "2021-2023",
        company: "Java Computer",
        position: "Staff",
        description:
          "Served as staff in sales, marketing, and light service in a company engaged in the sale of Computer units, Laptops, and various supporting accessories. Recruited directly after completing the Internship program in 2021.",
      },
      {
        period: "2023-2024",
        company: "Narcotics Correctional Facility Class IIA Muara Beliti",
        position: "Honorary Staff",
        description: "Worked in Office Administration with main responsibilities:",
        responsibilities: [
          "Managing and developing content for the official social media accounts",
          "Designing graphics and editing videos for social media content on Facebook, Instagram, Twitter, website, and YouTube platforms. Skilled in designing banners, books, and infographics for the institution's needs",
          "Managing incoming and outgoing correspondence, and preparing various types of letters such as Warrants, Request Letters, and other administrative documents",
        ],
      },
    ]
  }

  const displayExperience = language === "id" ? experience : getEnglishExperience()

  return (
    <section id="experience" className="py-12 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-primary">{t("experience.title")}</h2>

        <div className="space-y-6">
          {displayExperience.map((exp, index) => (
            <Card key={index}>
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-primary" />
                    <CardTitle className="text-xl">{exp.position}</CardTitle>
                  </div>
                  <span className="text-sm font-medium text-muted-foreground bg-secondary px-2 py-1 rounded">
                    {exp.period}
                  </span>
                </div>
                <p className="text-muted-foreground">{exp.company}</p>
              </CardHeader>
              <CardContent className="space-y-2">
                <p>{exp.description}</p>

                {exp.responsibilities && (
                  <ul className="space-y-2 mt-3">
                    {exp.responsibilities.map((responsibility, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        className="flex items-start gap-2"
                      >
                        <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                        <span className="text-sm">{responsibility}</span>
                      </motion.li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
