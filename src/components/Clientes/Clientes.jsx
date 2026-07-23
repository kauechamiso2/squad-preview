import { useCallback, useState } from 'react';
import { motion, MotionConfig } from 'motion/react';
import CarouselArrows from '../ui/CarouselArrows';
import { useCarouselTrack } from '../../hooks/useCarouselTrack';
import ClientCard from './ClientCard';
import ClientModal from './ClientModal';
import { getClients } from './clients';
import { revealVariants, revealViewport } from '../ui/motionPresets';
import { useLocale } from '../../i18n/LocaleContext.jsx';
import { nl2br } from '../../i18n/nl2br.jsx';
import styles from './Clientes.module.css';

/* Keep in sync with --modal-close-dur */
const MODAL_CLOSE_MS = 150;

/* Card width (374.66) + track gap (20) */
const CARD_STRIDE = 395;

function Clientes() {
  const { locale, t } = useLocale();
  const clients = getClients(locale);
  const { trackRef, canScroll, updateArrows, scroll } =
    useCarouselTrack(CARD_STRIDE);
  const isSingle = clients.length === 1;
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
        <div className={isSingle ? styles.headerCentered : styles.header}>
          <h2 className={styles.title}>{nl2br(t('home.clientes.title'))}</h2>
          {!isSingle && (
            <CarouselArrows
              canPrev={canScroll.prev}
              canNext={canScroll.next}
              onPrev={() => scroll(-1)}
              onNext={() => scroll(1)}
            />
          )}
        </div>

        <div
          className={isSingle ? styles.single : styles.track}
          ref={trackRef}
          onScroll={updateArrows}
        >
          {clients.map((client) => (
            <ClientCard
              key={client.name}
              client={client}
              onOpen={() => openModal(client)}
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
