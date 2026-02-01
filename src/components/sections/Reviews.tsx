import { reviews } from '../../data/content';
import styles from './Reviews.module.css';

export default function Reviews() {
  return (
    <section className={`section ${styles.reviews}`}>
      <div className="container">
        <h2 className="section-title">고객 후기</h2>
        <p className="section-subtitle">
          저희 서비스를 이용하신 고객님들의 생생한 후기입니다
        </p>

        <div className={styles.grid}>
          {reviews.map((review) => (
            <div key={review.id} className={styles.card}>
              <div className={styles.rating}>
                {'★'.repeat(review.rating)}
              </div>
              <p className={styles.content}>"{review.content}"</p>
              <div className={styles.author}>
                <span className={styles.name}>{review.name}</span>
                <span className={styles.category}>{review.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
