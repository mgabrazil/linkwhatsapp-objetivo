import type { GrupoUnidade } from "@/types";

/**
 * Cartão de uma unidade, na proporção 153x111 do design.
 * Cada palavra do nome fica em uma linha, como no modelo.
 * Abre o convite do grupo em uma nova aba.
 */
export function GroupCard({ grupo }: { grupo: GrupoUnidade }) {
  return (
    <a
      href={grupo.link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-card text-navy focus-visible:ring-accent focus-visible:ring-offset-navy flex w-[153px] h-[70px] items-center gap-3 rounded-2xl pr-2 pl-3 shadow-[0_6px_18px_rgba(16,24,56,0.28)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_26px_rgba(16,24,56,0.38)] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
    >
      <svg
        viewBox="0 0 10 12"
        className="text-brand h-4 w-3.5 shrink-0 fill-current"
        aria-hidden="true"
      >
        <path d="M0 0l10 6-10 6z" />
      </svg>

      <span className="text-[18px] leading-tight font-bold">
        {grupo.nome.split(" ").map((palavra, i) => (
          <span key={i} className="block">
            {palavra}
          </span>
        ))}
      </span>

      <span className="sr-only">— entrar no grupo do WhatsApp</span>
    </a>
  );
}
