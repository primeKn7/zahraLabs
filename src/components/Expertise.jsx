import styles from './Expertise.module.css'

const cards = [
  {
    num: '01',
    title: 'Tech & Innovation',
    subtitle: 'Plateformes numériques, IA appliquée, R&D produit',
    desc: "Applications web et mobile sur mesure, logistique, solutions sur données locales, prototypage rapide de MVP.",
    visual: styles.ev1,
  },
  {
    num: '02',
    title: 'Conseil & Accompagnement',
    subtitle: 'Études, audits, ingénierie de projets, coaching, incubation',
    desc: "Diagnostic existant, ingénierie de projets, plan de rentabilisation, Mentored Excellence, accès aux marchés, accompagnement long terme.",
    visual: styles.ev2,
  },
  {
    num: '03',
    title: 'HealthTech & AgriTech',
    subtitle: 'Santé, agriculture durable, transition énergétique',
    desc: "Outils de gestion médicale, calcul carbone, traçabilité chaîne de valeur agricole, mesure et transmission électronique circulaire.",
    visual: styles.ev3,
  },
]

export default function Expertise() {
  return (
    <section className={styles.section} id="expertise" aria-labelledby="exp-title">
      <div className={styles.header}>
        <p className="eyebrow">Nos piliers</p>
        <h2 className="section-title" id="exp-title">
          Trois expertises, un seul cap : l'impact mesuré.
        </h2>
      </div>
      <div className={styles.grid}>
        {cards.map((c) => (
          <article key={c.num} className={styles.card}>
            <div className={`${styles.visual} ${c.visual}`} role="img" aria-label={c.title} />
            <div className={styles.body}>
              <span className={styles.num}>{c.num}</span>
              <h3>{c.title}</h3>
              <p className={styles.subtitle}>{c.subtitle}</p>
              <p className={styles.desc}>{c.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
