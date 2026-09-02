# Home institucional PT-BR (nova)

Proposta da nova home institucional do Squad.com em português, para substituir a home atual.

**Preview:** https://kauechamiso2.github.io/squad-preview/home-v2/

## O que é

Página estática completa (desktop, tablet e mobile no mesmo arquivo), **sem nenhuma dependência
do Framer**: HTML, JS, CSS, fontes, imagens e vídeos são todos servidos deste repositório.
Fica em `public/` porque o Vite copia essa pasta sem processar, preservando o export exatamente
como foi validado.

## Auditoria

Carga completa da página verificada em navegador: **54 requisições, todas para o próprio
domínio**, nenhuma chamada externa, 0 falhas de rede, 0 erros de console. Acordeão do FAQ,
pop-ups de vídeo, animações e ícones funcionando.

Busca por "framer" no código retorna apenas nomes de classes CSS geradas no build e cinco URLs
dentro de textos de mensagens de erro do runtime, que nunca são requisitadas.

## Removido de propósito

- Analytics, badge e barra de edição do Framer.
- Cópia fixa do pixel do Facebook `1566720184808205`, que duplicaria o disparo: o GTM
  oficial já carrega esse mesmo pixel.
- Script antigo de captação de leads (Supabase + sndflw).

## Mantido de propósito

- **Vidalytics** (`fast.vidalytics.com`) — player dos dois vídeos de depoimento, para preservar
  as métricas de retenção.
- CTAs para `wa.me/5511952134536` e links de imprensa, redes sociais e `app.squad.com`.

## Ao promover para a home do squad.com

- [x] GTM oficial (`GTM-58PKRX7L`) já aplicado no `<head>`.
- [ ] Trocar `canonical`, `og:url` e `og:image` da URL de preview para `https://squad.com/`.
- [ ] Decidir a integração: servir este HTML na raiz ou portar o conteúdo para o app React.
- [ ] Versões em outros idiomas ainda não fazem parte desta entrega.
