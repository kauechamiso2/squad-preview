import Button from '../ui/Button';
import brain from '../../assets/con-brain.png';
import { WHATSAPP_CTA } from '../../links';
import styles from './ConhecimentoHero.module.css';

/* Phosphor icon path data (regular weight, 256 viewBox) */
const ICONS = {
  fileText:
    'M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-32-80a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,136Zm0,32a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,168Z',
  files:
    'M213.66,66.34l-40-40A8,8,0,0,0,168,24H88A16,16,0,0,0,72,40V56H56A16,16,0,0,0,40,72V216a16,16,0,0,0,16,16H168a16,16,0,0,0,16-16V200h16a16,16,0,0,0,16-16V72A8,8,0,0,0,213.66,66.34ZM168,216H56V72h76.69L168,107.31v84.53c0,.06,0,.11,0,.16s0,.1,0,.16V216Zm32-32H184V104a8,8,0,0,0-2.34-5.66l-40-40A8,8,0,0,0,136,56H88V40h76.69L200,75.31Zm-56-32a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h48A8,8,0,0,1,144,152Zm0,32a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h48A8,8,0,0,1,144,184Z',
  chatText:
    'M216,48H40A16,16,0,0,0,24,64V224a15.85,15.85,0,0,0,9.24,14.5A16.13,16.13,0,0,0,40,240a15.89,15.89,0,0,0,10.25-3.78l.09-.07L83,208H216a16,16,0,0,0,16-16V64A16,16,0,0,0,216,48ZM40,224h0ZM216,192H80a8,8,0,0,0-5.23,1.95L40,224V64H216ZM88,112a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H96A8,8,0,0,1,88,112Zm0,32a8,8,0,0,1,8-8h64a8,8,0,1,1,0,16H96A8,8,0,0,1,88,144Z',
  folder:
    'M216,72H131.31L104,44.69A15.86,15.86,0,0,0,92.69,40H40A16,16,0,0,0,24,56V200.62A15.4,15.4,0,0,0,39.38,216H216.89A15.13,15.13,0,0,0,232,200.89V88A16,16,0,0,0,216,72ZM40,56H92.69l16,16H40ZM216,200H40V88H216Z',
  note:
    'M88,96a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H96A8,8,0,0,1,88,96Zm8,40h64a8,8,0,0,0,0-16H96a8,8,0,0,0,0,16Zm32,16H96a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16ZM224,48V156.69A15.86,15.86,0,0,1,219.31,168L168,219.31A15.86,15.86,0,0,1,156.69,224H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM48,208H152V160a8,8,0,0,1,8-8h48V48H48Zm120-40v28.7L196.69,168Z',
};

/* One capsule (sphere + icon) that fades in, travels the line and is swallowed
   by the brain. Everything lives in the SVG so it tracks the lines exactly. */
function Packet({ pathId, icon, color, begin, dur }) {
  const K = 0.125; // scale 256 -> ~32px icon
  const off = 128 * K;
  return (
    <g opacity="0">
      <circle r="26" fill="#ffffff" filter="url(#pktShadow)" />
      <circle r="26" fill="none" stroke="#eef0f4" strokeWidth="1" />
      <g transform={`translate(${-off} ${-off}) scale(${K})`}>
        <path d={ICONS[icon]} fill={color} />
      </g>
      <animateMotion dur={dur} begin={begin} repeatCount="indefinite" rotate="0" calcMode="linear">
        <mpath href={`#${pathId}`} />
      </animateMotion>
      <animate
        attributeName="opacity"
        dur={dur}
        begin={begin}
        repeatCount="indefinite"
        values="0;0;1;1;0"
        keyTimes="0;0.04;0.12;0.86;1"
        calcMode="linear"
      />
    </g>
  );
}

/* Static line vectors (exported from Figma; inner ends run behind the brain) */
const RIGHT_PATH =
  'M712 68.0155 L836 68.0155 H947 L980 101.016 L1067 50.7861 L1254.46 101.016 L1273.51 68.0155 H1437';
