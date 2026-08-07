/* Detecção do sistema operacional do visitante para escolher a variação do
   botão de download (iOS, Android, Mac ou Windows).

   SSR-safe: sem `navigator` (durante o pré-render), retorna o default 'ios' —
   o mesmo botão que o Figma mostra por padrão. No cliente, chame dentro de um
   useEffect para atualizar após a hidratação (evita mismatch de hidratação). */
export function detectOS() {
  if (typeof navigator === 'undefined') return 'ios';

  const ua = navigator.userAgent || '';
  const platform = navigator.platform || '';
  const touch = navigator.maxTouchPoints || 0;

  // iPhone/iPod, e iPad — que desde o iPadOS 13 se identifica como "MacIntel"
  // com suporte a toque (por isso o teste extra de maxTouchPoints).
  if (/iPhone|iPad|iPod/.test(ua) || (platform === 'MacIntel' && touch > 1)) {
    return 'ios';
  }
  if (/Android/i.test(ua)) return 'android';
  if (/Mac/i.test(platform) || /Mac OS X/i.test(ua)) return 'mac';
  if (/Win/i.test(platform) || /Windows/i.test(ua)) return 'windows';

  return 'ios';
}
