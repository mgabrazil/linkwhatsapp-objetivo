import { Clock, MapPin, Navigation, Phone } from "lucide-react";

import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { formatarTelefone, whatsappDaUnidade } from "@/lib/whatsapp";
import type { Unidade } from "@/types";

export function UnitCard({ unidade }: { unidade: Unidade }) {
  return (
    <article
      id={unidade.id}
      className="border-border bg-card flex flex-col rounded-2xl border p-6 shadow-[0_1px_2px_rgba(21,21,26,0.04)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_32px_-12px_rgba(21,21,26,0.18)]"
    >
      <div className="flex flex-wrap items-center gap-2">
        {unidade.empresa ? (
          <span className="bg-brand/15 text-brand-ink rounded-full px-2.5 py-1 text-xs font-semibold">
            {unidade.empresa}
          </span>
        ) : null}
        {unidade.destaque ? (
          <span className="border-border text-muted rounded-full border px-2.5 py-1 text-xs font-semibold">
            Matriz
          </span>
        ) : null}
      </div>

      <h3 className="mt-3 text-xl font-bold tracking-tight">{unidade.nome}</h3>
      <p className="text-muted text-sm font-semibold">
        {unidade.cidade} · {unidade.uf}
      </p>

      <dl className="text-muted mt-4 space-y-2.5 text-sm">
        <div className="flex gap-2.5">
          <dt className="sr-only">Endereço</dt>
          <MapPin
            className="text-brand mt-0.5 size-4 shrink-0"
            aria-hidden="true"
          />
          <dd>{unidade.endereco}</dd>
        </div>
        <div className="flex gap-2.5">
          <dt className="sr-only">Horário</dt>
          <Clock
            className="text-brand mt-0.5 size-4 shrink-0"
            aria-hidden="true"
          />
          <dd>{unidade.horario}</dd>
        </div>
      </dl>

      {/* mt-auto alinha os botões na base, mesmo com textos de alturas diferentes. */}
      <div className="mt-auto pt-6">
        <a
          href={whatsappDaUnidade(unidade)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Conversar no WhatsApp com a ${unidade.nome}`}
          className="bg-whatsapp hover:bg-whatsapp-dark focus-visible:outline-whatsapp-dark flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold text-white transition focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          <WhatsAppIcon className="size-4.5" />
          Falar no WhatsApp
        </a>

        {unidade.mapsUrl || unidade.telefone ? (
          <div className="mt-2 flex gap-2">
            {unidade.mapsUrl ? (
              <a
                href={unidade.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border-border text-muted hover:border-brand hover:text-foreground flex flex-1 items-center justify-center gap-1.5 rounded-xl border px-3 py-2.5 text-sm font-semibold transition"
              >
                <Navigation className="size-4" aria-hidden="true" />
                Como chegar
              </a>
            ) : null}
            {unidade.telefone ? (
              <a
                href={`tel:+${unidade.telefone.replace(/\D/g, "")}`}
                className="border-border text-muted hover:border-brand hover:text-foreground flex flex-1 items-center justify-center gap-1.5 rounded-xl border px-3 py-2.5 text-sm font-semibold transition"
              >
                <Phone className="size-4" aria-hidden="true" />
                {formatarTelefone(unidade.telefone)}
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}
