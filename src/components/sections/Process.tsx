import { processSteps } from '../../data/content';
import styles from './Process.module.css';

export default function Process() {
  return (
    <section className={`section ${styles.process}`}>
      <div className="container">
        <h2 className="section-title">상담 프로세스</h2>
        <p className="section-subtitle">
          간단한 4단계로 정당한 보험금을 받으실 수 있습니다
        </p>

        <div className={styles.steps}>
          {processSteps.map((step, index) => (
            <div key={step.id} className={styles.step}>
              <div className={styles.number}>{step.step}</div>
              <div className={styles.content}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
              {index < processSteps.length - 1 && (
                <div className={styles.arrow}>→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
