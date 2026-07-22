import type { Metadata } from "next";
import { Bodoni_Moda, Cormorant_Garamond, Manrope } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
  display: "swap",
});

const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  variable: "--font-accent",
  weight: ["500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://slimcap.vercel.app"),
  title: "Slimcap | Terapia capilar integrativa há 40 anos",
  description:
    "Kits personalizados, consultoria online e atendimento presencial com a experiência de 40 anos do Método Slimcap.",
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.png", apple: "/favicon.png" },
  openGraph: {
    title: "Slimcap | O cuidado certo começa pela raiz",
    description:
      "Terapia capilar integrativa, kits por necessidade e orientação especializada online ou presencial.",
    url: "/",
    siteName: "Slimcapilar",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/images/hero-consultoria.webp", width: 1672, height: 941 }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} ${cormorant.variable} ${bodoni.variable}`}>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NWPH76JL"
            height="0"
            width="0"
            className="hidden invisible"
            title="Google Tag Manager"
          />
        </noscript>
        {children}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NWPH76JL');`}
        </Script>
      </body>
    </html>
  );
}
