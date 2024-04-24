import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import pushnpullLogo from "../../../assets/pushnpullIndex.webp"
// import { useScroll } from "../../../hooks/useScroll";
import LanguageContext from "../../../contexts/LanguageContext";

import NavLinks from "./NavLinks";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const {handleLanguage,language}=useContext(LanguageContext);
  return (

    <nav className=" background-principalNavbar navbarContainer" >
      {/* style={ scrollDirection === "up" ?  styles.hidden : styles.active } */}
      <div className="flex items-center  font-medium justify-around h-90 navbarHeight">
        <div className="z-50  containerLogo p-5 md:w-auto  ">
            <Link to={'/'} className="flex justify-between items-center"><img src={pushnpullLogo} alt="logo" className="md:cursor-pointer h-9" />
          <h1 className="tituloFont">Push n Pull</h1></Link>
          
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden  items-center gap-8 font-[Poppins] navabarContainerMenu">
          <li className="navbarContainerText">
            <Link to="/" className="py-7 px-3 inline-block">
              Inicio
            </Link>
          </li>
          <NavLinks />
          {/* <li className="navbarContainerText">
            <Link to="/" className="py-7 px-3 inline-block">
              Blog
            </Link>

          </li> */}
          <li className="navbarContainerText">
            <Link to={'/ContactoPage'} className="py-7 px-3 inline-block">
              Contacto
            </Link>
          </li>
         
          <button onClick={e =>{handleLanguage("ES")}}>espanol</button>
          <button onClick={e =>{handleLanguage("EN")}}>ingles</button>
            
        </ul>
        <div className="md:block hidden">
         
        </div>
        {/* Mobile nav */}
        <ul
          className={`navbarBackgroundDrop
        md:hidden  fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
          {/* <li>
            <Link to="/" className="py-7 px-3 inline-block">
              Blog
            </Link>
          </li> */}
          <li>
            <Link to={'/ContactoPage'} className="py-7 px-3 inline-block ">
              Contacto
            </Link>
          </li>
          
         
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;