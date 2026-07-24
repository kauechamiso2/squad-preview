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
import sec1En from '../../assets/pipo-sec1-en.png';
import sec2En from '../../assets/pipo-sec2-en.png';
import sec3En from '../../assets/pipo-sec3-en.png';
import sec4En from '../../assets/pipo-sec4-en.png';

const GOLD = 'linear-gradient(90deg, #edb845, #f5d68a)';

const SEC_IMAGES = [sec1, sec2, sec3, sec4];
const SEC_IMAGES_EN = [sec1En, sec2En, sec3En, sec4En];

/* Estrutural; textos vêm de pages.pipo.features (por índice). A imagem é
   escolhida por idioma no componente (PT/EN; espanhol usa a versão EN). */
const FEATURES = [
  { reverse: false },
  { reverse: true },
  { reverse: false, ctaDisabled: true },
  { reverse: true, ctaDisabled: true },
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
