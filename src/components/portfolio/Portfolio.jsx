import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

import "./portfolio.scss"

const items = [
   {
     id: 1,
     title: "React Commerce",
     img: "https://repository-images.githubusercontent.com/456963513/82528385-a73f-488f-9003-513321283a6b",
     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
   },
   {
     id: 2,
     title: "Next.js Blog",
     img: "https://images04.nicepage.com/feature/583347/de/blog-category.jpg",
     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
   },
   {
     id: 3,
     title: "Vanilla JS App",
     img: "https://assets-global.website-files.com/5e593fb060cf877cf875dd1f/6008900c41451463fc9b7569_600684c692aff1f2ed555758_Memories%2520Mobile%2520Show.png",
     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
   },
   {
     id: 4,
     title: "Music App",
     img: "https://themewagon.com/wp-content/uploads/2020/02/solmusic-1.jpg",
     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
   },
 ];


const Single = ({ item }) => {
   const ref = useRef();
   
   const {scrollYProgress} = useScroll({
      target: ref
   });

   const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

   return (
      <section>
         <div className="container">
            <div className="wrapper">
               <div className="imgContainer" ref={ref}>
                  <img src={item.img} alt="" />
               </div>
               <motion.div className="textContainer" style={{ y }}>
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                  <button>See Demo</button>
               </motion.div>
            </div>
         </div>
      </section>
   );
}


const Portfolio = () => {
   const ref = useRef();

   const {scrollYProgress} = useScroll({
      target: ref,
      offset: ["end end", "start start"],
   });

   const scaleX = useSpring(scrollYProgress, {
      stiffness: 100, 
      damping: 30
   });


  return (
    <div className='portfolio' ref={ref} >
      <div className="progress" >
         <h1>Featured Works</h1>
         <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>

      {items.map((item) => (
         <Single key={item.id} item={item} />
      ))}
    </div>
  )
}

export default Portfolio