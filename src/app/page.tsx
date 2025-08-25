import Footer from '@/components/Footer';
import AboutSection from './AboutSection';
import Homepage from './Homepage';
import ProjectSection from './ProjectSection';
import ServicesSection from './Services';
export default function Home() {
  return (
    <div>
      <div className=' relative flex flex-col gap-8 mx-auto p-4 sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-6xl overflow-hidden'>
        <div>
          <Homepage />
        </div>
        <div>
          <AboutSection />
        </div>
        <div>
          <ServicesSection />
        </div>
        <div>
          <ProjectSection />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
