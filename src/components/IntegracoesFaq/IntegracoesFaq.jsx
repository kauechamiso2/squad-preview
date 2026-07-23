import { useState } from 'react';
import { motion, MotionConfig } from 'motion/react';
import { revealVariants, revealViewport } from '../ui/motionPresets';
import styles from './IntegracoesFaq.module.css';

const FAQS = [
  {
    q: 'Preciso conectar todas as ferramentas, ou só as que eu uso?',
    a: 'Só as que fazem sentido pro seu negócio. Não existe pacote obrigatório: você conecta uma ferramenta hoje e adiciona outra depois, sem precisar reconfigurar o que já está funcionando.',
  },
  {
    q: 'Preciso saber programar pra conectar uma ferramenta?',
    a: 'Não. A conexão é feita por login, com poucos cliques: você autoriza o acesso e o Squad cuida do resto. Não precisa mexer em código, API nem chamar o time de tecnologia.',
  },
  {
    q: 'Posso desconectar uma ferramenta quando quiser?',
    a: 'Pode, a qualquer momento. Você controla o que fica conectado, e ao desconectar o Squad simplesmente para de acessar aquela ferramenta — sem afetar as outras integrações que continuam ativas.',
  },
  {
    q: 'Mais de um agente pode usar a mesma ferramenta conectada?',
    a: 'Sim. Uma vez conectada, a ferramenta fica disponível pra todos os agentes que precisarem dela, com o contexto compartilhado. Você conecta uma vez e o time inteiro passa a usar.',
  },
];

function IntegracoesFaq() {
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

export default IntegracoesFaq;
