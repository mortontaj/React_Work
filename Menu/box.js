import React from 'react'

function Box(props){
    return (
        <div className="box">
            <h2>{props.header}</h2>
            <p>{props.number}</p>
            <p>{props.number2}</p>
            <p>{props.number3}</p>      
        </div>
    )   
}

export default Box;