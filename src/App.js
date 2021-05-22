import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Jumbotron,
} from 'reactstrap';

import {about} from './aboutMe/about'
import {projects} from './projects/projects'
import github from './github.png'
import linkedin from './linkedin.png'
import home from './home.jpg'
import resume from './Bryan_Law_Resume.pdf'
import './App.css';

function App() {
  return (
    <div className="App">
     <Navbar color="light" light expand="md" style={{margin:'20px'}}>
        <NavbarBrand href="/">Bryan Law</NavbarBrand>
          <Nav className="mr-auto" navbar>
            <NavItem> <NavLink href="/about" component={about}>About Me</NavLink> </NavItem>
            <NavItem> <NavLink href="/projects" component={projects}>Projects</NavLink> </NavItem>
            <NavItem> <NavLink href={resume} download="Bryan_Law_Resume.pdf">Resume[download]</NavLink> </NavItem>
          </Nav>
      </Navbar>
      <Jumbotron style={{width:'80%',height:"70vh",margin:'auto'}}>
        <img src={home} alt="homepage" height="200" style={{marginBottom:'25px'}}/>
        <h1 className="display-3" style={{marginBottom:'25px'}}>Bryan Law</h1>
        <hr className="my-2" />
        <p>•Flutter&emsp;•ReactJS&emsp;•Java&emsp;•C&emsp;•JavaScript&emsp;•HTML&emsp;•JS&emsp;•Python</p>
        <div>
          <a href="https://www.linkedin.com/in/bryanlawye/" target="blank"><img src={linkedin} alt="LinkedIn" height="50px" style={{marginRight:"50px"}}/></a>
          <a href="https://github.com/walrm" target="blank"><img src={github} alt="GitHub" height="50px" style={{marginLeft:"50px"}}/></a>
        </div>
      </Jumbotron>
    </div>
  );
}

export default App;
