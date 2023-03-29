import React from 'react'
import "./Card.scss"

function Card(props) {
  return (
    
    <img className='card' src={props.arrimg.map((item)=>{
        return item.img;
    })} />
  
  )
}

export default Card
