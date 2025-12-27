
export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  details: string[];
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image?: string;
}
