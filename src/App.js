import React from 'react';
import {About} from './About'
import {RuVaxx} from './projects/RuVaxx'
import {ClipChimp } from './projects/ClipChimp'
import {Travel} from './projects/Travel'
import {WTF} from './projects/214Last'
import {Contact} from './Contact'
import './App.css';

function App() {
  return (
    <>
      <About/>
      <div className="label_container">
        <p>Projects</p>
      </div>

      <RuVaxx/>
      <ClipChimp/>
      <Travel/>
      <WTF/>

      <div id="otherlinks">
        <p style={{fontSize:'2vh'}}><b>Hobbies and Interests</b></p>
        <p><a href="https://steamcommunity.com/id/walrm" target="blank">Steam Profile</a></p>
        <p><a href="https://photos.app.goo.gl/Fj2jq2NNJqVufmmF6" target="blank">Origami</a></p>
      </div>
      <Contact/>
    </>
  );
}

export default App;
