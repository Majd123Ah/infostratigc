import React from "react";
import Typed from "react-typed";
import {  useHistory } from "react-router-dom"

const Header = () => {
  const history = useHistory()
  function getstarted (){
    history.push("/login")
  }


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
          <button onClick={getstarted} className="getstarted">Get Started</button>
        </div>
      </div>

  )
}

export default Header
