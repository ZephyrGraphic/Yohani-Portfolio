"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Play } from "lucide-react"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import type { Project } from "@/types/profile"
import { useLanguage } from "@/contexts/language-context"
import ImageModal from "./image-modal"
import YouTubePlayer from "./youtube-player"

interface ProjectsProps {
  projects: Project[]
}

export default function Projects({ projects }: ProjectsProps) {
  const { t, language } = useLanguage()
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  // English translations for projects
  const getEnglishProjects = () => {
    return [
      {
        title: 'Mascot "Mangkeli"',
        description: "Design and development of a mascot for Narcotics Correctional Facility Class IIA Muara Beliti",
        images: ["/images/mangkeli1.jpg", "/images/mangkeli2.jpg"],
      },
      {
        title: "News Design",
        description: "Design of news content for the official social media of the Narcotics Correctional Facility",
        images: ["/images/pemberitaan.jpg"],
      },
      {
        title: "Poster",
        description: "Design of posters for various activities and events",
        images: ["/images/posterteater.jpg"],
      },
      {
        title: "Correctional Facility Profile Video",
        description: "Production and editing of profile videos for the Narcotics Correctional Facility",
        images: [],
        videoId: "dQw4w9WgXcQ", // Placeholder video ID - replace with actual video ID
      },
    ]
  }

  const displayProjects = language === "id" ? projects : getEnglishProjects()

  // Updated projects with video support
  const updatedProjects = displayProjects.map((project) => {
    if (project.title === "Video Profil Lapas" || project.title === "Correctional Facility Profile Video") {
      return {
        ...project,
        videoId: "dQw4w9WgXcQ", // Placeholder video ID - replace with actual video ID
      }
    }
    return project
  })

  return (
    <section id="projects" className="py-12 scroll-mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-6 text-primary">{t("projects.title")}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {updatedProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col overflow-hidden">
                <CardHeader className="pb-2">
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>

                {project.videoId ? (
                  <div
                    className="relative aspect-video bg-muted cursor-pointer group"
                    onClick={() => setSelectedVideo(project.videoId)}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="rounded-full bg-primary/90 p-3 text-white group-hover:bg-primary transition-colors">
                        <Play className="h-8 w-8" />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                    <Image
                      src={`https://img.youtube.com/vi/${project.videoId}/maxresdefault.jpg`}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : project.images && project.images.length > 0 ? (
                  <div
                    className="relative aspect-video cursor-pointer"
                    onClick={() => setSelectedImage(project.images[0])}
                  >
                    <Image
                      src={project.images[0] || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover hover:opacity-90 transition-opacity"
                    />
                  </div>
                ) : null}

                <CardContent className="py-4 flex-grow">
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </CardContent>

                {project.images && project.images.length > 1 && (
                  <CardFooter className="flex gap-2 flex-wrap pt-0">
                    {project.images.slice(1).map((image, i) => (
                      <div
                        key={i}
                        className="relative w-16 h-16 rounded overflow-hidden cursor-pointer"
                        onClick={() => setSelectedImage(image)}
                      >
                        <Image
                          src={image || "/placeholder.svg"}
                          alt={`${project.title} ${i + 2}`}
                          fill
                          className="object-cover hover:opacity-80 transition-opacity"
                        />
                      </div>
                    ))}
                  </CardFooter>
                )}

                {project.link && (
                  <CardFooter className="pt-0">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm flex items-center gap-1 text-primary hover:underline"
                    >
                      {t("projects.view")} <ExternalLink className="h-3 w-3" />
                    </a>
                  </CardFooter>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          imageSrc={selectedImage}
          alt="Project preview"
        />
      )}

      {/* YouTube Player Modal */}
      {selectedVideo && (
        <YouTubePlayer isOpen={!!selectedVideo} onClose={() => setSelectedVideo(null)} videoId={selectedVideo} />
      )}
    </section>
  )
}
