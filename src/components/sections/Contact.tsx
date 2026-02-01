import { useState } from 'react';
import type { ContactForm } from '../../types';
import { companyInfo } from '../../data/content';
import Button from '../common/Button';
import styles from './Contact.module.css';

export default function Contact() {
  const [form, setForm] = useState<ContactForm>({
    name: '',
    phone: '',
    category: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 실제 폼 제출 로직 구현
    alert('상담 신청이 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.');
    setForm({ name: '', phone: '', category: '', message: '' });
  };

  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">
        <h2 className="section-title">무료 상담 신청</h2>
        <p className="section-subtitle">
          연락처를 남겨주시면 전문 상담사가 친절하게 안내해 드립니다
        </p>

        <div className={styles.wrapper}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label htmlFor="name">이름</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="이름을 입력해주세요"
                required
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="phone">연락처</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="010-0000-0000"
                required
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="category">상담 분야</label>
              <select
                id="category"
                name="category"
                value={form.category}
                onChange={handleChange}
                required
              >
                <option value="">선택해주세요</option>
                <option value="교통사고">교통사고</option>
                <option value="산업재해">산업재해</option>
                <option value="화재사고">화재사고</option>
                <option value="상해/질병">상해/질병</option>
                <option value="기타">기타</option>
              </select>
            </div>

            <div className={styles.field}>
              <label htmlFor="message">상담 내용</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="상담받고 싶은 내용을 간략히 적어주세요"
                rows={4}
              />
            </div>

            <Button type="submit" fullWidth size="lg">
              무료 상담 신청하기
            </Button>
          </form>

          <div className={styles.info}>
            <h3>빠른 상담</h3>
            <p>지금 바로 전화 상담을 원하시나요?</p>
            <a href={`tel:${companyInfo.phone}`} className={styles.phone}>
              📞 {companyInfo.phone}
            </a>

            <div className={styles.hours}>
              <h4>상담 가능 시간</h4>
              <p>평일 09:00 - 18:00</p>
              <p>토요일 10:00 - 14:00</p>
            </div>

            <div className={styles.promise}>
              <h4>약속드립니다</h4>
              <ul>
                <li>✓ 무료 상담</li>
                <li>✓ 성공 보수제</li>
                <li>✓ 비밀 보장</li>
                <li>✓ 신속한 처리</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
