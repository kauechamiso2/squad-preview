import { useState } from 'react';
import styles from './OpyFaq.module.css';

const FAQS = [
  {
    q: 'A escala montada pela Opy respeita a lei trabalhista?',
    a: 'Sim. A Opy monta a escala respeitando os limites legais de jornada de cada colaborador, protegendo sua empresa de passar do ponto sem perceber. Você só define o time e os turnos, o resto fica dentro da lei automaticamente.',
  },
  {
    q: 'Como o colaborador troca de turno pela Opy?',
    a: 'O colaborador pede a troca direto pelo app: escolhe o turno que precisa cobrir e para quem quer passar. A Opy checa se a troca respeita a jornada de todo mundo e encaminha pra aprovação do gestor, sem corredor de conversa nem planilha no meio.',
  },
  {
    q: 'A Opy avisa se um turno ficar sem ninguém escalado?',
    a: 'Avisa. Assim que um turno fica sem cobertura, a Opy alerta o gestor na hora, antes do dia chegar. Você enxerga o buraco na escala com antecedência e resolve enquanto ainda dá tempo, em vez de descobrir na falta.',
  },
  {
    q: 'A Opy funciona pra times pequenos também?',
    a: 'Funciona. A Opy ajuda tanto quem tem um time enxuto quanto operações com muita gente e vários turnos. Em time pequeno ela tira o trabalho manual de montar e ajustar escala; em time grande, evita que a organização vire uma bagunça de planilha.',
  },
];

function OpyFaq() {
  const [open, setOpen] = useState(0);

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        Perguntas
        <br />
        frequentes
      </h2>

      <div className={styles.list}>
        {FAQS.map(({ q, a }, i) => {
          const isOpen = open === i;
          return (
            <div key={q} className={styles.item}>
              <button
                type="button"
                className={`${styles.question} ${isOpen ? styles.questionOpen : ''}`}
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <span>{q}</span>
                <svg
                  className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M6 9l6 6 6-6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div
                className={`${styles.answerWrap} ${isOpen ? styles.answerOpen : ''}`}
              >
                <p className={styles.answer}>{a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default OpyFaq;
