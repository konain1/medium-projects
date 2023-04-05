import React from "react";
import "./Home.scss";
import Banner from "../Banner/Banner";
import Row from "./Row/Row";
import { useEffect, useState } from "react";

import Axios from "axios";

function Home() {
  const mainUrl = "https://api.themoviedb.org/3";

  const popular = "popular";
  const latest = "latest";
  const nowPlaying = "now_playing";
  const topRated = "top_rated";
  const upcoming = "upcoming"

  //  const api = "?api_key="
  const myApi = "406a18efe4a35ef4e7cfce407326a99d";
  const imageUrl = "https://image.tmdb.org/t/p/original/";
  const AllGenreList = "https://api.themoviedb.org/3/genre/movie/list?api_key=406a18efe4a35ef4e7cfce407326a99d"

  const [popularMovies, setPoplarMovies] = useState([]);
  const [nowplayingMovies, setNowplayingMovies] = useState([]);
  const [topratedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies,setUpcomingMovies] = useState([])
  const [genreList,setGenreList] = useState([])

  useEffect(() => {
    const fetctPopular = async () => {
      const {
        data: { results },
      } = await Axios.get(`${mainUrl}/movie/${popular}?api_key=${myApi}&page=8`);

      setPoplarMovies(results);
      // console.log(results)
    };

    const fetctNowPlaying = async () => {
      const {
        data: { results },
      } = await Axios.get(`${mainUrl}/movie/${nowPlaying}?api_key=${myApi}`);

      setNowplayingMovies(results);
    };

    const fetcTopRated = async () => {
      const {
        data: { results },
      } = await Axios.get(`${mainUrl}/movie/${topRated}?api_key=${myApi}`);

      setTopRatedMovies(results);
    
    };

    const fetcUpcoming = async () => {
      const {
        data: { results },
      } = await Axios.get(`${mainUrl}/movie/${upcoming}?api_key=${myApi}&page=2`);

      setUpcomingMovies(results);
     

    };

    const fetchGenre = async () => {
      const {
        data: { genres },
      } = await Axios.get(`${AllGenreList}`);

      setGenreList(genres);
      // console.log(genres);

    };


    fetchGenre()
    fetcUpcoming()
    fetctPopular();
    fetctNowPlaying();
    fetcTopRated();
  }, []);

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
