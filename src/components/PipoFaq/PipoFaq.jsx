import { useState } from 'react';
import styles from './PipoFaq.module.css';

const FAQS = [
  {
    q: 'O Pipo inventa resposta quando não sabe algo?',
    a: 'Não. O Pipo só responde com base no conteúdo que você aprovou. Quando uma pergunta não tem resposta no material que ele já tem, ele avisa em vez de inventar, e o time recebe a informação certa assim que você atualizar.',
  },
  {
    q: 'Como o Pipo aprende as regras da minha empresa?',
    a: 'O Pipo aprende a partir do conteúdo que você já tem — documentos, processos e políticas internas que você sobe pra ele. A partir daí, ele passa a responder o time usando só esse material aprovado, e vai ficando mais completo conforme você adiciona novas informações.',
  },
  {
    q: 'O Pipo substitui um RH de verdade?',
    a: 'O Pipo não substitui o seu RH, ele tira da frente o trabalho repetitivo — responder as mesmas dúvidas, organizar triagem de currículos e montar trilha de onboarding. Assim o time de pessoas foca nas decisões que realmente precisam de gente.',
  },
  {
    q: 'A triagem de currículos do Pipo é confiável?',
    a: 'O Pipo analisa cada currículo com base nos critérios da vaga que você definiu e mostra quem tem mais aderência, com o porquê de cada indicação. A decisão final continua sua — ele organiza o funil e adianta o trabalho pesado pra você escolher com mais clareza.',
  },
];

function PipoFaq() {
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

export default PipoFaq;
