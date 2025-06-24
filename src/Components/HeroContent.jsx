import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '../../utiles/motion'
import { SparkleIcon } from 'lucide-react'

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[3]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-center z-[3] mt-20">
        <div className='flex flex-row justify-between'>
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[15px] px-[6px] border border-[#7042f88b] bg-white/5 backdrop-blur-sm rounded-md md:flex items-center justify-center gap-2 hidden"
        >
          <SparkleIcon
            className="text-[#b49bff] h-5 w-5"
            aria-hidden="true"
          />
          <h1 className="Welcome-text text-[13px] text-white font-medium tracking-wider px-2">
            FullStack Developer 
          </h1>
        </motion.div>
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[15px] px-[6px] border border-[#7042f88b] bg-white/5 backdrop-blur-sm rounded-md md:flex items-center justify-center gap-2 hidden "
        >
          <SparkleIcon
            className="text-[#b49bff] h-5 w-5"
            aria-hidden="true"
          />
          <h1 className="Welcome-text text-[13px] text-white font-medium tracking-wider px-2">
             Building Scalable Web Solutions
          </h1>
        </motion.div>
          </div>
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 items-start text-white text-6xl w-auto h-auto font-bold pt-20"
        >
          <span>
          Providing
          <span className="bg-gradient-to-r from-purple-500  to-cyan-500 text-transparent bg-clip-text"> the best </span>
          project experience
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 text-center"
        >
          I'm a Full Stack Software Engineer with experience in making <br/>
          Full Stack Websites. Check out my projects and skills.
        </motion.p>

        <div className='flex flex-row justify-between'>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] px-7 "
          href="/"
        >
          Learn More!
        </motion.a>
        <motion.h
          variants={slideInFromRight(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] px-7"
          href="/"
        >
          Contact !
        </motion.h>
        </div>
      </div>

    </motion.div>
  )
}

export default HeroContent
