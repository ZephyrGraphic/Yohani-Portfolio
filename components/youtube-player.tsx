"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

interface YouTubePlayerProps {
  isOpen: boolean
  onClose: () => void
  videoId: string
}

export default function YouTubePlayer({ isOpen, onClose, videoId }: YouTubePlayerProps) {
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
            className="relative w-full max-w-4xl aspect-video rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 rounded-full bg-black/50 text-white hover:bg-black/70 z-10"
              onClick={onClose}
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
