import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://slimcap.vercel.app"),
  title: "Slimcapilar | Parceria para negócios de saúde capilar",
  description:
    "Produtos, experiência e assessoria comercial para clínicas, revendedores e distribuidores crescerem no mercado capilar.",
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.png" },
  openGraph: {
    title: "Slimcapilar | Crescimento com experiência e direção",
    description:
      "Uma parceria completa para transformar o potencial do mercado capilar em crescimento consistente.",
    url: "/",
    siteName: "Slimcapilar",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/images/hero-consultoria.webp", width: 1672, height: 941 }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} ${cormorant.variable}`}>
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
