import ToggleBtn from './ToggleBtn'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.section} aria-labelledby="hero-title">
      {/* Dashed blue frame — brand identity element */}
      <div className={styles.dashedFrame}>
        <p className={`eyebrow ${styles.tag}`}>
          Tech · Conseil · Impact — depuis le Bénin
        </p>
        <h1 id="hero-title" className={styles.h1}>
          Innovation tech,<br />
          conseil et impact,<br />
          depuis le Bénin.
        </h1>
        <p className={styles.sub}>
          Nous concevons des plateformes numériques, des solutions IA et des outils
          AgriTech &amp; HealthTech. PME, startups et acteurs publics — nous les accompagnons
          du diagnostic à la mise en production.
        </p>
        <ToggleBtn href="#contact" variant="dark">Démarrer un projet</ToggleBtn>
      </div>
    </section>
  )
}
