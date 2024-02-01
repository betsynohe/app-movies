import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import useMovies from "../customHooks/useMovies";
import { Card, Col, Container, Image, ListGroup, Row } from "react-bootstrap";
import NotImagenPoster from "../assets/not-image-poster.png";
import NotImageBackdrop from "../assets/not-image-backdrop.jpg";
import { FaRegStar, FaStar } from "react-icons/fa";
import { FavoriteContext } from "../context/FavoriteContext";

export default function DetailMovie() {
    const apiKey = import.meta.env.VITE_TMDB_API_KEY;
    const { id } = useParams();
    const { getData, data } = useMovies();
    const { getFavorite, addFavorite, removeFavorite } =
        useContext(FavoriteContext);
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
                    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), 
                    rgba(255, 255, 255, 0.4)), url( ${
                        data.backdrop_path
                            ? `https://image.tmdb.org/t/p/original${data.backdrop_path}?api_key=${apiKey}`
                            : NotImageBackdrop
                    })`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "100vh",
                    padding: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                <Container>
                    <Row>
                        <Col xs={12} md={6} lg={4}>
                            <Image
                                src={
                                    data.poster_path
                                        ? `https://image.tmdb.org/t/p/w300${data.poster_path}?api_key=
                                        ${apiKey}`
                                        : NotImagenPoster
                                }
                                alt=""
                                style={{
                                    width: "100%",
                                    maxWidth: "300px",
                                    margin: "0 auto 20px",
                                    borderRadius: "10px",
                                }}
                            />
                        </Col>
                        <Col xs={12} md={6} lg={8}>
                            <Card
                                style={{
                                    width: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    height: "100%",
                                    opacity: 0.8,
                                }}>
                                <Card.Body>
                                    <Card.Title
                                        style={{
                                            fontWeight: "900",
                                            fontSize: "32px",
                                            display: "flex",
                                            justifyContent: "space-around",
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
                                            }}>
                                            <div>
                                                {getFavorite(data.id) ? (
                                                    <FaStar
                                                        onClick={() =>
                                                            removeFavorite(data)
                                                        }
                                                        style={{
                                                            cursor: "pointer",
                                                        }}
                                                    />
                                                ) : (
                                                    <FaRegStar
                                                        onClick={() =>
                                                            addFavorite(data)
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
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}
