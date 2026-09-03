import Image from "next/image";

import { GroupCard } from "@/components/group-card";
import type { GrupoUnidade } from "@/types";

/**
 * Painel escuro dos grupos. As medidas saíram do design e são percentuais
 * da largura do bloco, então a composição — cartão 153x111, a sobreposição
 * dele ao painel e a posição dos enfeites — se mantém em qualquer tela.
 */
export function GroupsPanel({ grupos }: { grupos: GrupoUnidade[] }) {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="bg-navy w-[276px] absolute inset-y-[2.8%] right-[10.5%] rounded-3xl"
      />

      <p className="absolute top-[7.5%] right-[18%] left-[50%] text-right text-[18px] leading-snug font-semibold text-white/90 sm:text-xs">
        Receba oportunidades exclusivas
      </p>

      <Image
        src="/images/Flor.png"
        alt=""
        width={165}
        height={165}
        className="absolute top-[37%] left-[78%] h-auto w-[52.88px]"
      />

      <Image
        src="/images/Estrela.png"
        alt=""
        width={203}
        height={203}
        className="absolute top-[98%] left-[75%] h-auto w-[58px] -translate-x-1/2 -translate-y-1/2"
      />

      {/*
        Margem vertical em % resolve sobre a LARGURA da lista, que é a
        largura do cartão. O respiro entre cartões do design (24% da
        largura dele) acompanha a escala automaticamente.
      */}
      <ul className="relative ml-[8.7%] w-[32.3%] space-y-[24%]">
        {grupos.map((grupo) => (
          <li key={grupo.id}>
            <GroupCard grupo={grupo} />
          </li>
        ))}
      </ul>
    </div>
  );
}
