import React from 'react'
import '../App.css';

import {Link} from 'react-router-dom'

function Header() {
    
    return (
        <header className="App-header"> 
            <div className = 'left'>
                <Link className = 'header-link' to ='/'>ESPEN SCHEUER </Link>
            </div>
            <div className = 'right'>
                <Link className = 'header-link' to ='/about'>ABOUT ME</Link>
            </div>
        </header>
    )
}

export default Header