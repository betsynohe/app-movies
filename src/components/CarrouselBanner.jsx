import React, { useEffect } from "react";
import { Button, Carousel } from "react-bootstrap";
import useMovies from "../customHooks/useMovies";
import CarrouselCards from "./CarrouselCards";
import { Link } from "react-router-dom";

const Carrousel = () => {
    const apiKey = import.meta.env.VITE_TMDB_API_KEY;
    const { getData, data } = useMovies([]);

    useEffect(() => {
        getData(
            `https://api.themoviedb.org/3/movie/now_playing?language=es-ES&api_key=${apiKey}`
        );
    }, []);

    return (
        <div>
            <Carousel style={{ margin: "auto" }}>
                {data.results?.map((movie) => (
                    <Carousel.Item
                        key={movie.id}
                        style={{
                            maxHeight: "600px",
                            backgroundColor: "white",
                        }}>
                            <Link to={`/detailMovie/${movie.id}`}>
                            <img
                            className="d-block w-100 h-50"
                            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                            alt={movie.title}
                            style={{
                                maxHeightHeight: "400px",
                                objectFit: "cover",
                            }}
                        />
                            </Link>
                        
                        <Carousel.Caption>
                            <div
                                style={{
                                    backgroundColor: "white",
                                    cursor: "pointer",
                                    opacity: 0.8,
                                    borderRadius: "5px",
                                    padding: " 5px 10px",
                                }}>
                                <h2
                                    style={{
                                        color: "black",
                                        fontWeight: "900",
                                    }}>
                                    {movie.title}
                                </h2>
                                <p
                                    style={{
                                        color: "black",
                                        fontWeight: "600",
                                    }}>
                                    {movie.overview.length > 100
                                        ? movie.overview.substring(0, 100) + "..."
                                        : movie.overview}
                                </p>
                                <Link to={`/detailMovie/${movie.id}`}>
                                <Button  variant="dark">
                                        Ver Más 
                                </Button>
                                </Link>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
            <CarrouselCards
                url={`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`}
                title="Populares"
            />
            <CarrouselCards
                url={`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`}
                title="Ultimos lanzamientos"
            />
        </div>
    );
};

export default Carrousel;
