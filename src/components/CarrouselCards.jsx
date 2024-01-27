import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Card, Button } from "react-bootstrap";
import useMovies from "../customHooks/useMovies";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarrouselCards = ({ url, title }) => {
    const { data, getData } = useMovies([]);

    useEffect(() => {
        getData(url);
    }, [url, getData]);

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div style={{ marginTop: "25px" }}>
            <h2 style={{ textAlign: "center", marginBottom: "20px", color:"white", fontSize: "36px" }}>
                {title}
            </h2>
            <Slider {...sliderSettings}>
                {data.results &&
                    data.results.map((movie) => (
                        <div key={movie.id} style={{ margin: "0 10px"}}>
                            <Card style={{ width: "400px", marginLeft: "40px" }}>
                                <Card.Img
                                    variant="top"
                                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                                />
                                <Card.Body style={{
                                    backgroundColor:"black",
                                    margin:"30px"
                                }}>
                                    <Card.Title
                                        style={{
                                            fontWeight: "bold",
                                            fontSize: "18px",
                                            color: "white"
                                        }}>
                                        {movie.title}
                                    </Card.Title>
                                    <Button variant="primary">
                                        Ver detalles
                                    </Button>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
            </Slider>
        </div>
    );
};

export default CarrouselCards;
