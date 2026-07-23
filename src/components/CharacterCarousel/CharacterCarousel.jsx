import { useCallback, useState } from 'react';
import { motion, MotionConfig } from 'motion/react';
import CarouselArrows from '../ui/CarouselArrows';
import { useCarouselTrack } from '../../hooks/useCarouselTrack';
import CharacterCard from './CharacterCard';
import AgentModal from './AgentModal';
import { getCharacters } from './characters';
import { revealVariants, revealViewport } from '../ui/motionPresets';
import { useLocale } from '../../i18n/LocaleContext.jsx';
import styles from './CharacterCarousel.module.css';

/* Card width (335) + track gap (20) */
const CARD_STRIDE = 355;

/* Keep in sync with --modal-close-dur */
const MODAL_CLOSE_MS = 150;

function CharacterCarousel() {
  const { locale, t } = useLocale();
  const characters = getCharacters(locale);
  const { trackRef, canScroll, updateArrows, scroll } =
    useCarouselTrack(CARD_STRIDE);
  const [modal, setModal] = useState(null); // { agent, tool }
  const [modalState, setModalState] = useState('open');

  const openModal = (agent, tool = null) => {
    /* Card / "Ver mais" clicks pass null → open the first real tool */
    const resolved =
      tool ||
      agent.skills.find((s) => s.modal) ||
      agent.skills.find((s) => s.icon !== false) ||
      agent.skills[0];
    setModal({ agent, tool: resolved });
    setModalState('open');
  };

  const closeModal = useCallback(() => {
    setModalState('closing');
    setTimeout(() => setModal(null), MODAL_CLOSE_MS);
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
        <div className={styles.header}>
          <div className={styles.headerText}>
            <h2 className={styles.title}>{t('home.team.title')}</h2>
            <p className={styles.subtitle}>{t('home.team.subtitle')}</p>
          </div>
          <CarouselArrows
            canPrev={canScroll.prev}
            canNext={canScroll.next}
            onPrev={() => scroll(-1)}
            onNext={() => scroll(1)}
          />
        </div>

        <div className={styles.track} ref={trackRef} onScroll={updateArrows}>
          {characters.map((character) => (
            <CharacterCard
              key={character.name}
              character={character}
              onOpen={(tool) => openModal(character, tool)}
            />
          ))}
        </div>

        {modal && (
          <AgentModal
            key={`${modal.agent.name}-${modal.tool.label}`}
            agent={modal.agent}
            tool={modal.tool}
            state={modalState}
            onClose={closeModal}
          />
        )}
      </motion.section>
    </MotionConfig>
  );
}

export default CharacterCarousel;
