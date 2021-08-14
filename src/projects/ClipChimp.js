import React from 'react';
import {
    Jumbotron,
} from 'reactstrap';
import clipchimp from './clipchimp.png'

export const ClipChimp = () => {
    return(    
        <div className="App">
        <Jumbotron id='clipchimp'>
          <h1 className="display-3" style={{fontFamily:'Amatic SC, cursive;', fontSize:'3em', marginBottom:'25px'}}>ClipChimp</h1>
          <img src={clipchimp} alt="ruvax homescreen" style={{width:'100%'}}/>
          <table style={{margin:'auto'}}>
            <tr className="about">
              <th >Compiles clips from twitch.tv from all your followed channels.</th>
            </tr>
            <hr className="my-2"/>
            <tr className="about">
              <th className="about">•React&emsp;•Node&emsp;•Javascript&emsp;•Twitch API</th>
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