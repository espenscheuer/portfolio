import React, {useState} from 'react'

import '../App.css';

import {Link, useLocation} from 'react-router-dom'


function Header(props) {
    const [menu, setMenu] = useState(100)
    const location = useLocation();
    console.log(location.pathname)

    return (

        <>
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
                <img className = "hamburger" src="img/hamburger.png" width="35" onClick={() => setMenu(0)}/>

            </div>
        </header>
        <div className = "menu" style = {{"left" : menu + "vw" }}>
            <img className = "hamburger2" src="img/x.png" width="20" onClick={() => setMenu(100)}/>

            <div className = 'menu-link-wrap'>
            <Link className = 'menu-link' to ='/' onClick={() => setMenu(100)}>ESPEN SCHEUER</Link>
            <Link className = 'menu-link' to ='/about' onClick={() => setMenu(100)}>ABOUT ME</Link>
            <div className = 'menu-footer'>
            <a className = 'mf-link' href="https://github.com/espenscheuer">GITHUB</a>
            <p className = 'mf-link'> - </p>
            <a className = 'mf-link' href="https://www.linkedin.com/in/espen-scheuer/">LINKEDIN</a>
            </div>
            </div>


        </div>

        </>
    )
}

export default Header