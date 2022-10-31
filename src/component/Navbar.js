import React from "react";
import Logo from "../Assest/logo1.png";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img className="logo"  alt="logo..." src={Logo} /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" >
            <i className="fas fa-bars" id="sss" ></i>
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
             </li>
             <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">about us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Links</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact us</a>
              </li>
            </ul>
            <button className="btn btn-outline-primary" type="submit">LOGIN</button>
            <button className="btn btn-outline-primary" type="submit">SIGNUP</button>
          </div>
        </div>
    </nav>
  )
}

export default Navbar;
