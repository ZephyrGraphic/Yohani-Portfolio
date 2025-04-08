import { loadFromLocalStorage } from "./storage"
import type { ProfileData } from "@/types/profile"

export function generateCV() {
  // Load profile data from localStorage
  const profileData = loadFromLocalStorage("profileData") as ProfileData
  const language = (loadFromLocalStorage("language") as "id" | "en") || "id"

  if (!profileData) {
    console.error("No profile data found")
    return
  }

  // Create a new window for the CV
  const cvWindow = window.open("", "_blank")
  if (!cvWindow) {
    alert("Please allow pop-ups to download the CV")
    return
  }

  // English translations for CV
  const translations = {
    title: {
      id: "Curriculum Vitae",
      en: "Curriculum Vitae",
    },
    profile: {
      id: "Profil Singkat",
      en: "Professional Profile",
    },
    education: {
      id: "Pendidikan",
      en: "Education",
    },
    experience: {
      id: "Pengalaman Profesional",
      en: "Professional Experience",
    },
    tools: {
      id: "Keterampilan Teknis",
      en: "Technical Skills",
    },
    projects: {
      id: "Portofolio Proyek",
      en: "Project Portfolio",
    },
    skills: {
      id: "Kompetensi",
      en: "Competencies",
    },
    print: {
      id: "Cetak CV",
      en: "Print CV",
    },
  }

  // English content for CV
  const aboutEn =
    "I, Yohani Ade Fadila, am a Professional Graphic Designer and former Administrator with an educational background in Computer and Network Engineering. With a solid understanding of technology, I have diverse work experience in Information, Marketing, Administration, Social Media Management, and Graphic Design."

  const educationEn = {
    institution: "SMK N 3 Lubuklinggau",
    major: "Computer and Network Engineering",
    achievements: [
      "Won 1st Place in the Independence-themed poster making competition to celebrate Indonesian Independence Day in 2019",
      "Received certification for passing the Final Competency Test organized by the school in 2022",
      "Earned certification with Excellent marks in the Internship program",
    ],
  }

  const experienceEn = [
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

  const toolsEn = [
    "Office Administration Applications: Microsoft Word, Excel, and PowerPoint",
    "Graphic Design and Editing Applications: Adobe Photoshop, Adobe Illustrator, CapCut PC, and Canva",
  ]

  const projectsEn = [
    {
      title: 'Mascot "Mangkeli"',
      description: "Design and development of a mascot for Narcotics Correctional Facility Class IIA Muara Beliti",
    },
    {
      title: "News Design",
      description: "Design of news content for the official social media of the Narcotics Correctional Facility",
    },
    {
      title: "Poster",
      description: "Design of posters for various activities and events",
    },
    {
      title: "Correctional Facility Profile Video",
      description: "Production and editing of profile videos for the Narcotics Correctional Facility",
    },
  ]

  const skillsEn = [
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

  // Generate CV HTML content
  const cvContent = `
  <!DOCTYPE html>
  <html lang="${language}">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${translations.title[language]} - ${profileData.name}</title>
    <style>
      body {
        font-family: 'Arial', sans-serif;
        line-height: 1.6;
        color: #333;
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
      }
      h1 {
        text-align: center;
        color: #0F172A;
        margin-bottom: 5px;
      }
      .contact {
        text-align: center;
        margin-bottom: 20px;
        font-size: 14px;
      }
      h2 {
        color: #0F172A;
        border-bottom: 2px solid #0F172A;
        padding-bottom: 5px;
        margin-top: 25px;
      }
      .section {
        margin-bottom: 20px;
      }
      .experience, .education {
        margin-bottom: 15px;
      }
      .period {
        font-weight: bold;
        margin-right: 10px;
      }
      .position, .institution {
        font-weight: bold;
      }
      .company, .major {
        font-style: italic;
      }
      ul {
        padding-left: 20px;
      }
      li {
        margin-bottom: 5px;
      }
      .print-button {
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 8px 16px;
        background-color: #0F172A;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      }
      @media print {
        .print-button {
          display: none;
        }
        body {
          padding: 0;
        }
      }
    </style>
  </head>
  <body>
    <button class="print-button" onclick="window.print()">${translations.print[language]}</button>
    
    <h1>${profileData.name}</h1>
    <div class="contact">
      ${profileData.contact.phone} | ${profileData.contact.email}
    </div>
    
    <div class="section">
      <h2>${translations.profile[language]}</h2>
      <p>${language === "id" ? profileData.about : aboutEn}</p>
    </div>
    
    <div class="section">
      <h2>${translations.education[language]}</h2>
      ${
        language === "id"
          ? profileData.education
              .map(
                (edu) => `
              <div class="education">
                <div><span class="period">${edu.period}</span> | <span class="institution">${edu.institution}</span> | <span class="major">${edu.major}</span></div>
                <ul>
                  ${edu.achievements.map((achievement) => `<li>${achievement}</li>`).join("")}
                </ul>
              </div>
            `,
              )
              .join("")
          : `
            <div class="education">
              <div><span class="period">${profileData.education[0].period}</span> | <span class="institution">${educationEn.institution}</span> | <span class="major">${educationEn.major}</span></div>
              <ul>
                ${educationEn.achievements.map((achievement) => `<li>${achievement}</li>`).join("")}
              </ul>
            </div>
          `
      }
    </div>
    
    <div class="section">
      <h2>${translations.experience[language]}</h2>
      ${
        language === "id"
          ? profileData.experience
              .map(
                (exp) => `
              <div class="experience">
                <div><span class="period">${exp.period}</span> | <span class="position">${exp.position}</span> | <span class="company">${exp.company}</span></div>
                <p>${exp.description}</p>
                ${
                  exp.responsibilities
                    ? `
                  <ul>
                    ${exp.responsibilities.map((responsibility) => `<li>${responsibility}</li>`).join("")}
                  </ul>
                `
                    : ""
                }
              </div>
            `,
              )
              .join("")
          : experienceEn
              .map(
                (exp) => `
              <div class="experience">
                <div><span class="period">${exp.period}</span> | <span class="position">${exp.position}</span> | <span class="company">${exp.company}</span></div>
                <p>${exp.description}</p>
                ${
                  exp.responsibilities
                    ? `
                  <ul>
                    ${exp.responsibilities.map((responsibility) => `<li>${responsibility}</li>`).join("")}
                  </ul>
                `
                    : ""
                }
              </div>
            `,
              )
              .join("")
      }
    </div>
    
    <div class="section">
      <h2>${translations.tools[language]}</h2>
      <ul>
        ${(language === "id" ? profileData.tools : toolsEn).map((tool) => `<li>${tool}</li>`).join("")}
      </ul>
    </div>
    
    <div class="section">
      <h2>${translations.projects[language]}</h2>
      <ul>
        ${
          language === "id"
            ? profileData.projects
                .map((project) => `<li><strong>${project.title}</strong> - ${project.description}</li>`)
                .join("")
            : projectsEn
                .map((project) => `<li><strong>${project.title}</strong> - ${project.description}</li>`)
                .join("")
        }
      </ul>
    </div>
    
    <div class="section">
      <h2>${translations.skills[language]}</h2>
      <ul>
        ${(language === "id" ? profileData.skills : skillsEn).map((skill) => `<li>${skill}</li>`).join("")}
      </ul>
    </div>
  </body>
  </html>
`

  // Write the content to the new window
  cvWindow.document.open()
  cvWindow.document.write(cvContent)
  cvWindow.document.close()
}
