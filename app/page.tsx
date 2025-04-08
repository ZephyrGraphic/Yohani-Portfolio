"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Education from "@/components/education"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Tools from "@/components/tools"
import Footer from "@/components/footer"
import { saveToLocalStorage, loadFromLocalStorage } from "@/lib/storage"
import type { ProfileData } from "@/types/profile"

export default function Home() {
  const [profileData, setProfileData] = useState<ProfileData | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Load data from localStorage or use default data
    const storedData = loadFromLocalStorage("profileData")

    if (storedData) {
      setProfileData(storedData)
    } else {
      // Default data
      const defaultData: ProfileData = {
        name: "YOHANI ADE FADILA",
        contact: {
          phone: "+62 831-1667-4772",
          email: "YohaniAdeFadila@gmail.com",
        },
        about:
          "Saya, Yohani Ade Fadila, adalah seorang Desainer Grafis Profesional dan mantan Administrator dengan latar belakang pendidikan di bidang Teknik Komputer dan Jaringan. Berbekal pemahaman yang baik dalam bidang teknologi, saya memiliki pengalaman kerja yang beragam dalam Bidang Informasi, Pemasaran, Administrasi, Pengelolaan Media Sosial, dan Desain Grafis.",
        education: [
          {
            period: "2019-2022",
            institution: "SMK N 3 Lubuklinggau",
            major: "Jurusan Teknik Komputer dan Jaringan",
            achievements: [
              "Meraih Juara 1 dalam perlombaan pembuatan poster bertema Kemerdekaan dalam rangka memeriahkan HUT RI pada tahun 2019",
              "Memperoleh sertifikasi kelulusan dalam Uji Kompetensi Akhir yang diselenggarakan oleh sekolah pada tahun 2022",
              "Mendapatkan sertifikasi dengan nilai Sangat Baik dalam program Praktik Kerja Lapangan",
            ],
          },
        ],
        experience: [
          {
            period: "2021",
            company: "Java Computer",
            position: "Praktik Kerja Lapangan",
            description:
              "Bertanggung jawab membantu staf pada divisi Pemasaran dan Pendataan Inventaris selama periode Praktik Kerja Lapangan",
          },
          {
            period: "2021-2023",
            company: "Java Computer",
            position: "Staf",
            description:
              "Berperan sebagai staf di bidang pramuniaga, pemasaran, dan layanan servis ringan di perusahaan yang bergerak dalam penjualan unit Komputer, Laptop, dan berbagai aksesoris pendukung. Direkrut langsung setelah menyelesaikan program Praktik Kerja Lapangan pada tahun 2021.",
          },
          {
            period: "2023-2024",
            company: "Lembaga Pemasyarakatan Narkotika Kelas IIA Muara Beliti",
            position: "Staf Honorer",
            description: "Bekerja di bidang Administrasi Perkantoran dengan tanggung jawab utama:",
            responsibilities: [
              "Mengelola dan mengembangkan konten media sosial resmi UPT",
              "Merancang desain grafis dan mengedit video untuk konten media sosial pada platform Facebook, Instagram, Twitter, website, dan YouTube. Memiliki kemampuan dalam mendesain banner, buku, dan infografis untuk keperluan UPT",
              "Mengelola administrasi surat masuk dan keluar, serta menyusun berbagai jenis surat seperti Surat Perintah, Surat Permohonan, dan dokumen administratif lainnya",
            ],
          },
        ],
        tools: [
          "Aplikasi Administrasi Perkantoran: Microsoft Word, Excel, dan PowerPoint",
          "Aplikasi Desain Grafis dan Editing: Adobe Photoshop, Adobe Illustrator, CapCut PC, dan Canva",
        ],
        projects: [
          {
            title: 'Maskot "Mangkeli"',
            description: "Perancangan dan pengembangan maskot untuk Lapas Narkotika Kelas IIA Muara Beliti",
            images: ["/images/mangkeli1.jpg", "/images/mangkeli2.jpg"],
          },
          {
            title: "Desain Pemberitaan",
            description: "Perancangan konten pemberitaan untuk media sosial resmi Lapas Narkotika",
            images: ["/images/pemberitaan.jpg"],
          },
          {
            title: "Poster",
            description: "Perancangan poster untuk berbagai kegiatan dan acara",
            images: ["/images/posterteater.jpg"],
          },
          {
            title: "Video Profil Lapas",
            description: "Produksi dan pengeditan video profil Lapas Narkotika",
            images: [],
          },
        ],
        skills: [
          "Mampu bekerja secara mandiri maupun dalam tim dengan efektif",
          "Terbiasa bekerja dengan tenggat waktu dan konsisten dalam menyelesaikan tugas tepat waktu",
          "Teliti dan sistematis dalam pengolahan data serta dokumentasi administrasi",
          "Terampil dalam mengelola akun media sosial untuk kebutuhan branding dan promosi",
          "Kreatif dalam merancang konten visual untuk kebutuhan digital maupun cetak",
          "Mampu menyusun laporan kerja dan dokumentasi secara terstruktur dan komprehensif",
          "Adaptif terhadap teknologi baru dan lingkungan kerja yang dinamis",
          "Memiliki keterampilan dasar fotografi dan videografi untuk pengembangan konten",
          "Efisien dalam melakukan input data dan pengarsipan dokumen",
          "Komunikatif dan mampu membangun hubungan kerja yang harmonis",
        ],
      }

      setProfileData(defaultData)
      saveToLocalStorage("profileData", defaultData)
    }

    setIsLoaded(true)
  }, [])

  if (!isLoaded || !profileData) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <Hero name={profileData.name} contact={profileData.contact} />

          <About about={profileData.about} />

          <Education education={profileData.education} />

          <Experience experience={profileData.experience} />

          <Tools tools={profileData.tools} />

          <Projects projects={profileData.projects} />

          <Skills skills={profileData.skills} />
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
