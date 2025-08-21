'use client';
import React from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
const ProjectsSection = () => {
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const titleRef = React.useRef<HTMLHeadingElement>(null);
  const titleLineRef = React.useRef<HTMLDivElement>(null);
  const triggerRef = React.useRef<HTMLDivElement>(null);
  const horizontalRef = React.useRef<HTMLDivElement>(null);

  const horizontalScroll = React.useRef<gsap.core.Tween | null>(null);
  const projectImage = [
    {
      id: 1,
      title: '3D',
      imageSrc: '/assets/project-1.png',
    },
    {
      id: 2,
      title: 'Startup',
      imageSrc: '/assets/project-2.png',
    },
    {
      id: 3,
      title: 'Portfolio',
      imageSrc: '/assets/project-3.png',
    },
    {
      id: 4,
      title: 'Awward',
      imageSrc: '/assets/project-4.png',
    },
  ];

  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      titleRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
    gsap.fromTo(
      titleLineRef.current,
      {
        width: '0%',
        opacity: 0,
      },
      {
        width: '100%',
        opacity: 1,
        duration: 1.5,
        ease: 'power3.inOut',
        delay: 0.3,
        // boxShadow: '0 0 10px rgba(1, 1, 1, 0.2)',
        boxShadow: '0 0px 10px 5px rgba(1,1,1,0.5)',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      triggerRef.current,
      {
        y: 100,
        rotateX: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out',
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      }
    );
    gsap.fromTo(
      titleLineRef.current,
      {
        backgroundPosition: '50% 0',
      },
      {
        backgroundPosition: '50% 100%',
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    );

    horizontalScroll.current = gsap.to('.panel', {
      xPercent: -100 * (projectImage.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: triggerRef.current,
        start: 'top top',
        end: () => `+=${horizontalRef.current?.offsetWidth}`,
        pin: true,
        scrub: 1,
        snap: {
          snapTo: 1 / (projectImage.length - 1),
          duration: { min: 0.2, max: 0.3 },
          delay: 0.1,
        },
        invalidateOnRefresh: true,
      },
    });

    const panels = gsap.utils.toArray('.panel');
    // panels.forEach((panel, i) => {
    //   const image = panel.querySelector(".project-image");
    //   cinst imageTitle = panel.querySelector(".project-title");

    //     const tl = gsap.timeline({
    //       scrollTrigger: {
    //         trigger: panel,
    //         containerAnimation: horizontalScroll,
    //         start: 'left right',
    //         end: "rught left",
    //         scrub: true
    //       }
    //     })
    // tl.fromTo(
    //   image, {
    //     scale:0,rotate:-20,
    //   },{scale:1,rotate:1,duration:0.5,})

    // if (imageTitle) {
    //   tl.fromTo(imageTitle,{y:30,},{y:-100,duration:0.3},0.2)
    // }
    //   })
    panels.forEach((panel) => {
      const image = (panel as HTMLElement).querySelector('.project-image');
      const imageTitle = (panel as HTMLElement).querySelector('.project-title');

      const t1 = gsap.timeline({
        scrollTrigger: {
          trigger: panel as HTMLElement,
          containerAnimation: horizontalScroll.current!,
          start: 'left right',
          end: 'right left',
          scrub: true,
        },
      });
      t1.fromTo(
        image,
        {
          scale: 0,
          rotate: -20,
        },
        { scale: 1, rotate: 1, duration: 0.5 }
      );

      if (imageTitle) {
        t1.fromTo(imageTitle, { y: 30 }, { y: -100, duration: 0.3 }, 0.2);
      }
    });
  }, [projectImage.length]);

  return (
    <section
      ref={sectionRef}
      id='horizantol-section'
      className='relative py-20 overflow-hidden'
    >
      {/* section title */}
      <div className='container top-0 mx-auto px-4 relative z-10 '>
        <h2
          ref={titleRef}
          className='text-4xl md:text-5xl lg:text-6xl font-bold text-black text-center mb-4'
        >
          Project
        </h2>
        <div
          ref={titleLineRef}
          className='w-0 h-2 bg-gradient-to-r from-purple-500 to bg-pink-500 mx-auto'
        />
      </div>
      <div ref={triggerRef} className='overflow-hidden'>
        <div
          ref={horizontalRef}
          className='horiontal-section flex md:w-[400%] w-[420%]'
        >
          {projectImage.map((item) => (
            <div
              key={item.id}
              id={item.id.toString()}
              className='panel relative flex items-center justify-center'
            >
              <div className='relative w-full h-full flex flex-col items-center justify-center p-2 sm:p-4 md:p-6'>
                <img
                  className='project-image max-w-full max-h-full rounded-2xl object-cover'
                  src={item.imageSrc}
                  alt={item.title}
                />
                <h2>{item.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
