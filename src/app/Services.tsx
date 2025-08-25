'use client';

import { Code, Database, Layout, Server } from 'lucide-react';

const services = [
  {
    title: 'Full-Stack Web Development',
    description:
      'พัฒนาเว็บแอปพลิเคชันครบวงจร ด้วย Next.js, React, Node.js และ Express รองรับทั้ง frontend และ backend.',
    icon: <Layout className='w-10 h-10 text-indigo-500' />,
  },
  {
    title: 'Backend & API Development',
    description:
      'ออกแบบและสร้าง REST API หรือ GraphQL โดยใช้ Node.js และ Express พร้อมการเชื่อมต่อฐานข้อมูล.',
    icon: <Server className='w-10 h-10 text-indigo-500' />,
  },
  {
    title: 'Database Design & Integration',
    description:
      'จัดการฐานข้อมูล MongoDB และ SQLite ด้วย Prisma และ Mongoose พร้อมการออกแบบโครงสร้างในระดับเบื้องต้น.',
    icon: <Database className='w-10 h-10 text-indigo-500' />,
  },
  {
    title: 'Frontend Development',
    description:
      'สร้าง UI ที่ใช้งานง่าย สวยงาม และตอบสนองเร็วด้วย React, Next.js, TypeScript และ Tailwind CSS.',
    icon: <Code className='w-10 h-10 text-indigo-500' />,
  },
];

export default function ServicesSection() {
  return (
    <section className=''>
      <div className='max-w-6xl mx-auto px-6'>
        <h2 className='text-3xl font-bold text-center mb-12'>
          My <span className='text-indigo-600'>Services</span>
        </h2>

        <div className='grid gap-8 md:grid-cols-2'>
          {services.map((service, index) => (
            <div
              key={index}
              className='bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300'
            >
              <div className='mb-4 flex justify-center'>{service.icon}</div>
              <h3 className='text-xl font-semibold text-gray-800 text-center mb-2'>
                {service.title}
              </h3>
              <p className='text-gray-600 text-sm text-center'>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
