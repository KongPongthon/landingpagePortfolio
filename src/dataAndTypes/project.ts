import {
  projectImage,
  projectImage2,
  projectImage3,
  projectImage4,
} from '@/../public/assets/projects';
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
    title: 'techHub',
    url: 'https://tecth-hub.netlify.app/',
    sourceCode: 'https://github.com/Nasaee/techhub-store',
    infoEng: 'tecthHub Store ecommerce website',
    infoTh: 'tecthHub ร้านค้าอุปกรณ์ IT ออนไลน์',
    img: projectImage,
    technology: [
      'TypeScript',
      'JavaScript',
      'React.js', 
      'Node.js',
      'Tailwind CSS',
    ],
  },
  {
    id: nanoid(),
    title: 'Fitness Hub',
    url: 'https://fitness-hub-application.netlify.app/',
    sourceCode: 'https://github.com/Nasaee/FitnessHub',
    infoEng: 'Fitness Hub online and offline fitness application',
    infoTh: 'Fitness Hub แอปพลิเคชันการออกกําลังกายออนไลน์และออฟไลน์',
    img: projectImage2,
    technology: ['TypeScript', 'React.js', 'Styled-components'],
  },
  {
    id: nanoid(),
    title: 'Fitness Hub',
    url: 'https://fitness-hub-application.netlify.app/',
    sourceCode: 'https://github.com/Nasaee/FitnessHub',
    infoEng: 'Fitness Hub online and offline fitness application',
    infoTh: 'Fitness Hub แอปพลิเคชันการออกกําลังกายออนไลน์และออฟไลน์',
    img: projectImage3,
    technology: ['TypeScript', 'React.js', 'Styled-components'],
  },
  {
    id: nanoid(),
    title: 'Fitness Hub',
    url: 'https://fitness-hub-application.netlify.app/',
    sourceCode: 'https://github.com/Nasaee/FitnessHub',
    infoEng: 'Fitness Hub online and offline fitness application',
    infoTh: 'Fitness Hub แอปพลิเคชันการออกกําลังกายออนไลน์และออฟไลน์',
    img: projectImage4,
    technology: ['TypeScript', 'React.js', 'Styled-components'],
  },
];
