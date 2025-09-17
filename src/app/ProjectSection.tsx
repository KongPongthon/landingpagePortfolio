'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { useLangStore } from '@/store/useLangStore';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '@/dataAndTypes/project';

const MyProjects = () => {
  const lang = useLangStore((s) => s.lang);

  return (
    <section id='projects' className='py-20 bg-white'>
      <div className='container mx-auto px-6'>
        {/* Section Title */}
        <h2 className='text-center text-4xl tracking-wider mt-10 mb-5'>
          {lang === 'en' ? 'My Projects' : 'โปรเจกต์ของฉัน'}
        </h2>

        {/* Projects Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10'>
          {projects.map((project) => (
            <Card
              key={project.id}
              className='shadow-lg border border-gray-200 hover:shadow-xl transition rounded-2xl overflow-hidden'
            >
              {/* Image */}
              <div className='relative w-full h-52'>
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className='object-cover hover:scale-105 transition-transform'
                />
              </div>

              {/* Content */}
              <CardHeader>
                <CardTitle className='text-2xl font-bold text-gray-800'>
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-gray-600 mb-3'>
                  {lang === 'en' ? project.infoEng : project.infoTh}
                </p>

                {/* Tech Stack */}
                <div className='flex flex-wrap gap-2 mb-4'>
                  {project.technology.map((tech, idx) => (
                    <span
                      key={idx}
                      className='px-3 py-1 text-sm rounded-full bg-orange-100 text-orange-600'
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className='flex gap-3'>
                  {project.url && (
                    <Button
                      asChild
                      className='bg-orange-500 hover:bg-orange-600 text-white'
                    >
                      <a
                        href={project.url}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <ExternalLink className='w-4 h-4 mr-2' />
                        {lang === 'en' ? 'Live Demo' : 'ดูเว็บไซต์'}
                      </a>
                    </Button>
                  )}

                  <Button
                    asChild
                    variant='outline'
                    className='border-orange-500 text-orange-500 hover:bg-orange-50'
                  >
                    <a
                      href={project.sourceCode}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Github className='w-4 h-4 mr-2' />
                      GitHub
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
