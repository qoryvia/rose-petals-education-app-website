import {
  FaTrophy, FaLightbulb, FaLock, FaSeedling, FaChalkboardTeacher,
  FaBookOpen, FaFutbol, FaPalette, FaShieldAlt, FaSun,
} from 'react-icons/fa'

export const site = {
  name: 'Rose Petals Convent School',
  place: 'Kasia (Kushinagar)',
  motto: 'Developing A Bright Future',
  tagline: 'Inspiring Excellence. Empowering Futures.',
  session: '2026–2027',
  udise: '9590805731',
  address:
    'NH 28 B, Opposite Indian Petrol Pump, Sapaha Road, Kasia Bazaar, Kushinagar, Pin Code: 274402, Uttar Pradesh, India',
  phones: [
    { label: '+91 99193 19099', href: 'tel:+919919319099' },
    { label: '+91 89488 81499', href: 'tel:+918948881499' },
  ],
  whatsapp: '919919319099',
  email: 'rosepetalsconvent40@gmail.com',
  website: 'rosepetalsschool.org',
  websiteUrl: 'http://rosepetalsschool.org/',
  facebook: 'https://www.facebook.com/rosepetalsconventschool/',
  instagram: 'https://www.instagram.com/rpcskasia/',
  mapEmbed:
    'https://www.google.com/maps?q=Rose+Petals+Convent+School+Kasia+Kushinagar&output=embed',
}

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/academics', label: 'Academics & Facilities' },
  { to: '/admissions', label: 'Admissions' },
  { to: '/contact', label: 'Contact Us' },
]

export const highlights = [
  { icon: FaTrophy, title: 'Academic Trust', text: 'A 4.4/5 star community rating from verified student and parent reviews.', tone: 'navy' },
  { icon: FaLightbulb, title: 'Smart Education', text: 'Dynamic smart classrooms that make learning visual and engaging.', tone: 'gold' },
  { icon: FaLock, title: 'Safe Campus', text: 'Full-campus security protocols and safety measures for complete peace of mind.', tone: 'crimson' },
  { icon: FaSeedling, title: 'Holistic Growth', text: 'Physical sports, custom assignments and creative extracurricular activities.', tone: 'leaf' },
]

export const stats = [
  { value: '4.4/5', label: 'Community rating' },
  { value: 'Nursery–VIII', label: 'Classes offered' },
  { value: 'CBSE', label: 'Curriculum pattern' },
  { value: '2026–27', label: 'Admissions open' },
]

export const whyChoose = [
  { icon: FaChalkboardTeacher, title: 'Expert Faculty', text: 'Highly experienced teachers with deep subject-matter expertise, dedicated to specialised knowledge.' },
  { icon: FaSun, title: 'Ideal Learning Environment', text: 'Large, bright, well-ventilated classrooms designed to promote attention and focus.' },
  { icon: FaShieldAlt, title: 'Government Recognized', text: `Registered and tracked under the national school database with UDISE+ Code ${site.udise}.` },
]

export const curriculum = [
  { label: 'Affiliation', value: 'Central Board of Secondary Education (CBSE) Pattern' },
  { label: 'Medium of Instruction', value: 'English-medium' },
  { label: 'Levels Covered', value: 'Pre-Primary (Nursery, LKG, UKG) to Upper Primary (Class I to VIII)' },
]

export const facilities = [
  { icon: FaChalkboardTeacher, title: 'Smart Classrooms', short: 'Tech-enabled learning spaces.', text: 'Air-conditioned, tech-enabled learning spaces that bring textbook concepts to life.' },
  { icon: FaBookOpen, title: 'Resource Library', short: 'A quiet place to read and research.', text: 'A quiet, well-stocked environment built to cultivate reading habits and assist research.' },
  { icon: FaFutbol, title: 'Playground & Sports', short: 'Physical education and team games.', text: 'Dedicated recreation areas supporting physical education, athletics and collaborative sports.' },
  { icon: FaPalette, title: 'Creative Project Labs', short: 'Student-led exhibitions.', text: 'Spaces for modern student project exhibitions, such as student-led initiatives like “Maths City” and architectural design showcases.' },
  { icon: FaShieldAlt, title: 'Safe Campus', short: 'Security protocols throughout.', text: 'Full-campus security protocols and safety measures for complete peace of mind.' },
]

export const admissionSteps = [
  { title: 'Enquiry', text: 'Submit an online enquiry form or visit the school campus on Sapaha Road.' },
  { title: 'Interaction', text: 'A brief interactive session with the student and parents to assess baseline concepts.' },
  { title: 'Documentation', text: 'Submit the required documents listed below to complete admission.' },
]

export const documents = [
  'Birth certificate',
  'Previous school report card (if applicable)',
  'Aadhaar card',
  'Passport-size photographs',
]

export const classOptions = [
  'Nursery', 'LKG', 'UKG',
  'Class I', 'Class II', 'Class III', 'Class IV',
  'Class V', 'Class VI', 'Class VII', 'Class VIII',
]
