import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Slimcap - O cuidado certo começa pela raiz";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "nodejs";

export default async function OpenGraphImage() {
  const heroImage = `data:image/png;base64,${(await readFile(join(process.cwd(), "public/images/hero-protocolo-capilar-og.png"))).toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#170d09",
          color: "#fffaf4",
          fontFamily: "serif",
        }}
      >
        <img
          alt=""
          src={heroImage}
          style={{ position: "absolute", inset: 0, height: "100%", width: "100%", objectFit: "cover", objectPosition: "right center" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background: "linear-gradient(90deg, rgba(20, 10, 6, 1) 0%, rgba(27, 13, 8, .94) 38%, rgba(27, 13, 8, .4) 70%, rgba(27, 13, 8, .08) 100%)",
          }}
        />
        <div style={{ position: "relative", display: "flex", flexDirection: "column", padding: "54px 62px", width: "66%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, fontFamily: "sans-serif", fontSize: 18, letterSpacing: 3, color: "#d9a56c" }}>
            <span style={{ border: "1px solid #d9a56c", borderRadius: 10, height: 26, width: 26, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15 }}>S</span>
            SLIMCAP
          </div>
          <div style={{ height: 1, width: 112, background: "#c18a4c", marginTop: 55, marginBottom: 22 }} />
          <div style={{ display: "flex", fontFamily: "sans-serif", fontSize: 16, fontWeight: 700, color: "#d9a56c", letterSpacing: 2.6 }}>TERAPIA CAPILAR INTEGRATIVA</div>
          <div style={{ display: "flex", flexDirection: "column", marginTop: 18, fontSize: 65, lineHeight: 1.04, letterSpacing: -2 }}>
            <span>O cuidado certo</span>
            <div style={{ display: "flex", alignItems: "baseline" }}>
              <span>começa</span><span style={{ color: "#d9a56c", fontStyle: "italic", marginLeft: 16 }}>pela raiz.</span>
            </div>
          </div>
          <div style={{ display: "flex", marginTop: 28, width: "82%", fontFamily: "sans-serif", fontSize: 22, lineHeight: 1.42, color: "#eadbd0" }}>
            Produtos, orientação e método para cuidar do seu cabelo há mais de 40 anos.
          </div>
          <div style={{ display: "flex", marginTop: "auto", fontFamily: "sans-serif", fontSize: 17, letterSpacing: 1.4, color: "#d9a56c" }}>SLIMCAP.VERCEL.APP</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
