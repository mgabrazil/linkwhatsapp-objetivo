import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-4 px-5 text-center">
      <p className="text-accent text-sm font-bold tracking-wide uppercase">
        Erro 404
      </p>
      <h1 className="text-3xl font-extrabold tracking-tight text-white">
        Página não encontrada
      </h1>
      <p className="max-w-sm text-white/80">
        O endereço não existe ou foi movido. Escolha o grupo da sua unidade na
        página inicial.
      </p>
      <Link
        href="/"
        className="bg-card text-navy mt-2 rounded-xl px-5 py-3 text-sm font-bold transition hover:opacity-90"
      >
        Ir para a página inicial
      </Link>
    </main>
  );
}
