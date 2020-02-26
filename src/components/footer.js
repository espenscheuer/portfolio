import React from 'react'
import '../App.css';

function Footer() {

    return (
        <header className="App-footer">
          <div className = 'left'>
          
                <div className = 'tag'>  
                    BUILT IN REACT
                </div>
           
            </div>
            <div className = 'right'>
                <div className = "footer-link"> 
                <div className = 'link-wrap'>
                    <a className = 'link' href="https://github.com/espenscheuer">GITHUB</a>
                </div>
                <div className = 'link-wrap'>
                    <a className = 'link' href="https://www.linkedin.com/in/espen-scheuer/">LINKEDIN</a>
                </div>
                </div>
            </div>
        </header>
    )
}

export default Footer