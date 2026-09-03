"use client";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-4 px-5 text-center">
      <h1 className="text-3xl font-extrabold tracking-tight text-white">
        Algo deu errado
      </h1>
      <p className="max-w-sm text-white/80">
        Não foi possível carregar a página. Tente novamente em instantes.
      </p>
      <button
        type="button"
        onClick={reset}
        className="bg-card text-navy mt-2 rounded-xl px-5 py-3 text-sm font-bold transition hover:opacity-90"
      >
        Tentar de novo
      </button>
    </main>
  );
}
