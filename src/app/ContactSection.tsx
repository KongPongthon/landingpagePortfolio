'use client';
import React from 'react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  return (
    <section id='contact' className='py-20 bg-white'>
      <h2 className='text-center text-4xl md:text-6xl font-bold mb-12 text-orange-500'>
        Contact Me
      </h2>

      <div className='max-w-6xl mx-auto px-6'>
        {/* Left side: Info */}
        <div className='space-y-6'>
          <p className='text-lg text-gray-600'>
            Feel free to reach out if you’d like to collaborate on a project or
            just say hi!
          </p>

          <div className='space-y-4'>
            <div className='flex items-center gap-3'>
              <span className='text-2xl'>📧</span>
              <a
                href='mailto:k.pongsathonm@gmail.com'
                className='text-orange-600 hover:underline text-lg'
              >
                k.pongsathonm@gmail.com
              </a>
            </div>
            <div className='flex items-center gap-3'>
              <span className='text-2xl'>🐙</span>
              <a
                href='https://github.com/KongPongthon'
                target='_blank'
                rel='noopener noreferrer'
                className='text-orange-600 hover:underline text-lg'
              >
                github.com/KongPongthon
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
