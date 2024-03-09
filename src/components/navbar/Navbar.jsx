import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import {motion} from "framer-motion";
import facebookIcon from "../../images/facebook.png";
import instagramIcon from "../../images/instagram.png";
import youtubeIcon from "../../images/youtube.png";
import dribbbleIcon from "../../images/dribbble.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar/>

      <div className="wrapper">
         <motion.span 
            initial={{opacity: 0, scale: 0.5}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 0.5}}
         >
            Portfolio
         </motion.span>
         <div className="social">
             <a href="#"><img src={facebookIcon} alt="" /> </a>
             <a href="#"><img src={instagramIcon} alt="" /></a>
             <a href="#"><img src={youtubeIcon} alt="" /></a>
             <a href="#"><img src={dribbbleIcon} alt="" /></a>
                
                
         </div>
      </div>
    </div>
  )
}

export default Navbar