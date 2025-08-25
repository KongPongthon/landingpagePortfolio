'use client';

import TextHeader from '@/components/TextHeader';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  return (
    <div>
      <div className='flex justify-center'>
        <TextHeader
          firsttext='CONTACT ME'
          secondtext='Contact Me'
          // className='text-black'
        />
      </div>
    </div>
  );
};

export default ContactSection;
