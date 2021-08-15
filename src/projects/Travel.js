import React from 'react';
import {
    Jumbotron,
} from 'reactstrap';
import travel from './travel.png'

export const Travel = () => {
    return(    
        <div className="App">
        <Jumbotron id='travel'>
          <h1 className="display-3" style={{fontFamily:'Amatic SC, cursive;', fontSize:'3em', marginBottom:'25px'}}>Mock Travel</h1>
          <img src={travel} alt="Travel Reservation System" style={{width:'100%'}}/>
          <table style={{margin:'auto'}}>
            <tr className="about">
              <th>Model travel reservation system with administrative login.</th>
            </tr>
            <hr className="my-2"/>
            <tr className="about">
              <th className="about">•Java&emsp;•JSP&emsp;•HTML&emsp;•MySQL</th>
            </tr>
            <tr className="about">
              <a href="https://github.com/ShreyasBhise/CS336Project" target="blank">Github</a>
            </tr>
          </table>
        </Jumbotron>
      </div>
    )
}