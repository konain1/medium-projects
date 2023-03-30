import React from 'react'
import Card from '../../Card/Card'
import "./Row.scss"


function Row({ arr=[{
    img:"https://hippy.in/wp-content/uploads/2014/06/lagaan-bollywood-movie-poster.jpg"
}]}) {

    const imgobj = [
        { img:"https://hippy.in/wp-content/uploads/2014/06/lagaan-bollywood-movie-poster.jpg"},
        { img:"https://hippy.in/wp-content/uploads/2014/06/lagaan-bollywood-movie-poster.jpg"},
        { img:"https://hippy.in/wp-content/uploads/2014/06/lagaan-bollywood-movie-poster.jpg"},
        { img:"https://hippy.in/wp-content/uploads/2014/06/lagaan-bollywood-movie-poster.jpg"},
        { img:"https://hippy.in/wp-content/uploads/2014/06/lagaan-bollywood-movie-poster.jpg"},
        { img:"https://hippy.in/wp-content/uploads/2014/06/lagaan-bollywood-movie-poster.jpg"},
        { img:"https://hippy.in/wp-content/uploads/2014/06/lagaan-bollywood-movie-poster.jpg"},
        { img:"https://hippy.in/wp-content/uploads/2014/06/lagaan-bollywood-movie-poster.jpg"},
        { img:"https://hippy.in/wp-content/uploads/2014/06/lagaan-bollywood-movie-poster.jpg"},
        { img:"https://hippy.in/wp-content/uploads/2014/06/lagaan-bollywood-movie-poster.jpg"},
        { img:"https://hippy.in/wp-content/uploads/2014/06/lagaan-bollywood-movie-poster.jpg"},
        { img:"https://hippy.in/wp-content/uploads/2014/06/lagaan-bollywood-movie-poster.jpg"},
    ]
  return (
    <div className='row'>
        <h2>{}</h2>
        <div>

        {imgobj.map((item)=>(
            <Card img={item.img} />
        ))}
        
        

        </div>
    </div>
  )
}

export default Row
