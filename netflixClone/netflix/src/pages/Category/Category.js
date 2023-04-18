/* eslint-disable no-undef */
import React, { useEffect,useState } from 'react'
import Axios from "axios";
import './Category.scss'

function Category(props) {

  const mainUrl = "https://api.themoviedb.org/3";

  const popular = "popular";
  const latest = "latest";
  const nowPlaying = "now_playing";
  const topRated = "top_rated";
  const upcoming = "upcoming"
  const AllGenreList = "https://api.themoviedb.org/3/genre/movie/list?api_key=406a18efe4a35ef4e7cfce407326a99d"

  const myApi = "406a18efe4a35ef4e7cfce407326a99d";
  const imageUrl = "https://image.tmdb.org/t/p/original/";


    const [genreList,setGenreList] = useState([])
    const [popularMovies, setPoplarMovies] = useState([]);
    const [ids,setIds] = useState([])



    const categorySelectedHandler =(cateName) =>{

      
      setIds(cateName)
    }



    useEffect(()=>{

        const fetchGenre = async () => {
            const {
              data: { genres },
            } = await Axios.get(`${AllGenreList}`);
      
            setGenreList(genres);
            console.log(genres);
      
          };
          const fetctPopular = async () => {
            const {
              data: { results },
            } = await Axios.get(`${mainUrl}/movie/${popular}?api_key=${myApi}&page=8`);
      
            setPoplarMovies(results);
            // console.log(results)
          };
          const fetcUpcoming = async () => {
            const {
              data: { results },
            } = await Axios.get(`${mainUrl}/movie/${upcoming}?api_key=${myApi}&page=2`);
      
            setUpcomingMovies(results);
          };

          const fetcTopRated = async () => {
            const {
              data: { results },
            } = await Axios.get(`${mainUrl}/movie/${topRated}?api_key=${myApi}`);
      
            setTopRatedMovies(results);
          
          };
          const fetctNowPlaying = async () => {
            const {
              data: { results },
            } = await Axios.get(`${mainUrl}/movie/${nowPlaying}?api_key=${myApi}`);
      
            setNowplayingMovies(results);
          };


          fetctNowPlaying() 
          fetcTopRated()
          fetcUpcoming() 
          fetctPopular()
          fetchGenre()
    },[])
  return (
    <>
    <div className='category-div'>

     { props.list ==  true ? genreList.map((item)=>{

       return <h3  onClick={()=>{categorySelectedHandler(item.id)}} className='items'>{item.name}</h3>
       
     }) :''}

    

     
    </div>
    <div className='genreids'>

    {
      popularMovies.map((movies)=>{
     
        return <p>{movies.genre_ids == ids ? movies.original_title : ""}</p>
      })
     }

     {

     }
    </div>
    </>
  )
}

export default Category
