/*
 * Tracking do Pulse (customers-db-sqd) — trazido da landing /saibamais e
 * ligado em TODAS as páginas do site.
 *
 * Três eventos do Pulse:
 *   1. webpage-view     — a cada carregamento, com UTM/click-ids da URL
 *   2. button-click     — a cada clique num CTA de WhatsApp
 *   3. whatsapp-session — devolve um trackingCode de 5 chars que é colado na
 *                         mensagem ([ref:code]) pra o webhook casar a conversa
 *                         com este visitante
 *
 * + Conversão do Google Ads (gtag), que fica dormente até plugar o ID real.
 *
 * Tudo é best-effort: se algo cair, o visitante ainda chega no WhatsApp.
 */

const API = 'https://customers-db-sqd.replit.app/api/events';
const ORGANIZATION_ID = 'd5987952-a938-4930-9d56-b8fe7977a1d4';
const STORAGE_KEY = 'pulse_viewer_id';

/* Teto de espera pelo trackingCode. Passou disso, segue sem o código. */
const SESSION_TIMEOUT_MS = 2500;

/* --- Google Ads: preencha quando a conta estiver pronta (Ads → Metas →
   Conversões → sua ação → "Configurar tag"). Enquanto CONVERSION_LABEL
   estiver vazio, nenhuma conversão é disparada. Também é preciso colar a tag
   base do gtag no index.html (há um bloco comentado lá). --- */
const CONVERSION_ID = 'AW-XXXXXXXXXX';
const CONVERSION_LABEL = '';

/* Não sujar a análise real com o dev local. */
const SHOULD_TRACK =
  typeof location !== 'undefined' &&
  location.hostname !== 'localhost' &&
  location.hostname !== '127.0.0.1';

/* Identidade do visitante, estável entre páginas no mesmo navegador. */
function getViewerId() {
  try {
    let viewerId = localStorage.getItem(STORAGE_KEY);
    if (!viewerId) {
      viewerId = randomId();
      localStorage.setItem(STORAGE_KEY, viewerId);
    }
    return viewerId;
  } catch {
    return randomId();
  }
}

function randomId() {
  if (globalThis.crypto?.randomUUID) return crypto.randomUUID();
  return `${Date.now().toString(16)}-${Math.random().toString(16).slice(2, 14)}`;
}

function post(path, payload, { keepalive = true, signal } = {}) {
  return fetch(`${API}/${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    keepalive,
    signal,
    body: JSON.stringify({
      organizationId: ORGANIZATION_ID,
      viewerId: getViewerId(),
      pageUrl: location.href,
      userAgent: navigator.userAgent,
      ...payload,
    }),
  });
}

let pageViewSent = false;

/** Evento 1 — page view, com UTMs e click-ids da URL atual. */
export function trackPageView() {
  if (!SHOULD_TRACK || pageViewSent) return;
  pageViewSent = true;

  const qs = new URLSearchParams(location.search);
  const pick = (key) => qs.get(key) || undefined;

  post('webpage-view', {
    referrer: document.referrer || undefined,
    utmSource: pick('utm_source'),
    utmMedium: pick('utm_medium'),
    utmCampaign: pick('utm_campaign'),
    utmContent: pick('utm_content'),
    utmTerm: pick('utm_term'),
    gclid: pick('gclid'),
    gbraid: pick('gbraid'),
    wbraid: pick('wbraid'),
    fbclid: pick('fbclid'),
  }).catch(() => {});
}

/** Evento 2 — clique num CTA de WhatsApp. Fire-and-forget. */
export function trackButtonClick(buttonName) {
  if (!SHOULD_TRACK) return;
  post('button-click', { buttonName }).catch(() => {});
}

/** Evento 3 — abre a sessão de WhatsApp e devolve o trackingCode de 5 chars. */
export async function createWhatsAppSession(buttonName) {
  if (!SHOULD_TRACK) return null;

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), SESSION_TIMEOUT_MS);

  try {
    const res = await post(
      'whatsapp-session',
      { buttonName },
      { keepalive: false, signal: controller.signal },
    );
    if (!res.ok) return null;
    const { trackingCode } = await res.json();
    return trackingCode || null;
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

/** Conversão do Google Ads — dormente até plugar CONVERSION_LABEL + gtag. */
export function trackConversion() {
  if (!CONVERSION_LABEL || typeof window.gtag !== 'function') return;
  window.gtag('event', 'conversion', {
    send_to: `${CONVERSION_ID}/${CONVERSION_LABEL}`,
  });
}

/* Cola [ref:code] no fim da mensagem de um link wa.me. */
function withRef(url, code) {
  if (!code) return url;
  try {
    const u = new URL(url, location.href);
    const text = u.searchParams.get('text') || '';
    u.searchParams.set('text', text ? `${text} [ref:${code}]` : `[ref:${code}]`);
    return u.toString();
  } catch {
    return url;
  }
}

const WA_RE = /wa\.me|api\.whatsapp\.com|whatsapp:/i;

const isWhatsAppLink = (a) => a && WA_RE.test(a.getAttribute('href') || '');
const buttonName = (a) =>
  (a.textContent || 'WhatsApp').replace(/\s+/g, ' ').trim().slice(0, 60) ||
  'WhatsApp';

let sessionCode = null;

/* Carimba o [ref:] em todo link de WhatsApp que ainda não tem — chamado no
   load e sempre que o DOM muda (ex.: quando um modal com CTA abre). */
function stampLinks(root) {
  if (!sessionCode || !root || !root.querySelectorAll) return;
  root.querySelectorAll('a[href]').forEach((a) => {
    if (a.dataset.waRef || !isWhatsAppLink(a)) return;
    a.setAttribute('href', withRef(a.getAttribute('href'), sessionCode));
    a.dataset.waRef = '1';
  });
}

let inited = false;

/** Liga tudo. Chame uma vez, no carregamento da página. */
export function initTracking() {
  if (inited || typeof document === 'undefined') return;
  inited = true;

  trackPageView();

  /* Pré-cria a sessão do carregamento e carimba o [ref:] nos links — assim o
     código sobrevive à nova aba (target="_blank"). */
  createWhatsAppSession('Site — WhatsApp').then((code) => {
    sessionCode = code;
    stampLinks(document);
  });

  /* Carimba links que aparecem depois (modais, conteúdo dinâmico). */
  const observer = new MutationObserver((mutations) => {
    for (const m of mutations) {
      m.addedNodes.forEach((node) => {
        if (node.nodeType === 1) stampLinks(node);
      });
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });

  /* Dispara button-click + conversão no clique — fire-and-forget, pra não
     atrasar a abertura da nova aba. */
  document.addEventListener(
    'click',
    (e) => {
      const a = e.target.closest && e.target.closest('a[href]');
      if (!isWhatsAppLink(a)) return;
      trackButtonClick(buttonName(a));
      trackConversion();
    },
    true,
  );
}
