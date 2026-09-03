import { env } from "@/lib/env";

export const siteConfig = {
  name: "Objetivo · Unipaper",
  shortName: "Objetivo",
  description:
    "Escolha a sua unidade e entre no grupo de WhatsApp do Objetivo para receber novidades e oportunidades exclusivas.",
  url: env.APP_URL,
  locale: "pt-BR",
  /** Mensagem padrão das unidades que não definem a própria. */
  mensagemPadrao:
    "Olá! Vim pelo site e gostaria de falar com a unidade {unidade}.",
  /** Canais gerais, exibidos no rodapé. */
  contato: {
    /** Somente dígitos, com DDI. Vazio esconde o botão flutuante. */
    whatsapp: "5544999990000",
    email: "contato@mgabrazil.com",
    telefone: "554430000000",
  },
} as const;

export type SiteConfig = typeof siteConfig;
