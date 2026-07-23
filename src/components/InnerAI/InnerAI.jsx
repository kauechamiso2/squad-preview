import { Fragment } from 'react';
import { motion, MotionConfig } from 'motion/react';
import teamPhoto from '../../assets/innerai-stats.jpg';
import teamPhotoTablet from '../../assets/innerai-stats-tablet.jpg';
import teamPhotoMobile from '../../assets/innerai-stats-mobile.jpg';
import { revealVariants, revealViewport } from '../ui/motionPresets';
import { useLocale } from '../../i18n/LocaleContext.jsx';
import { nl2br } from '../../i18n/nl2br.jsx';
import styles from './InnerAI.module.css';

/* prefixo + figura por stat; o rótulo vem de home.innerai.stats (por índice). */
const STATS = [
  { prefix: '+', value: '1M' },
  { prefix: 'R$', value: '50M' },
  { prefix: '#', value: '1' },
];

function InnerAI() {
  const { t } = useLocale();
  const statLabels = t('home.innerai.stats');
  return (
    <MotionConfig reducedMotion="user">
      <motion.section
        className={styles.section}
        variants={revealVariants}
        initial="hidden"
        whileInView="show"
        viewport={revealViewport}
      >
        <div className={styles.content}>
          <div className={styles.textCol}>
            <div className={styles.heading}>
              <p className={styles.eyebrow}>{t('home.innerai.eyebrow')}</p>
              <h2 className={styles.title}>{t('home.innerai.title')}</h2>
            </div>
          </div>

          {/* Team photo card (duotone baked into the export) with stats overlaid */}
          <div className={styles.photoCard}>
            <picture>
              <source media="(max-width: 767px)" srcSet={teamPhotoMobile} />
              <source media="(max-width: 1199px)" srcSet={teamPhotoTablet} />
              <img
                src={teamPhoto}
                alt="Time da Inner AI reunido no escritório"
                className={styles.photo}
              />
            </picture>
            <dl className={styles.stats}>
              {STATS.map(({ prefix, value }, index) => (
                <Fragment key={value}>
                  {index > 0 && <span className={styles.divider} />}
                  <div className={styles.stat}>
                    <dt className={styles.statValue}>
                      <span className={styles.statPrefix}>{prefix}</span>
                      {value}
                    </dt>
                    <dd className={styles.statLabel}>
                      {nl2br(statLabels[index])}
                    </dd>
                  </div>
                </Fragment>
              ))}
            </dl>
          </div>
        </div>
      </motion.section>
    </MotionConfig>
  );
}

export default InnerAI;
