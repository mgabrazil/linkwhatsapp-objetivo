import { BrandMark } from "@/components/brand-mark";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { siteConfig } from "@/config/site";
import { whatsappHref } from "@/lib/whatsapp";

const navegacao = [
  { href: "#unidades", label: "Unidades" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#atendimento", label: "Atendimento" },
];

export function SiteHeader() {
  return (
    <header className="border-border/70 bg-background/85 sticky top-0 z-40 border-b backdrop-blur">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-4 px-5">
        <a href="#topo" className="rounded-lg" aria-label={siteConfig.name}>
          <BrandMark />
        </a>

        <nav aria-label="Principal" className="hidden gap-8 md:flex">
          {navegacao.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-muted hover:text-foreground text-sm font-semibold transition"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappHref(
            siteConfig.contato.whatsapp,
            "Olá! Vim pelo site do Grupo MGA.",
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-foreground text-background inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold transition hover:opacity-90"
        >
          <WhatsAppIcon className="size-4" />
          <span className="hidden sm:inline">Falar agora</span>
          <span className="sm:hidden">WhatsApp</span>
        </a>
      </div>
    </header>
  );
}
