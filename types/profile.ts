export interface ProfileContact {
  phone: string
  email: string
}

export interface Education {
  period: string
  institution: string
  major: string
  achievements: string[]
}

export interface Experience {
  period: string
  company: string
  position: string
  description: string
  responsibilities?: string[]
}

export interface Project {
  title: string
  description: string
  images: string[]
  link?: string
  videoId?: string
}

export interface ProfileData {
  name: string
  contact: ProfileContact
  about: string
  education: Education[]
  experience: Experience[]
  tools: string[]
  projects: Project[]
  skills: string[]
}
