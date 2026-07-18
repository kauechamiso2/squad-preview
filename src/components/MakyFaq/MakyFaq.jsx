import { useState } from 'react';
import styles from './MakyFaq.module.css';

const FAQS = [
  {
    q: 'Como a Maky sabe o que postar sobre a minha marca?',
    a: 'A Maky aprende com o que você já tem: seu site, suas redes sociais, os posts que já performaram bem no seu perfil e as informações da sua marca cadastradas no Squad. Quanto mais contexto ela recebe, mais o conteúdo criado por ela soa como algo que você mesmo escreveria.',
  },
  {
    q: 'A Maky publica sozinha ou eu aprovo antes?',
    a: 'Você tem o controle. A Maky cria e agenda tudo, mas as campanhas e publicações só vão ao ar depois da sua aprovação — você revisa antes de qualquer coisa ser publicada.',
  },
  {
    q: 'A Maky funciona pra qualquer tipo de negócio?',
    a: 'Sim. Como ela se apoia no contexto da sua marca — site, redes e histórico do seu perfil —, a Maky se adapta ao seu segmento e cria conteúdo relevante pro seu público, seja qual for o tipo de negócio.',
  },
  {
    q: 'A Maky substitui uma agência de marketing?',
    a: 'A Maky assume o trabalho operacional do dia a dia — criar, agendar, publicar e responder — rodando 24 horas por dia. Ela dá conta do marketing recorrente sem você precisar de uma agência ou aprender a plataforma.',
  },
];

function MakyFaq() {
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

export default MakyFaq;
