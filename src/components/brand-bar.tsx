import Image from "next/image";

/** As duas marcas no topo da página, lado a lado. */
export function BrandBar() {
  return (
    <div className="flex items-center justify-center gap-28 sm:gap-32 lg:gap-46">
      <Image
        src="/images/Logo_Unipaper.png"
        alt="Unipaper"
        width={4096}
        height={892}
        priority
        className="h-[33px] w-auto sm:h-7"
      />
      <Image
        src="/images/Logo-_Objetivo.png"
        alt="Objetivo"
        width={1695}
        height={268}
        priority
        className="h-[20px] w-auto sm:h-5"
      />
    </div>
  );
}
