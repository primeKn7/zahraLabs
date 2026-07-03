import styles from './Method.module.css'

const steps = [
  {
    n: '01',
    title: 'Cadrage',
    desc: "Échange d'idée de 30 min. Note de cadrage avec objectifs, périmètre, livrables, budget estimé.",
  },
  {
    n: '02',
    title: 'Audit terrain',
    desc: "Entretiens, observation sur place, revue de l'existant. Restitution actionnable en 2–4 semaines.",
  },
  {
    n: '03',
    title: 'Build & itération',
    desc: 'Sprints courts, jalons réguliers. Accès au produit grandissant, vous compris tout au long.',
  },
  {
    n: '04',
    title: 'Mise en service',
    desc: "Déploiement, formation des équipes, support continu. Mesure d'impact à 3 et 6 mois.",
  },
]

export default function Method() {
  return (
    <section className={styles.section} id="methode" aria-labelledby="method-title">
      <div className={styles.header}>
        <p className="eyebrow">Méthode</p>
        <h2 className="section-title" id="method-title">Comment ça marche.</h2>
      </div>
      <div className={styles.grid}>
        {steps.map((s) => (
          <div key={s.n} className={styles.step}>
            <p className={styles.num}>{s.n}</p>
            <h4>{s.title}</h4>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
