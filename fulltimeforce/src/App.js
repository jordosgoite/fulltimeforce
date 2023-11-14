import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import Home from "./components/Home";

const App = () => {
  const [populars, setPopulars] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=ebc19cd915e044f83948e528b44d4d98&language=en-US&page=1`
      )
      .then((res) => setPopulars(res.data.results));
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home populars={populars} />} />
      </Routes>
    </>
  );
};

export default App;
