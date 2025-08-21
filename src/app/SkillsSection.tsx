'use client';
import TextHeader from '@/components/TextHeader';
import { nanoid } from 'nanoid';
import React from 'react';
import Tilt from 'react-parallax-tilt';
import { styled } from 'styled-components';
const SkillsSection = () => {
  return (
    <div className=''>
      <div>
        <TextHeader firsttext='SKILLS' secondtext='Skills' />
      </div>
      <Section>
        <div
          // content
          className='grid grid-cols-1 gap-12 max-w-[1600px] mx-[auto] my-[0]'
        >
          <div
            // skill
            className='mb-4'
          >
            <div>
              <h4 className='text-[1.2rem] mb-16 uppercase tracking-[5px]'>
                using now:
              </h4>
              <ul
                // skill-list
                className='grid grid-cols-4 gap-3 items-center-safe'
                data-aos='fade-left'
                data-aos-delay='500'
              >
                {skills.map((skill) => {
                  const { skillIcon, id, skillName } = skill;
                  return (
                    <Tilt key={id}>
                      <li className='flex flex-col items-center gap-4 p-4 transition:var(--transition) hover:scale-[1.2] hover:box-shadow:0px_20px_30px_rgba(0,_0,_0,_0.2)'>
                        <img src={skillIcon} alt='code skill icon' />
                        <p>{skillName}</p>
                      </li>
                    </Tilt>
                  );
                })}
              </ul>
            </div>
            <div>
              <h4>learning:</h4>
              <ul
                className='skill-list'
                data-aos='fade-left'
                data-aos-delay='500'
              >
                {/* {learningSkills.map((skill) => {
                  const { skillIcon, id, skillName } = skill;
                  return (
                    <Tilt key={id}>
                      <li>
                        <img src={skillIcon} alt='code skill icon' />
                        <p>{skillName}</p>
                      </li>
                    </Tilt>
                  );
                })} */}
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default SkillsSection;

const Section = styled.section`
  background: var(--color-blog);
  padding: var(--section-padding);
  min-height: 100vh;

  .content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
    max-width: 1600px;
    margin: 0 auto;

    h4 {
      font-size: 1.2rem;
      text-transform: uppercase;
      margin-bottom: 4rem;
      color: var(--title-color);
      letter-spacing: 5px;
    }

    .skill div {
      margin-bottom: 4rem;
    }

    .skill-list {
      display: grid;
      grid-template-columns: repeat(4, 1fr) !important;
      gap: 3rem;
      place-items: center;

      li {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        transition: var(--transition);
      }

      p {
        display: inline-block;
        color: var(--title-color);
        font-family: Paprika;
        font-size: 0.8rem;
        text-align: center;
        letter-spacing: var(--letter-spacing);
        position: relative;
      }

      p::after {
        position: absolute;
        content: '';
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 1px;
        background: var(--gradient-text);
        transition: var(--transition);
      }

      img {
        width: 5.5rem;
        height: 5.5rem;
      }

      li:hover {
        transform: scale(1.2);
        box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.2);

        & p::after {
          width: 100%;
        }
      }
    }
  }

  @media (max-width: 1440px) {
    .skill-list {
      grid-template-columns: repeat(3, 1fr) !important;
    }
  }
  @media (max-width: 1025px) {
    .content {
      grid-template-columns: 1fr;
      justify-items: center;
    }

    .img-container {
      display: none;
    }
  }

  @media (max-width: 637px) {
    .skill-list {
      grid-template-columns: repeat(3, 1fr) !important;
    }
  }

  @media (max-width: 484px) {
    .skill-list {
      grid-template-columns: repeat(2, 1fr) !important;
    }
  }
`;

const skills = [
  {
    skillName: 'HTML',
    skillIcon: '/assets/img/html.svg',
    id: nanoid(),
  },
  {
    skillName: 'CSS',
    skillIcon: '/assets/img/css.svg',
    id: nanoid(),
  },
  {
    skillName: 'JavaScript',
    skillIcon: '/assets/img/javascript.svg',
    id: nanoid(),
  },
  {
    skillName: 'React',
    skillIcon: '/assets/img/react.svg',
    id: nanoid(),
  },
];
