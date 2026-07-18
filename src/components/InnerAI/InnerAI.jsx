import { Fragment } from 'react';
import teamPhoto from '../../assets/innerai-stats.jpg';
import teamPhotoTablet from '../../assets/innerai-stats-tablet.jpg';
import teamPhotoMobile from '../../assets/innerai-stats-mobile.jpg';
import styles from './InnerAI.module.css';

const STATS = [
  { prefix: '+', value: '1M', label: ['Usuários', 'atendidos'] },
  { prefix: 'R$', value: '50M', label: ['Captados em', 'investimento'] },
  { prefix: '#', value: '1', label: ['Plataforma', 'de IA do Brasil'] },
];

function InnerAI() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <div className={styles.textCol}>
          <div className={styles.heading}>
            <p className={styles.eyebrow}>Powered by Inner AI</p>
            <h2 className={styles.title}>
              Construído pela Inner AI, a maior plataforma de IA do Brasil.
            </h2>
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
            {STATS.map(({ prefix, value, label }, index) => (
              <Fragment key={value}>
                {index > 0 && <span className={styles.divider} />}
                <div className={styles.stat}>
                  <dt className={styles.statValue}>
                    <span className={styles.statPrefix}>{prefix}</span>
                    {value}
                  </dt>
                  <dd className={styles.statLabel}>
                    {label[0]}
                    <br />
                    {label[1]}
                  </dd>
                </div>
              </Fragment>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

export default InnerAI;
