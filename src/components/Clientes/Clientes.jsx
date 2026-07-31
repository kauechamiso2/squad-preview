import { useCallback, useState } from 'react';
import { motion, MotionConfig } from 'motion/react';
import ClientCard from './ClientCard';
import ClientModal from './ClientModal';
import { getClients } from './clients';
import { revealVariants, revealViewport } from '../ui/motionPresets';
import { useLocale } from '../../i18n/LocaleContext.jsx';
import { nl2br } from '../../i18n/nl2br.jsx';
import styles from './Clientes.module.css';

/* Keep in sync with --modal-close-dur */
const MODAL_CLOSE_MS = 150;

function Clientes() {
  const { locale, t } = useLocale();
  const clients = getClients(locale);
  const [modalClient, setModalClient] = useState(null);
  const [modalState, setModalState] = useState('open');

  const openModal = (client) => {
    setModalClient(client);
    setModalState('open');
  };

  const closeModal = useCallback(() => {
    setModalState('closing');
    setTimeout(() => setModalClient(null), MODAL_CLOSE_MS);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <motion.section
        className={styles.section}
        variants={revealVariants}
        initial="hidden"
        whileInView="show"
        viewport={revealViewport}
      >
        <div className={styles.headerCentered}>
          <h2 className={styles.title}>{nl2br(t('home.clientes.title'))}</h2>
        </div>

        <div className={styles.grid}>
          {clients.map((client, index) => (
            /* Index as key: fixed-length list, never reordered, and the
               placeholder entries repeat the same person. */
            <ClientCard
              key={index}
              client={client}
              onOpen={() => openModal(client)}
              isModalOpen={modalClient === client}
            />
          ))}
        </div>

        {modalClient && (
          <ClientModal
            client={modalClient}
            state={modalState}
            onClose={closeModal}
          />
        )}
      </motion.section>
    </MotionConfig>
  );
}

export default Clientes;
