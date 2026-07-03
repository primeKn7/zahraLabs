import styles from './Footer.module.css'

const cols = [
  {
    heading: 'Piliers',
    links: [
      { href: '#expertise', label: 'Tech & Innovation' },
      { href: '#expertise', label: 'Conseil & Accompagnement' },
      { href: '#expertise', label: 'HealthTech & AgriTech' },
    ],
  },
  {
    heading: 'Services',
    links: [
      { href: '#services', label: 'Plateformes numériques' },
      { href: '#services', label: 'Applications logistiques' },
      { href: '#services', label: 'Solutions IA' },
      { href: '#services', label: 'Audits techniques' },
      { href: '#services', label: 'Coaching & incubation' },
    ],
  },
  {
    heading: 'Naviguer',
    links: [
      { href: '#expertise', label: 'À propos' },
      { href: '#services',  label: 'Services' },
      { href: '#impact',    label: 'Impact' },
      { href: '#methode',   label: 'Comment ça marche' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.brand}>
          <p className={styles.logo}>ZARA <em>LABS</em></p>
          <p>Innovation tech, conseil et impact. Depuis Cotonou, vers toute l'Afrique de l'Ouest.</p>
        </div>
        {cols.map((col) => (
          <div key={col.heading} className={styles.col}>
            <h4>{col.heading}</h4>
            <ul>
              {col.links.map((l) => (
                <li key={l.label}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className={styles.bottom}>
        <span>© 2026 Zara Labs. Cotonou, Bénin.</span>
        <span>Fait avec rigueur, livré avec impact.</span>
      </div>
    </footer>
  )
}
