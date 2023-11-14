import React, { Suspense } from "react";
import Details from "../common/Details";

const MovieDetails = () => {
  const testData = {
    adult: false,
    backdrop_path: "/628Dep6AxEtDxjZoGP78TsOxYbK.jpg",
    genre_ids: [28, 53],
    id: 575264,
    original_language: "en",
    original_title: "Mission: Impossible - Dead Reckoning Part One",
    overview:
      "Ethan Hunt and his IMF team embark on their most dangerous mission yet: To track down a terrifying new weapon that threatens all of humanity before it falls into the wrong hands. With control of the future and the world's fate at stake and dark forces from Ethan's past closing in, a deadly race around the globe begins. Confronted by a mysterious, all-powerful enemy, Ethan must consider that nothing can matter more than his mission—not even the lives of those he cares about most.",
    popularity: 3018.297,
    poster_path: "/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
    release_date: "2023-07-08",
    title: "Mission: Impossible - Dead Reckoning Part One",
    video: false,
    vote_average: 7.621,
    vote_count: 2323,
  };

  return (
    <>
      {testData && (
        <Suspense fallback={<div>Loading...</div>}>
          <Details data={testData} />
        </Suspense>
      )}
    </>
  );
};

export default MovieDetails;
