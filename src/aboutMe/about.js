import React from 'react'
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Jumbotron,
} from 'reactstrap';
import aboutPic from './about.jpg' 
import {projects} from '../projects/projects'

export const about = () => {
    return (
        <div style={{textAlign:'center'}}>
             <Navbar color="light" light expand="md" style={{margin:'20px'}}>
                <NavbarBrand href="/">Bryan Law</NavbarBrand>
                <Nav className="mr-auto" navbar>
                    <NavItem> <NavLink href="/about" component={about}>About Me</NavLink> </NavItem>
                    <NavItem> <NavLink href="/projects" component={projects}>Projects</NavLink> </NavItem>
                    <NavItem> <NavLink href="/components/">Resume[download]</NavLink> </NavItem>
                </Nav>
            </Navbar>
            <Jumbotron style={{width:'70%',height:"70vh",margin:'auto'}}>
                <img src={aboutPic} alt="homepage" height="200" style={{marginBottom:'25px'}}/>
                <p className="lead">Rutgers Honors College- New Brunswick 2022</p>
                <hr className="my-2" />
                <p>My name is Bryan Law and I am a computer science major at Rutgers University, New Brunswick. I grew up in Brooklyn, New York but moved to Piscataway in 2012.</p>
                <p>I began learning computer science in high school but I have always had a love for technology and computers.</p>
                <p>Through coding and computer science, I want to create applications that will help and entertain people.</p>
                <p><a href="https://steamcommunity.com/id/walrm" target="blank">Steam Profile</a></p>
                <p><a href="https://photos.app.goo.gl/Fj2jq2NNJqVufmmF6" target="blank">Origami</a></p>
            </Jumbotron>
        </div>
    )
}
