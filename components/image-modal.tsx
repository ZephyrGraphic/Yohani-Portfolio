"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

interface ImageModalProps {
  isOpen: boolean
  onClose: () => void
  imageSrc: string
  alt: string
}

export default function ImageModal({ isOpen, onClose, imageSrc, alt }: ImageModalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Disable body scroll when modal is open
    if (isOpen) {
      document.body.style.overflow = "hidden"
    }

    // Re-enable scroll when modal is closed
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  if (!mounted) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
            className="relative max-w-4xl w-full h-auto max-h-[90vh] rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full">
              <Image
                src={imageSrc || "/placeholder.svg"}
                alt={alt}
                width={1200}
                height={800}
                className="w-full h-auto object-contain bg-black"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 rounded-full bg-black/50 text-white hover:bg-black/70"
                onClick={onClose}
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Close</span>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
