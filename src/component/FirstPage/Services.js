import React from "react";
import {Container, Col ,Row} from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import backcon from '../../Assest/backcontimg.png';
import imgwebdev from '../../Assest/webdeve.png';
import imdwebdisg from '../../Assest/webdeisn.png';
import imgmobile from '../../Assest/mobiledeve.png';
import database from '../../Assest/database.png';


const Services = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      return(
        <>
        <section className="service" id="service">
            <Container className="stoo">
                <Row>
                    <Col>
                    <div className="parent-items col-12 ">
                        <h2>Our services</h2>
                        <p>Browse our services  <br></br></p>
                        <Carousel responsive={responsive} infinite= {true} className="slider">
                            <div className='item'>
                                 <img src={imgwebdev} alt='Image'  />
                                 <h5>Web development</h5>
                            </div>
                            <div className='item'>
                                 <img src={imdwebdisg} alt='Image'  />
                                 <h5>Web desgin</h5>
                            </div>
                            <div className='item'>
                                 <img src={imgmobile} alt='Image'  />
                                 <h5>Mobile App</h5>
                            </div>
                            <div className='item'>
                                 <img src={database} alt='Image'  />
                                 <h5>Data Base</h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left"  src={backcon} alt='image...'  />
        </section>
        
        </>
      );
}

export default Services
