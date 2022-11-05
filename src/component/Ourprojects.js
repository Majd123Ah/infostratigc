import React from 'react'
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import project_image1 from '../Assest/project_image1.png';
import project_image2 from '../Assest/project_image2.png';
import project_image3 from '../Assest/project_image3.png';
import project_image4 from '../Assest/project_image4.png';
import phoneproj_imag1 from '../Assest/mobile_image1.png';
import phoneproj_imag2 from '../Assest/mobile_image2.png';
import phoneproj_imag3 from '../Assest/mobile_image3.png';
import phoneproj_imag4 from '../Assest/mobile_image4.png';
 const Ourprojects = () => {
    const projectsweb = [
        {
            title: "Web Builder",
            description: "Web Developing & Design",
            imgUrl: project_image4,
        },
        {
            title: "Web Builder",
            description: "Web Developing & Design",
            imgUrl: project_image1,
        },
        {
            title: "Web Builder",
            description: "Web Developing & Design",
            imgUrl: project_image2,
        },
        {
            title: "Web Builder",
            description: "Web Developing & Design",
            imgUrl: project_image3,
        },
        {
            title: "Web Builder",
            description: "Web Developing & Design",
            imgUrl: project_image4,
        },
        {
            title: "Web Builder",
            description: "Web Developing & Design",
            imgUrl: project_image1,
        },
        {
            title: "Web Builder",
            description: "Web Developing & Design",
            imgUrl: project_image2,
        },
        {
            title: "Web Builder",
            description: "Web Developing & Design",
            imgUrl: project_image3,
        },
        {
            title: "Web Builder",
            description: "Web Developing & Design",
            imgUrl: project_image4,
        },

    ];
    const projectsphone = [
        {
            title: "Mobile App",
            description: "Mobile Developing & Design",
            imgUrl: phoneproj_imag1,
        },
        {
            title: "Mobile App",
            description: "Mobile Developing & Design",
            imgUrl: phoneproj_imag2,
        },
        {
            title: "Mobile App",
            description: "Mobile Developing & Design",
            imgUrl: phoneproj_imag3,
        },
        {
            title: "Mobile App",
            description: "Mobile Developing & Design",
            imgUrl: phoneproj_imag4,
        },
        {
            title: "Mobile App",
            description: "Mobile Developing & Design",
            imgUrl: phoneproj_imag1,
        },
        {
            title: "Mobile App",
            description: "Mobile Developing & Design",
            imgUrl: phoneproj_imag2,
        },
        {
            title: "Mobile App",
            description: "Mobile Developing & Design",
            imgUrl: phoneproj_imag3,
        },
        {
            title: "Mobile App",
            description: "Mobile Developing & Design",
            imgUrl: phoneproj_imag4,
        },
        {
            title: "Mobile App",
            description: "Mobile Developing & Design",
            imgUrl: phoneproj_imag1,
        },

    ];
    return (
        <>
            <section className='project' id='project'>
                <Container className="Conta-sm">
                    <Row>
                        <Col>
                            <h2>Projects</h2>
                            <p>it is simple text about project</p>
                            <Tab.Container id="project-tabs" defaultActiveKey="first">
                                <Nav className="Nav-sm" variant="pills" defaultActiveKey="first" >
                                    <Nav.Item >
                                        <Nav.Link eventKey="first">Web</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item >
                                        <Nav.Link eventKey="second">Mobile</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item >
                                        <Nav.Link eventKey="third">third</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content className='tapcontent'>
                                    <Tab.Pane className='panecontent' eventKey="first">
                                        <Row>
                                            {
                                                projectsweb.map((project, index) => {
                                                    return (
                                                        <ProjectCard
                                                            key={index}
                                                            {...project}
                                                        />
                                                    )
                                                })
                                            }
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second" className='panecontent'>
                                        <Row>
                                            {
                                                projectsphone.map((project, index) => {
                                                    return (
                                                        <ProjectCard
                                                            key={index}
                                                            {...project}
                                                        />
                                                    )
                                                })
                                            }
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third" className='panecontent'>
                                        <div className='somestyle'>
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>

                            </Tab.Container>
                        </Col>
                    </Row>
                </Container>
            </section>
            <div className="just_image"></div>
        </>
    )
}

export default Ourprojects
