import { cn } from "@/lib/utils";

/**
 * Marca do grupo: monograma + nome.
 * Para usar o logo oficial, troque o <svg> por um <Image> de public/brand/.
 */
export function BrandMark({
  className,
  showName = true,
}: {
  className?: string;
  showName?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 32 32"
        className="size-8 shrink-0"
        role="img"
        aria-label="Grupo MGA"
      >
        <rect width="32" height="32" rx="9" fill="var(--brand)" />
        <path
          d="M9 22V10.5l7 7.5 7-7.5V22"
          fill="none"
          stroke="var(--brand-ink)"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {showName ? (
        <span className="text-lg font-extrabold tracking-tight">Grupo MGA</span>
      ) : null}
    </span>
  );
}
