import type { NavItem, Specialty, ProcessStep, Case, Review } from '../types';

export const navItems: NavItem[] = [
  { id: 'services', label: '서비스 소개', href: '#services' },
  { id: 'specialties', label: '전문 분야', href: '#specialties' },
  { id: 'cases', label: '성공 사례', href: '#cases' },
  { id: 'contact', label: '상담 신청', href: '#contact' },
];

export const heroSlides = [
  {
    id: 1,
    title: '보험금, 제대로 받고 계신가요?',
    subtitle: '전문 손해사정사가 정당한 보험금 수령을 도와드립니다',
  },
  {
    id: 2,
    title: '보험사 제시 금액이 적정한가요?',
    subtitle: '무료 상담으로 숨겨진 보험금을 찾아드립니다',
  },
  {
    id: 3,
    title: '복잡한 보험 청구, 전문가에게 맡기세요',
    subtitle: '20년 경력의 손해사정사가 함께합니다',
  },
];

export const specialties: Specialty[] = [
  {
    id: 1,
    icon: '🚗',
    title: '교통사고',
    description: '자동차 사고로 인한 인적·물적 피해 보상',
    cases: ['자동차 상해', '대인/대물 배상', '자기신체사고', '무보험차 상해'],
  },
  {
    id: 2,
    icon: '🏭',
    title: '산업재해',
    description: '업무 중 발생한 재해 및 직업병 보상',
    cases: ['업무상 재해', '출퇴근 재해', '직업병', '사망사고'],
  },
  {
    id: 3,
    icon: '🔥',
    title: '화재사고',
    description: '화재로 인한 재산 및 인명 피해 보상',
    cases: ['주택 화재', '공장 화재', '차량 화재', '폭발사고'],
  },
  {
    id: 4,
    icon: '🏥',
    title: '상해/질병',
    description: '각종 상해 및 질병 보험금 청구',
    cases: ['실손보험', '암보험', '수술비', '입원비'],
  },
];

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    step: 1,
    title: '무료 상담',
    description: '전화 또는 방문 상담으로 사건 내용을 파악합니다',
  },
  {
    id: 2,
    step: 2,
    title: '사건 분석',
    description: '보험 계약 및 사고 내용을 면밀히 분석합니다',
  },
  {
    id: 3,
    step: 3,
    title: '보험금 청구',
    description: '적정 보험금 산정 후 보험사에 청구합니다',
  },
  {
    id: 4,
    step: 4,
    title: '보험금 지급',
    description: '협상 및 조정을 통해 정당한 보험금을 받습니다',
  },
];

export const successCases: Case[] = [
  {
    id: 1,
    category: '교통사고',
    title: '후유장해 보험금 증액',
    beforeAmount: '2,000만원',
    afterAmount: '5,500만원',
    increaseRate: '175%',
  },
  {
    id: 2,
    category: '산업재해',
    title: '산재 보험금 청구',
    beforeAmount: '800만원',
    afterAmount: '2,400만원',
    increaseRate: '200%',
  },
  {
    id: 3,
    category: '화재사고',
    title: '화재 피해 보상',
    beforeAmount: '3,000만원',
    afterAmount: '7,200만원',
    increaseRate: '140%',
  },
];

export const reviews: Review[] = [
  {
    id: 1,
    name: '김OO',
    category: '교통사고',
    content: '보험사에서 제시한 금액이 너무 적어 상담받았는데, 3배 가까이 더 받을 수 있었습니다. 정말 감사합니다.',
    rating: 5,
  },
  {
    id: 2,
    name: '이OO',
    category: '산업재해',
    content: '산재 처리가 복잡해서 포기하려 했는데, 처음부터 끝까지 도와주셔서 무사히 보상받았습니다.',
    rating: 5,
  },
  {
    id: 3,
    name: '박OO',
    category: '상해/질병',
    content: '여러 보험에 가입되어 있었는데 몰랐던 보험금까지 찾아주셨어요. 전문가의 도움이 꼭 필요합니다.',
    rating: 5,
  },
];

export const companyInfo = {
  name: '○○○ 손해사정사사무소',
  ceo: '홍길동',
  phone: '02-1234-5678',
  mobile: '010-1234-5678',
  email: 'info@example.com',
  address: '서울특별시 강남구 테헤란로 123, 4층',
  businessNumber: '123-45-67890',
};
