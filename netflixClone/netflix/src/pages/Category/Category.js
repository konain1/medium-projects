/* eslint-disable no-undef */
import React, { useState } from 'react'

import './Category.scss'
import { GenreContext} from '../../App'
import { MoviesContext, NowPlayingContext, TopRatedMoviesContext, UpcomoingMoviesContext} from "../../App";


function Category(props) {

  // receiving Context
  const GenreList = React.useContext(GenreContext)
  const popularMovies = React.useContext(MoviesContext);  
  const nowplayingMovies = React.useContext(NowPlayingContext);
  const topratedMovies = React.useContext(TopRatedMoviesContext);
  const upcomingMovies = React.useContext(UpcomoingMoviesContext);


  const [ids,setIds] = useState([])



    const categorySelectedHandler =(GenreId) =>{

      
      setIds(GenreId)
    }



  
  return (
    <>
    <div className='category-div'>

     { props.toggle ==  true ? GenreList.map((item)=>{

       return <h3 key={item.id
       }  onClick={()=>{categorySelectedHandler(item.id)}} className='items'>{item.name}</h3>
       
     }) :''}

    

     
    </div>
    <div className='genreids'>

    {
      popularMovies.map((movies)=>{
     
        return <p>{movies.genre_ids == ids ? movies.original_title : ""}</p>
      })
     }
    
     

     {
      nowplayingMovies.map((item)=>{
        return <p>{item.genre_ids == ids ? item.original_title : ""}</p>
      })
     }

     {
      topratedMovies.map((item)=>{
        return <p>{item.genre_ids == ids ? item.original_title : ""}</p>
      })
     }


     {
      upcomingMovies.map((item)=>{
        return <p>{item.genre_ids == ids ? item.original_title : ""}</p>
      })
     }

     
    </div>
    </>
  )
}

export default Category
