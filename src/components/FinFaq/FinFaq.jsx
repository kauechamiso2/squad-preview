import { useState } from 'react';
import styles from './FinFaq.module.css';

const FAQS = [
  {
    q: 'O Fin substitui meu contador?',
    a: 'O Fin não substitui seu contador, ele organiza o dia a dia financeiro que hoje vive espalhado em planilhas e anotações soltas. Ele mostra quanto entra, quanto sai e projeta o caixa dos próximos meses, pra você tomar decisão com mais clareza. A parte contábil e fiscal continua com o profissional que já cuida disso.',
  },
  {
    q: 'Como o Fin calcula a projeção do próximo mês?',
    a: 'O Fin projeta o caixa a partir do seu histórico de entradas e saídas e das contas já agendadas — recebimentos previstos, despesas fixas e parcelas a vencer. Assim você enxerga com antecedência quanto deve sobrar no próximo mês.',
  },
  {
    q: 'Meus dados financeiros ficam seguros com o Fin?',
    a: 'Sim. Seus dados financeiros ficam protegidos dentro do Squad, com acesso restrito à sua empresa. O Fin usa essas informações apenas para organizar e projetar o seu fluxo de caixa.',
  },
  {
    q: 'O Fin emite nota fiscal?',
    a: 'A emissão de nota fiscal está chegando ao Fin. A ideia é emitir direto na plataforma, sem pular pra outro sistema, deixando a emissão integrada ao resto do financeiro do seu negócio.',
  },
];

function FinFaq() {
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

export default FinFaq;
