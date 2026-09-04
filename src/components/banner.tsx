import Image from "next/image";
export function Banner() {
  return (
    <div className="relative">
      <Image
        src="/images/Objetivo-Slogan.png"
        alt="Novidades Objetivo"
        width={1433}
        height={1098}
        priority
        className="h-auto w-full"
      />
    </div>
  );
}
