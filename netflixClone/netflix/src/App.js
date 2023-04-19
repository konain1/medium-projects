import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./pages/Home/Header/Header";
import { createContext, useEffect, useState } from "react";
import axios from "axios";


// Context Creating

export const MoviesContext = createContext();
export const NowPlayingContext = createContext();
export const TopRatedMoviesContext = createContext();
export const UpcomoingMoviesContext = createContext();
export const GenreContext = createContext();

function App() {

  // Api Url's
  const mainUrl = "https://api.themoviedb.org/3";
  const popular = "popular";
  const latest = "latest";
  const nowPlaying = "now_playing";
  const topRated = "top_rated";
  const upcoming = "upcoming";

 

  //  const api = "?api_key="
  const myApi = "406a18efe4a35ef4e7cfce407326a99d";
  const imageUrl = "https://image.tmdb.org/t/p/original/";
  const AllGenreList = "https://api.themoviedb.org/3/genre/movie/list?api_key=406a18efe4a35ef4e7cfce407326a99d"



  const [popularMovies, setPoplarMovies] = useState([]);
  const [nowplayingMovies, setNowplayingMovies] = useState([]);
  const [topratedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies,setUpcomingMovies] = useState([]);
  const [genreList,setGenreList] = useState([]);







  useEffect(() => {
    
    const fetchPopular = async () => {
      const {
        data: { results },
      } = await axios.get(
        `${mainUrl}/movie/${popular}?api_key=${myApi}&page=8`
      );

      setPoplarMovies(results);
      // console.log(results)
    };

    const fetchNowPlaying = async () => {
      const {
        data: { results },
      } = await axios.get(`${mainUrl}/movie/${nowPlaying}?api_key=${myApi}`);

      setNowplayingMovies(results);
    };

    const fetchTopRated = async () => {
      const {
        data: { results },
      } = await axios.get(`${mainUrl}/movie/${topRated}?api_key=${myApi}`);

      setTopRatedMovies(results);
    
    };

    const fetchUpcoming = async () => {
      const {
        data: { results },
      } = await axios.get(`${mainUrl}/movie/${upcoming}?api_key=${myApi}&page=2`);

      setUpcomingMovies(results);
     

    };
    const fetchGenre = async () => {
      const {
        data: { genres },
      } = await axios.get(`${AllGenreList}`);

      setGenreList(genres);
      // console.log(genres);

    };

// Api calling
    fetchGenre()
    fetchUpcoming()
    fetchTopRated()
    fetchNowPlaying()
    fetchPopular();
  });

  return (
// sending Contexts
    <GenreContext.Provider value={genreList}>
    <UpcomoingMoviesContext.Provider value={upcomingMovies}>
    <TopRatedMoviesContext.Provider value={topratedMovies}>
    <NowPlayingContext.Provider value={nowplayingMovies}>
    <MoviesContext.Provider value={popularMovies}>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route></Route>
        </Routes>
      </BrowserRouter>

    </MoviesContext.Provider>
    </NowPlayingContext.Provider>
    </TopRatedMoviesContext.Provider>
    </UpcomoingMoviesContext.Provider>
    </GenreContext.Provider>
  );
}

export default App;
