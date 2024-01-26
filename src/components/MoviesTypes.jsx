import { Container, Row, Col, Card } from "react-bootstrap";
import React from "react";
import ContainCards from "./ContainCards";
import NotFound from "./NotFound";
import { useEffect, useState } from "react";
import useMovies from "../customHooks/useMovies";

import { RiseLoader } from "react-spinners";

export default function MoviesTypes({ type, titleType }) {
    const apiKey = import.meta.env.VITE_TMDB_API_KEY;
    const { getData, data, totalPages, loading, error } = useMovies();

    const apiUrl = `https://api.themoviedb.org/3/movie/popular?language=es-ES&page=`;

    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        getData(`${apiUrl}${currentPage}&api_key=${apiKey}`);
    }, [apiUrl, currentPage, apiKey]);
    return (
        <Container fluid>
            <Row className="justify-content-center">
                <Col xs={12} md={10} lg={8}>
                    <Card bg="light" text="dark" className="mt-2 mb-4">
                        <Card.Body>
                            <Card.Title className="fw-bold fs-4">
                                {titleType}
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col>
                    {error ? (
                        <NotFound type="notFound" />
                    ) : !data.results ? (
                        <RiseLoader
                            loading={loading}
                            color="whitesmoke"
                            className="p-5"
                        />
                    ) : (
                        <ContainCards
                            data={data.results}
                            setCurrentPage={setCurrentPage}
                            currentPage={currentPage}
                            totalPages={totalPages}
                        />
                    )}
                </Col>
            </Row>
        </Container>
    );
}
