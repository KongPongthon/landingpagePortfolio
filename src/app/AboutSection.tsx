import TextHeader from '@/components/TextHeader';
import React from 'react';

const AboutSection = () => {
  return (
    <div>
      <div>
        <TextHeader firsttext='ABOUT ME' secondtext='About Me' />
      </div>
      <div>
        สวัสดีครับ ผมชื่อ Pongsathon เป็นนักพัฒนา Web & Backend Developer
        สนใจด้าน DevOps, Docker, และ Database (PostgreSQL/MongoDB)
        กำลังพัฒนาทักษะใน Next.js + TypeScript และ Golang
      </div>
    </div>
  );
};

export default AboutSection;
