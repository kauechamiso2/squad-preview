import { useState } from 'react';
import { motion, MotionConfig } from 'motion/react';
import { revealVariants, revealViewport } from '../ui/motionPresets';
import styles from './ConhecimentoFaq.module.css';

const FAQS = [
  {
    q: 'Como o Squad garante que o agente não vai inventar uma resposta que não está na Base?',
    a: 'Os agentes só respondem com base no que foi cadastrado e aprovado por você. Quando uma pergunta não tem resposta na Base, o agente avisa em vez de inventar, e a lacuna fica visível pra você preencher.',
  },
  {
    q: 'Como eu adiciono informação na Base de Conhecimento?',
    a: 'Você sobe o material que já tem — PDF, Word, texto ou anotação — e o Squad organiza tudo em regras, perguntas, processos e artigos. Nada entra sem a sua revisão, então você aprova o que fica disponível pros agentes.',
  },
  {
    q: 'Quem pode editar ou atualizar a Base de Conhecimento?',
    a: 'Você define quem tem acesso. A Base é da sua empresa: qualquer pessoa autorizada pode adicionar, revisar ou atualizar o conteúdo, e a mudança passa a valer pra todos os agentes na hora.',
  },
  {
    q: 'A Base de Conhecimento funciona só com os agentes do Squad?',
    a: 'A Base foi feita pra alimentar os agentes do Squad, que consultam ela pra responder do jeito da sua empresa. Ela é o cérebro compartilhado do time — quanto mais completa, melhor cada agente responde.',
  },
];

function ConhecimentoFaq() {
  const [open, setOpen] = useState(0);

  return (
    <MotionConfig reducedMotion="user">
      <motion.section
        className={styles.section}
        variants={revealVariants}
        initial="hidden"
        whileInView="show"
        viewport={revealViewport}
      >
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
      </motion.section>
    </MotionConfig>
  );
}

export default ConhecimentoFaq;
