# grupo-2 — Sala Secreta Waz (pronta para publicar)

Landing de anúncio **/grupo-2 ("Sala Secreta Waz")**, pronta para ir ao ar no
domínio da Squad na slug **`grupo-2`** (ex.: `squad.com/grupo-2`).

Página de referência ao vivo:
https://ordinary-phone-440067.framer.app/grupo-2

## Como publicar

Esta pasta é **autossuficiente** — o `index.html` já traz tudo embutido
(conteúdo, funil de captura e Meta Pixel). Basta servir o `index.html` na
rota `/grupo-2` do domínio.

- Por estar em `public/`, o Vite copia esta pasta **como está** para o build.
  No preview deste repo (GitHub Pages) ela sai automaticamente em
  `/squad-preview/grupo-2/`.
- Para o domínio de produção (squad.com), suba o conteúdo desta pasta na
  rota `/grupo-2`.

Já ajustado para produção: data da demonstração **terça-feira, 18/08 às 10h**
(revisada — não há mais "13/08" sobrando), e as URLs canônica/OG apontam para
`https://squad.com/grupo-2`.

## O que já está funcionando (inline no index.html)

- **Pop-up de captura** no CTA "Entrar no Grupo VIP": nome + WhatsApp (com
  máscara que não embaralha em digitação rápida + autofill) + pergunta
  "Quantos leads por dia?".
- `qualificado = sim` para "21 a 50" ou "Mais de 50".
- UTMs coletadas (com fallback em cookie de 30 dias), path, funil, dispositivo.
- Envio do lead para **Supabase** (`.../functions/v1/leads-wpp`,
  `lead_funnel: waz-grupo-A`) **e** para um **Formulário Google → planilha**.
- **Meta Pixel** `1566720184808205`: PageView + evento `Lead` no envio.
- Redirect para o grupo: `https://sndflw.com/i/waz`. Se o JS falhar, o botão
  ainda leva ao grupo (o funil nunca trava).

## ⚠️ Duas coisas para o time saber

1. **Dependência do CDN do Framer.** Este `index.html` renderiza puxando
   scripts, fontes e imagens de `framerusercontent.com`. Funciona hoje, mas:
   se o projeto Framer for despublicado/republicado, os arquivos mudam de
   nome e a página pode quebrar. Para **independência total**, o ideal é
   reconstruir em React limpo, como as `waz-vendas` (o funil acima é inline e
   pode ser reaproveitado). Para uma campanha curta, publicar assim resolve.

2. **Tracking.** Esta versão usa Meta Pixel + Supabase + Formulário Google.
   O resto do repo usa Pulse + Google Ads gtag (`src/tracking.js`). Se quiser
   padronizar, migrar para o tracking do repo na reconstrução React.
