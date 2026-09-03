# Link WhatsApp — Unidades

Landing page que leva o visitante direto ao WhatsApp da unidade certa.
Uma página só, sem backend: os links `wa.me` já saem prontos no HTML,
com a mensagem pré-digitada.

Stack: **Next.js 16** (App Router) · **TypeScript** · **Tailwind CSS v4** · fonte **Plus Jakarta Sans**.

## Como rodar

```bash
npm install
cp .env.example .env.local
npm run dev
```

Abre em http://localhost:3000.

## Como adicionar ou editar uma unidade

Tudo vive em [`src/data/unidades.ts`](src/data/unidades.ts). Acrescente um objeto:

```ts
{
  id: "maringa-matriz",             // único; vira a âncora #maringa-matriz
  nome: "Matriz Maringá",
  empresa: "MGA Holding",           // opcional, aparece como etiqueta
  cidade: "Maringá",
  uf: "PR",                         // alimenta o filtro por estado
  endereco: "Av. Brasil, 1000 — Zona 01, Maringá/PR",
  whatsapp: "5544999990001",        // só dígitos, com DDI (55)
  telefone: "554430000001",         // opcional
  horario: "Seg a sex, 8h às 18h",
  mapsUrl: "https://maps.google.com/?q=...",  // opcional
  mensagem: "Olá! Quero um orçamento.",       // opcional
  destaque: true,                             // opcional: sobe para o topo
}
```

Nada além disso muda: a contagem do topo, a busca, o filtro por estado e a
grade de cartões se ajustam sozinhos.

- **Sem `mapsUrl` e sem `telefone`**, os botões secundários somem.
- **Sem `mensagem`**, usa a padrão de `siteConfig`, que já insere o nome da unidade.
- **`destaque: true`** coloca a unidade antes das outras; o resto sai em ordem
  alfabética de cidade.

> Os dados de hoje são **exemplo**, só para a página renderizar completa.
> Troque por reais antes de publicar — inclusive os números de `src/config/site.ts`.

## Ajustes rápidos

| O que mudar                     | Onde                                                                            |
| ------------------------------- | ------------------------------------------------------------------------------- |
| Nome, descrição e canais gerais | [`src/config/site.ts`](src/config/site.ts)                                      |
| Mensagem padrão do WhatsApp     | `mensagemPadrao` em [`src/config/site.ts`](src/config/site.ts)                  |
| Cor da marca                    | `--brand` em [`src/app/globals.css`](src/app/globals.css)                       |
| Logos do topo                   | `BrandBar` em [`src/components/brand-bar.tsx`](src/components/brand-bar.tsx)    |
| Textos das seções               | [`src/app/page.tsx`](src/app/page.tsx)                                          |

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
│   ├── page.tsx            # A landing: hero, como funciona, unidades, CTA
│   ├── layout.tsx          # Fonte, metadata e OG
│   ├── globals.css         # Tokens de tema (marca em --brand)
│   ├── error.tsx           # Error boundary
│   └── not-found.tsx       # 404
├── components/
│   ├── brand-bar.tsx       # As duas marcas no topo da página
│   ├── hero-banner.tsx     # Banner de destaque
│   ├── sparkle.tsx         # Brilho decorativo do banner
│   ├── groups-panel.tsx    # Lista dos grupos (client)
│   └── group-card.tsx      # Cartão de um grupo
├── config/site.ts          # ← nome, descrição e canais gerais
├── data/unidades.ts        # ← as unidades
├── lib/
│   ├── env.ts
│   ├── unidades.ts         # Ordenação, estados e filtro
│   ├── whatsapp.ts         # Monta wa.me e formata telefone
│   └── utils.ts            # cn()
└── types/index.ts
```

## Variáveis de ambiente

| Nome                  | Obrigatória | Descrição                                                         |
| --------------------- | ----------- | ----------------------------------------------------------------- |
| `NEXT_PUBLIC_APP_URL` | Sim         | URL pública, usada no metadata e nos previews de compartilhamento |

Em desenvolvimento, sem `.env.local`, ela cai em `http://localhost:3000`.
