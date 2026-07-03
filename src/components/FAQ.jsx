import { useState } from 'react'
import styles from './FAQ.module.css'

const faqs = [
  {
    q: 'Comment démarrer un projet avec Zara Labs ?',
    a: 'Un premier échange de 30 minutes pour cerner le besoin, puis une note de cadrage sous 48h avec périmètre, livrables et budget indicatif.',
  },
  {
    q: 'Quels secteurs accompagnez-vous ?',
    a: "Santé, agriculture, énergie, logistique, éducation, finance, administration publique et ONG. Nos outils sont conçus pour les réalités terrain ouest-africaines.",
  },
  {
    q: "Quel est le délai moyen d'un audit ?",
    a: "Entre 2 et 4 semaines selon la complexité du système. Vous recevez une restitution documentée avec plan d'action priorisé.",
  },
  {
    q: 'Travaillez-vous en dehors du Bénin ?',
    a: "Oui. Nous intervenons dans toute l'Afrique de l'Ouest, avec une capacité de travail à distance complète et des déplacements terrain si nécessaires.",
  },
  {
    q: "Proposez-vous de l'incubation pour startups ?",
    a: "Oui — cadrage produit, go-to-market, accès investisseurs, mentorat technique et mise en réseau avec l'écosystème régional.",
  },
  {
    q: 'Comment se passe la facturation ?',
    a: "Au forfait ou en régie selon la nature du projet. Un devis détaillé est fourni après le cadrage, avec jalons de paiement alignés sur les livrables.",
  },
  {
    q: 'Quelles technologies utilisez-vous ?',
    a: "Nous choisissons la stack adaptée au contexte : React, Next.js, Node.js, Python, PostgreSQL, ainsi que des solutions no-code/low-code pour les projets à contraintes budget.",
  },
  {
    q: 'Êtes-vous une agence ou un cabinet de conseil ?',
    a: "Les deux à la fois — c'est notre différence. Nous livrons du code et du conseil dans le même engagement, sans intermédiaires.",
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(0) // first question open by default

  const toggle = (i) => setOpen(open === i ? null : i)

  return (
    <section className={styles.section} id="faq" aria-labelledby="faq-title">
      <div className={styles.header}>
        <h2 className="section-title" id="faq-title">
          Tout ce qu'on nous demande souvent.
        </h2>
      </div>

      {/* Dashed blue frame — same brand identity as hero */}
      <div className={styles.dashedFrame}>
        {faqs.map((item, i) => (
          <div key={i} className={`${styles.item} ${open === i ? styles.open : ''}`}>
            <button
              className={styles.q}
              onClick={() => toggle(i)}
              aria-expanded={open === i}
            >
              <span>{item.q}</span>
              <span className={styles.chevron} aria-hidden="true">
                {open === i ? '−' : '+'}
              </span>
            </button>
            <div className={styles.a} role="region">
              <p>{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
