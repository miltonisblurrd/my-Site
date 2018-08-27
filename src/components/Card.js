import React from 'react'
import './Card.css'

const Card = props => (
    <div className="Card">
       <img src={props.image} /> 
        <h2>{props.title}</h2>
        <p>{props.text}y</p>

    </div>

)
export default Card