import { motion, MotionConfig } from 'motion/react';
import FeatureSection from './FeatureSection';
import { CHARACTERS, getCharacters } from '../CharacterCarousel/characters';
import { useAgentModal } from '../../hooks/useAgentModal';
import { useLocale } from '../../i18n/LocaleContext.jsx';
import { revealVariants, revealViewport } from '../ui/motionPresets';
import styles from './FeatureSection.module.css';

const BASE_AGENT = CHARACTERS.find((c) => c.name === 'Maky');
import sec3 from '../../assets/maky-sec3.png';
import sec4 from '../../assets/maky-sec4.png';
import sec5 from '../../assets/maky-sec5.png';
import sec6 from '../../assets/maky-sec6.png';
import sec7 from '../../assets/maky-sec7.png';
import sec3En from '../../assets/maky-sec3-en.png';
import sec4En from '../../assets/maky-sec4-en.png';
import sec5En from '../../assets/maky-sec5-en.png';
import sec6En from '../../assets/maky-sec6-en.png';
import sec7En from '../../assets/maky-sec7-en.png';

const SEC_IMAGES = [sec3, sec4, sec5, sec6, sec7];
const SEC_IMAGES_EN = [sec3En, sec4En, sec5En, sec6En, sec7En];

/* Estrutural; textos vêm de pages.maky.features (por índice). A imagem é
   escolhida por idioma no componente (PT/EN; espanhol usa a versão EN). */
const FEATURES = [
  { reverse: false },
  { reverse: true },
  { reverse: false },
  { reverse: true },
  { reverse: false },
];

/* Each feature block opens the same modal as the homepage card, by skill label */
const SKILL_LABELS = [
  'Análise concorrentes',
  'Comentários',
  'Campanhas',
  'Blog / AEO',
  'Tráfego pago',
];

function MakyFeatures() {
  const { locale, t } = useLocale();
  const AGENT = getCharacters(locale).find((c) => c.name === 'Maky');
  const feats = t('pages.maky.features');
  const { openTool, modal } = useAgentModal(AGENT);
  // Assets só têm PT e EN; espanhol usa a versão em inglês.
  const secImages = locale !== 'pt' ? SEC_IMAGES_EN : SEC_IMAGES;

  return (
    <MotionConfig reducedMotion="user">
      {FEATURES.map((f, i) => {
        const baseIdx = BASE_AGENT.skills.findIndex((s) => s.label === SKILL_LABELS[i]);
        const skill = baseIdx >= 0 ? AGENT.skills[baseIdx] : undefined;
        const tx = feats[i];
        return (
          <motion.div
            key={i}
            variants={revealVariants}
            initial="hidden"
            whileInView="show"
            viewport={revealViewport}
          >
            {i > 0 && <div className={styles.divider} aria-hidden="true" />}
            <FeatureSection
              {...f}
              image={secImages[i]}
              eyebrow={tx.eyebrow}
              title={tx.title}
              paragraph={tx.paragraph}
              onCta={() => openTool(skill)}
            />
          </motion.div>
        );
      })}
      {modal}
    </MotionConfig>
  );
}

export default MakyFeatures;
