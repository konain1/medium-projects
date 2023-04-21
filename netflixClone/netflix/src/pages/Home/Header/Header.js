import logo from "./../../../logo.png"
import React from "react";
import {ImSearch} from "react-icons/im" 
import { AiOutlineFilter } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { useState } from "react";
// import Listing from "../../Category/Category";
import Category from "../../Category/Category";
import { MoviesContext, NowPlayingContext, TopRatedMoviesContext, UpcomoingMoviesContext} from "../../../App";



function Header() {


const popularMovies = React.useContext(MoviesContext);  

const [searchingList,setSearchingList] = useState()

const [listShow,setListShow]= useState([]);
const [Toggle,setToggle] = useState(false)

const HandleList=()=>{

  // setListShow(searchingList)
  setToggle(!Toggle)
 
}


const searchingWordHandler = (event)=>{
  const searchedWord = event.target.value;
 const SearchedThis = popularMovies.filter((item)=>{
  
  return item.original_title.toLowerCase().includes(searchedWord.toLowerCase())

 })
 

 if(searchedWord == ''){
  setListShow("")
 }else{
  setListShow(SearchedThis )
 }

}
 
  return (
    <div>
      <nav className='header'>
        <img src={logo} alt="logo"/>
        <div>
            <Link to="/">Tv Shows</Link>
            
            <Link to="/">Movies</Link>

            <Link to="/">Recently Added</Link>

            <Link to="/">MyList</Link>

          
          <div>
           
          </div>
        </div>
        
     
        
        <AiOutlineFilter className="filterbtn" onClick={HandleList}/>

        <input  onChange={searchingWordHandler}/>

        <ImSearch className="imsearch"/>
        {
          listShow.length && (
            <div className="searchedList"> {
            
            listShow.map((items)=>{
              return <p> {items.original_title} </p>
            })
      }</div>
          )
        }
        
       
        
        
       
       
      </nav>

      <Category toggle={Toggle} />
    </div>
  )
}

export default Header


