import React from "react" 
import "./Banner.scss";
import {BiPlay} from "react-icons/bi"
import {AiOutlinePlus} from "react-icons/ai"

function Banner(props) {
  const imageUrl = "https://image.tmdb.org/t/p/original/";

  return (
    <div
      className="banner"
      style={{
        backgroundImage:`url(${imageUrl}${props.arr[1]?.poster_path}) `
      }}
    >

    <h2>{props.arr[1]?.original_title}</h2>
    <p>{props.arr[1]?.overview}</p>

      <div>
      <button>  <BiPlay/> Play </button>
     <button> <AiOutlinePlus/> Mylist </button>
      </div>
   



    </div>
  );
}

export default Banner;
