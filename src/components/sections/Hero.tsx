import { useState, useEffect } from 'react';
import { heroSlides } from '../../data/content';
import Button from '../common/Button';
import styles from './Hero.module.css';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.slides}>
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
          >
            <div className="container">
              <div className={styles.content}>
                <h1 className={styles.title}>{slide.title}</h1>
                <p className={styles.subtitle}>{slide.subtitle}</p>
                <div className={styles.buttons}>
                  <Button size="lg">무료 상담 신청</Button>
                  <Button size="lg" variant="outline">
                    서비스 알아보기
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.indicators}>
        {heroSlides.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${index === currentSlide ? styles.active : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`슬라이드 ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
