import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "Yohani Ade Fadila - Desainer Grafis Profesional & Administrator"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        background: "white",
        width: "100%",
        height: "100%",
        padding: "40px",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          maxWidth: "600px",
        }}
      >
        <h1
          style={{
            fontSize: "64px",
            fontWeight: "bold",
            color: "#0F172A",
            margin: "0",
            lineHeight: "1.1",
          }}
        >
          YOHANI ADE FADILA
        </h1>
        <p
          style={{
            fontSize: "28px",
            color: "#64748B",
            marginTop: "16px",
            marginBottom: "24px",
          }}
        >
          Desainer Grafis Profesional & Administrator
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            fontSize: "20px",
            color: "#64748B",
          }}
        >
          <p style={{ margin: "0" }}>+62 831-1667-4772</p>
          <p style={{ margin: "0" }}>YohaniAdeFadila@gmail.com</p>
        </div>
      </div>
      <div
        style={{
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          overflow: "hidden",
          border: "8px solid rgba(15, 23, 42, 0.1)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "black",
        }}
      >
        {/* Note: We can't use an external image here, so we're creating a placeholder */}
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: "24px",
            textAlign: "center",
          }}
        >
          Profile Photo
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  )
}
