import { useState } from 'react'
import ToggleBtn from './ToggleBtn'
import styles from './Contact.module.css'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => { setSent(false); e.target.reset() }, 3500)
  }

  return (
    <section className={styles.section} id="contact" aria-labelledby="contact-title">
      <div className={styles.grid}>

        <div className={styles.left}>
          <p className={`eyebrow ${styles.label}`}>Contact</p>
          <h2 className={styles.h2} id="contact-title">Parlons de votre projet.</h2>
          <p className={styles.desc}>
            Un mot, une idée, un cahier des charges. On revient vers vous sous 48h ouvrées.
          </p>
          <div className={styles.info}>
            <div>
              <span className={styles.infoLabel}>Email</span>
              <a href="mailto:contact@zaralabs.bj" className={styles.infoValue}>contact@zaralabs.bj</a>
            </div>
            <div>
              <span className={styles.infoLabel}>Téléphone</span>
              <a href="tel:+22900000000" className={styles.infoValue}>+229 00 00 00 00</a>
            </div>
            <div>
              <span className={styles.infoLabel}>Adresse</span>
              <span className={styles.infoValue}>Cotonou, Bénin</span>
            </div>
          </div>
        </div>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <input className={styles.input} type="text"  name="name"    placeholder="Votre nom"                    required autoComplete="name" />
          <input className={styles.input} type="email" name="email"   placeholder="Votre email"                  required autoComplete="email" />
          <input className={styles.input} type="text"  name="company" placeholder="Votre entreprise (optionnel)"          autoComplete="organization" />
          <textarea className={`${styles.input} ${styles.textarea}`} name="message" placeholder="Décrivez votre projet…" required />
          <div>
            <ToggleBtn variant="light" onClick={handleSubmit}>
              {sent ? 'Message envoyé ✓' : 'Envoyer le message'}
            </ToggleBtn>
          </div>
        </form>

      </div>
    </section>
  )
}
