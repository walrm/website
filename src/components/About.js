import React from 'react';
import {
    Jumbotron,
} from 'reactstrap';
import home from '../home.jpg'
import github from '../github.png'
import linkedin from '../linkedin.png'

export const About = () => {
    // const animate = (e) =>{
    //     if(!e.target.classList.contains("jumbotron"))return;
    //     if(e.target.classList.contains('animateFocus')){
    //         e.target.classList.remove('animateFocus')
    //     }else{
    //         e.target.classList.add('animateFocus')
    //     }
    // }

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
    )
}