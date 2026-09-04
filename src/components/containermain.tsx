import Image from "next/image";
import { GroupCard } from "@/components/group-card";
import type { GrupoUnidade } from "@/types";

export function ContainerMain({ grupos }: { grupos: GrupoUnidade[] }) {
  return (
    <div className="relative">
      {/* Painel azul: faixa lateral no mobile, bloco inteiro a partir do lg. */}
      <div
        aria-hidden="true"
        className="bg-navy absolute inset-y-[2.8%] right-[10.5%] w-[262px] rounded-3xl lg:inset-0 lg:right-0 lg:w-auto"
      />

      <p className="absolute top-[6%] right-[18%] left-[50%] text-right text-[18px] leading-snug font-semibold text-white/90 sm:text-[20px] lg:inset-x-0 lg:top-[7%] lg:text-center">
        Receba oportunidades exclusivas
      </p>

      <Image
        src="/images/florU.png"
        alt=""
        width={213}
        height={213}
        className="absolute top-[37%] left-[81%] h-auto w-[60px] lg:top-[-5%] lg:left-[3%]"
      />

      <Image
        src="/images/estrela.png"
        alt=""
        width={277}
        height={277}
        className="absolute top-[97%] left-[75%] h-auto w-[70px] -translate-x-1/2 -translate-y-1/2 lg:top-[99%] lg:left-[92%]"
      />

      <ul className="relative ml-[8.7%] w-[32.3%] space-y-[24%] lg:mx-auto lg:grid lg:w-fit lg:grid-cols-2 lg:space-y-0 lg:gap-x-8 lg:gap-y-6 lg:pt-[100px] lg:pb-[56px]">
        {grupos.map((grupo) => (
          <li key={grupo.id}>
            <GroupCard grupo={grupo} />
          </li>
        ))}
      </ul>
    </div>
  );
}
