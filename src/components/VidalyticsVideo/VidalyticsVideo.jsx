import { useEffect } from 'react';
import styles from './VidalyticsVideo.module.css';

/* Track which embeds already initialised so React StrictMode's double-invoke
   (and any accidental remount) never injects the player twice. */
const started = new Set();

/* Runs the Vidalytics loader/player exactly like their embed snippet, but
   scoped to a React component and parameterised by the embed id. */
function runVidalytics(embedId) {
  const divId = `vidalytics_embed_${embedId}`;
  const base = `https://fast.vidalytics.com/embeds/prUtymBe/${embedId}/`;
  (function (v, i, d, a, l) {
    const y = `_${d.toLowerCase()}`;
    const c = `${d}L`;
    if (!v[d]) v[d] = {};
    if (!v[c]) v[c] = {};
    if (!v[y]) v[y] = {};
    const vl = 'Loader';
    const ve = 'Embed';
    let vli = v[y][vl];
    const loadScript = (url, cb) => {
      const s = i.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = url;
      s.onload = cb;
      i.getElementsByTagName('head')[0].appendChild(s);
    };
    loadScript(`${l}loader.min.js`, () => {
      if (!vli) {
        const Vlc = v[c][vl];
        vli = new Vlc();
      }
      vli.loadScript(`${l}player.min.js`, () => {
        const Vec = v[d][ve];
        const t = new Vec();
        t.run(a);
      });
    });
  })(window, document, 'Vidalytics', divId, base);
}

function VidalyticsVideo({ embedId, className }) {
  const divId = `vidalytics_embed_${embedId}`;

  useEffect(() => {
    if (started.has(embedId)) return;
    started.add(embedId);
    runVidalytics(embedId);
  }, [embedId]);

  /* The Vidalytics player doesn't loop by default. Once it injects its
     <video>, force loop + a manual restart fallback (native `loop` can be
     ignored on MSE/HLS streams). A MutationObserver keeps it applied even
     if the player swaps the element. */
  useEffect(() => {
    const container = document.getElementById(divId);
    if (!container) return undefined;

    const hook = () => {
      container.querySelectorAll('video').forEach((v) => {
        v.loop = true;
        v.muted = true;
        if (v.dataset.loopHooked) return;
        v.dataset.loopHooked = '1';
        v.addEventListener('ended', () => {
          try {
            v.currentTime = 0;
          } catch {
            /* ignore seek errors on streamed sources */
          }
          v.play().catch(() => {});
        });
      });
    };

    hook();
    const observer = new MutationObserver(hook);
    observer.observe(container, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [divId]);

  return (
    <div className={`${styles.bg} ${className || ''}`} aria-hidden="true">
      {/* 16:9 frame scaled to cover the section (crops overflow) */}
      <div className={styles.frame}>
        <div id={divId} className={styles.embed} />
      </div>
    </div>
  );
}

export default VidalyticsVideo;
