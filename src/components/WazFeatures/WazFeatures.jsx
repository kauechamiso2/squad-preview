import { motion, MotionConfig } from 'motion/react';
import FeatureSection from '../MakyFeatures/FeatureSection';
import { CHARACTERS, getCharacters } from '../CharacterCarousel/characters';
import { useAgentModal } from '../../hooks/useAgentModal';
import { useLocale } from '../../i18n/LocaleContext.jsx';
import { revealVariants, revealViewport } from '../ui/motionPresets';
import styles from '../MakyFeatures/FeatureSection.module.css';

const BASE_AGENT = CHARACTERS.find((c) => c.name === 'Waz');
import sec1 from '../../assets/waz-sec1.png';
import sec2 from '../../assets/waz-sec2.png';
import sec3 from '../../assets/waz-sec3.png';
import sec4 from '../../assets/waz-sec4.png';
import sec5 from '../../assets/waz-sec5.png';

const GREEN = 'linear-gradient(90deg, #34c759, #7ed99a)';

/* Estrutural; textos vêm de pages.waz.features (por índice). */
const FEATURES = [
  { image: sec1, reverse: false },
  { image: sec2, reverse: true },
  { image: sec3, reverse: false },
  { image: sec4, reverse: false, ctaDisabled: true },
  { image: sec5, reverse: true, ctaDisabled: true },
];

const SKILL_LABELS = [
  'Outbound WhatsApp',
  'SDR',
  'Gerador de propostas',
  'Coach de Vendas',
  'Busca de leads',
];

function WazFeatures() {
  const { locale, t } = useLocale();
  const AGENT = getCharacters(locale).find((c) => c.name === 'Waz');
  const feats = t('pages.waz.features');
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
              eyebrowGradient={GREEN}
              onCta={() => openTool(skill)}
            />
          </motion.div>
        );
      })}
      {modal}
    </MotionConfig>
  );
}

export default WazFeatures;