const LEFT_PATH =
  'M728 68.245 L600 68.245 H489 L456 101.245 L369 51.0156 L181.541 101.245 L162.488 68.245 H-1';

/* Motion tracks: edge -> brain (reverse of the drawn lines) */
const LEFT_FLOW =
  'M-1 68.245 L162.488 68.245 L181.541 101.245 L369 51.0156 L456 101.245 L489 68.245 L600 68.245 L708 68.245';
const RIGHT_FLOW =
  'M1437 68.0155 L1273.51 68.0155 L1254.46 101.016 L1067 50.7861 L980 101.016 L947 68.0155 L836 68.0155 L732 68.0155';

const STOPS = (
  <>
    <stop stopColor="#ffffff" />
    <stop offset="0.322" stopColor="#F3D57E" />
    <stop offset="0.447" stopColor="#D9FDD3" />
    <stop offset="0.591" stopColor="#AAD0EC" />
    <stop offset="0.760" stopColor="#A3E6E7" />
    <stop offset="0.880" stopColor="#F09FC9" />
    <stop offset="1" stopColor="#C665FF" />
  </>
);

const DUR = '12s';

function ConhecimentoHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Ensine uma vez,
          <br />
          todo agente aprende.
        </h1>
        <p className={styles.subtitle}>
          A Base de Conhecimento reúne as regras, os processos e as respostas do
          seu negócio num só lugar. Todo agente do Squad consulta essa mesma
          base, então a informação é sempre a mesma, não importa com quem você
          está falando.
        </p>
        <Button size="lg" href={WHATSAPP_CTA} withArrow>
          Contratar Squad
        </Button>
      </div>

      <div className={styles.visual}>
        <svg
          className={styles.lines}
          viewBox="0 0 1440 132"
          preserveAspectRatio="xMidYMid meet"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="conLineL" x1="26" y1="67.745" x2="607" y2="76.2448" gradientUnits="userSpaceOnUse">
              {STOPS}
            </linearGradient>
            <linearGradient id="conLineR" x1="1410" y1="67.5155" x2="829" y2="76.0153" gradientUnits="userSpaceOnUse">
              {STOPS}
            </linearGradient>
            <filter id="conLineGlow" x="-5%" y="-200%" width="110%" height="500%">
              <feGaussianBlur stdDeviation="4" />
            </filter>
            <filter id="pktShadow" x="-80%" y="-80%" width="260%" height="260%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#3a2a6a" floodOpacity="0.18" />
            </filter>
            <path id="leftFlow" d={LEFT_FLOW} />
            <path id="rightFlow" d={RIGHT_FLOW} />
          </defs>

          {/* Soft glow underlay */}
          <path d={LEFT_PATH} stroke="url(#conLineL)" strokeWidth="4" opacity="0.5" filter="url(#conLineGlow)" />
          <path d={RIGHT_PATH} stroke="url(#conLineR)" strokeWidth="4" opacity="0.5" filter="url(#conLineGlow)" />

          {/* Crisp lines */}
          <path d={LEFT_PATH} stroke="url(#conLineL)" strokeWidth="2.2" />
          <path d={RIGHT_PATH} stroke="url(#conLineR)" strokeWidth="2.2" />

          {/* Capsules flowing into the brain */}
          <Packet pathId="leftFlow" icon="fileText" color="#8b8f9a" begin="0s" dur={DUR} />
          <Packet pathId="leftFlow" icon="chatText" color="#8b8f9a" begin="4s" dur={DUR} />
          <Packet pathId="leftFlow" icon="folder" color="#8b8f9a" begin="8s" dur={DUR} />
          <Packet pathId="rightFlow" icon="files" color="#8b8f9a" begin="2s" dur={DUR} />
          <Packet pathId="rightFlow" icon="note" color="#8b8f9a" begin="6s" dur={DUR} />
          <Packet pathId="rightFlow" icon="fileText" color="#8b8f9a" begin="10s" dur={DUR} />
        </svg>

        <img src={brain} alt="" aria-hidden="true" className={styles.brain} />
      </div>
    </section>
  );
}

export default ConhecimentoHero;
