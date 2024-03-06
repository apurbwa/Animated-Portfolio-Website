import { motion } from "framer-motion";
import { useState } from "react";

const Test = () => {

   // const [open, setOpen] = useState(false)
   // const variants = {
   //    hidden: { opacity: 1, x: 800 },
   //    visible: { opacity: 0, x: 100, transition: { type: "spring", stiffness: 100 }, scale: 1.5},
   // }

   const items = ["item1", "item2", "item3", "item4", "item5"]

   const variants = {
      hidden: { opacity: 0 },
      visible: (i) => ({ 
         opacity: 1, 
         // transition: { staggerChildren: 0.3 },
         transition: { delay: i * 0.3 }
      }),
   }


  return (
    <div className='box-container'>
      <motion.ul variants={variants} initial="hidden" animate="visible">
      {items.map((item, i) => (
         <motion.li key={item} variants={variants} custom={i}>
            {item}
         </motion.li>
      ))}
      </motion.ul>
      




      {/* <button onClick={() => setOpen(!open)}>Click</button>
      <motion.div 
         className='box'
         variants={variants}
         animate={open ? "visible" : "hidden"}
         // initial="hidden"
         // animate= "visible"
         // transition={{ duration: 1 }}
         // whileInView={{ scale: 1.5 }}
      >
      </motion.div> */}
    </div>
  )
}

export default Test