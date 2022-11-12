import React from 'react';
import Navbar  from './FirstPage/Navbar';
import Header from './FirstPage/Header';
import Services from './FirstPage/Services';
import Project from './FirstPage/Ourprojects';
import Jsutimage from './FirstPage/Jsutimage';
import Contactform from './FirstPage/Contactform';
import Footer from './FirstPage/Footer';

const Firstpage = () => {
  return (
    <div className='App'>
       <Navbar  />
        <Header />
        <Services />
        <Project />
        <Jsutimage />
        <Contactform />
        <Footer />
    </div>
  )
} 

export default Firstpage
