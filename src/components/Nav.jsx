import { useEffect, useState } from 'react'
import styles from './Nav.module.css'

const links = [
  { href: '#expertise', label: 'Pôles' },
  { href: '#services',  label: 'Services' },
  { href: '#impact',    label: 'Impact' },
  { href: '#equipe',    label: 'À propos' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`} aria-label="Navigation principale">
        <a href="#" className={styles.logo} aria-label="Zara Labs — accueil">
          ZARA <em>LABS</em>
        </a>

        <ul className={styles.links} role="list">
          {links.map(({ href, label }) => (
            <li key={href}><a href={href}>{label}</a></li>
          ))}
        </ul>
        <a href="#contact" className={styles.cta}>Démarrer un projet</a>

        <button
          className={styles.burger}
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          <span className={`${styles.bar} ${open ? styles.barOpen : ''}`} />
        </button>
      </nav>

      {open && (
        <div className={styles.overlay} onClick={(e) => { if (e.target === e.currentTarget) setOpen(false) }}>
          <button
            className={styles.close}
            onClick={() => setOpen(false)}
            aria-label="Fermer le menu"
          >
            ✕
          </button>

          <ul className={styles.overlayLinks} role="list">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a href={href} onClick={() => setOpen(false)}>{label}</a>
              </li>
            ))}
          </ul>

          <a href="#contact" className={styles.overlayCta} onClick={() => setOpen(false)}>
            Démarrer un projet
          </a>
        </div>
      )}
    </>
  )
}
