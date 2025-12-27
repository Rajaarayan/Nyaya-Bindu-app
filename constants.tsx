
import React from 'react';
import { 
  Scale, 
  Gavel, 
  Briefcase, 
  Users, 
  Home, 
  ShieldCheck, 
  Globe,
  FileText,
  Star
} from 'lucide-react';
import { NavItem, Service, Testimonial } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Consultancy', href: '#consultancy' },
  { label: 'AI Assistant', href: '#ai-assistant' },
];

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/company/nyayabindu",
  twitter: "https://twitter.com/nyayabindu",
  instagram: "https://instagram.com/nyayabindu",
};

export const SERVICES: Service[] = [
  {
    id: 'corporate',
    title: 'Corporate Law',
    description: 'Expert guidance on company formation, compliance, and mergers.',
    details: ['Entity Formation', 'Mergers & Acquisitions', 'Commercial Contracts', 'Regulatory Compliance'],
    icon: 'Briefcase'
  },
  {
    id: 'family',
    title: 'Family Law',
    description: 'Compassionate legal support for matrimonial and succession matters.',
    details: ['Divorce & Mediation', 'Child Custody', 'Inheritance Law', 'Succession Planning'],
    icon: 'Users'
  },
  {
    id: 'criminal',
    title: 'Criminal Defense',
    description: 'Robust representation in constitutional rights and white-collar crimes.',
    details: ['Bail Applications', 'White Collar Crime', 'Quashing Petitions', 'Trial Advocacy'],
    icon: 'ShieldCheck'
  },
  {
    id: 'real-estate',
    title: 'Real Estate',
    description: 'Diligence on title deeds and RERA compliance services.',
    details: ['Property Verification', 'RERA Litigation', 'Lease Agreements', 'Title Searching'],
    icon: 'Home'
  },
  {
    id: 'ipr',
    title: 'Intellectual Property',
    description: 'Protecting innovations through patent and trademark registration.',
    details: ['Trademark Filing', 'Patent Prosecution', 'Copyright Protection', 'IP Litigation'],
    icon: 'Globe'
  },
  {
    id: 'civil',
    title: 'Civil Litigation',
    description: 'Strategic advocacy for recovery suits and dispute resolutions.',
    details: ['Debt Recovery', 'Injunction Suits', 'Arbitration', 'Consumer Protection'],
    icon: 'Scale'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    role: 'CEO, TechScale India',
    content: "Nyayabindu's corporate counsel was instrumental during our Series B funding. Their precision and attention to regulatory nuances are truly unmatched.",
    image: 'https://i.pravatar.cc/150?u=rajesh'
  },
  {
    id: '2',
    name: 'Meera Iyer',
    role: 'Real Estate Developer',
    content: "Transparent, rigorous, and highly professional. They handled our RERA compliance and title verifications with absolute clarity and speed.",
    image: 'https://i.pravatar.cc/150?u=meera'
  },
  {
    id: '3',
    name: 'Dr. Anirudh Singh',
    role: 'Private Client',
    content: "In sensitive family matters, empathy is as vital as expertise. Nyayabindu provided both, ensuring a dignified resolution for all parties involved.",
    image: 'https://i.pravatar.cc/150?u=anirudh'
  }
];

export const ICON_MAP: Record<string, React.ReactNode> = {
  Briefcase: <Briefcase className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6" />,
  Home: <Home className="w-6 h-6" />,
  Globe: <Globe className="w-6 h-6" />,
  Scale: <Scale className="w-6 h-6" />,
  FileText: <FileText className="w-6 h-6" />,
  Gavel: <Gavel className="w-6 h-6" />,
  Star: <Star className="w-6 h-4 text-yellow-500 fill-yellow-500" />
};

export const FORMSPREE_URL = "https://formspree.io/f/xzdpppoe";
