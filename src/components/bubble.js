import React from 'react'
import '../App.css';

function Bubble(props) {

    return (
        <div style = {props.style} className = "bubble-wrap"> <div className = "bubble"></div> </div>
    )
}

export default Bubble