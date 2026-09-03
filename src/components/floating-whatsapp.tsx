import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { siteConfig } from "@/config/site";
import { whatsappHref } from "@/lib/whatsapp";

/** Botão flutuante do atendimento central. Some se o número estiver vazio. */
export function FloatingWhatsApp() {
  if (!siteConfig.contato.whatsapp) return null;

  return (
    <a
      href={whatsappHref(
        siteConfig.contato.whatsapp,
        "Olá! Vim pelo site do Grupo MGA.",
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com o atendimento central no WhatsApp"
      className="bg-whatsapp shadow-whatsapp/30 hover:bg-whatsapp-dark focus-visible:outline-whatsapp-dark fixed right-5 bottom-5 z-50 flex size-14 items-center justify-center rounded-full text-white shadow-lg transition focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  );
}
