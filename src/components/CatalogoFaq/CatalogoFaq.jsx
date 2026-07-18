import { useState } from 'react';
import styles from '../ConhecimentoFaq/ConhecimentoFaq.module.css';

const FAQS = [
  {
    q: 'Se eu já vendo pelo Shopify, preciso cadastrar tudo de novo aqui?',
    a: 'Não. Conectando sua loja, o catálogo sincroniza sozinho: produto, preço e estoque aparecem aqui automaticamente. Você continua editando pelo Shopify, e as mudanças chegam pro Squad sem precisar recadastrar nada.',
  },
  {
    q: 'Como funciona a cobrança de sinal mais o restante depois?',
    a: 'Você define o valor do sinal na hora da venda e o agente cobra o restante quando quiser: quando o pedido sai, na entrega ou numa data combinada. Um clique gera o link de cobrança do saldo, e o Squad mostra quanto já foi pago e quanto ainda falta.',
  },
  {
    q: 'Consigo ter o mesmo produto com preços diferentes por variante?',
    a: 'Sim. Cada variante (cor, tamanho, duração ou pacote) pode ter o seu próprio preço e estoque. Você cadastra uma vez e o preço ajusta sozinho conforme a opção que o cliente escolhe, sem precisar duplicar o produto.',
  },
  {
    q: 'Quem recebe o pagamento, o Squad ou eu diretamente?',
    a: 'O pagamento cai direto pra você. O Squad organiza a venda, gera os links de cobrança e acompanha o status, mas o dinheiro vai pra conta que você conecta, sem passar pelo caminho do Squad.',
  },
];

function CatalogoFaq() {
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

export default CatalogoFaq;
