import React, {useState, useEffect} from 'react'
import Mountains from './mountains.js';
import Bubble from './bubble.js';
import '../App.css';
import { Parallax } from 'react-scroll-parallax';
import {Link} from 'react-router-dom'

function Home() {
    const [bubbles, setBubbles] = useState([(getRandomInt(100) - 50)])
    const [zscores, setZscores] = useState([3,2,1,0])
    const [top, setTop] = useState(0)
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    function mouseEnter(num){
        if(num !== top) {
            let temp = [...zscores]
            let curr = temp[num]
            temp[num] = temp[top]
            temp[top] = curr
            setTop(num)
            setZscores(temp)
        }
    }
    
    useEffect(() => {
        const interval = setInterval(() => {
            
            setBubbles(current => {
                console.log(current)
                let temp = [...current]
                temp.push(getRandomInt(100))
                console.log(temp)
                return temp
            })
        }, 2000)
        return () => clearInterval(interval)
      }, [])

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
        </div>
        {bubbles.map((item, index) => {
            if(index >=  (bubbles.length - 20)) {
                return (<Bubble style = {{transition: "10s", transform: "translate(0px, 100px)", marginLeft: ((50 + item) +"%")}}/>)
            }

        })}
        <Parallax  x={[-10, 10]} tagOuter="figure">
            <Mountains/>
        </Parallax>

        <div className = 'content'>
            <div className = 'work'>
            <p className = 'work-header'>
                Selected <br></br> Work
            </p>
            <div className = "work-wrap">
                <div className = 'image-wrap'>
                    <img className = 'work-image' state = {zscores[0].toString()} style={{zIndex:zscores[0]}} src={('/img/one.png')} alt ='work'/>
                    <img className = 'work-image' state = {zscores[1].toString()} src={('/img/two.png')} style={{zIndex:zscores[1]}} alt ='work'/>
                    <img className = 'work-image' state = {zscores[2].toString()} src={('/img/three.png')} style={{zIndex:zscores[2]}} alt ='work'/>
                    <img className = 'work-image' state = {zscores[3].toString()} src={('/img/four.png')} style={{zIndex:zscores[3]}} alt ='work'/>
                </div>
                <div className = 'work-titles'>
                    <div className = 'work-title' onMouseEnter={() => mouseEnter(0)}>
                        <p className = 'work-category'> PRODUCT MANAGEMENT </p>
                        <Link className = 'work-link' to ='/madrona'>Madrona Venture Labs</Link>
                    </div>
                    <div className = 'work-title' onMouseEnter={() => mouseEnter(1)}>
                        <p className = 'work-category'> PRODUCT MANAGEMENT </p>
                        <Link className = 'work-link' to ='/workday'>Workday Mobile Team</Link>
                    </div>
                    <div className = 'work-title' onMouseEnter={() => mouseEnter(2)}>
                        <p className = 'work-category'> BACK END DEVELOPMENT </p>
                        <Link className = 'work-link' to ='/mobility'>Mobility Innovation Center</Link>
                    </div>
                    <div className = 'work-title' onMouseEnter={() => mouseEnter(3)}>
                        <p className = 'work-category'> PRODUCT MANAGEMENT </p>
                        <Link className = 'work-link' to ='/nomadic'>Nomadic</Link>
                    </div>
                </div>
            </div> 
        </div>
        </div>
        <div className = 'flipped'>
            <Parallax x={[10, -10]} tagOuter="figure">
                <Mountains/>
            </Parallax>
        </div>
      </div>
    )
}
export default Home

