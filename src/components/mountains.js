import React from 'react'
import '../App.css';

function Mountains() {

    return (
        <Parallax className="custom-class" x={[-10, 10]} tagOuter="figure">
        <img className = 'mountains' src={('/img/mountains.svg')} alt ='mountains' />
        </Parallax>
    )
}

export default Mountains