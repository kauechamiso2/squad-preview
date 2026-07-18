import { useEffect, useRef, useState } from 'react';
import styles from './BigNumbers.module.css';

/* `colors` feeds the hover stroke that circles the card (same palette as the label gradient) */
const STATS = [
  {
    label: 'ROI Médio',
    gradient: 'gradientRoi',
    colors: ['#7cc870', '#b3ddf2', '#ffd2ea'],
    value: '3,7x',
    description:
      'Para cada US$ investido em IA generativa, as empresas recuperam em média US$ 3,70, e os líderes de ponta chegam a US$ 10,30. (IDC/Microsoft, 2025)',
  },
  {
    label: 'Aumento de Receita',
    gradient: 'gradientReceita',
    colors: ['#6d7cff', '#b3ddf2', '#f45dac'],
    value: '88%',
    description:
      'Das empresas que relatam aumento de receita anual com IA, e 87% registram redução de custos. (NVIDIA, State of AI 2026)',
  },
  {
    label: 'Horas Economizadas',
    gradient: 'gradientHoras',
    colors: ['#6d7cff', '#0091ff', '#eac764'],
    value: '9h',
    suffix: '/mês',
    description:
      'Cada colaborador economiza, em média, 9 horas por mês ao usar um assistente de IA no dia a dia. (Forrester TEI)',
  },
  {
    label: 'Projetos que falham',
    gradient: 'gradientPayback',
    colors: ['#7cc870', '#6d7cff', '#6d7cff'],
    value: '95%',
    description:
      'Quase todo investimento em IA não chega ao resultado — 95% dos projetos falham antes de gerar retorno. (MIT NANDA / Media Lab, 2025)',
  },
];

/* Public sources backing each stat above, in the same order */
const SOURCES = [
  {
    label: 'IDC InfoBrief / Microsoft (2024)',
    url: 'https://info.microsoft.com/ww-landing-business-opportunity-of-ai.html',
  },
  {
    label: 'NVIDIA State of AI (2026)',
    url: 'https://blogs.nvidia.com/blog/state-of-ai-report-2026/',
  },
  {
    label: 'Forrester TEI',
    url: 'https://tei.forrester.com/go/microsoft/M365Copilot/',
  },
  {
    label: 'MIT NANDA / Fortune (2025)',
    url: 'https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/',
  },
];

/* transitions.dev number pop-in: each character enters with a blurred
   slide, the last two ride in staggered */
function PopInValue({ value, animate }) {
  const chars = value.split('');
  return (
    <span
      className={`${styles.digitGroup} ${animate ? styles.isAnimating : ''}`}
    >
      {chars.map((char, index) => (
        <span
          key={index}
          className={styles.digit}
          data-stagger={
            index === chars.length - 2
              ? '1'
              : index === chars.length - 1
                ? '2'
                : undefined
          }
        >
          {char}
        </span>
      ))}
    </span>
  );
}

function BigNumbers() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  /* Fire the pop-in once, when the cards scroll into view */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={styles.heading}>
        <h2 className={styles.title}>
          É como contratar um time inteiro de especialistas.
        </h2>
        <p className={styles.subtitle}>
          Dados públicos mostram o retorno real que empresas obtêm ao adotar
          soluções de IA generativa na operação.
        </p>
      </div>

      <div className={styles.bottom}>
        <ul className={styles.cards}>
          {STATS.map(({ label, gradient, colors, value, suffix, description }) => (
            <li
              key={label}
              className={styles.card}
              style={{
                '--stroke-1': colors[0],
                '--stroke-2': colors[1],
                '--stroke-3': colors[2],
              }}
            >
              <div className={styles.stat}>
                <p className={`${styles.label} ${styles[gradient]}`}>{label}</p>
                <p className={styles.value}>
                  <PopInValue value={value} animate={visible} />
                  {suffix && <span className={styles.suffix}>{suffix}</span>}
                </p>
              </div>
              <p className={styles.description}>{description}</p>
            </li>
          ))}
        </ul>

        <p className={styles.sources}>
          Fontes:{' '}
          {SOURCES.map(({ label, url }, index) => (
            <span key={url}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.sourceLink}
              >
                {label}
              </a>
              {index < SOURCES.length - 2
                ? ', '
                : index === SOURCES.length - 2
                  ? ' e '
                  : ''}
            </span>
          ))}{' '}
          — Dados públicos de mercado
        </p>
      </div>
    </section>
  );
}

export default BigNumbers;
