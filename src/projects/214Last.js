import React from 'react';
import {
    Jumbotron,
} from 'reactstrap';
import wtf from './214Last.png'

export const WTF = () => {
    return(    
        <div className="App" style={{height:'75vh'}}>
        <Jumbotron id='WTF'>
          <h1 className="display-3" style={{fontFamily:'Amatic SC, cursive;', fontSize:'3em', marginBottom:'25px'}}>214Last</h1>
          <img src={wtf} alt="Code from 214Last" style={{width:'100%'}}/>
          <table style={{margin:'auto'}}>
            <tr className="about">
              <th>Version history control with socket network programming.</th>
            </tr>
            <hr className="my-2"/>
            <tr className="about">
              <th className="about">•C</th>
            </tr>
            <tr className="about">
              <a href="https://github.com/walrm/214Last" target="blank">Github</a>
            </tr>
          </table>
        </Jumbotron>
      </div>
    )
}