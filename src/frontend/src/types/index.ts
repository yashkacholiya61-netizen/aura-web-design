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

export interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
}

export interface PricingPlan {
  name: string;
  tagline: string;
  price: string;
  currency: string;
  period: string;
  features: string[];
  highlighted: boolean;
  cta: string;
}

export interface TeamContact {
  name: string;
  role: string;
  phone: string;
  phoneDisplay: string;
}
