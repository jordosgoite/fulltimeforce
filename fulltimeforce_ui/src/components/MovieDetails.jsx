import React, { Suspense, useEffect, useState } from "react";
//import Details from "";
import { useParams } from "react-router";
import axios from "axios";
import LoadingSpinner from "../common/LoadingSpinner";
const Details = React.lazy(() => import("../common/Details"));
const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_MOVIE_DETAILS_URL}${movieId}`)
      .then((res) => setMovie(res.data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Details data={movie} />
    </Suspense>
  );
};

export default MovieDetails;
