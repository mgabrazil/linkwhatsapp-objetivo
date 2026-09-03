import type { Unidade } from "@/types";

/**
 * As unidades da página. É o único arquivo que precisa mudar para
 * incluir, editar ou remover uma unidade — a lista, a busca e o filtro
 * por estado se ajustam sozinhos.
 *
 * ATENÇÃO: os dados abaixo são EXEMPLO, só para a página renderizar
 * completa. Troque por reais antes de publicar.
 */
export const unidades: Unidade[] = [
  {
    id: "maringa-matriz",
    nome: "Matriz Maringá",
    empresa: "MGA Holding",
    cidade: "Maringá",
    uf: "PR",
    endereco: "Av. Brasil, 1000 — Zona 01, Maringá/PR",
    whatsapp: "5544999990001",
    telefone: "554430000001",
    horario: "Seg a sex, 8h às 18h",
    mapsUrl: "https://maps.google.com/?q=Av.+Brasil,+1000,+Maringá+PR",
    destaque: true,
  },
  {
    id: "londrina",
    nome: "Unidade Londrina",
    empresa: "Unipaper",
    cidade: "Londrina",
    uf: "PR",
    endereco: "Rua Sergipe, 250 — Centro, Londrina/PR",
    whatsapp: "5543999990002",
    telefone: "554330000002",
    horario: "Seg a sex, 8h às 18h",
    mapsUrl: "https://maps.google.com/?q=Rua+Sergipe,+250,+Londrina+PR",
  },
  {
    id: "curitiba",
    nome: "Unidade Curitiba",
    empresa: "Unipaper",
    cidade: "Curitiba",
    uf: "PR",
    endereco: "Av. Sete de Setembro, 3400 — Batel, Curitiba/PR",
    whatsapp: "5541999990003",
    horario: "Seg a sex, 9h às 18h",
    mapsUrl:
      "https://maps.google.com/?q=Av.+Sete+de+Setembro,+3400,+Curitiba+PR",
  },
  {
    id: "sao-paulo",
    nome: "Unidade São Paulo",
    empresa: "US Factory",
    cidade: "São Paulo",
    uf: "SP",
    endereco: "Av. Paulista, 1500 — Bela Vista, São Paulo/SP",
    whatsapp: "5511999990004",
    telefone: "551130000004",
    horario: "Seg a sex, 9h às 19h",
    mapsUrl: "https://maps.google.com/?q=Av.+Paulista,+1500,+São+Paulo+SP",
    mensagem:
      "Olá! Vim pelo site e gostaria de um orçamento com a unidade São Paulo.",
  },
  {
    id: "campinas",
    nome: "Unidade Campinas",
    empresa: "US Factory",
    cidade: "Campinas",
    uf: "SP",
    endereco: "Rua Barão de Jaguara, 800 — Centro, Campinas/SP",
    whatsapp: "5519999990005",
    horario: "Seg a sex, 8h30 às 18h",
    mapsUrl:
      "https://maps.google.com/?q=Rua+Barão+de+Jaguara,+800,+Campinas+SP",
  },
  {
    id: "florianopolis",
    nome: "Unidade Florianópolis",
    empresa: "USports",
    cidade: "Florianópolis",
    uf: "SC",
    endereco: "Rod. SC-401, 2000 — Saco Grande, Florianópolis/SC",
    whatsapp: "5548999990006",
    horario: "Seg a sex, 9h às 18h",
    mapsUrl:
      "https://maps.google.com/?q=Rodovia+SC-401,+2000,+Florianópolis+SC",
  },
  {
    id: "goiania",
    nome: "Unidade Goiânia",
    empresa: "USports",
    cidade: "Goiânia",
    uf: "GO",
    endereco: "Av. T-63, 1200 — Setor Bueno, Goiânia/GO",
    whatsapp: "5562999990007",
    telefone: "556230000007",
    horario: "Seg a sex, 8h às 18h",
    mapsUrl: "https://maps.google.com/?q=Av.+T-63,+1200,+Goiânia+GO",
  },
];
