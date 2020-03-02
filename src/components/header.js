import React, {useState} from 'react'

import '../App.css';

import {Link, useLocation} from 'react-router-dom'


function Header(props) {
    const [menu, setMenu] = useState(false)
    const location = useLocation();
    console.log(location.pathname)
    return (
        <header className="App-header"> 
            <div className = 'left'>
                <div className = 'header-wrap'>
                    {location.pathname === '/' ? <Link page = 'fixed' className = 'header-link' to ='/'>ESPEN SCHEUER </Link> :
                    <Link className = 'header-link' to ='/'>ESPEN SCHEUER </Link>}
                </div>
            </div>
            <div className = 'right'>
                <div className = 'header-wrap'>
                {location.pathname === '/about' ? <Link page = 'fixed' className = 'header-link' to ='/about'>ABOUT ME </Link> :
                    <Link className = 'header-link' to ='/about'>ABOUT ME </Link>}
                </div>
            </div>
        </header>
    )
}

export default Header