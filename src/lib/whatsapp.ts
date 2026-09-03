import { siteConfig } from "@/config/site";
import type { Unidade } from "@/types";

/** Mantém apenas dígitos — os dados podem vir formatados. */
export function digitos(valor: string) {
  return valor.replace(/\D/g, "");
}

/**
 * Link do WhatsApp com a mensagem já digitada.
 * wa.me funciona no app e no WhatsApp Web, sem depender de backend.
 */
export function whatsappHref(numero: string, mensagem?: string) {
  const url = `https://wa.me/${digitos(numero)}`;
  return mensagem ? `${url}?text=${encodeURIComponent(mensagem)}` : url;
}

/** A mensagem da unidade, ou a padrão do site com o nome preenchido. */
export function mensagemDaUnidade(unidade: Unidade) {
  return (
    unidade.mensagem ??
    siteConfig.mensagemPadrao.replace("{unidade}", unidade.nome)
  );
}

/** Atalho: o link pronto de uma unidade. */
export function whatsappDaUnidade(unidade: Unidade) {
  return whatsappHref(unidade.whatsapp, mensagemDaUnidade(unidade));
}

/**
 * Formata um número brasileiro para leitura: "5544999990000" -> "(44) 99999-0000".
 * Números fora do padrão voltam como vieram.
 */
export function formatarTelefone(numero: string) {
  const so = digitos(numero);
  const nacional = so.startsWith("55") ? so.slice(2) : so;
  const ddd = nacional.slice(0, 2);
  const resto = nacional.slice(2);

  if (resto.length === 9)
    return `(${ddd}) ${resto.slice(0, 5)}-${resto.slice(5)}`;
  if (resto.length === 8)
    return `(${ddd}) ${resto.slice(0, 4)}-${resto.slice(4)}`;
  return numero;
}
