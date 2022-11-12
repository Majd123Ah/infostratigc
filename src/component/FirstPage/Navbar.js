import React from "react";
import Logo from "../../Assest/logo1.png";
import { useState, useEffect,  } from "react";
import { FaBars } from 'react-icons/fa';
import { Link } from "react-scroll";
import {  useHistory } from "react-router-dom"

const Navbar = () => {
 /* const [activeLink, setActiveLink] = useState('home');*/
  const [scrolled, seScrolled] = useState(false);

  const history = useHistory()
  
  function signup (){
    history.push("/signup")
  }
  function login (){
    history.push("/login")
  }
  
  useEffect(() => {
    const onscroll = () => {
      if (window.scrollY > 6) {
        seScrolled(true);
      } else {
        seScrolled(false)
      }
    }
    window.addEventListener("scroll", onscroll);

    return () => window.removeEventListener("scroll", onscroll);
  }, [])
  return (

    <nav className="navbar navbar-expand-lg "  id={scrolled ?"scrolled_nav":"Defult_nav" }>
      <div className= 'container-fluid ' id={scrolled ?"scrolled_nav":"Defult_nav"}>
        <a className="navbar-brand" href="/"><img className="logo" alt="logo..." src={Logo} /></a>
        <button className="navbar-toggler" id="brdericon" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FaBars className="menuicon" size={20} />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item" >
             <Link className="nav-link" to="Header" spy={true} smooth={true} offset={-125} duration={500} >Home</Link>
            </li>
            <li className="nav-item">
             <Link className="nav-link" to="service" spy={true} smooth={true} offset={-125} duration={500} >Services</Link>
            </li>
            <li className="nav-item">
             <Link className="nav-link" to="project" spy={true} smooth={true} offset={-125} duration={500} >Project</Link>
            </li>
            <li className="nav-item">
             <Link className="nav-link" to="ContactUs" spy={true} smooth={true} offset={-125} duration={500} >Contact us</Link>
            </li>
            <li className="nav-item">
             <Link className="nav-link" to="Footer" spy={true} smooth={true} offset={-350} duration={500} >About us</Link>
            </li>
          </ul>
          <button className="mybtn" onClick={login} >LOGIN</button>
          <button className="mybtn" onClick={signup}>SIGNUP</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
