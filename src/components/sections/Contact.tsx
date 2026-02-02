import { useState } from 'react';
import type { ContactForm } from '../../types';
import { companyInfo } from '../../data/content';
import Button from '../common/Button';
import styles from './Contact.module.css';

// Google Form Entry IDs - Google Form 생성 후 실제 ID로 교체 필요
const GOOGLE_FORM_CONFIG = {
  // Google Form의 action URL (폼 편집 화면에서 확인)
  // 형식: https://docs.google.com/forms/d/e/FORM_ID/formResponse
  actionUrl: 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse',

  // 각 필드의 entry ID (폼 미리보기에서 개발자도구로 확인)
  fields: {
    name: 'entry.XXXXXX',      // 이름 필드
    phone: 'entry.XXXXXX',     // 연락처 필드
    category: 'entry.XXXXXX', // 상담분야 필드
    message: 'entry.XXXXXX',  // 상담내용 필드
  },
};

export default function Contact() {
  const [form, setForm] = useState<ContactForm>({
    name: '',
    phone: '',
    category: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // FormData 생성
      const formData = new FormData();
      formData.append(GOOGLE_FORM_CONFIG.fields.name, form.name);
      formData.append(GOOGLE_FORM_CONFIG.fields.phone, form.phone);
      formData.append(GOOGLE_FORM_CONFIG.fields.category, form.category);
      formData.append(GOOGLE_FORM_CONFIG.fields.message, form.message);

      // Google Form은 CORS를 지원하지 않으므로 no-cors 모드 사용
      await fetch(GOOGLE_FORM_CONFIG.actionUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: formData,
      });

      // no-cors 모드에서는 응답을 확인할 수 없으므로 성공으로 간주
      setSubmitStatus('success');
      setForm({ name: '', phone: '', category: '', message: '' });
    } catch (error) {
      console.error('폼 제출 오류:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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

            <Button type="submit" fullWidth size="lg" disabled={isSubmitting}>
              {isSubmitting ? '접수 중...' : '무료 상담 신청하기'}
            </Button>

            {submitStatus === 'success' && (
              <p className={styles.successMessage}>
                상담 신청이 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.
              </p>
            )}

            {submitStatus === 'error' && (
              <p className={styles.errorMessage}>
                접수 중 오류가 발생했습니다. 전화로 문의해 주세요.
              </p>
            )}
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
