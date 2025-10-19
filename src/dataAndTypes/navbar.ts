import { nanoid } from 'nanoid';
import { FiGithub, FiFacebook, FiLinkedin } from 'react-icons/fi';

export const menuData = [
  { id: nanoid(), name_en: 'Home', name_th: 'หน้าหลัก', toId: 'home' },
  { id: nanoid(), name_en: 'About', name_th: 'เกี่ยวกับฉัน', toId: 'about' },
  { id: nanoid(), name_en: 'Skills', name_th: 'ทักษะของฉัน', toId: 'skills' },
  { id: nanoid(), name_en: 'Projects', name_th: 'โปรเจกต์', toId: 'projects' },
  { id: nanoid(), name_en: 'Contact', name_th: 'ติดต่อ', toId: 'contact' },
];

export const socialLinks = [
  {
    id: nanoid(),
    Icon: FiGithub,
    link: 'https://github.com/Nasaee',
  },
  {
    id: nanoid(),
    Icon: FiLinkedin,
    link: 'https://www.google.com/',
  },
  {
    id: nanoid(),
    Icon: FiFacebook,
    link: 'https://www.google.com/',
  },
];
