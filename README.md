# Link WhatsApp — Unidades

Landing page de uma tela só que leva o visitante direto ao grupo de WhatsApp
da unidade certa. Sem backend: os links de convite já saem prontos no HTML.

Stack: **Next.js 16** (App Router · Turbopack) · **TypeScript** · **Tailwind CSS v4** · fonte **Plus Jakarta Sans**.

## Como rodar

```bash
npm install
npm run dev
```

Abre em http://localhost:3000. Não precisa de `.env`: o projeto não lê
nenhuma variável de ambiente.

## Como adicionar ou editar uma unidade

Tudo vive em [`src/data/grupos.ts`](src/data/grupos.ts). Cada unidade é um objeto:

```ts
{
  id: "asa-norte",                                  // único, usado como key da lista
  nome: "Asa Norte",                                // o que aparece no cartão
  link: "https://chat.whatsapp.com/AbCdEf123456",   // convite do grupo
}
```

A lista da página segue **a ordem do array** — para reordenar, mova o objeto.
Incluir ou remover não exige mexer em mais nada.

- **Onde achar o `link`:** no WhatsApp, abra o grupo → _Dados do grupo_ →
  _Convidar via link_ → _Copiar link_.
- **O `nome` quebra por palavra:** cada palavra vira uma linha dentro do cartão
  ("Taguatinga QI" ocupa duas). Nomes de três palavras ou mais estouram a altura
  fixa do cartão — prefira nomes curtos.

> ⚠️ Os links de hoje são **placeholder** (`TROQUE-...`) e não abrem grupo nenhum.
> Troque todos antes de publicar.

## Ajustes rápidos

| O que mudar              | Onde                                                                   |
| ------------------------ | ---------------------------------------------------------------------- |
| Unidades e links         | [`src/data/grupos.ts`](src/data/grupos.ts)                             |
| Título da página         | [`src/app/page.tsx`](src/app/page.tsx)                                 |
| Nome, descrição e OG     | [`src/config/site.ts`](src/config/site.ts)                             |
| Cores                    | Tokens no `:root` de [`src/app/globals.css`](src/app/globals.css)      |
| Logos do topo            | [`src/components/logotop.tsx`](src/components/logotop.tsx)             |
| Banner                   | [`src/components/banner.tsx`](src/components/banner.tsx)               |
| Painel, texto e enfeites | [`src/components/containermain.tsx`](src/components/containermain.tsx) |
| Aparência do cartão      | [`src/components/group-card.tsx`](src/components/group-card.tsx)       |

As imagens ficam em [`public/images/`](public/images): `Banner.png`, os dois
logos, e `florU.png` / `estrela.png` (os enfeites do painel).

### Sobre o layout do painel

O `ContainerMain` posiciona a faixa azul, o texto e os enfeites em
**porcentagem** sobre a coluna, e a lista de cartões tem largura e espaçamento
fixos em `%`. É um layout ajustado à mão: ao mudar a quantidade de unidades,
confira no navegador se os enfeites e a faixa continuam no lugar.

## Deploy

| Cenário                                         | Comando                | O que sobe                       |
| ----------------------------------------------- | ---------------------- | -------------------------------- |
| **Vercel**                                      | `npm run build`        | Deploy direto do repositório     |
| **Hostinger** ou outra hospedagem compartilhada | `npm run build:static` | Conteúdo da pasta `out/` via FTP |

O `build:static` liga `output: "export"` e gera HTML puro, sem depender de Node
no servidor. Também ativa `trailingSlash`, que é o que o Apache da Hostinger
espera, e desliga a otimização de imagem — que exige servidor.

## Scripts

| Script                 | Descrição                               |
| ---------------------- | --------------------------------------- |
| `npm run dev`          | Servidor de desenvolvimento (Turbopack) |
| `npm run build`        | Build de produção                       |
| `npm run build:static` | Build estático em `out/`                |
| `npm run start`        | Sobe o build de produção                |
| `npm run lint`         | ESLint                                  |
| `npm run typecheck`    | `tsc --noEmit`                          |
| `npm run format`       | Prettier                                |

## Estrutura

```
src/
├── app/
│   ├── page.tsx            # A landing inteira
│   ├── layout.tsx          # Fonte, metadata e OG
│   ├── globals.css         # Tokens de cor e tipografia
│   ├── error.tsx           # Error boundary
│   └── not-found.tsx       # 404
├── components/
│   ├── logotop.tsx         # Os dois logos no topo
│   ├── banner.tsx          # Imagem de destaque
│   ├── containermain.tsx   # Painel azul, enfeites e a lista de grupos
│   └── group-card.tsx      # Cartão de uma unidade (link do convite)
├── config/site.ts          # ← nome, descrição e locale do metadata
├── data/grupos.ts          # ← as unidades e seus links
└── types/index.ts          # GrupoUnidade
```

## Metadata e link preview

O `<title>`, a descrição e as tags Open Graph saem de
[`src/config/site.ts`](src/config/site.ts), montadas em
[`src/app/layout.tsx`](src/app/layout.tsx).

Hoje não há `og:image`, então o WhatsApp mostra o preview só com texto. Para
ter imagem, acrescente ao `metadata` do layout um `metadataBase` com o domínio
real e a imagem:

```ts
metadataBase: new URL("https://seu-dominio.com.br"),
openGraph: {
  // ...
  images: ["/images/og.png"],
},
```

O `metadataBase` só é necessário nesse caso — ele existe para resolver caminhos
relativos como o `/images/og.png` acima.
