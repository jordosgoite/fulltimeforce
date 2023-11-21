import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import Navbar from "./components/Header";
import Footer from "./components/Footer";
import MovieDetails from "./components/MovieDetails";

const App = () => {
  const [populars, setPopulars] = useState([]);
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_TMDB_URL_ALL_MOVIES)
      .then((res) => setPopulars(res.data.results));
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home populars={populars} />} />
        <Route path="/movieDetails/:movieId" element={<MovieDetails />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
