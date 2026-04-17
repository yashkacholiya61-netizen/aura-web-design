export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  features: string[];
  href: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  tagline: string;
  description: string;
  items: ServiceItem[];
  gradient: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  category: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  year: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  socials?: {
    instagram?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  project: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface WhyChooseUsItem {
  title: string;
  description: string;
  icon: string;
  stat?: string;
  statLabel?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  projectType: "frontend" | "backend" | "fullstack" | "other";
  message: string;
}

export interface ContactSubmission extends ContactFormData {
  id: string;
  createdAt: string;
  status: "pending" | "read" | "replied";
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface TeamContact {
  name: string;
  role: string;
  phone: string;
  phoneDisplay: string;
}
