import { motion, MotionConfig } from 'motion/react';
import FeatureSection from '../MakyFeatures/FeatureSection';
import { CHARACTERS, getCharacters } from '../CharacterCarousel/characters';
import { useAgentModal } from '../../hooks/useAgentModal';
import { useLocale } from '../../i18n/LocaleContext.jsx';
import { revealVariants, revealViewport } from '../ui/motionPresets';
import styles from '../MakyFeatures/FeatureSection.module.css';

const BASE_AGENT = CHARACTERS.find((c) => c.name === 'Juri');
import sec1 from '../../assets/juri-sec1.png';
import sec2 from '../../assets/juri-sec2.png';
import sec3 from '../../assets/juri-sec3.png';
import sec4 from '../../assets/juri-sec4.png';
import sec1En from '../../assets/juri-sec1-en.png';
import sec2En from '../../assets/juri-sec2-en.png';
import sec3En from '../../assets/juri-sec3-en.png';
import sec4En from '../../assets/juri-sec4-en.png';

const PURPLE = 'linear-gradient(90deg, #8b5cf6, #b89afa)';

const SEC_IMAGES = [sec1, sec2, sec3, sec4];
const SEC_IMAGES_EN = [sec1En, sec2En, sec3En, sec4En];

/* Estrutural (lado/estado); textos vêm de pages.juri.features (por índice). A
   imagem é escolhida por idioma no componente (PT/EN; espanhol usa a versão EN). */
const FEATURES = [
  { reverse: false },
  { reverse: true, ctaDisabled: true },
  { reverse: false, ctaDisabled: true },
  { reverse: true, ctaDisabled: true },
];

const SKILL_LABELS = [
  'Gestão de contratos',
  'Gerador de documentos',
  'Assinatura Digital',
  'Revisão de contratos',
];

function JuriFeatures() {
  const { locale, t } = useLocale();
  const AGENT = getCharacters(locale).find((c) => c.name === 'Juri');
  const feats = t('pages.juri.features');
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
              eyebrowGradient={PURPLE}
              onCta={() => openTool(skill)}
            />
          </motion.div>
        );
      })}
      {modal}
    </MotionConfig>
  );
}

export default JuriFeatures;
