import Image from "next/image";
import { Camera, MessageCircle, Music2 } from "lucide-react";
import { CLINIC_WHATSAPP, WhatsAppLink } from "./whatsapp-link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-main">
        <Image src="/brand/logo-slimcapilar.webp" alt="Slimcapilar" width={255} height={83} />
        <p>Terapia capilar integrativa, produtos e orientação construídos com quatro décadas de experiência.</p>
        <div className="footer-social" aria-label="Redes sociais da Slimcap">
          <a href="https://www.instagram.com/slimcap.clinicacapilar/" target="_blank" rel="noopener noreferrer" aria-label="Seguir Slimcap no Instagram">
            <Camera size={17} aria-hidden="true" /><span>Instagram</span>
          </a>
          <a href="https://www.tiktok.com/@slimcap.capilar" target="_blank" rel="noopener noreferrer" aria-label="Seguir Slimcap no TikTok">
            <Music2 size={17} aria-hidden="true" /><span>TikTok</span>
          </a>
        </div>
        <WhatsAppLink className="footer-contact" intent="rodape" phone={CLINIC_WHATSAPP}>
          <MessageCircle size={18} aria-hidden="true" /> (19) 98830-3434
        </WhatsAppLink>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} Slimcapilar. Todos os direitos reservados.</span>
        <span>Site desenvolvido por <a href="https://vocedigitalpropaganda.com.br/" target="_blank" rel="noopener noreferrer">Você Digital Propaganda</a></span>
      </div>
    </footer>
  );
}
