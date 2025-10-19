'use client';
import { IconProfile } from '@/assets/image';
import { useLangStore } from '@/store/useLangStore';
import Image from 'next/image';
import React from 'react';

const AboutSection = () => {
  const lang = useLangStore((s) => s.lang);
  return (
    <div
      id='about'
      className='grid grid-cols-1 md:grid-cols-2 gap-10 items-center'
    >
      {/* Left side: Visual */}
      <div className='flex justify-center'>
        <div className='relative w-64 h-64 md:w-80 md:h-100 rounded-2xl overflow-hidden shadow-xl hidden md:block'>
          <Image
            src={IconProfile} // 👉 เปลี่ยนเป็นรูปคุณ หรือ illustration
            alt='Profile Picture'
            fill
            className='object-cover'
          />
        </div>
      </div>

      {/* Right side: About text */}
      <section className='max-w-4xl mx-auto py-20 text-center md:text-left'>
        <h2 className='text-center text-4xl tracking-wider mt-10 mb-10 md:mb-5 font-noto'>
          {lang === 'en' ? 'About Me' : 'เกี่ยวกับฉัน'}
        </h2>

        <p className='text-lg leading-relaxed text-gray-600'>
          {lang === 'en'
            ? `I'm a Full Stack Developer with a passion for building web
      applications that are fast, scalable, and user-friendly. With
      experience in Next.js, React, Express, Node.js, MongoDB, SQLite,
      Prisma, and Mongoose, I enjoy turning ideas into real products that
      provide value.`
            : 'ผมเป็น Full Stack Developer ที่มีความหลงใหลในการพัฒนาเว็บแอปพลิเคชันที่มีความรวดเร็ว ขยายขนาดได้ง่าย และใช้งานสะดวก ด้วยประสบการณ์การทำงานกับ Next.js, React, Express, Node.js, MongoDB, SQLite, Prisma และ Mongoose ผมสนุกกับการเปลี่ยนไอเดียให้กลายเป็นผลิตภัณฑ์ที่ใช้งานได้จริงและสร้างคุณค่า'}
        </p>

        <p className='text-lg leading-relaxed text-gray-600 mt-4'>
          {lang === 'en' ? 'I focus on:' : 'ผมให้ความสำคัญกับ:'}
        </p>
        <ul className='list-disc list-inside text-lg leading-relaxed text-gray-600'>
          <li>
            {lang === 'en'
              ? 'Designing responsive UI with Tailwind CSS & Shadcn UI'
              : 'การออกแบบ Responsive UI ด้วย Tailwind CSS และ Shadcn UI'}
          </li>
          <li>
            {lang === 'en'
              ? 'Building and optimizing RESTful APIs'
              : 'การพัฒนาและปรับแต่ง RESTful API'}
          </li>
          <li>
            {lang === 'en'
              ? 'Database design and integration for real-world applications'
              : 'การออกแบบและเชื่อมต่อฐานข้อมูลสำหรับการใช้งานจริง'}
          </li>
          <li>
            {lang === 'en'
              ? 'Using Docker and GitHub to manage scalable development workflow'
              : 'การใช้งาน Docker และ GitHub เพื่อจัดการการพัฒนาที่สามารถขยายขนาดได้ง่าย'}
          </li>
        </ul>

        <p className='text-lg leading-relaxed text-gray-600 mt-6'>
          {lang === 'en'
            ? `I’m always eager to learn, experiment, and take on new challenges in
      web development.`
            : 'ผมมักกระตือรือร้นที่จะเรียนรู้ ทดลอง และรับมือกับความท้าทายใหม่ๆ ในการพัฒนาเว็บอยู่เสมอ'}
        </p>

        {/* Optional extra */}
        <p className='text-lg leading-relaxed text-gray-600 mt-4 italic'>
          {lang === 'en'
            ? `My goal is to become a well-rounded developer with strong expertise
      in cloud and scalable systems.`
            : 'เป้าหมายของผมคือการเติบโตเป็นนักพัฒนาที่เชี่ยวชาญด้าน Cloud และระบบที่ขยายขนาดได้'}
        </p>
      </section>
    </div>
  );
};

export default AboutSection;
