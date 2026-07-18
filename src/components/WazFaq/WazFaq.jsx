import { useState } from 'react';
import styles from './WazFaq.module.css';

const FAQS = [
  {
    q: 'O disparo de WhatsApp corre risco de bloquear meu número?',
    a: 'O Disparo de WhatsApp do Waz roda sobre a API oficial da Meta, com templates aprovados. Isso significa que seu número segue as regras oficiais do WhatsApp Business, sem risco de bloqueio por uso indevido.',
  },
  {
    q: 'Como o Waz aprende sobre os meus produtos e preços?',
    a: 'O Waz aprende com o que você já tem: seu catálogo, tabelas de preços e as informações do seu negócio cadastradas no Squad. Com esse contexto, ele responde clientes e monta propostas usando seus produtos e valores reais.',
  },
  {
    q: 'Consigo revisar a proposta comercial antes de enviar pro cliente?',
    a: 'Sim. O Waz monta a proposta em minutos, mas ela só vai pro cliente depois da sua revisão — você ajusta desconto, itens e linguagem antes de enviar.',
  },
  {
    q: 'O Waz atende fora do horário comercial?',
    a: 'Sim. O Waz responde na hora a qualquer momento do dia, seguindo o tom e as regras que você definiu — inclusive fora do horário comercial e nos fins de semana.',
  },
];

function WazFaq() {
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

export default WazFaq;
