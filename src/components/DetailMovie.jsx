import React from "react";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import useMovies from "../customHooks/useMovies";
import { Card, Col, Container, Image, ListGroup, Row } from "react-bootstrap";
import NotImagenPoster from "../assets/not-image-poster.jpg";
import NotImageBackdrop from "../assets/not-image-backdrop.jpg";

export default function DetailMovie() {
    const apiKey = import.meta.env.VITE_TMDB_API_KEY;
    const { id } = useParams();
    const { getData, data } = useMovies();

    useEffect(() => {
        getData(
            `https://api.themoviedb.org/3/movie/${id}?language=es-ES&api_key=${apiKey}`
        );
    }, []);

    return (
        <div>
            <div
                style={{
                    height: "100%",
                    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.4)), url( ${
                        data.backdrop_path
                            ? `https://image.tmdb.org/t/p/original${data.backdrop_path}?api_key=${apiKey}`
                            : NotImageBackdrop
                    })`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "100vh",
                }}>
                <Container style={{ padding: "50px" }}>
                    <Row
                        style={{
                            display: "flex",
                            justifyContent: "space-around",
                            marginTop: "100px",
                        }}>
                        <Image
                            src={
                                data.poster_path
                                    ? `https://image.tmdb.org/t/p/original${data.poster_path}?api_key=${apiKey}`
                                    : NotImagenPoster
                            }
                            alt=""
                            style={{ width: "40%", borderRadius: "15px" }}
                        />

                        <Card style={{ width: "60%" }}>
                            <Card.Body>
                                <Card.Title>
                                    {data.title} -{" "}
                                    <span className="font-normal">
                                        {data.release_date?.split("-")[0]}
                                    </span>
                                </Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">
                                    Descripción:
                                </Card.Subtitle>
                                <Card.Text>{data.overview}</Card.Text>
                                <ListGroup horizontal>
                                    {data.genres &&
                                        data.genres.map(({ name, id }) => (
                                            <ListGroup.Item
                                                variant="dark"
                                                key={id}>
                                                {name}
                                            </ListGroup.Item>
                                        ))}
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Row>
                </Container>
            </div>
        </div>
    );
}
