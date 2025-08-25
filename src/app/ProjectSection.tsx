'use client';
import ProjectCard from '@/components/Card';
import { projects } from '@/dataAndTypes/project';
import { useLangStore } from '@/store/useLangStore';
import { useRef } from 'react';
const ProjectSection = () => {
  const lang = useLangStore((s) => s.lang);
  const sectionRef = useRef<HTMLLIElement>(null);

  return (
    <section
      id='projects'
      ref={sectionRef}
      className='min-h-screen relative overflow-hidden pb-5'
    >
      <div className='text-6xl'>Project</div>
      <div className='container mx-auto px-4 pb-8 mt-16'>
        <div className='grid grid-cols-[repeat(auto-fit,minmax(24rem,1fr))] gap-8'>
          {projects &&
            projects.map((project) => (
              <div key={project.id}>
                <ProjectCard project={project} lang={lang} />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
