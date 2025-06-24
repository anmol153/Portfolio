import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '../../utiles/motion';
import { SparkleIcon } from 'lucide-react';

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center px-4 sm:px-10 md:px-20 mt-28 w-full z-[3]"
    >
      <div className="w-full flex flex-col gap-5 justify-center text-center z-[3] mt-10">
        
        {/* Welcome Boxes */}
        <div className='flex flex-col md:flex-row justify-center items-center gap-4 md:gap-35 lg:gap-70'>
          <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-3 px-4 border border-[#7042f88b] bg-white/5 backdrop-blur-sm rounded-md flex items-center justify-center gap-2"
          >
            <SparkleIcon className="text-[#b49bff] h-5 w-5" aria-hidden="true" />
            <h1 className="text-sm text-white font-medium tracking-wider">FullStack Developer</h1>
          </motion.div>

          <motion.div
            variants={slideInFromTop}
            className="Welcome-box py-3 px-4 border border-[#7042f88b] bg-white/5 backdrop-blur-sm rounded-md flex items-center justify-center gap-2"
          >
            <SparkleIcon className="text-[#b49bff] h-5 w-5" aria-hidden="true" />
            <h1 className="text-sm text-white font-medium tracking-wider">Building Scalable Web Solutions</h1>
          </motion.div>
        </div>

        {/* Hero Title */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 items-center sm:items-start text-white text-3xl sm:text-4xl md:text-5xl font-bold pt-12 "
        >
          <span className="text-center sm:text-left">
            Providing
            <span className="bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text"> the best </span>
            project experience
          </span>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base sm:text-lg text-gray-400 my-5 text-center px-2"
        >
          I'm a Full Stack Software Engineer with experience in building <br className="hidden sm:block" />
          scalable web apps. Check out my projects and skills.
        </motion.p>

        {/* Action Buttons */}
        <div className='flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-35 lg:gap-70 mt-4'>
          <motion.a
            variants={slideInFromLeft(1)}
            className="py-2 button-primary text-center text-white cursor-pointer rounded-lg w-[200px] px-7"
            href="#about"
          >
            Learn More!
          </motion.a>

          <motion.a
            variants={slideInFromRight(1)}
            className="py-2 button-primary text-center text-white cursor-pointer rounded-lg w-[200px] px-7"
            href="#about"
          >
            Contact!
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroContent;
