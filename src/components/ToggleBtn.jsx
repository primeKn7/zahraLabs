import styles from './ToggleBtn.module.css'

/**
 * The pill/toggle CTA button — text left, circular switch right.
 * variant: 'dark' (dark bg, white circle) | 'light' (white bg, dark circle)
 */
export default function ToggleBtn({ children, href = '#', variant = 'dark', onClick }) {
  const cls = `${styles.btn} ${styles[variant]}`

  if (href) {
    return (
      <a href={href} className={cls}>
        <span className={styles.label}>{children}</span>
        <span className={styles.circle} aria-hidden="true" />
      </a>
    )
  }

  return (
    <button type="submit" className={cls} onClick={onClick}>
      <span className={styles.label}>{children}</span>
      <span className={styles.circle} aria-hidden="true" />
    </button>
  )
}
