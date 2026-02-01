import { useState } from 'react';
import { navItems, companyInfo } from '../../data/content';
import Button from './Button';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <a href="#" className={styles.logo}>
          <span className={styles.logoText}>손해사정사</span>
        </a>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={styles.navLink}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <a href={`tel:${companyInfo.phone}`} className={styles.phone}>
            📞 {companyInfo.phone}
          </a>
          <Button size="sm">무료 상담</Button>
        </div>

        <button
          className={styles.menuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="메뉴 열기"
        >
          <span className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`} />
        </button>
      </div>
    </header>
  );
}
