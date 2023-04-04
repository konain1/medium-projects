import React from 'react'
import Card from '../../Card/Card'
import "./Row.scss"


function Row( props) {

    const imageUrl ="https://image.tmdb.org/t/p/original/"


  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div>

        {props?.arr?.map((item,index)=>(
            <Card key={index} img={`${imageUrl}${item.poster_path}`} />
        ))}

       

        </div>
    </div>
  )
}

export default Row
