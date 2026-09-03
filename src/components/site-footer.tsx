import { Mail, Phone } from "lucide-react";

import { BrandMark } from "@/components/brand-mark";
import { siteConfig } from "@/config/site";
import { formatarTelefone } from "@/lib/whatsapp";

export function SiteFooter() {
  return (
    <footer className="border-border bg-card border-t">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-sm">
          <BrandMark />
          <p className="text-muted mt-3 text-sm">{siteConfig.description}</p>
        </div>

        <div className="flex flex-col gap-3 text-sm">
          <p className="font-bold">Outros canais</p>
          <a
            href={`mailto:${siteConfig.contato.email}`}
            className="text-muted hover:text-foreground inline-flex items-center gap-2 transition"
          >
            <Mail className="text-brand size-4" aria-hidden="true" />
            {siteConfig.contato.email}
          </a>
          <a
            href={`tel:+${siteConfig.contato.telefone}`}
            className="text-muted hover:text-foreground inline-flex items-center gap-2 transition"
          >
            <Phone className="text-brand size-4" aria-hidden="true" />
            {formatarTelefone(siteConfig.contato.telefone)}
          </a>
        </div>
      </div>

      <div className="border-border border-t">
        <p className="text-muted mx-auto max-w-6xl px-5 py-6 text-xs">
          © {new Date().getFullYear()} {siteConfig.shortName}. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
