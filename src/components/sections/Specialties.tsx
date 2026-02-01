import { specialties } from '../../data/content';
import styles from './Specialties.module.css';

export default function Specialties() {
  return (
    <section id="specialties" className={`section ${styles.specialties}`}>
      <div className="container">
        <h2 className="section-title">전문 분야</h2>
        <p className="section-subtitle">
          다양한 보험 사고에 대한 전문적인 손해사정 서비스를 제공합니다
        </p>

        <div className={styles.grid}>
          {specialties.map((specialty) => (
            <div key={specialty.id} className={styles.card}>
              <div className={styles.icon}>{specialty.icon}</div>
              <h3 className={styles.title}>{specialty.title}</h3>
              <p className={styles.description}>{specialty.description}</p>
              <ul className={styles.cases}>
                {specialty.cases.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
