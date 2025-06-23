import { useRef } from 'react';
import { Socials } from '../Constants';
import ContactMe from './Contact_me';
import Encryption from './Encryption';
import Hero from './Hero';
import LeetcodeCom from './Leetcode';
import Projects from './Projects';
import Skills from './Skills';
import StarsCanvas from './StarBackground';

const Navbar = () => {
  // Refs for scrolling
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

  // Scroll handlers
  const handleAbout = (e) => {
    e.preventDefault();
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSkills = (e) => {
    e.preventDefault();
    skillsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleProjects = (e) => {
    e.preventDefault();
    projectsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Navbar */}
      <div className='w-full h-[65px] fixed top-0 left-0 shadow-lg shadow-[#2A0f61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10'>
        <div className='w-full h-full flex flex-row items-center justify-between m-auto px-[10px]'>
          <a href='#about' className='h-auto w-auto flex flex-row items-center'>
            <img
              src='/assests/NavLogo.png'
              alt='logo'
              width={70}
              height={70}
              className='cursor-pointer hover:animate-pulse'
            />
          </a>

          <div className='w-[500px] h-full flex flex-row items-center justify-between md:m-20'>
            <div className='flex items-center gap-30 justify-between gap-6 border text-slate-200 border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full'>
              <button onClick={handleAbout} className='cursor-pointer'>About me</button>
              <button onClick={handleSkills} className='cursor-pointer'>Skills</button>
              <button onClick={handleProjects} className='cursor-pointer'>Projects</button>
            </div>
          </div>

          <div className='flex flex-row gap-5'>
            {Socials.map((social) => (
              <a href={social.link} key={social.name} target='_blank' rel='noopener noreferrer'>
                <img
                  src={social.src}
                  alt={social.name}
                  width={social.name !== 'Linkedin' ? 24 : 30}
                  height={social.name !== 'Linkedin' ? 24 : 30}
                  className='cursor-pointer'
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Sections */}
      <StarsCanvas />

      <div >
        <Hero />
      </div>

      <div ref={skillsRef}>
        <Skills />
      </div>

      <Encryption />
      <LeetcodeCom />

      <div ref={projectsRef}>
        <Projects />
      </div>

      <div ref={aboutRef}>
        <ContactMe />
      </div>
    </>
  );
};

export default Navbar;
