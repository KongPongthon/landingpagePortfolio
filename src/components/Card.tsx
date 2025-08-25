import { Project } from '@/dataAndTypes/project';
import Image from 'next/image';
const ProjectCard = ({
  project,
  lang,
}: {
  project: Project;
  lang: 'en' | 'th';
}) => {
  const { title, url, img, sourceCode, infoEng, infoTh, technology } = project;

  return (
    // <div className='group relative overflow-hidden rounded-xl'>
    //   {/* Card */}
    //   <div className='flex flex-col h-[520px] shadow-2xl'>
    //     <Image
    //       src={img}
    //       alt={title}
    //       width={img.width}
    //       height={img.height}
    //       className='h-[70%]'
    //     />
    //     <div className='flex flex-wrap items-start gap-3 h-[30%] p-5 bg-gradient-to-br from-violet-700 to-violet-900'>
    //       {technology.map((tech) => (
    //         <p
    //           key={tech}
    //           className='text-lg text-violet-700 font-semibold py-1 px-3 rounded-2xl bg-gray-50 shadow-sm'
    //         >
    //           {tech}
    //         </p>
    //       ))}
    //     </div>
    //   </div>

    //   {/* Overlay gradient (แทน ::before) */}
    //   <div className='pointer-events-none absolute inset-0 h-0 bg-gradient-to-r from-fuchsia-700 to-indigo-800 opacity-95 transition-[height] duration-500 ease-in-out group-hover:h-full z-[1]' />

    //   {/* Content บน overlay */}
    //   <div className='absolute left-1/2 top-[65%] z-10 w-full -translate-x-1/2 -translate-y-1/2 px-8 text-center opacity-0 transition-all duration-500 ease-in-out group-hover:top-1/2 group-hover:opacity-100'>
    //     <h4 className='mb-4 text-center font-black uppercase text-[1.8rem] text-white tracking-wider'>
    //       {title}
    //     </h4>
    //     <p className='mb-12 text-left text-[1.4rem] text-gray-100'>
    //       {lang === 'en' ? infoEng : infoTh}
    //     </p>

    //     <div className='flex items-center justify-center gap-6'>
    //       {url && (
    //         <a
    //           href={url}
    //           target='_blank'
    //           rel='noreferrer'
    //           className='rounded-xl border border-violet-text-violet-950 bg-violet-text-violet-950 px-8 py-4 font-extrabold tracking-wider text-gray-100 transition-transform duration-200 hover:scale-105  text-[clamp(0.8rem,1vw,1rem)]'
    //         >
    //           See Live
    //         </a>
    //       )}
    //       {sourceCode && (
    //         <a
    //           href={sourceCode}
    //           target='_blank'
    //           rel='noreferrer'
    //           className='rounded-xl border border-violet-text-violet-950 bg-transparent px-8 py-4 font-extrabold text-gray-100 tracking-wider transition-transform duration-200 hover:scale-105  text-[clamp(0.8rem,1vw,1rem)]'
    //         >
    //           Source
    //         </a>
    //       )}
    //     </div>
    //   </div>
    // </div>
    <div className='relative group rounded-xl overflow-hidden'>
      <Image
        src={img}
        alt={title}
        width={img.width}
        height={img.height}
        className='w-full h-72 object-cover'
      />
      <div className='absolute bottom-0 left-0 right-0 to-transparent p-6 translate-y-full group-hover:translate-y-0 transition duration-500 bg-[#000000]'>
        <h4 className='text-xl font-bold text-black'>{title}</h4>
        <p className='text-black text-sm mb-4'>
          {lang === 'en' ? infoEng : infoTh}
        </p>
        <div className='flex gap-3'>
          {url && (
            <a
              href={url}
              className='px-4 py-2 bg-violet-600 text-black rounded-lg'
            >
              Live
            </a>
          )}
          {sourceCode && (
            <a
              href={sourceCode}
              className='px-4 py-2 border border-white text-black rounded-lg'
            >
              Source
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
