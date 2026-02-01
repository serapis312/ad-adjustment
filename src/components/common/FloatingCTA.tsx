import { companyInfo } from '../../data/content';
import styles from './FloatingCTA.module.css';

export default function FloatingCTA() {
  return (
    <div className={styles.floating}>
      <a
        href={`tel:${companyInfo.phone}`}
        className={`${styles.button} ${styles.phone}`}
        aria-label="전화 상담"
      >
        📞
      </a>
      <a
        href="#contact"
        className={`${styles.button} ${styles.kakao}`}
        aria-label="카카오톡 상담"
      >
        💬
      </a>
    </div>
  );
}
