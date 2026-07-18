import { useState } from 'react';
import styles from './JuriFaq.module.css';

const FAQS = [
  {
    q: 'A Juri envia a renovação do contrato sozinha?',
    a: 'Não sozinha. A Juri gera o rascunho do e-mail de renovação ou cancelamento com o contexto do contrato já preenchido, mas quem revisa e envia é você. Ela não dispara nada sem sua ação.',
  },
  {
    q: 'A Juri substitui um advogado?',
    a: 'A Juri não substitui um advogado, ela tira da frente o trabalho repetitivo — organizar contratos, acompanhar prazos, gerar rascunhos e traduzir cláusulas em linguagem simples. Para uma análise jurídica aprofundada ou um caso delicado, o advogado continua sendo quem decide.',
  },
  {
    q: 'Como a Juri sabe quando um contrato está perto de vencer?',
    a: 'A Juri lê cada contrato e extrai as datas de vencimento e renovação automaticamente. A partir daí, ela acompanha os prazos todo dia e te avisa com antecedência, antes do contrato vencer ou renovar sozinho, pra você decidir com tempo.',
  },
  {
    q: 'Quais plataformas de assinatura a Juri conecta?',
    a: 'A Juri faz a assinatura digital com validade jurídica direto na plataforma, sem precisar pular pra outro sistema. Você envia pra todos os signatários de uma vez e acompanha quem já assinou no mesmo lugar em que o contrato está guardado.',
  },
];

function JuriFaq() {
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

export default JuriFaq;
