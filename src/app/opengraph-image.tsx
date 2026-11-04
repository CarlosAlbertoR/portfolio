import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const alt = `${profile.name}, ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        background: "#0e151b",
        color: "#e6ecef",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ fontSize: 30, color: "#97a6b0" }}>
        {`${profile.role} · Angular · React · Next.js`}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <div
          style={{
            fontSize: 76,
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: -2,
          }}
        >
          {profile.name}
        </div>
        <div style={{ fontSize: 34, color: "#5cbcb1" }}>
          Frontends that many teams can ship at once.
        </div>
      </div>
    </div>,
    size,
  );
}
