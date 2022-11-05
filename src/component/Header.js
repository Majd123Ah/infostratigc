import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
      <div className="Header-wraper " id="Header">
        <div className="main-info">
         <p className="Headertext1">information technology consulting & Solutions</p>
          <Typed
            className="typed_style"
            strings={[" information technology", "web desgin", "web develoment", "Take Full Control"]}
            typeSpeed={40}
            backSpeed={60}
            loop
          />
          <button className="getstarted">Get Started</button>
        </div>
      </div>

  )
}

export default Header
