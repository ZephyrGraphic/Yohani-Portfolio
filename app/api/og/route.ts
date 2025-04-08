import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({
    title: "Yohani Ade Fadila | Portfolio",
    description: "Desainer Grafis Profesional & Administrator",
    image: "https://yohani-ade-fadila.vercel.app/images/thumbnail.png",
  })
}

export const dynamic = "force-static"
