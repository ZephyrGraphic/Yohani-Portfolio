"use client"

import { motion } from "framer-motion"
import { Wrench } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"

interface ToolsProps {
  tools: string[]
}

export default function Tools({ tools }: ToolsProps) {
  const { t, language } = useLanguage()

  // English translations for tools
  const getEnglishTools = () => {
    return [
      "Office Administration Applications: Microsoft Word, Excel, and PowerPoint",
      "Graphic Design and Editing Applications: Adobe Photoshop, Adobe Illustrator, CapCut PC, and Canva",
    ]
  }

  const displayTools = language === "id" ? tools : getEnglishTools()

  return (
    <section id="tools" className="py-12 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-primary">{t("tools.title")}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {displayTools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <Wrench className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm">{tool}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
