import React from 'react';
import {
    Jumbotron,
} from 'reactstrap';
import home from './home.jpg'
import resume from './Bryan_Law_Resume.pdf'

export const About = () => {
        return(    
        <div className="App">
            <Jumbotron>
            <h1 className="display-3" style={{fontFamily:'Amatic SC, cursive;', fontSize:'3em', marginBottom:'25px'}}>Bryan Law</h1>
            <img src={home} alt="homepage" height="200" style={{marginBottom:'25px'}}/>
            <table style={{margin:'auto'}}>
                <tr className="about">
                    <th >Hello! My name is Bryan Law and I am studying computer science at Rutgers University- New Brunswick.</th>
                </tr>
                <tr className="about">
                    <th >I am looking to pursure a future career in software engineering.</th>
                </tr>
                <tr className="about">
                    <th >Through software, I aim to create applications to aid and entertain people.</th>
                </tr>
                
                <hr className="my-2"/>
                
                <tr className="about">
                    <a href={resume} target="_blank" rel="noopener noreferrer">Resume</a>
                    {/* <a href="https://www.linkedin.com/in/bryanlawye/" target="blank"><img src={linkedin} alt="LinkedIn" height="50px" style={{marginRight:"50px"}}/></a>
                    <a href="https://github.com/walrm" target="blank"><img src={github} alt="GitHub" height="50px" style={{marginLeft:"50px"}}/></a> */}
                </tr>
            </table>
            </Jumbotron>
        </div>
    )
}