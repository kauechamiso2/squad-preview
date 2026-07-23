import { motion, MotionConfig } from 'motion/react';
import FeatureSection from '../MakyFeatures/FeatureSection';
import { CHARACTERS, getCharacters } from '../CharacterCarousel/characters';
import { useAgentModal } from '../../hooks/useAgentModal';
import { useLocale } from '../../i18n/LocaleContext.jsx';
import { revealVariants, revealViewport } from '../ui/motionPresets';
import styles from '../MakyFeatures/FeatureSection.module.css';

const BASE_AGENT = CHARACTERS.find((c) => c.name === 'Fin');
import sec1 from '../../assets/fin-sec1.png';
import sec2 from '../../assets/fin-sec2.png';
import sec3 from '../../assets/fin-sec3.png';
import sec4 from '../../assets/fin-sec4.png';

const BLUE = 'linear-gradient(90deg, #0091ff, #7ec4f2)';

/* Estrutural; textos vêm de pages.fin.features (por índice). */
const FEATURES = [
  { image: sec1, reverse: false },
  { image: sec2, reverse: true, ctaDisabled: true },
  { image: sec3, reverse: false, ctaDisabled: true },
  { image: sec4, reverse: true, ctaDisabled: true },
];

const SKILL_LABELS = [
  'Fluxo de caixa',
  'Emissão de NF',
  'Links de pagamentos',
  'Cobrança de cliente',
];

function FinFeatures() {
  const { locale, t } = useLocale();
  const AGENT = getCharacters(locale).find((c) => c.name === 'Fin');
  const feats = t('pages.fin.features');
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
              eyebrowGradient={BLUE}
              onCta={() => openTool(skill)}
            />
          </motion.div>
        );
      })}
      {modal}
    </MotionConfig>
  );
}

export default FinFeatures;
