import { useState } from 'react';
import styles from './Faq.module.css';

/* FAQ content — edit questions and answers here */
const FAQ_ITEMS = [
  {
    question: 'Utilizam a API Oficial da Meta?',
    answer:
      'Sim. Toda a operação de WhatsApp e Instagram roda pela API oficial da Meta, o que garante mais segurança e estabilidade para o seu negócio, sem risco de bloqueio do seu número. Nada de soluções não oficiais.',
  },
  {
    question: 'Todos os agentes já vêm na minha conta?',
    answer:
      'Depende do plano contratado. Cada plano libera um conjunto de agentes, cada um especializado em uma área do seu negócio, de vendas e atendimento a marketing, conteúdo e financeiro. Você pode começar pelos agentes que fazem mais sentido para o seu momento e ativar os demais conforme o negócio cresce.',
  },
  {
    question: 'Eu preciso comprar as ferramentas individualmente?',
    answer:
      'Não. Todas as ferramentas de cada agente já vêm no pacote. Ao contratar, você recebe tudo o que os agentes precisam para operar.',
  },
  {
    question: 'Preciso saber de tecnologia ou programação para usar?',
    answer:
      'Não! O Squad foi desenvolvido para ser intuitivo e feito para quem toca o negócio no dia a dia, não para times de TI. O onboarding é guiado: você responde algumas perguntas sobre a sua empresa, conecta seus canais e os agentes já começam a trabalhar com o contexto da sua marca. E você não fica sozinho: temos um time de suporte que acompanha a sua empresa no uso da plataforma e auxilia em todo o processo.',
  },
  {
    question: 'Meus dados e os dados dos meus clientes ficam seguros?',
    answer:
      'Sim. O Squad utiliza suas informações apenas para operar seus agentes, sempre seguindo as APIs oficiais das plataformas. Seus dados nunca são vendidos ou compartilhados com terceiros. Eles servem só para deixar as respostas e ações mais precisas para o seu negócio.',
  },
];

function ChevronIcon({ open }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`}
    >
      {/* Symmetric path + vertical flip animates in every browser
          (CSS `d:` morphing is Chromium-only) */}
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        Perguntas
        <br />
        frequentes
      </h2>

      <ul className={styles.list}>
        {FAQ_ITEMS.map(({ question, answer }, index) => {
          const open = openIndex === index;
          return (
            <li key={index} className={styles.item}>
              <button
                type="button"
                className={styles.questionRow}
                aria-expanded={open}
                onClick={() => toggle(index)}
              >
                <span className={styles.question}>{question}</span>
                <ChevronIcon open={open} />
              </button>
              <div
                className={`${styles.answerWrap} ${
                  open ? styles.answerWrapOpen : ''
                }`}
              >
                <div className={styles.answerInner}>
                  <p className={styles.answer}>{answer}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default Faq;
