import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Revenda Slimcap - margem, mix e suporte para o seu negócio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "nodejs";

export default async function ResellerOpenGraphImage() {
  const productImage = `data:image/png;base64,${(await readFile(join(process.cwd(), "public/images/revenda-hero-real-og.png"))).toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{ height: "100%", width: "100%", display: "flex", position: "relative", overflow: "hidden", background: "#180e09", color: "#fffaf4", fontFamily: "serif" }}>
        <img alt="" src={productImage} style={{ position: "absolute", inset: 0, height: "100%", width: "100%", objectFit: "cover", objectPosition: "right center" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", background: "linear-gradient(90deg, rgba(23, 12, 7, 1) 0%, rgba(29, 15, 9, .95) 43%, rgba(29, 15, 9, .38) 72%, rgba(29, 15, 9, .12) 100%)" }} />
        <div style={{ position: "relative", display: "flex", flexDirection: "column", padding: "54px 62px", width: "66%" }}>
          <div style={{ display: "flex", fontFamily: "sans-serif", fontSize: 18, fontWeight: 700, letterSpacing: 2.4, color: "#d9a56c" }}>SLIMCAP PARA PROFISSIONAIS</div>
          <div style={{ height: 1, width: 112, background: "#c18a4c", marginTop: 37, marginBottom: 22 }} />
          <div style={{ display: "flex", fontFamily: "sans-serif", fontSize: 16, fontWeight: 700, color: "#d9a56c", letterSpacing: 2.6 }}>REVENDAS E DISTRIBUIÇÃO</div>
          <div style={{ display: "flex", flexDirection: "column", marginTop: 18, fontSize: 61, lineHeight: 1.04, letterSpacing: -2 }}>
            <span>Mais giro para</span>
            <div style={{ display: "flex", alignItems: "baseline" }}>
              <span>o</span><span style={{ color: "#d9a56c", fontStyle: "italic", marginLeft: 16 }}>seu negócio.</span>
            </div>
          </div>
          <div style={{ display: "flex", marginTop: 25, width: "82%", fontFamily: "sans-serif", fontSize: 21, lineHeight: 1.42, color: "#eadbd0" }}>
            Mix orientado, suporte comercial e margem potencial de até 50%.
          </div>
          <div style={{ display: "flex", gap: 16, marginTop: "auto", fontFamily: "sans-serif", fontSize: 17, fontWeight: 700, color: "#d9a56c" }}>
            <span>A PARTIR DE R$ 1.500</span><span>•</span><span>ATÉ 50% DE MARGEM</span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
