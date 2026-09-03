import Image from "next/image";
export function Banner() {
  return (
    <div className="relative">
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
