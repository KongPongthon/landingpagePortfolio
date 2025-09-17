'use client';
import TextHeader from '@/components/TextHeader';
import { Button } from '@/components/ui/button';
import { useLangStore } from '@/store/useLangStore';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { CV, Icon } from '@/assets/image';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { CustomDialog } from '@/components/CustomDialog';
const Homepage = () => {
  const lang = useLangStore((s) => s.lang);
  const imageRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (imageRef.current) {
      // Floating animation
      gsap.to(imageRef.current, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });

      // Optional: hover scale effect
      gsap.set(imageRef.current, { scale: 1 });
    }
  }, []);

  const handleMouseEnter = () => {
    gsap.to(imageRef.current, { scale: 1.05, rotate: 3, duration: 0.3 });
  };

  const handleMouseLeave = () => {
    gsap.to(imageRef.current, { scale: 1, rotate: 0, duration: 0.3 });
  };
  return (
    <div id='home' className='grid grid-cols-1 md:grid-cols-2 gap-8'>
      {/* Left Section */}
      <section className='flex flex-col pt-10'>
        <div className='w-full flex justify-start text-4xl md:text-7xl font-bold mb-4'>
          Hi, I'm
        </div>
        <div className='w-full flex justify-start font-bold mb-4'>
          <span className='bg-gradient-to-r from-[#6758c5] via-[#ae67fa] to-[#f49867] bg-clip-text text-transparent text-6xl xl:text-8xl'>
            <TextHeader
              firsttext='Pongsathon'
              secondtext='Pongsathon'
              className='text-6xl xl:text-8xl '
            />
          </span>
        </div>
        <div className='w-full pb-10'>
          <p className='text-3xl md:text-7xl'>Full Stack</p>
          <p className='text-3xl md:text-7xl text-end'>Developer</p>
        </div>
        <p className='text-lg md:text-xl mb-6'>
          {lang === 'en'
            ? `Full Stack Developer | JavaScript | TypeScript | Next.js | Node.js
          Experienced in building modern and scalable web applications with
          clean, responsive design and efficient backend systems. Skilled in
          delivering solutions that combine performance, usability, and
          maintainability.`
            : `Full Stack Developer | JavaScript | TypeScript | Next.js | Node.js
มีประสบการณ์ในการพัฒนาเว็บแอปพลิเคชันที่ทันสมัยและขยายระบบได้ พร้อมทั้งออกแบบ UI ที่สะอาดและตอบสนองได้ดี ควบคู่กับการพัฒนา Backend ที่มีประสิทธิภาพและดูแลรักษาง่าย`}
        </p>
        <div className='flex gap-4'>
          <Button
            onClick={() => setOpen(true)}
            className='bg-gradient-to-r from-[#ff6f00] via-[#ff8f00] to-[#ffa000]'
          >
            Open CV
          </Button>
          {/* <Button variant='outline'>View Projects</Button> */}
        </div>
      </section>

      {/* Right Section */}
      <section className='flex justify-center items-center'>
        <div
          ref={imageRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className='relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-xl border-4 border-orange-500'
        >
          <Image
            src={Icon} // เปลี่ยนเป็น path รูปคุณ
            alt='Profile Picture'
            fill
            className='object-cover rounded-full'
          />
        </div>
      </section>
      <CustomDialog open={open} onOpenChange={setOpen} title='My CV'>
        <div className='flex justify-center items-center h-full relative'>
          <Image src={CV} alt='CV' fill className='object-contain border' />
        </div>
      </CustomDialog>
    </div>
  );
};

export default Homepage;
