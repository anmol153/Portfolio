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
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

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
      <div className='w-full h-[65px] fixed top-0 left-0 shadow-lg shadow-[#2A0f61]/50 bg-[#03001417] backdrop-blur-md z-50 px-6 md:px-10'>
        <div className='w-full h-full flex items-center justify-between mx-auto'>
          {/* Logo */}
          <a href='#about' className='flex items-center'>
            <img
              src='/assests/NavLogo.png'
              alt='logo'
              width={50}
              height={50}
              className='cursor-pointer hover:animate-pulse'
            />
          </a>

          {/* Desktop Nav Buttons */}
          <div className='hidden md:flex items-center gap-6 border text-slate-200 border-[#7042f861] bg-[#0300145e] px-6 py-2 rounded-full'>
            <button onClick={handleAbout} className='cursor-pointer text-sm'>About Me</button>
            <button onClick={handleSkills} className='cursor-pointer text-sm'>Skills</button>
            <button onClick={handleProjects} className='cursor-pointer text-sm'>Projects</button>
          </div>

          {/* Social Icons */}
          <div className='flex flex-row gap-3'>
            {Socials.map((social) => (
              <a href={social.link} key={social.name} target='_blank' rel='noopener noreferrer'>
                <img
                  src={social.src}
                  alt={social.name}
                  width={social.name !== 'Linkedin' ? 20 : 26}
                  height={social.name !== 'Linkedin' ? 20 : 26}
                  className='cursor-pointer'
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Sections */}
      <StarsCanvas />

      <div><Hero /></div>

      <div ref={skillsRef}><Skills /></div>

      <Encryption />
      <LeetcodeCom />

      <div ref={projectsRef}><Projects /></div>

      <div ref={aboutRef}><ContactMe /></div>
    </>
  );
};

export default Navbar;
