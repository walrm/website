import React from 'react';
import resume from './Bryan_Law_Resume.pdf'

export const Contact = () => {
        return(    
        <div className="App" id="Contact">
          <p style={{fontSize:'6vh', fontFamily:'Georama'}}>Contact Me!</p>
          <p><a href="mailto: bryan.law@rutgers.edu">bryan.law@rutgers.edu</a></p>
          <p><a href="https://www.linkedin.com/in/bryanlawye/" target="blank">LinkedIn</a></p>
          <p><a href="https://github.com/walrm" target="blank">GitHub</a></p>
          <p><a href={resume} target="blank" rel="noopener noreferrer">Resume</a></p>
        </div>
    )
}