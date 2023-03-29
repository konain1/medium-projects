import React from 'react'
import Card from '../../Card/Card'
import "./Row.scss"


function Row(props) {
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div>
        <Card arrimg={[img:"https://hippy.in/wp-content/uploads/2014/06/lagaan-bollywood-movie-poster.jpg"]} />
        

        </div>
    </div>
  )
}

export default Row
