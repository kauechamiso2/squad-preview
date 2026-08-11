# grupo-2 — Sala Secreta Waz (referência do Framer)

Esta pasta contém o **snapshot HTML da página `/grupo-2` ("Sala Secreta Waz")**
publicada no Framer, para servir de **referência** na reconstrução em React
limpo — igual ao que foi feito com as `waz-vendas`. **Não é a página final.**

Página ao vivo (para ver renderizada, sem baixar nada):
https://ordinary-phone-440067.framer.app/grupo-2

---

## ⚠️ Por que isto NÃO deve ir para produção como está

O `index.html` desta pasta é um snapshot do Framer. Ele **não renderiza
sozinho**: depende de ~17 módulos JavaScript, 61 fontes e dezenas de imagens
servidos pelo CDN do Framer (`framerusercontent.com`). Consequências:

1. **Sem o CDN do Framer, a página fica em branco** — o "miolo" que desenha a
   tela mora nos servidores do Framer, não aqui.
2. **Os arquivos não são nossos** — são amarrados ao projeto Framer. Se o
   projeto for despublicado/apagado, a página quebra.
3. **Apodrece a cada nova publicação** — os módulos têm nomes com hash desta
   publicação; ao republicar no Framer, os hashes mudam e os antigos somem,
   quebrando este snapshot silenciosamente.

Por isso as landings irmãs (`waz-vendas`, `waz-vendas-2`, `waz-vendas-3`)
foram **reconstruídas em React** no `src/`, em vez de coladas como snapshot.
Recomendação: fazer o mesmo com esta página quando for para produção.

Esta pasta **não está registrada no `vite.config.js`**, então não entra no
build nem no deploy do GitHub Pages — é só material de consulta.

---

## O que dá para reaproveitar daqui

- **Conteúdo e copy finais** — todos os textos, títulos, ordem das seções,
  selos ("86% das vagas", "SOC 2"), números da autoridade.
- **Medidas e estilo** — abra no navegador e inspecione: cores
  (verde `#16A34A`, preto `#0A0A0A`, cinza `#798282`), tipos (Fustat títulos,
  Inter corpo), espaçamentos e raios.
- **Assets** — mascote, foto do time, print do CRM, logos de mídia e o vídeo
  estão com URLs diretas do `framerusercontent.com`; baixe cada um para
  `src/assets`, como nas outras páginas.
- **O funil de captura de leads** — está **inline e legível** no final do
  `index.html` (procure por `waz-vip-overlay`). Descrição abaixo.

---

## Funil de captura embutido (referência funcional)

Ao clicar em "Entrar no Grupo VIP", em vez de ir direto ao WhatsApp, abre um
**pop-up** pedindo nome, WhatsApp e "Quantos leads você recebe por dia?".
No submit válido, o código:

1. Normaliza o telefone para `+55` (E.164) — com máscara que não embaralha em
   digitação rápida e aceita o autofill do celular.
2. Marca `qualificado = sim` quando a resposta é "21 a 50" ou "Mais de 50".
3. Junta UTMs (da URL, com fallback em cookie de 30 dias), página, funil
   (`waz-grupo-A`), dispositivo, referrer.
4. Envia o lead para **dois destinos** ao mesmo tempo:
   - Edge function do Supabase (a mesma da Inner): `.../functions/v1/leads-wpp`
   - Formulário Google → planilha "Leads Grupo VIP Waz"
5. Dispara **Meta Pixel `Lead`** (`content_name: grupo-vip-waz`).
6. Redireciona para o grupo: `https://sndflw.com/i/waz`.

Se o JavaScript falhar, o botão ainda leva ao grupo (o `href` aponta para o
link real) — o funil nunca trava a entrada.

---

## ⚠️ Decisão pendente do time: qual tracking usar na versão React

Este snapshot usa o tracking que montamos no Framer:
**Meta Pixel `1566720184808205` + Supabase `leads-wpp` + Formulário Google.**

O restante deste repositório usa outro sistema:
**Pulse (`customers-db-sqd`) + Google Ads gtag (`AW-16641863157`) + fluxo
`whatsapp-session` com `[ref:code]`** (ver `src/tracking.js`).

Ao reconstruir em React, **decidir qual dos dois** a página vai usar (ou
ambos). Isso não está resolvido aqui de propósito — é escolha do time.
