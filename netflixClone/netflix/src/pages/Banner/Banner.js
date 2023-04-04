import React from "react";
import "./Banner.scss";

function Banner(props) {
  const imageUrl = "https://image.tmdb.org/t/p/original/";

  return (
    <div
      className="banner"
      style={{
        backgroundImage:`url(${imageUrl}${props.arr[0].poster_path})`
      }}
    ></div>
  );
}

export default Banner;
