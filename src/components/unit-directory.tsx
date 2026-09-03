"use client";

import { Search, X } from "lucide-react";
import { useMemo, useState } from "react";

import { UnitCard } from "@/components/unit-card";
import { estados, filtrarUnidades, ordenarUnidades } from "@/lib/unidades";
import { cn } from "@/lib/utils";
import type { Unidade } from "@/types";

const TODOS = "";

export function UnitDirectory({ unidades }: { unidades: Unidade[] }) {
  const [busca, setBusca] = useState("");
  const [uf, setUf] = useState(TODOS);

  const ufs = useMemo(() => estados(unidades), [unidades]);
  const resultado = useMemo(
    () => ordenarUnidades(filtrarUnidades(unidades, busca, uf)),
    [unidades, busca, uf],
  );

  return (
    <div>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative w-full lg:max-w-sm">
          <Search
            className="text-muted pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2"
            aria-hidden="true"
          />
          <input
            type="search"
            value={busca}
            onChange={(event) => setBusca(event.target.value)}
            placeholder="Buscar por cidade, estado ou empresa"
            aria-label="Buscar unidade"
            className="border-border bg-card placeholder:text-muted focus:border-brand focus:ring-brand/25 w-full rounded-xl border py-3 pr-10 pl-11 text-sm outline-none focus:ring-2"
          />
          {busca ? (
            <button
              type="button"
              onClick={() => setBusca("")}
              aria-label="Limpar busca"
              className="text-muted hover:bg-background hover:text-foreground absolute top-1/2 right-3 -translate-y-1/2 rounded-full p-1 transition"
            >
              <X className="size-4" aria-hidden="true" />
            </button>
          ) : null}
        </div>

        <div
          className="flex flex-wrap gap-2"
          role="group"
          aria-label="Filtrar por estado"
        >
          <FilterChip
            ativo={uf === TODOS}
            onClick={() => setUf(TODOS)}
            label={`Todas (${unidades.length})`}
          />
          {ufs.map((sigla) => (
            <FilterChip
              key={sigla}
              ativo={uf === sigla}
              onClick={() => setUf(sigla)}
              label={sigla}
            />
          ))}
        </div>
      </div>

      <p className="text-muted mt-6 text-sm" aria-live="polite">
        {resultado.length === 1
          ? "1 unidade encontrada"
          : `${resultado.length} unidades encontradas`}
      </p>

      {resultado.length > 0 ? (
        <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {resultado.map((unidade) => (
            <UnitCard key={unidade.id} unidade={unidade} />
          ))}
        </div>
      ) : (
        <div className="border-border mt-4 rounded-2xl border border-dashed p-12 text-center">
          <p className="font-semibold">Nenhuma unidade com esse filtro.</p>
          <p className="text-muted mt-1 text-sm">
            Tente outra cidade ou fale com o atendimento central.
          </p>
          <button
            type="button"
            onClick={() => {
              setBusca("");
              setUf(TODOS);
            }}
            className="border-border hover:border-brand mt-5 rounded-xl border px-4 py-2 text-sm font-semibold transition"
          >
            Limpar filtros
          </button>
        </div>
      )}
    </div>
  );
}

function FilterChip({
  ativo,
  label,
  onClick,
}: {
  ativo: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={ativo}
      className={cn(
        "rounded-full border px-4 py-2 text-sm font-semibold transition",
        ativo
          ? "border-foreground bg-foreground text-background"
          : "border-border bg-card text-muted hover:border-brand hover:text-foreground",
      )}
    >
      {label}
    </button>
  );
}
