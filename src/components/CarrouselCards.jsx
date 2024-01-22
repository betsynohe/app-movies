// CarouselMovies.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card, Button } from "react-bootstrap";

const CarrouselCards = () => {
    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        const fetchPopularMovies = async () => {
            try {
                const apiKey = import.meta.env.VITE_TMDB_API_KEY;
                const response = await axios.get(
                    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
                );

                setPopularMovies(response.data.results);
            } catch (error) {
                console.error("Error fetching popular movies:", error);
            }
        };

        fetchPopularMovies();
    }, []);

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1,
        },
    };
    const carouselOptions = {
        responsive: responsive,
        infinite: true, // Habilitar autoplay infinito
        autoPlay: true, // Habilitar autoplay
        autoPlaySpeed: 3000, // Velocidad de cambio de tarjetas en milisegundos
        keyBoardControl: true, // Permitir control mediante teclado
        removeArrowOnDeviceType: ["tablet", "mobile"],
        renderButtonGroupOutside: true, // Renderizar botones fuera del carrusel
        customButtonGroup: (
            <Button
                style={{
                    marginTop: "50px",
                    position: "absolute",
                    top: "50%",
                    zIndex: 1,
                    background: "rgba(0,0,0,0.5)",
                    color: "white",
                    border: "none",
                    borderRadius: "50%",
                    padding: "10px",
                    cursor: "pointer",
                }}>
                &#8592; {/* Flecha izquierda */}
            </Button>
        ),
    };

    return (
        <div style={{marginTop: "80px",}}>
            <Carousel {...carouselOptions} >
            {popularMovies.map((movie) => (
                <Card
                    key={movie.id}
                    style={{ width: "400px", margin: "0 40px" }}>
                    <Card.Img
                        variant="top"
                        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                    />
                    <Card.Body>
                        <Card.Title
                            style={{
                                fontWeight: "bold",
                                fontSize: '15px'
                            }}>
                            {movie.title}
                        </Card.Title>
                        <Button variant="primary">Ver detalles</Button>
                    </Card.Body>
                </Card>
            ))}
        </Carousel>
        </div>
        
    );
};

export default CarrouselCards;
