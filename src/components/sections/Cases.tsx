import { successCases } from '../../data/content';
import styles from './Cases.module.css';

export default function Cases() {
  return (
    <section id="cases" className={`section ${styles.cases}`}>
      <div className="container">
        <h2 className="section-title">성공 사례</h2>
        <p className="section-subtitle">
          실제 고객님들의 보험금 증액 사례입니다
        </p>

        <div className={styles.grid}>
          {successCases.map((item) => (
            <div key={item.id} className={styles.card}>
              <span className={styles.category}>{item.category}</span>
              <h3 className={styles.title}>{item.title}</h3>

              <div className={styles.amounts}>
                <div className={styles.before}>
                  <span className={styles.label}>보험사 제시</span>
                  <span className={styles.value}>{item.beforeAmount}</span>
                </div>
                <div className={styles.arrow}>→</div>
                <div className={styles.after}>
                  <span className={styles.label}>최종 수령</span>
                  <span className={styles.value}>{item.afterAmount}</span>
                </div>
              </div>

              <div className={styles.increase}>
                <span>증액률</span>
                <strong>{item.increaseRate}</strong>
              </div>
            </div>
          ))}
        </div>

        <p className={styles.disclaimer}>
          * 실제 사례를 바탕으로 작성되었으며, 결과는 개별 사안에 따라 다를 수 있습니다.
        </p>
      </div>
    </section>
  );
}
