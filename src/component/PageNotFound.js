import React from 'react'
import Logo from "../Assest/logo1.png";
const PageNotFound = () => {
  return (
    <div className='pagenotfond'>
      <h1>
        404
        PageNotFound
      </h1>
      <a href="/"><img className="logo" alt="logo..." src={Logo} /><br></br>Go Back</a>
    </div>
  )
}

export default PageNotFound
