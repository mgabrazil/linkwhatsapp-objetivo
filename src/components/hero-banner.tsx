import Image from "next/image";

import { Sparkle } from "@/components/sparkle";

/**
 * Banner de topo. A arte já vem com o fundo azul-escuro, os alunos e o
 * selo "Novidades Objetivo" embutidos, sobre fundo transparente — por isso
 * aqui só entram as estrelinhas que ficam fora dela.
 */
export function HeroBanner() {
  return (
    <div className="relative">
      <Sparkle className="absolute top-[56%] -left-2 z-10 size-9 text-white sm:size-11" />
      <Sparkle className="absolute top-[32%] -right-1 z-10 size-7 text-white sm:size-9" />

      <Image
        src="/images/Banner.png"
        alt="Novidades Objetivo"
        width={425}
        height={336}
        priority
        className="h-auto w-full"
      />
    </div>
  );
}
