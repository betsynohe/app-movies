import React, { useEffect, useContext, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import useMovies from "../customHooks/useMovies";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaEye, FaRegStar, FaStar } from "react-icons/fa";
import { FavoriteContext } from "../context/FavoriteContext";

const CarrouselCards = ({ url, title }) => {
    const { data, getData } = useMovies([]);
    const { getFavorite, addFavorite, removeFavorite } =
        useContext(FavoriteContext);

    const [hoveredCard, setHoveredCard] = useState(null);

    useEffect(() => {
        getData(url);
    }, [url, getData]);

    return (
        <div style={{ marginTop: "25px", margin: "25px 0px 25px 25px" }}>
            <h2
                style={{
                    textAlign: "center",
                    marginBottom: "20px",
                    color: "white",
                    fontSize: "36px",
                }}>
                {title}
            </h2>
            <Swiper
                spaceBetween={10}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                breakpoints={{
                    "@0.00": {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    "@0.75": {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    "@1.00": {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    "@1.50": {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}>
                {data.results &&
                    data.results.map((movie, index) => (
                        <SwiperSlide key={movie.id}>
                            <Card
                                style={{
                                    width: "350px",
                                    transform:
                                        hoveredCard === index
                                            ? "scale(1)"
                                            : "scale(0.9)",
                                    transition: "transform 0.3s ease-in-out",
                                }}
                                onMouseEnter={() => setHoveredCard(index)}
                                onMouseLeave={() => setHoveredCard(null)}>
                                <Link
                                    to={`/detailMovie/${movie.id}`}
                                    style={{
                                        textDecoration: "none",
                                        display: "flex",
                                        justifyContent: "center",
                                    }}>
                                    <Card.Img
                                        variant="top"
                                        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                                    />
                                </Link>
                                <div
                                    style={{
                                        textAlign: "center",
                                        marginTop: "5px",
                                        marginBottom: "5px",
                                    }}>
                                    <h5 style={{ fontWeight: "bold" }}>
                                        {movie.title}
                                    </h5>
                                    <div
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-evenly",
                                            fontSize: "24px",
                                        }}>
                                        <Link to={`/detailMovie/${movie.id}`}>
                                            <FaEye style={{ color: "black" }} />
                                        </Link>
                                        <div>
                                            {getFavorite(movie.id) ? (
                                                <FaStar
                                                    onClick={() =>
                                                        removeFavorite(movie)
                                                    }
                                                    style={{
                                                        cursor: "pointer",
                                                    }}
                                                />
                                            ) : (
                                                <FaRegStar
                                                    onClick={() =>
                                                        addFavorite(movie)
                                                    }
                                                    style={{
                                                        cursor: "pointer",
                                                    }}
                                                />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    );
};

export default CarrouselCards;
