import {
  Captures,
  projectImage,
  projectImage2,
  projectImage3,
  projectImage4,
} from '@/assets/projects';
import { nanoid } from 'nanoid';
import { StaticImageData } from 'next/image';

export interface Project {
  id: string;
  title: string;
  url?: string;
  sourceCode?: string;
  infoEng: string;
  infoTh: string;
  img: StaticImageData;
  technology: string[];
}

export const projects: Project[] = [
  {
    id: nanoid(),
    title: 'Cafe And Dessert',
    // url: 'https://tecth-hub.netlify.app/',
    sourceCode: 'https://github.com/KongPongthon/WebsiteBlog',
    infoEng: 'Cafe And Dessert Blog Online Store',
    infoTh: 'Cafe And Dessert แบรนด์บล็อกออนไลน์',
    img: Captures,
    technology: ['JavaScript', 'React.js', 'Node.js', 'Tailwind CSS'],
  },
  // {
  //   id: nanoid(),
  //   title: 'Fitness Hub',
  //   url: 'https://fitness-hub-application.netlify.app/',
  //   sourceCode: 'https://github.com/Nasaee/FitnessHub',
  //   infoEng: 'Fitness Hub online and offline fitness application',
  //   infoTh: 'Fitness Hub แอปพลิเคชันการออกกําลังกายออนไลน์และออฟไลน์',
  //   img: projectImage2,
  //   technology: ['TypeScript', 'React.js', 'Styled-components'],
  // },
  // {
  //   id: nanoid(),
  //   title: 'Fitness Hub',
  //   url: 'https://fitness-hub-application.netlify.app/',
  //   sourceCode: 'https://github.com/Nasaee/FitnessHub',
  //   infoEng: 'Fitness Hub online and offline fitness application',
  //   infoTh: 'Fitness Hub แอปพลิเคชันการออกกําลังกายออนไลน์และออฟไลน์',
  //   img: projectImage3,
  //   technology: ['TypeScript', 'React.js', 'Styled-components'],
  // },
  // {
  //   id: nanoid(),
  //   title: 'Fitness Hub',
  //   url: 'https://fitness-hub-application.netlify.app/',
  //   sourceCode: 'https://github.com/Nasaee/FitnessHub',
  //   infoEng: 'Fitness Hub online and offline fitness application',
  //   infoTh: 'Fitness Hub แอปพลิเคชันการออกกําลังกายออนไลน์และออฟไลน์',
  //   img: projectImage4,
  //   technology: ['TypeScript', 'React.js', 'Styled-components'],
  // },
];
