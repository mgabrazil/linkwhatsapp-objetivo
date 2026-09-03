import Image from "next/image";
import { GroupCard } from "@/components/group-card";
import type { GrupoUnidade } from "@/types";

export function ContainerMain({ grupos }: { grupos: GrupoUnidade[] }) {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="bg-navy absolute inset-y-[2.8%] right-[10.5%] w-[262px] rounded-3xl"
      />

      <p className="absolute top-[7.5%] right-[18%] left-[50%] text-right text-[18px] leading-snug font-semibold text-white/90 sm:text-[20px]">
        Receba oportunidades exclusivas
      </p>

      <Image
        src="/images/florU.png"
        alt=""
        width={165}
        height={165}
        className="absolute top-[37%] left-[81%] lg:left-[82%] h-auto w-[60px]"
      />

      <Image
        src="/images/estrela.png"
        alt=""
        width={203}
        height={203}
        className="absolute top-[97%] left-[75%] h-auto w-[70px] -translate-x-1/2 -translate-y-1/2"
      />

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
