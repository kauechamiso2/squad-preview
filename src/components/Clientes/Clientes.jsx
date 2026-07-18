import { useCallback, useState } from 'react';
import CarouselArrows from '../ui/CarouselArrows';
import { useCarouselTrack } from '../../hooks/useCarouselTrack';
import ClientCard from './ClientCard';
import ClientModal from './ClientModal';
import { CLIENTS } from './clients';
import styles from './Clientes.module.css';

/* Keep in sync with --modal-close-dur */
const MODAL_CLOSE_MS = 150;

/* Card width (374.66) + track gap (20) */
const CARD_STRIDE = 395;

function Clientes() {
  const { trackRef, canScroll, updateArrows, scroll } =
    useCarouselTrack(CARD_STRIDE);
  const isSingle = CLIENTS.length === 1;
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
    <section className={styles.section}>
      <div className={isSingle ? styles.headerCentered : styles.header}>
        <h2 className={styles.title}>
          O problema não era vender.
          <br />
          Era conseguir atender quem queria comprar.
        </h2>
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
        {CLIENTS.map((client) => (
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
    </section>
  );
}

export default Clientes;
