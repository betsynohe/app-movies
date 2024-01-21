import React, { useEffect } from "react";
import { Carousel } from "react-bootstrap";
import useMovies from "../customHooks/useMovies";

const Carrousel = () => {
    const apiKey = import.meta.env.VITE_TMDB_API_KEY;
    const { getData, data } = useMovies([]);

    useEffect(() => {
        getData(
            `https://api.themoviedb.org/3/movie/now_playing?language=es-ES&api_key=${apiKey}`
        );
    }, []);

    return (
        <Carousel style={{ maxHeight: "400px" }}>
            {data.results?.map((movie) => (
                <Carousel.Item key={movie.id}>
                    <img
                        className="d-block w-100 h-50"
                        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                        alt={movie.title}
                        style={{ maxHeight: '400px', objectFit: 'cover' }}
                    />
                    <Carousel.Caption>
                        <h3>{movie.title}</h3>
                        <p>
                            {movie.overview.length > 100
                                ? movie.overview.substring(0, 100) + "..."
                                : movie.overview}
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default Carrousel;