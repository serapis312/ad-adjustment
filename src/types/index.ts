export interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export interface Specialty {
  id: number;
  icon: string;
  title: string;
  description: string;
  cases: string[];
}

export interface ProcessStep {
  id: number;
  step: number;
  title: string;
  description: string;
}

export interface Case {
  id: number;
  category: string;
  title: string;
  beforeAmount: string;
  afterAmount: string;
  increaseRate: string;
}

export interface Review {
  id: number;
  name: string;
  category: string;
  content: string;
  rating: number;
}

export interface ContactForm {
  name: string;
  phone: string;
  category: string;
  message: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
}
