import React, { Suspense, useEffect, useState } from "react";
import Details from "../common/Details";
import { useParams } from "react-router";
import axios from "axios";

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  
  useEffect(() => {
    axios
      .get(`http://localhost:3001/movies/${movieId}`)
      .then((res) => setMovie(res.data));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {movie && (
        <Suspense fallback={<div>Loading...</div>}>
          <Details data={movie} />
        </Suspense>
      )}
    </>
  );
};

export default MovieDetails;
