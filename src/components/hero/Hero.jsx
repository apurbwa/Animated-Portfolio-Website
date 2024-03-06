import { motion } from "framer-motion";

import "./hero.scss";

const textVariants = {
   initial: {
      x: "-500",
      opacity: 0
   },
   animate: {
      x: 0,
      opacity: 1,
      transition: {
         duration: 1,
         staggerChildren: 0.1
      }
   },
   scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
         repeat: Infinity,
         duration: 2
      }
   }
}

const sliderTextVariants = {
   initial: {
      x: "100vw"
   },
   animate: {
      x: "-210vw",
      transition: {
         duration: 30,
         repeat: Infinity,
         repeatType: "reverse"
      }

   }
}






const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
         <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate" >
            <motion.h2 variants={textVariants}>John Doe</motion.h2>
            <motion.h1 variants={textVariants}>Web developer and UI designer</motion.h1>
            <motion.div className="buttons">
               <motion.button variants={textVariants}>See the Latest Works</motion.button>
               <motion.button variants={textVariants}>Contact Me</motion.button>
            </motion.div>
            <motion.img variants={textVariants} animate="scrollButton" src="/public/scroll.png" alt="" />
         </motion.div>
      </div>
      <motion.div className="slidingTextContainer" variants={sliderTextVariants} initial="initial" animate="animate" >
         Web developer and UI designer
      </motion.div>
      <div className="imageContainer">
         <img src="/public/hero.png" alt="" />
      </div>
    </div>
  )
}

export default Hero