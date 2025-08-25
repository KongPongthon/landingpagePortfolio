import TextHeader from '@/components/TextHeader';
import React from 'react';
import SkillsSection from './SkillsSection';

const AboutSection = () => {
  return (
    <div id='about' className='grid grid-cols-1 md:grid-cols-2'>
      <div></div>
      <section className='max-w-4xl mx-auto py-20 text-center'>
        <div className='flex justify-start text-4xl md:text-7xl'>ABOUT ME</div>

        <p className='text-lg leading-relaxed text-gray-600'>
          I love turning ideas into digital solutions. My focus is on creating
          web applications that blend functionality with clean, elegant design.
          I’m always exploring new technologies and improving my craft to
          deliver better user experiences.
        </p>
        <SkillsSection />
      </section>
    </div>
  );
};

export default AboutSection;
