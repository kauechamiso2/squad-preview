/*
 * Tracking do Pulse (customers-db-sqd) para a landing de Ads.
 *
 * Três eventos:
 *   1. webpage-view     — a cada carregamento, com UTM/click-ids da URL
 *   2. button-click     — a cada toque num CTA de WhatsApp
 *   3. whatsapp-session — no envio do form, devolve o trackingCode de 5 chars
 *                         que vai dentro da mensagem pro webhook casar a
 *                         conversa com este visitante
 *
 * Tudo aqui é best-effort: se o endpoint cair, a pessoa ainda chega no
 * WhatsApp. Nenhuma falha de tracking pode travar a conversão.
 */

const API = 'https://customers-db-sqd.replit.app/api/events';
const ORGANIZATION_ID = 'd5987952-a938-4930-9d56-b8fe7977a1d4';
const STORAGE_KEY = 'pulse_viewer_id';

/* Teto de espera pelo trackingCode. Passou disso, manda pro WhatsApp sem o
   código: perder a atribuição de um lead é ruim, perder o lead é pior. */
const SESSION_TIMEOUT_MS = 2500;

/**
 * Identidade do visitante, estável entre páginas no mesmo navegador.
 * localStorage lança em modo privado//cookies bloqueados, então o acesso é
 * protegido — sem isso o tracking derrubaria a página inteira.
 */
function getViewerId() {
  try {
    let viewerId = localStorage.getItem(STORAGE_KEY);
    if (!viewerId) {
      viewerId = randomId();
      localStorage.setItem(STORAGE_KEY, viewerId);
    }
    return viewerId;
  } catch {
    /* Sem storage o visitante vira anônimo a cada page view — degrada a
       atribuição, mas não quebra nada. */
    return randomId();
  }
}

/* crypto.randomUUID só existe em contexto seguro (https/localhost) e em
   navegadores recentes; o fallback cobre o resto. */
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

/* Só dispara uma vez por carregamento — em dev o StrictMode monta o
   componente duas vezes e contaria a visita em dobro. */
let pageViewSent = false;

/** Evento 1 — page view, com UTMs e click-ids da URL atual. */
export function trackPageView() {
  if (pageViewSent) return;
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
  post('button-click', { buttonName }).catch(() => {});
}

/**
 * Evento 3 — abre a sessão de WhatsApp e devolve o trackingCode de 5 chars.
 * Retorna null se falhar ou estourar o timeout, e nesse caso o chamador manda
 * a mensagem sem o [ref:].
 */
export async function createWhatsAppSession(buttonName) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), SESSION_TIMEOUT_MS);

  try {
    /* keepalive:false porque aqui a resposta importa — keepalive limita o
       corpo e não foi feito pra requisições cuja resposta a gente lê. */
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
