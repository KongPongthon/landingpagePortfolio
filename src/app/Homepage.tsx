import TextHeader from '@/components/TextHeader';
import { Button } from '@/components/ui/button';
import React from 'react';

const Homepage = () => {
  return (
    <div id='home' className='grid gird-cols-1 md:grid-cols-2'>
      <section className='flex flex-col pt-10'>
        <div className='w-full flex justify-start text-4xl md:text-7xl font-bold mb-4'>
          Hi, I'm
          {/* สวัสดี ผม */}
        </div>
        <div className='w-full flex justify-start font-bold mb-4'>
          <span className='bg-gradient-to-r from-[#6758c5] via-[#ae67fa] to-[#f49867] bg-clip-text text-transparent text-6xl xl:text-8xl'>
            <TextHeader
              firsttext='Pongsathon'
              secondtext='Pongsathon'
              className='text-6xl xl:text-8xl '
              // className='linear-gradient(to right, #6758c5, #ae67fa, #f49867, #6758c5)'
              // className=''
            />
          </span>
        </div>
        <div className='w-full pb-10'>
          <p className='text-3xl md:text-7xl'>Full Stack</p>
          <p className='text-3xl md:text-7xl text-end'>Developer</p>
        </div>
        <p className='text-lg md:text-xl mb-6'>
          Crafting modern and user-friendly web experiences. I’m a developer who
          loves building interactive apps with clean design and solid
          performance.
        </p>
        <div className='flex gap-4'>
          <Button className='px-6 py-3 text-lg bg-gradient-to-r from-[#ff6f00] via-[#ff8f00] to-[#ffa000]'>
            View My Work
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
