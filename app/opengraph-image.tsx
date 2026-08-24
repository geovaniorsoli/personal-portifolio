import { readFile } from "node:fs/promises"
import { join } from "node:path"
import { ImageResponse } from "next/og"

import { SITE_NAME, SITE_TAGLINE } from "@/lib/site"

export const alt = `${SITE_NAME} — ${SITE_TAGLINE}`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  const avatar = await readFile(join(process.cwd(), "public/Eu.png"))
  const avatarSrc = `data:image/png;base64,${avatar.toString("base64")}`

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: "#18181b",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 200,
            height: 200,
            borderRadius: "50%",
            background: "#3b82f6",
            overflow: "hidden",
            marginBottom: 40,
          }}
        >
          <img
            src={avatarSrc}
            width={200}
            height={200}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div style={{ fontSize: 64, fontWeight: 700, color: "#fafafa" }}>
          {SITE_NAME}
        </div>
        <div style={{ fontSize: 32, color: "#a1a1aa", marginTop: 16 }}>
          {SITE_TAGLINE}
        </div>
      </div>
    ),
    { ...size }
  )
}
