import React from "react";
import "./Home.scss";
import Banner from "../Banner/Banner";
import Row from "./Row/Row";
import { MoviesContext, NowPlayingContext, TopRatedMoviesContext, UpcomoingMoviesContext} from "../../App";


function Home() {

// recieving Context
  const popularMovies = React.useContext(MoviesContext);  
  const nowplayingMovies = React.useContext(NowPlayingContext);
  const topratedMovies = React.useContext(TopRatedMoviesContext);
  const upcomingMovies = React.useContext(UpcomoingMoviesContext);


  return (
    <section className="home">
      <Banner arr={popularMovies} />
      <Row title={"Popular on Netflix"} arr={popularMovies} />
      <Row title={"Now playing"} arr={nowplayingMovies} />
      <Row title={"Top Rated "} arr={topratedMovies} />
      <Row title={"Upcoming"}  arr={upcomingMovies} />
    </section>
  );
}

export default Home;
