import { unidades } from "@/data/unidades";
import type { Unidade } from "@/types";

/** Destaques primeiro; depois em ordem alfabética de cidade. */
export function ordenarUnidades(lista: Unidade[]) {
  return [...lista].sort((a, b) => {
    if (Boolean(a.destaque) !== Boolean(b.destaque)) return a.destaque ? -1 : 1;
    return a.cidade.localeCompare(b.cidade, "pt-BR");
  });
}

/** Siglas de estado presentes nos dados, em ordem alfabética. */
export function estados(lista: Unidade[] = unidades) {
  return [...new Set(lista.map((u) => u.uf))].sort();
}

/** Tira acento e caixa para a busca não depender de digitação exata. */
function normalizar(texto: string) {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

/**
 * Filtra por estado e por texto livre (nome, cidade, empresa, endereço).
 * `uf` vazio significa "todos".
 */
export function filtrarUnidades(lista: Unidade[], busca: string, uf: string) {
  const termo = normalizar(busca);

  return lista.filter((unidade) => {
    if (uf && unidade.uf !== uf) return false;
    if (!termo) return true;

    const alvo = normalizar(
      [
        unidade.nome,
        unidade.cidade,
        unidade.uf,
        unidade.empresa ?? "",
        unidade.endereco,
      ].join(" "),
    );

    return termo.split(/\s+/).every((parte) => alvo.includes(parte));
  });
}
