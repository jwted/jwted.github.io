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
  <h2 className="hidden tablet:inline name">João Pais</h2>
  
  <div className="tablet:inline px-2 py-1 box">
    <button className="px-2 max-h-6 btn_trans">Info</button>
    <button className="px-2 max-h-6 btn_trans">Work</button>
  </div>

  <div className="flex tablet:hidden pc:inline pc:gap-4 items-center">
    <h4 className="hidden pc:inline cursor-pointer"><a href="https://www.linkedin.com/in/joaoopais

"  target="_blank">LinkedIn</a></h4>
  </div>

<div className="pc:hidden">

  <Dropdown className="border-[139, 139, 139, 0.562] pc:hidden box bg-8686863d "
          arrowIcon={true}
          inline
          
          >
          <Dropdown.Header className="opacity-95 text-white">
            <span className="block text-sm">João Pais</span>
            <span className="block text-sm font-medium">jgjoaogabriel@hotmail.com</span>
          </Dropdown.Header>
          <a className="no-underline link" href="https://www.linkedin.com/in/joaoopais"  target="_blank">
          <Dropdown.Item className="link opacity-95 text-white">LinkedIn</Dropdown.Item></a>
          <Dropdown.Item className="opacity-95 text-white">Resume</Dropdown.Item>
        </Dropdown>
          </div>
</div>
  );
}

export default NavbarFunc;
