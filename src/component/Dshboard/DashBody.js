import React from 'react'
import { Card } from 'react-bootstrap'
import titlelogo from '../../Assest/titlelogo1.png'
import { FaTimes, FaPlus, FaArrowLeft, FaArrowRight, FaRedo,FaInfo } from 'react-icons/fa';
import { useState } from 'react';

const DashBody = () => {

 

    const [backgroundd,setbackgroundd]=useState('');

    return (
        <Card>
            <div className='Dashbody'>

                <h1> Custom your web Design</h1>
                <div className='conta'>
                    <div className='webheader'>
                        <div className='webtitle'>
                            <img src={titlelogo} alt='opop' />
                            <label>project name</label>
                            <FaTimes className='iconremove iconss' size={12} />
                        </div>
                        <FaPlus className='iconplus iconss' />
                        <div className='urltab'>
                            <div className='iconsgroup' >
                            <FaArrowLeft className='iconss' />
                            <FaArrowRight className='iconss' />
                            <FaRedo className='iconss' />
                            </div>
                            <div className='wwww'>
                                <FaInfo  className='iconss' size={12}/>
                                <label>https://www.projectname.com</label>
                            </div>
                        </div>

                    </div>

                    <div className='Dashbodycontext' id='Dashbodycontext' >
                        <img src='' />
                    </div>


                </div>
                <div className='toolsconta'>

                    <input type="file" accept="image/*" id="backimgetest"/>
                </div>

            </div>
        </Card>
    )
}

export default DashBody
