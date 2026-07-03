import { useState } from 'react'
import styles from './Services.module.css'

const services = [
  { n: '01', title: 'Plateformes numériques',   desc: 'Web et mobile sur mesure, cloud, sécurité, scalabilité.' },
  { n: '02', title: 'Applications logistiques', desc: "Suivi de flotte, gestion d'inventaire, traçabilité terrain." },
  { n: '03', title: 'Solutions IA',             desc: 'Modèles IA sur données locales, automatisation terrain.' },
  { n: '04', title: 'R&D produit',              desc: 'Prototypage rapide, MVP toolbox, expérimentations contrôlées.' },
  { n: '05', title: 'Audits techniques',        desc: 'Diagnostic existant, cartographie risques, plan de résolution.' },
  { n: '06', title: 'Ingénierie de projets',    desc: "Cadrage, planification, livrables. De l'idée au déploiement." },
  { n: '07', title: 'Coaching & incubation',    desc: 'Mentorat fondateurs, structuration projet, accès aux marchés.' },
  { n: '08', title: 'Stratégie opérationnelle', desc: 'Accompagnement long terme — PME, startups, porteurs de projets.' },
  { n: '09', title: 'Outils HealthTech',        desc: 'Gestion médicale, dossiers patients, télémédecine contexte local.' },
  { n: '10', title: 'Solutions AgriTech',       desc: 'Suivi cultures, prévisions, traçabilité chaîne de valeur agricole.' },
  { n: '11', title: 'Économie circulaire',      desc: 'Calcul carbone, réduction des flux, modèles éco-responsables.' },
  { n: '12', title: 'Transition énergétique',   desc: 'Énergies renouvelables, pratiques responsables, optimisation des usages.' },
]

export default function Services() {
  const [open, setOpen] = useState(null)
  const toggle = (i) => setOpen(open === i ? null : i)

  return (
    <section className={styles.section} id="services" aria-labelledby="svc-title">
      <div className={styles.header}>
        <p className={`eyebrow ${styles.eyebrowLight}`}>Catalogue</p>
        <h2 className={`section-title ${styles.sectionTitle}`} id="svc-title">Services proposés.</h2>
      </div>

      {/* Desktop: grid */}
      <div className={styles.grid} role="list">
        {services.map((s) => (
          <div key={s.n} className={styles.card} role="listitem">
            <p className={styles.num}>{s.n}</p>
            <h4>{s.title}</h4>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>

      {/* Mobile: accordion */}
      <div className={styles.accordion}>
        {services.map((s, i) => (
          <div key={s.n} className={`${styles.accItem} ${open === i ? styles.accOpen : ''}`}>
            <button className={styles.accBtn} onClick={() => toggle(i)} aria-expanded={open === i}>
              <span className={styles.accNum}>{s.n}</span>
              <span className={styles.accTitle}>{s.title}</span>
              <span className={styles.accChevron} aria-hidden="true">›</span>
            </button>
            <div className={styles.accBody}>
              <p>{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
