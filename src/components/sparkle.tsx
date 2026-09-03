import type { SVGProps } from "react";

/** Estrela de quatro pontas usada como enfeite. Herda a cor via currentColor. */
export function Sparkle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <path d="M12 0c0 6.6 5.4 12 12 12-6.6 0-12 5.4-12 12 0-6.6-5.4-12-12-12C6.6 12 12 6.6 12 0Z" />
    </svg>
  );
}
