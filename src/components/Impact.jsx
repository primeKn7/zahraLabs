import styles from './Impact.module.css'

const stats = [
  { n: '3',   suffix: '',   label: "Filières d'expertise" },
  { n: '12',  suffix: '+',  label: 'Services proposés' },
  { n: '100', suffix: '%',  label: 'Ancrage Bénin' },
  { n: '24',  suffix: '/7', label: 'Engagement client' },
]

const sectors = ['Santé', 'Agriculture', 'Énergie', 'Logistique', 'Éducation', 'Finance', 'Administration publique', 'ONG']
const ticker = [...sectors, ...sectors, ...sectors, ...sectors]

export default function Impact() {
  return (
    <section className={styles.section} id="impact" aria-labelledby="impact-title">

      {/* Padded inner content */}
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className="eyebrow">Impact</p>
          <h2 className="section-title" id="impact-title">
            Notre impact en quelques chiffres.
          </h2>
        </div>

        <div className={styles.stats} role="list">
          {stats.map((s) => (
            <div key={s.label} className={styles.stat} role="listitem">
              <p className={styles.statN}>
                {s.n}
                {s.suffix && <span className={styles.suffix}>{s.suffix}</span>}
              </p>
              <p className={styles.statLabel}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Full-bleed ticker — sits outside inner padding */}
      <div className={styles.tickerWrap} aria-hidden="true">
        <div className={styles.track}>
          {ticker.map((item, i) => (
            <span key={i} className={styles.item}>
              {item}
              <span className={styles.dot} />
            </span>
          ))}
        </div>
      </div>

    </section>
  )
}
