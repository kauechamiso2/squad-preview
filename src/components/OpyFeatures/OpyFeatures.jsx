import { motion, MotionConfig } from 'motion/react';
import FeatureSection from '../MakyFeatures/FeatureSection';
import { CHARACTERS, getCharacters } from '../CharacterCarousel/characters';
import { useAgentModal } from '../../hooks/useAgentModal';
import { useLocale } from '../../i18n/LocaleContext.jsx';
import { revealVariants, revealViewport } from '../ui/motionPresets';
import styles from '../MakyFeatures/FeatureSection.module.css';

/* Base PT (fica igual em qualquer idioma) só para achar o índice da skill;
   o conteúdo exibido vem do agente já traduzido. */
const BASE_AGENT = CHARACTERS.find((c) => c.name === 'Opy');
import sec1 from '../../assets/opy-sec1.png';
import sec2 from '../../assets/opy-sec2.png';
import sec3 from '../../assets/opy-sec3.png';
import sec4 from '../../assets/opy-sec4.png';

const TEAL = 'linear-gradient(90deg, #1ab0b3, #5fd0d2)';

/* Estrutural (imagem/lado/estado); textos vêm de pages.opy.features (por índice). */
const FEATURES = [
  { image: sec1, reverse: false },
  { image: sec2, reverse: true, ctaDisabled: true },
  { image: sec3, reverse: false, ctaDisabled: true },
  { image: sec4, reverse: true, ctaDisabled: true },
];

const SKILL_LABELS = [
  'Escalas',
  'Controle de estoque',
  'Gravações de reuniões',
  'Otimizador de entregas',
];

function OpyFeatures() {
  const { locale, t } = useLocale();
  const AGENT = getCharacters(locale).find((c) => c.name === 'Opy');
  const feats = t('pages.opy.features');
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
              eyebrowGradient={TEAL}
              onCta={() => openTool(skill)}
            />
          </motion.div>
        );
      })}
      {modal}
    </MotionConfig>
  );
}

export default OpyFeatures;
