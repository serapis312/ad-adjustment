import { companyInfo } from '../../data/content';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.info}>
            <h3 className={styles.companyName}>{companyInfo.name}</h3>
            <ul className={styles.infoList}>
              <li>대표: {companyInfo.ceo}</li>
              <li>사업자등록번호: {companyInfo.businessNumber}</li>
              <li>주소: {companyInfo.address}</li>
            </ul>
          </div>

          <div className={styles.contact}>
            <h4>상담 문의</h4>
            <p className={styles.phone}>📞 {companyInfo.phone}</p>
            <p className={styles.mobile}>📱 {companyInfo.mobile}</p>
            <p className={styles.email}>✉️ {companyInfo.email}</p>
          </div>

          <div className={styles.hours}>
            <h4>상담 시간</h4>
            <p>평일 09:00 - 18:00</p>
            <p>토요일 10:00 - 14:00</p>
            <p className={styles.holiday}>일요일/공휴일 휴무</p>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; 2024 {companyInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
