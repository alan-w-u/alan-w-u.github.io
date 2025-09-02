import { useState } from 'react'
import styles from './Nav.module.css'

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const pages: string[] = [
    'about',
    'experience',
    'projects',
    'skills',
    'contact'
  ]

  function navigate(id: string) {
    document.getElementById(id)?.scrollIntoView()
    setIsMenuOpen(false)
  }

  return (
    <nav className={`${styles['nav']} glass`}>
      <p className={styles['name']}>Alan Wu</p>
      <div className={`${styles['menu']} ${isMenuOpen && styles['open']}`}>
        {pages.map(page => (
          <p
            key={page}
            onClick={() => navigate(page)}
          >
            {page}
          </p>
        ))}
      </div>
      <div
        className={styles['menu-button']}
        onClick={() => setIsMenuOpen(state => !state)}
      >
        <div className={`${styles['chevron']} ${styles['left']} ${isMenuOpen && styles['open']}`} />
        <div className={`${styles['chevron']} ${styles['right']} ${isMenuOpen && styles['open']}`} />
      </div>
    </nav>
  )
}
