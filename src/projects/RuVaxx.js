import React from 'react';
import {
    Jumbotron,
} from 'reactstrap';
import ruvax from './ruvax.png'

export const RuVaxx = () => {
    return(    
        <div className="App">
        <Jumbotron id="ruvax">
          <h1 className="display-3" style={{fontFamily:'Amatic SC, cursive;', fontSize:'3em', marginBottom:'25px'}}>RU Vaxxed</h1>
          <img src={ruvax} alt="ruvaxx homescreen" style={{width:'100%'}}/>
          <table style={{margin:'auto'}}>
            <tr className="about">
              <th >Text notifications for Covid-19 NJ vaccinations at CVS.</th>
            </tr>
            <hr className="my-2"/>
            <tr className="about">
              <th className="about">•React&emsp;•Flask&emsp;•MongoDB&emsp;•Twilio API</th>
            </tr>
            <tr className="about">
              <a href="https://ruvax.herokuapp.com/" target="blank" style={{marginRight:'10px'}}>Site</a>
              <a href="https://github.com/kt398/VaccineNotification" target="blank">Github</a>
            </tr>
          </table>
        </Jumbotron>
      </div>
    )
}