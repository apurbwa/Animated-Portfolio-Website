import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import "./parallax.scss";

const Parallax = ({type}) => {

   const ref = useRef();

   const {scrollYProgress} = useScroll({
      target: ref,
      offset: ["start start", "end start"]
   });

   const textY = useTransform(scrollYProgress, [0, 1], ["0%", "400%"]);
   const planetsY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
   const starsX = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);




  return (
   <motion.div 
      className="parallax" 
      ref={ref}
      style={{
         background: 
            type==="Services" 
               ? "linear-gradient(180deg, #111132, #0c0c1d)" 
               : "linear-gradient(180deg, #111132, #505064)" 
      }}
   >
      <motion.h1 style={{ y: textY }}>
         {type==="Services" ? "What I Do?" : "What I Did?" }
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div 
         className="planets" 
         style={{ 
            y: planetsY,
            backgroundImage: `url(${type==="Services" ? "/public/planets.png" : "/public/sun.png"})`
         }} 
      ></motion.div>
      <motion.div className="stars" style={{ x: starsX }}></motion.div>
   </motion.div>
  )
}

export default Parallax