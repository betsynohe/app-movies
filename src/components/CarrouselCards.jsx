import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Card, Button } from "react-bootstrap";
import useMovies from "../customHooks/useMovies";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";

const CarrouselCards = ({ url, title }) => {
    const { data, getData } = useMovies([]);

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
                    data.results.map((movie) => (
                        <SwiperSlide key={movie.id}>
                            <Link
                                to={`/detailMovie/${movie.id}`}
                                style={{ textDecoration: "none", display:"flex", justifyContent:"center" }}>
                                <Card style={{ width: "350px",}}>
                                    <Card.Img
                                        variant="top"
                                        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                                    />
                                    <div
                                        style={{
                                            textAlign: "center",
                                            marginTop: "5px",
                                            marginBottom: "5px",
                                        }}>
                                        <h5
                                            style={{
                                                fontWeight: "bold",
                                            }}>
                                            {movie.title}
                                        </h5>
                                        <FaEye />
                                    </div>
                                </Card>
                            </Link>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    );
};

export default CarrouselCards;
