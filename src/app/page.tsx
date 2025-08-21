import ProjectsSection from '@/app/ProjectsSection';
import ContactSection from './ContactSection';
import SkillsSection from './SkillsSection';
import AboutSection from './AboutSection';
export default function Home() {
  return (
    <div className='bg-gradient-to-br to-50% from-purple-900 min-h-screen'>
      <div className=' relative flex flex-col gap-8 mx-auto p-4 sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-6xl overflow-hidden'>
        <div>
          <AboutSection />
        </div>
        <div>
          <SkillsSection />
        </div>
        <div>
          <ProjectsSection />
        </div>
        <div>
          <ContactSection />
        </div>
      </div>
    </div>
  );
}
