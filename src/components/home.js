import React from 'react'
import Mountains from './mountains.js';
import '../App.css';
import {Link} from 'react-router-dom'

function Home() {
    return (
      <div className="page">
        <div className = 'name-wrap'>
        <div className = 'name'>
            <p>
                Espen Scheuer
                <br></br>
                Product Manager
            </p>
        </div>
        <div className = "bubble-wrap"> <div className = "bubble"></div> </div>
        </div>
            <Mountains/>
        <div className = 'content'>
            <div className = 'work'>
            <p className = 'work-title'>
                Selected <br></br> Work
            </p>
            <div className = "work-wrap">
                <img className = 'work-image' src={('/img/madrona.png')} alt ='work'/>
                <div className = 'work-titles'>
                    <div className = 'work-title'>
                        <p className = 'work-category'> PRODUCT MANAGEMENT </p>
                        <Link className = 'work-link' to ='/madrona'>Madrona Venture Labs</Link>
                    </div>
                    <div className = 'work-title'>
                        <p className = 'work-category'> PRODUCT MANAGEMENT </p>
                        <Link className = 'work-link' to ='/workday'>Workday Mobile Team</Link>
                    </div>
                    <div className = 'work-title'>
                        <p className = 'work-category'> BACK END DEVELOPMENT </p>
                        <Link className = 'work-link' to ='/mobility'>Mobility Innovation Center</Link>
                    </div>
                    <div className = 'work-title'>
                        <p className = 'work-category'> PRODUCT MANAGEMENT </p>
                        <Link className = 'work-link' to ='/nomadic'>Nomadic</Link>
                    </div>
                </div>
            </div> 
        </div>
        </div>
        <div className = 'flipped'>
            <Mountains/>
        </div>
      </div>
    )
}
export default Home

