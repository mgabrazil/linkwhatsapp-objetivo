export type Unidade = {
  /** Identificador estável, usado como key e âncora (#id) na página. */
  id: string;
  nome: string;
  /** Empresa do grupo à qual a unidade pertence. Ex.: "Unipaper". */
  empresa?: string;
  cidade: string;
  /** Sigla do estado, em maiúsculas. Ex.: "PR". */
  uf: string;
  endereco: string;
  /** Somente dígitos, com DDI. Ex.: "5544999990000". */
  whatsapp: string;
  /** Telefone fixo, somente dígitos com DDI. Vazio ou ausente esconde o link. */
  telefone?: string;
  /** Texto livre. Ex.: "Seg a sex, 8h às 18h". */
  horario: string;
  /** Link do Google Maps. Sem ele, o botão "Como chegar" some. */
  mapsUrl?: string;
  /**
   * Mensagem que já vem digitada no WhatsApp do cliente.
   * Sem ela, usa a mensagem padrão de `siteConfig`.
   */
  mensagem?: string;
  /** Marca a unidade como matriz/destaque no topo da lista. */
  destaque?: boolean;
};

export type GrupoUnidade = {
  /** Identificador estável, usado como key da lista. */
  id: string;
  /** Nome da região/unidade, como aparece no cartão. Ex.: "Asa Norte". */
  nome: string;
  /** Convite do grupo. Ex.: "https://chat.whatsapp.com/AbCdEf123456". */
  link: string;
};
