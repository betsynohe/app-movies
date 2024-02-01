import React, { useEffect } from "react";
import YouTube from "react-youtube";
import useMovies from "../customHooks/useMovies";
import { useMovieLoading } from "../customHooks/useMovieLoading";
import SpinnerMovie from "./SpinnerMovie";

const MovieTrailer = ({ id }) => {
  const { getData, data } = useMovies();
  const loading = useMovieLoading();
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    getData(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}`
    );
  }, [id]);

  return (
    <div>
      {loading ? (
        <SpinnerMovie />
      ) : (
        <div>
          {data.results ? (
            <YouTube
              videoId={data.results[0].key}
              opts={{
                height: "700",
                width: "100%",
                playerVars: {
                  autoplay: 1,
                },
              }}
            />
          ) : (
            <div>No hay tráiler disponible</div>
          )}
        </div>
      )}
    </div>
  );
};

export default MovieTrailer;


