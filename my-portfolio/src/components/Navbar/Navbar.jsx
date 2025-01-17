import "./NavbarCss.css";
import Variants from '../menu2.jsx'


import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";




import animationData from '../../assets/animation/menu.json'
// import Lottie from 'react-lottie'

import { useState } from "react";

function NavbarFunc() {




  
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
    
    <div className="flex tablet:justify-between h-nav justify-between items-center fixed px-10 w-full" id="navbar">
  <h2 className="name">João Pais</h2>
  
  <div className="hidden tablet:inline px-2 py-1 box">
    <button className="px-2 max-h-6 btn_trans">Info</button>
    <button className="px-2 max-h-6 btn_trans">Work</button>
  </div>

  <div className="flex  gap-6 items-center">
    <h4 className="hidden pc:inline cursor-pointer">LinkedIn</h4>
    <h4 className="hidden pc:inline cursor-pointer">Resume</h4>
  </div>
</div>
  );
}

export default NavbarFunc;
