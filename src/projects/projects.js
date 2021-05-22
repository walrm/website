import React from 'react'
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Card, CardText, CardBody, CardLink,
    CardTitle, CardGroup, Col, CardSubtitle
} from 'reactstrap';

import {about} from '../aboutMe/about'
import clipchimp from './clipchimp.png'
import last214 from './214Last.png'
import ruvax from './ruvax.png'
import resume from '../Bryan_Law_Resume.pdf'
import travel from './travel.png'

export const projects = () => {
    return (
        <>
            <Navbar color="light" light expand="md" style={{margin:'20px'}}>
                <NavbarBrand href="/">Bryan Law</NavbarBrand>
                <Nav className="mr-auto" navbar>
                    <NavItem> <NavLink href="/about" component={about}>About Me</NavLink> </NavItem>
                    <NavItem> <NavLink href="/projects" component={projects}>Projects</NavLink> </NavItem>
                    <NavItem> <NavLink href={resume} download="Bryan_Law_Resume.pdf">Resume[download]</NavLink> </NavItem>
                </Nav>
            </Navbar>

            <CardGroup style={{margin:'50px'}}>

                <Col >
                    <Card body style={{width:'400px',margin:'auto'}}>
                        <img height="250px" width="100%" src={ruvax} alt="clipchimp"/>
                        <CardBody>
                            <CardTitle><b>RuVaxxed</b></CardTitle>
                            <CardSubtitle>React, Flask, MongoDB, Twilio API</CardSubtitle>
                            <CardText></CardText>
                            <CardText>Get text notifications for Covid-19 NJ vaccinations at CVS.</CardText>
                            <CardLink href="https://clipchimp.onrender.com/" target="blank">Site</CardLink>
                            <CardLink href="https://github.com/walrm/ClipChimp" target="blank">Github</CardLink>
                        </CardBody>
                    </Card>
                </Col>

                <Col >
                    <Card body style={{width:'400px',margin:'auto'}}>
                        <img height="250px" width="100%" src={clipchimp} alt="clipchimp"/>
                        <CardBody>
                            <CardTitle><b>ClipChimp</b></CardTitle>
                            <CardSubtitle>React, Node, Javascript, Twitch API</CardSubtitle>
                            <CardText></CardText>
                            <CardText>Compiles clips from twitch.tv from all your followed channels.</CardText>
                            <CardLink href="https://clipchimp.onrender.com/" target="blank">Site</CardLink>
                            <CardLink href="https://github.com/walrm/ClipChimp" target="blank">Github</CardLink>
                        </CardBody>
                    </Card>
                </Col>

                
            </CardGroup>

            <CardGroup style={{margin:'50px'}}>
                <Col>
                    <Card body style={{width:'400px',margin:'auto'}}>
                        <img height="250px" width="100%" src={last214} alt="clipchimp"/>
                        <CardBody>
                            <CardTitle><b>Where's That File?</b></CardTitle>
                            <CardSubtitle>C</CardSubtitle>
                            <CardText>Version history control with socket network programming.</CardText>
                            <CardLink href="https://github.com/walrm/214Last" target="blank">Github</CardLink>
                        </CardBody>
                    </Card>
                </Col>

                <Col>
                    <Card body style={{width:'400px',margin:'auto'}}>
                        <img height="250px" width="100%" src={travel} alt="clipchimp"/>
                        <CardBody>
                            <CardTitle><b>Travel Reservation System</b></CardTitle>
                            <CardSubtitle>Java, JSP, HTML, MySQL</CardSubtitle>
                            <CardText>Model travel reservation system with administrative login.</CardText>
                            <CardLink href="https://github.com/ShreyasBhise/CS336Project" target="blank">Github</CardLink>
                        </CardBody>
                    </Card>
                </Col>
            </CardGroup>
            
        </>
    )
}
