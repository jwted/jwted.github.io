import "./NavbarCss.css";
import Variants from '../menu2.jsx'

import animationData from '../../assets/animation/menu.json'
// import Lottie from 'react-lottie'

import { useState } from "react";

function Navbar() {
  /* const [isAnimating, setIsAnimating] = useState(false);
  const defaultOptions = {
    loop:false,
    autoplay:false,
    animationData:animationData,
    rendererSettings:{
      preserveAspectRatio:'xMidYMid slice'
    },
  }
 */


/*   const togglePlay = () =>{
    if(!isAnimating){
      animationData.playSegments([0,14], false)
      // setIsAnimating(true)
    }else{
      //setIsAnimating(false)
      
    }

    

  } */

  return (
    
      <div className="flex h-nav justify-between items-center fixed px-10 w-full" id="navbar">
        <h2 className="name ">João Pais</h2>
        <div className=" hidden tablet:inline px-2 py-1 box">
          <button className="px-2 max-h-6 btn_trans ">Info</button>
          <button className="px-2 max-h-6 btn_trans">Work</button>
        </div>
        <Variants />
        {/* <Variants className="tablet:hidden pc:hidden" /> */}
        


        <h4 className="hidden pc:inline">Resume</h4>
      </div>
    
  );
}

export default Navbar;
