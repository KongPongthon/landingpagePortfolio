'use client';

import { useEffect, useRef } from 'react';
import Tilt from 'react-parallax-tilt';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { nanoid } from 'nanoid';
import { useLangStore } from '@/store/useLangStore';
import {
  css,
  docker,
  express,
  gin,
  go,
  html,
  js,
  mongodb,
  mui,
  nextjs,
  nginx,
  nodejs,
  posgresql,
  prisma,
  react,
  shadcn,
  tailwind,
  types,
  vue,
  zod,
  zustand,
} from '@/assets/img';

function SkillsSection() {
  const lang = useLangStore((s) => s.lang);
  const sectionRef = useRef<HTMLLIElement>(null);
  const skillsRef = useRef<HTMLLIElement[]>([]);
  const learningRef = useRef<HTMLHeadingElement>(null);

  const addToSkills = (el: HTMLLIElement | null) => {
    if (el && !skillsRef.current.includes(el)) {
      skillsRef.current.push(el);
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // เคลียร์ state เริ่มต้นของทุกไอเท็ม
    gsap.set(skillsRef.current, { y: 50, opacity: 0 });

    const ctx = gsap.context(() => {
      ScrollTrigger.batch(skillsRef.current, {
        start: 'top 85%',
        // เข้า viewport จากด้านล่าง
        onEnter: (els) => {
          gsap.to(els, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out',
            stagger: 0.06, //
            overwrite: 'auto',
          });
        },
        // กลับเข้า viewport จากด้านบน (เวลาเลื่อนย้อนขึ้น)
        onEnterBack: (els) => {
          gsap.to(els, {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: 'power2.out',
            stagger: 0.05,
            overwrite: 'auto',
          });
        },
        // เลื่อนไปด้านบนจนพ้น viewport (ย้อนกลับ) → รีเซ็ตให้พร้อมเล่นใหม่
        onLeaveBack: (els) => {
          gsap.to(els, {
            y: 50,
            opacity: 0,
            duration: 0.3,
            overwrite: 'auto',
          });
        },
        // ถ้าอยากให้เลื่อนลงจนพ้นจอแล้วรีเซ็ตด้วย ก็เพิ่ม onLeave ตรงนี้ได้
        onLeave: (els) => gsap.set(els, { y: 50, opacity: 0 }),
      });

      if (learningRef.current) {
        gsap.fromTo(
          learningRef.current,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: learningRef.current,
              start: 'top 80%',
              // ถ้าอยากให้เล่นครั้งเดียวใช้: 'play none none none'
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [sectionRef]);

  return (
    <section id='skills' ref={sectionRef} className=' '>
      <h2
        ref={learningRef}
        className='text-center text-4xl tracking-wider mt-10 font-noto'
      >
        {lang === 'en' ? 'My Skills' : 'ทักษะของฉัน'}
      </h2>
      <div className='container mx-auto'>
        <ul className='grid grid-cols-3 lg:grid-cols-4 place-items-center gap-2'>
          {skills.map((skill) => {
            const { skillIcon, id, skillName } = skill;
            return (
              <li
                key={id}
                ref={addToSkills}
                className='mt-10 p-4 transition-all duration-300 hover:scale-[1.2]'
              >
                <Tilt>
                  <a
                    // href={skill.link}
                    target='_blank'
                    rel='noreferrer'
                    className='flex flex-col items-center gap-4'
                  >
                    <div className='relative w-20 h-20'>
                      <Image
                        src={skillIcon}
                        alt={skillName}
                        fill
                        className='object-contain'
                      />
                    </div>
                    <p className='text-lg tracking-wider'>{skillName}</p>
                  </a>
                </Tilt>
              </li>
            );
          })}
        </ul>
      </div>

      <div className=' mt-36'>
        <h2
          ref={learningRef}
          className='text-center text-4xl tracking-wider font-noto'
        >
          {lang === 'en' ? 'Learning' : 'กำลังเรียนรู้'}
        </h2>

        <div className='container mx-auto mt-16'>
          <ul className='grid grid-cols-3 lg:grid-cols-4 place-items-center gap-2'>
            {learning.map((skill) => {
              const { skillIcon, id, skillName } = skill;
              return (
                <li
                  key={id}
                  ref={addToSkills}
                  className='mt-10 p-4 transition-all duration-300 hover:scale-[1.2]'
                >
                  <Tilt>
                    <a
                      // href={skill.link}
                      target='_blank'
                      rel='noreferrer'
                      className='flex flex-col items-center gap-4'
                    >
                      <div className='relative w-20 h-20'>
                        <Image
                          src={skillIcon}
                          alt={skillName}
                          fill
                          className='object-contain'
                        />
                      </div>
                      <p className='text-lg tracking-wider'>{skillName}</p>
                    </a>
                  </Tilt>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;

const skills = [
  {
    skillName: 'HTML',
    skillIcon: html,
    id: nanoid(),
  },
  {
    skillName: 'CSS',
    skillIcon: css,
    id: nanoid(),
  },
  {
    skillName: 'JavaScript',
    skillIcon: js,
    id: nanoid(),
  },
  {
    skillName: 'React',
    skillIcon: react,
    id: nanoid(),
  },
  {
    skillName: 'Tailwind',
    skillIcon: tailwind,
    id: nanoid(),
  },
  {
    skillName: 'next.js',
    skillIcon: nextjs,
    id: nanoid(),
  },
  {
    skillName: 'docker',
    skillIcon: docker,
    id: nanoid(),
  },
  {
    skillName: 'MUI',
    skillIcon: mui,
    id: nanoid(),
  },
  {
    skillName: 'Prisma',
    skillIcon: prisma,
    id: nanoid(),
  },
  {
    skillName: 'Shadcn UI',
    skillIcon: shadcn,
    id: nanoid(),
  },
  {
    skillName: 'Nodejs',
    skillIcon: nodejs,
    id: nanoid(),
  },
  {
    skillName: 'Typescript',
    skillIcon: types,
    id: nanoid(),
  },
  {
    skillName: 'Express',
    skillIcon: express,
    id: nanoid(),
  },
  {
    skillName: 'Zod',
    skillIcon: zod,
    id: nanoid(),
  },
  {
    skillName: 'Zustand',
    skillIcon: zustand,
    id: nanoid(),
  },
  {
    skillName: 'MongoDB',
    skillIcon: mongodb,
    id: nanoid(),
  },
  {
    skillName: 'Nginx',
    skillIcon: nginx,
    id: nanoid(),
  },
];

const learning = [
  {
    skillName: 'posgresql',
    skillIcon: posgresql,
    id: nanoid(),
  },
  {
    skillName: 'go',
    skillIcon: go,
    id: nanoid(),
  },
  {
    skillName: 'gin',
    skillIcon: gin,
    id: nanoid(),
  },
  {
    skillName: 'vue',
    skillIcon: vue,
    id: nanoid(),
  },
];
