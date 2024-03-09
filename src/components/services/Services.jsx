import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import "./services.scss"
import peopleImg from "../../images/people.webp";

const Services = () => {

   const ref = useRef()

   const variants = {
      initial: {
         opacity: 0,
         x: -500,
   
      },
      animate: {
         opacity: 1,
         x: 1,
         transition: {
            duration: 1,
            staggerChildren: 0.2
         }
      }
   }

   const isInView = useInView(ref, {margin: "-140px"});   


  return (
    <motion.div 
      ref={ref} 
      className="services" 
      variants={variants} 
      initial="initial" 
      // whileInView="animate" 
      animate={isInView && "animate"}

    >
      <motion.div className="textContainer" variants={variants}>
         <p>I focus on helping your brand grow 
            <br/> and move forward
         </p>
         <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
         <div className="title">
            <img src={peopleImg} alt="" />
            <h1>
               <motion.b whileHover={{color: "orange"}}>Unique</motion.b> Ideas
            </h1>
         </div>
         <div className="title">
            <h1>
               <motion.b whileHover={{color: "orange"}}>For Your</motion.b> Business.
            </h1>
            <button>WHAT I DO?</button>
         </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
         <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
            <h2>Web Design</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis iure quasi accusantium eum id voluptatem temporibus magnam, officiis quam ea dignissimos excepturi animi velit hic? Praesentium, architecto?</p>
            <button>Go</button>
         </motion.div>
         <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
            <h2>Web Development</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis iure quasi accusantium eum id voluptatem temporibus magnam, officiis quam ea dignissimos excepturi animi velit hic? Praesentium, architecto?</p>
            <button>Go</button>
         </motion.div>
         <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
            <h2>E-commerce</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis iure quasi accusantium eum id voluptatem temporibus magnam, officiis quam ea dignissimos excepturi animi velit hic? Praesentium, architecto?</p>
            <button>Go</button>
         </motion.div>
         <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
            <h2>Responsive Design</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis iure quasi accusantium eum id voluptatem temporibus magnam, officiis quam ea dignissimos excepturi animi velit hic? Praesentium, architecto?</p>
            <button>Go</button>
         </motion.div>
      </motion.div>

    </motion.div>
  )
}

export default Services