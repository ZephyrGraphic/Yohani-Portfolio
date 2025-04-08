import { NextResponse } from "next/server"

export async function GET() {
  // Redirect to the static thumbnail image
  return NextResponse.redirect("https://yohani-ade-fadila.vercel.app/images/thumbnail.png")
}

export const dynamic = "force-static"
