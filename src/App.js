import React from 'react';
import {
  Jumbotron,
} from 'reactstrap';

import {About} from './components/About'
import ruvax from './projects/ruvax.png'

import resume from './Bryan_Law_Resume.pdf'
import './App.css';

function App() {
  return (
    <>
    <About/>

    <div className="App">
    <Jumbotron id='projectsRuVAX'>
        <h1 className="display-3" style={{fontFamily:'Amatic SC, cursive;', fontSize:'3em', marginBottom:'25px'}}>RU Vaxxed</h1>
        <img src={ruvax} alt="ruvax homescreen" style={{width:'100%'}}/>
        <table style={{margin:'auto'}}>
          <tr className="about">
            <th >Text notifications for Covid-19 NJ vaccinations at CVS.</th>
          </tr>
          <hr className="my-2"/>
          <tr className="about">
            <th className="about">•React&emsp;•Flask&emsp;•MongoDB&emsp;•Twilio API</th>
          </tr>
        </table>
      </Jumbotron>
    </div>

    </>
  );
}

export default App;
