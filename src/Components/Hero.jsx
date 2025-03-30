import img from "../assets/image.jpg";
import { motion } from 'framer-motion';
const Hero = () => {
  return (
    <div id="home" className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32">
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <motion.div
        initial={{y:-50,opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{duration:0.8,delay:0.2}}
        >
          <img src={img} className='w-[300px] cursor-pointer rouded-full shadow-xl shadow-indigo-900 transition-all duration-300 hover:-tranlate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[350px]'></img>
        </motion.div>
        <motion.div
        initial={{y:50,opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{duration:0.8,delay:0.2}}
        className='flex max-w-[600px] flex-col items-center justify-center gap-3 text-center'>
          <h1 className='bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-5xl font-light md:text-7xl whitespace-nowrap'>M. Junaid</h1>
          <h3 className='bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-2xl md:text-3xl'>Front End Developer</h3>
          <p className='md:text-base text-pretty text-sm text-gray-400'>Hi, I'm Muhammad Junaid, a passionate Front-End Developer skilled in React, Tailwind CSS, Framer Motion, JavaScript, HTML, and GitHub. I have experience building dynamic and responsive projects, and I strive to create innovative and high-quality web experiences with each project.</p>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero