import type { GrupoUnidade } from "@/types";

/**
 * Os grupos de WhatsApp por unidade. É o único arquivo que precisa mudar
 * para incluir, editar, reordenar ou remover uma unidade — a lista da
 * página se ajusta sozinha.
 *
 * ATENÇÃO: os links abaixo são PLACEHOLDER e não abrem grupo nenhum.
 * Troque cada `link` pelo convite real (no WhatsApp: abra o grupo >
 * Dados do grupo > Convidar via link > Copiar link).
 */
export const grupos: GrupoUnidade[] = [
  {
    id: "jardim-botanico",
    nome: "Jardim Botânico",
    link: "https://chat.whatsapp.com/TROQUE-JARDIM-BOTANICO",
  },
  {
    id: "vicente-pires",
    nome: "Vicente Pires",
    link: "https://chat.whatsapp.com/TROQUE-VICENTE-PIRES",
  },
  {
    id: "asa-norte",
    nome: "Asa Norte",
    link: "https://chat.whatsapp.com/TROQUE-ASA-NORTE",
  },
  {
    id: "guara",
    nome: "Guará",
    link: "https://chat.whatsapp.com/TROQUE-GUARA",
  },
  {
    id: "santa-maria",
    nome: "Santa Maria",
    link: "https://chat.whatsapp.com/TROQUE-SANTA-MARIA",
  },
  {
    id: "samambaia",
    nome: "Samambaia",
    link: "https://chat.whatsapp.com/TROQUE-SAMAMBAIA",
  },
  {
    id: "taguatinga-qi",
    nome: "Taguatinga QI",
    link: "https://chat.whatsapp.com/TROQUE-TAGUATINGA-QI",
  },
];
