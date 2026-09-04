import type { GrupoUnidade } from "@/types";
export function GroupCard({ grupo }: { grupo: GrupoUnidade }) {
  return (
    <a
      href={grupo.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${grupo.nome} — entrar no grupo do WhatsApp`}
      className="bg-card text-navy focus-visible:ring-accent focus-visible:ring-offset-navy flex h-[70px] w-[153px] items-center gap-3 rounded-2xl pr-2 pl-3 shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] transition hover:scale-105 duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
    >
      <svg
        viewBox="0 0 10 12"
        className="text-brand h-4 w-3.5 shrink-0 fill-current"
        aria-hidden="true"
      >
        <path d="M0 0l10 6-10 6z" />
      </svg>

      <span className="text-[18px] leading-tight font-bold text-black">
        {grupo.nome.split(" ").map((palavra, i) => (
          <span key={i} className="block">
            {palavra}
          </span>
        ))}
      </span>
    </a>
  );
}
