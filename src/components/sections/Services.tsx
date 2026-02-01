import styles from './Services.module.css';

export default function Services() {
  return (
    <section id="services" className={`section ${styles.services}`}>
      <div className="container">
        <h2 className="section-title">손해사정사란?</h2>
        <p className="section-subtitle">
          보험 사고 발생 시 피보험자를 대리하여 보험금 청구를 전문적으로 수행합니다
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.icon}>📋</div>
            <h3>손해액 산정</h3>
            <p>정확한 손해액을 산정하여 적정 보험금을 받을 수 있도록 합니다</p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>⚖️</div>
            <h3>권익 보호</h3>
            <p>보험사와의 협상에서 피보험자의 권익을 보호합니다</p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>📝</div>
            <h3>서류 대행</h3>
            <p>복잡한 보험 청구 서류 작성을 대행합니다</p>
          </div>

          <div className={styles.card}>
            <div className={styles.icon}>🤝</div>
            <h3>분쟁 조정</h3>
            <p>보험사와의 분쟁 발생 시 조정을 지원합니다</p>
          </div>
        </div>

        <div className={styles.highlight}>
          <h3>왜 손해사정사가 필요한가요?</h3>
          <ul>
            <li>보험사 제시 금액이 실제 손해액보다 낮은 경우가 많습니다</li>
            <li>복잡한 보험 약관을 전문가가 해석하여 누락 없이 청구합니다</li>
            <li>보험 청구 경험이 없어도 전문가가 대신 처리합니다</li>
            <li>성공 보수제로 부담 없이 상담받을 수 있습니다</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
