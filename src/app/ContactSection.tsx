'use client';

import TextHeader from '@/components/TextHeader';

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
      <div>
        <div>Email : 3oB1H@example.com</div>
        <div>GitHub: github.com/yourusername</div>
      </div>
    </div>
  );
};

export default ContactSection;
