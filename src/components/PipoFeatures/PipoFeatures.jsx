import { motion, MotionConfig } from 'motion/react';
import FeatureSection from '../MakyFeatures/FeatureSection';
import { CHARACTERS, getCharacters } from '../CharacterCarousel/characters';
import { useAgentModal } from '../../hooks/useAgentModal';
import { useLocale } from '../../i18n/LocaleContext.jsx';
import { revealVariants, revealViewport } from '../ui/motionPresets';
import styles from '../MakyFeatures/FeatureSection.module.css';

const BASE_AGENT = CHARACTERS.find((c) => c.name === 'Pipo');
import sec1 from '../../assets/pipo-sec1.png';
import sec2 from '../../assets/pipo-sec2.png';
import sec3 from '../../assets/pipo-sec3.png';
import sec4 from '../../assets/pipo-sec4.png';

const GOLD = 'linear-gradient(90deg, #edb845, #f5d68a)';

/* Estrutural; textos vêm de pages.pipo.features (por índice). */
const FEATURES = [
  { image: sec1, reverse: false },
  { image: sec2, reverse: true },
  { image: sec3, reverse: false, ctaDisabled: true },
  { image: sec4, reverse: true, ctaDisabled: true },
];

const SKILL_LABELS = [
  'Triagem de CVs',
  'Wiki interno',
  'PDI',
  'Prospecção candidatos',
];

function PipoFeatures() {
  const { locale, t } = useLocale();
  const AGENT = getCharacters(locale).find((c) => c.name === 'Pipo');
  const feats = t('pages.pipo.features');
  const { openTool, modal } = useAgentModal(AGENT);

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
              eyebrow={tx.eyebrow}
              title={tx.title}
              paragraph={tx.paragraph}
              cta={f.ctaDisabled ? t('common.comingSoon') : undefined}
              eyebrowGradient={GOLD}
              onCta={() => openTool(skill)}
            />
          </motion.div>
        );
      })}
      {modal}
    </MotionConfig>
  );
}

export default PipoFeatures;
