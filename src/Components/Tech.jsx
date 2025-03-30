import { BiLogoDocker, BiLogoNodejs } from "react-icons/bi"
import { FaReact } from "react-icons/fa"
import { SiJavascript, SiTailwindcss } from "react-icons/si"
import { FaGithub } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiVite } from "react-icons/si";
import { motion } from "framer-motion"
import { IoLogoVercel } from "react-icons/io5";

const Tech = () => {
  const variants ={
    hidden:{opacity:0,y:50},
    visible:{opacity:1,y:0}
  }
  return (
    <div id="tech" className="min-h-[70vh] w-full flex flex-col items-center justify-center gap-16 md:gap-32">
      <motion.h1
      variants={variants}
      initial="hidden"
      whileInView={"visible"}
      transition={{duration:0.5}}
      
      className="text-4xl font-light text-white md:text-6xl">Technologies</motion.h1>


      <div className="flex flex-wrap items-center justify-center gap-10 p-5">
        
      <motion.div
          variants={variants}
          initial="hidden"
          whileInView={"visible"}
          transition={{duration:0.5}}
          >
         
            <FaReact className="cursor-pointer text-[80px] text-blue-600 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[100px]"/>

          </motion.div>
          <motion.div
          variants={variants}
          initial="hidden"
          whileInView={"visible"}
          transition={{duration:0.5}}
          >
          <IoLogoVercel  className="cursor-pointer text-[100px] text-white transition-all duration-300 hover:translate-y-5 sm:text-[80px] md:text-[80px]"/>
          </motion.div>
          <motion.div
          variants={variants}
          initial="hidden"
          whileInView={"visible"}
          transition={{duration:0.5}}
          >
         
            <SiTailwindcss className="cursor-pointer text-[80px] text-sky-400 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[100px]"/>
          </motion.div>
          
          <motion.div
        variants={variants}
        initial="hidden"
        whileInView={"visible"}
        transition={{duration:0.5}}>
          <TbBrandFramerMotion   className="cursor-pointer text-[80px] text-pink-500 transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[100px]"/>
          </motion.div>

          <motion.div
        variants={variants}
        initial="hidden"
        whileInView={"visible"}
        transition={{duration:0.5}}>
          <FaGithub   className="cursor-pointer text-[80px] text-white transition-all duration-300 hover:translate-y-5 sm:text-[100px] md:text-[100px]"/>
          </motion.div>
        
      </div>
    </div>
  )
}

export default Tech