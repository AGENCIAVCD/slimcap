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
  metadataBase: new URL("https://slimcapilar.com.br"),
  applicationName: "Slimcap",
  title: {
    default: "Slimcapilar | Revenda e distribuição Slimcap",
    template: "%s | Slimcap",
  },
  description:
    "Revenda Slimcap para clínicas, lojas e distribuidores: monte seu mix, simule margem e fale com o comercial.",
  keywords: ["Slimcap", "terapia capilar", "tratamento capilar", "tricologia", "kits capilares"],
  authors: [{ name: "Slimcap" }],
  creator: "Slimcap",
  publisher: "Slimcap",
  category: "Saúde e beleza",
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.png", apple: "/favicon.png" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Revenda Slimcap | Mais ticket, margem e recompra",
    description:
      "Comece a partir de R$ 1.500, com margem potencial de até 50%, mix orientado e suporte comercial.",
    url: "https://slimcapilar.com.br/",
    siteName: "Slimcap",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Slimcap - O cuidado certo começa pela raiz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Slimcap | O cuidado certo começa pela raiz",
    description: "Produtos, orientação e método para cuidar do seu cabelo com a experiência de mais de 40 anos.",
    images: ["/opengraph-image"],
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
