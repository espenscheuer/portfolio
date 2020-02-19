import React from 'react'
import '../App.css';

function Footer() {

    return (
        <header className="App-footer">
          <div className = 'left'>
                <div className = 'link'>  
                    BUILT IN REACT
                </div>
            </div>
            <div className = 'right'>
                <div className = "footer-link"> 
                    <a className = 'links' href="https://github.com/espenscheuer">GITHUB</a>
                    <a className = 'links' href="https://www.linkedin.com/in/espen-scheuer/">LINKEDIN</a>
                </div>
            </div>
        </header>
    )
}

export default Footer