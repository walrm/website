import React from 'react';
import {
  Jumbotron,
} from 'reactstrap';

import {about} from './aboutMe/about'
import {projects} from './projects/projects'
import ruvax from './projects/ruvax.png'
import github from './github.png'
import linkedin from './linkedin.png'
import home from './home.jpg'
import resume from './Bryan_Law_Resume.pdf'
import './App.css';

function App() {
  return (
    <>
    <div className="App">
      <Jumbotron>
        <h1 className="display-3" style={{fontFamily:'Amatic SC, cursive;', fontSize:'3em', marginBottom:'25px'}}>Bryan Law</h1>
        <img src={home} alt="homepage" height="200" style={{marginBottom:'25px'}}/>
        <table>
          <tr className="about">
            <th >Hello! My name is Bryan Law and I am studying computer science at Rutgers University- New Brunswick.</th>
          </tr>
          
          <hr className="my-2"/>
          
          <tr className="about">
            <th className="about">•Flutter&emsp;•ReactJS&emsp;•Java&emsp;•C&emsp;•JavaScript&emsp;•HTML&emsp;•Python&emsp;•Node</th>
          </tr>
         
          <tr className="about">
            <a href="https://www.linkedin.com/in/bryanlawye/" target="blank"><img src={linkedin} alt="LinkedIn" height="50px" style={{marginRight:"50px"}}/></a>
            <a href="https://github.com/walrm" target="blank"><img src={github} alt="GitHub" height="50px" style={{marginLeft:"50px"}}/></a>
          </tr>
        </table>
      </Jumbotron>
    </div>

    <div className="App">
    <Jumbotron id='projectsRuVAX'>
        <h1 className="display-3" style={{fontFamily:'Amatic SC, cursive;', fontSize:'3em', marginBottom:'25px'}}>RU Vaxxed</h1>
        <img src={ruvax} alt="ruvax homescreen" style={{width:'100%'}}/>
        <table>
          <tr className="about">
            <th >Hello! My name is Bryan Law and I am studying computer science at Rutgers University- New Brunswick.</th>
          </tr>
          
          <hr className="my-2"/>
          
          <tr className="about">
            <th className="about">•Flutter&emsp;•ReactJS&emsp;•Java&emsp;•C&emsp;•JavaScript&emsp;•HTML&emsp;•Python&emsp;•Node</th>
          </tr>
         
          <tr className="about">
            <a href="https://www.linkedin.com/in/bryanlawye/" target="blank"><img src={linkedin} alt="LinkedIn" height="50px" style={{marginRight:"50px"}}/></a>
            <a href="https://github.com/walrm" target="blank"><img src={github} alt="GitHub" height="50px" style={{marginLeft:"50px"}}/></a>
          </tr>
        </table>
      </Jumbotron>
    </div>

    </>
  );
}

export default App;
