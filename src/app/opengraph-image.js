import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#09090b",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        {/* Ambient glow top-left */}
        <div
          style={{
            position: "absolute",
            top: -100,
            left: -100,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, #f9731640 0%, transparent 70%)",
          }}
        />

        {/* Ambient glow bottom-right */}
        <div
          style={{
            position: "absolute",
            bottom: -100,
            right: -100,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, #8b5cf640 0%, transparent 70%)",
          }}
        />

        {/* Eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 24,
          }}
        >
          <div style={{ width: 32, height: 2, background: "#f97316" }} />
          <span
            style={{
              color: "#f97316",
              fontSize: 14,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontFamily: "monospace",
            }}
          >
            Full-Stack Developer &amp; UI/UX Designer
          </span>
        </div>

        {/* Name */}
        <h1
          style={{
            fontSize: 88,
            fontWeight: 900,
            letterSpacing: "-0.04em",
            lineHeight: 1,
            margin: 0,
            marginBottom: 8,
          }}
        >
          <span
            style={{
              background: "linear-gradient(90deg, #f97316, #ec4899)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Gideon
          </span>
          <br />
          <span style={{ color: "#fff" }}>Papa</span>
        </h1>

        {/* Tagline */}
        <p
          style={{
            color: "#71717a",
            fontSize: 22,
            lineHeight: 1.5,
            maxWidth: 560,
            marginTop: 24,
          }}
        >
          Nairobi-based developer building fast, beautiful, revenue-generating web products.
        </p>

        {/* Domain badge */}
        <div
          style={{
            marginTop: 48,
            padding: "10px 20px",
            background: "rgba(249,115,22,0.10)",
            border: "1px solid rgba(249,115,22,0.3)",
            borderRadius: 12,
            color: "#f97316",
            fontSize: 16,
            fontFamily: "monospace",
          }}
        >
          gideonpapa.me
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
