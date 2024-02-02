import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";
import useMovies from "../customHooks/useMovies";
import { Card, Col, Container, Image, ListGroup, Row } from "react-bootstrap";
import NotImagenPoster from "../assets/not-image-poster.png";
import NotImageBackdrop from "../assets/not-image-backdrop.jpg";
import { FaRegStar, FaStar } from "react-icons/fa";
import { FavoriteContext } from "../context/FavoriteContext";
import { useMovieLoading } from "../customHooks/useMovieLoading";
import SpinnerMovie from "./SpinnerMovie";
import MovieTrailer from "./ViewTrailer";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaPlay } from "react-icons/fa";

export default function DetailMovie() {
    const apiKey = import.meta.env.VITE_TMDB_API_KEY;
    const { id } = useParams();
    const { getData, data } = useMovies();
    const { getFavorite, addFavorite, removeFavorite } =
        useContext(FavoriteContext);
    const loading = useMovieLoading();

    useEffect(() => {
        getData(
            `https://api.themoviedb.org/3/movie/${id}?language=es-ES&api_key=${apiKey}`
        );
    }, [id, apiKey, getData]);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            {loading ? (
                <SpinnerMovie />
            ) : (
                <div
                    style={{
                        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), 
                        rgba(255, 255, 255, 0.4)), url( ${
                            data.backdrop_path
                                ? `https://image.tmdb.org/t/p/original${data.backdrop_path}?
                                api_key=${apiKey}`
                                : NotImageBackdrop
                        })`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        padding: "20px",
                    }}>
                    <Container fluid>
                        <Row>
                            <Col xs={12} lg={4} style={{display:"flex", justifyContent:"center", marginBottom:"10px"}}>
                                <Image
                                    src={
                                        data.poster_path
                                            ? `https://image.tmdb.org/t/p/w300${data.poster_path}?
                                            api_key=${apiKey}`
                                            : NotImagenPoster
                                    }
                                    alt=""
                                    fluid
                                    style={{
                                        maxWidth: "100%",
                                        borderRadius: "10px",
                                        margin: "0 auto",
                                    }}
                                />
                            </Col>
                            <Col xs={12} lg={8}>
                                <Card
                                    style={{
                                        width: "100%",
                                        margin: "0 auto",
                                    }}>
                                    <Card.Body>
                                        <Card.Title
                                            style={{
                                                fontWeight: "900",
                                                fontSize: "32px",
                                                marginBottom: "10px",
                                            }}>
                                            <div>
                                                {data.title} -{" "}
                                                <span className="font-normal">
                                                    {
                                                        data.release_date?.split(
                                                            "-"
                                                        )[0]
                                                    }
                                                </span>
                                            </div>
                                            <div
                                                style={{
                                                    fontSize: "24px",
                                                    marginTop: "10px",
                                                }}>
                                                <div>
                                                    {getFavorite(data.id) ? (
                                                        <FaStar
                                                            onClick={() =>
                                                                removeFavorite(
                                                                    data
                                                                )
                                                            }
                                                            style={{
                                                                cursor: "pointer",
                                                            }}
                                                        />
                                                    ) : (
                                                        <FaRegStar
                                                            onClick={() =>
                                                                addFavorite(
                                                                    data
                                                                )
                                                            }
                                                            style={{
                                                                cursor: "pointer",
                                                            }}
                                                        />
                                                    )}
                                                </div>
                                            </div>
                                        </Card.Title>
                                        <Card.Subtitle
                                            className="mb-2 mt-4 fs-4"
                                            style={{ fontWeight: "600" }}>
                                            Descripción:
                                        </Card.Subtitle>
                                        <Card.Text>{data.overview}</Card.Text>
                                        <Card.Subtitle
                                            className="mb-2 mt-4 fs-4"
                                            style={{ fontWeight: "600" }}>
                                            Géneros:
                                        </Card.Subtitle>
                                        <ListGroup
                                            horizontal
                                            className="d-flex flex-wrap">
                                            {data.genres &&
                                                data.genres.map(
                                                    ({ name, id }) => (
                                                        <ListGroup.Item
                                                            className="mb-2"
                                                            variant="dark"
                                                            key={id}>
                                                            {name}
                                                        </ListGroup.Item>
                                                    )
                                                )}
                                        </ListGroup>
                                        <div style={{ marginTop: "20px" }}>
                                            <Button
                                                size="lg"
                                                variant="dark"
                                                onClick={handleShow}>
                                                <FaPlay
                                                    style={{ margin: "5px" }}
                                                />
                                                Ver Tráiler
                                            </Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                                <Modal
                                    dialogClassName="modal-90w"
                                    show={show}
                                    onHide={handleClose}
                                    animation={false}
                                    centered
                                    size="lg">
                                    <Modal.Body>
                                        <MovieTrailer id={id} />
                                    </Modal.Body>

                                    <Button
                                        size="small"
                                        variant="dark"
                                        onClick={handleClose}
                                        style={{ margin: "10px" }}>
                                        Cerrar
                                    </Button>
                                </Modal>
                            </Col>
                        </Row>
                    </Container>
                </div>
            )}
        </div>
    );
}
