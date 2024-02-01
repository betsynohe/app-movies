// SearchMovie.jsx
import { useEffect } from "react";
import useMovies from "../customHooks/useMovies";
import { Col, Container, Row, Spinner, Card } from "react-bootstrap";
import CardsMovie from "./CardsMovie";
import PaginationApp from "./PaginationApp";

export default function SearchMovie({ search }) {
    const apiKey = import.meta.env.VITE_TMDB_API_KEY;
    const { getData, loading, data, totalPages, currentPage, setCurrentPage } =
        useMovies();

    useEffect(() => {
        setCurrentPage(1);
        getData(
            `https://api.themoviedb.org/3/search/movie?language=es-ES&page=1&api_key=${apiKey}${
                search ? `&query=${search}` : ""
            }`
        );
    }, [search, currentPage]);

    return (
        <Container className="mb-5 h-full flex flex-col lg:mb-0">
            <Row className="justify-content-center">
                <Col xs={12} md={10} lg={6} xl={4}>
                    <Card bg="light" text="dark" className="mt-4 mb-4">
                        <Card.Body className="text-center">
                            <Card.Title className="fw-bold fs-2">
                                Resultados de la Búsqueda
                            </Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                {loading ? (
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                ) : data.results && data.results.length > 0 ? (
                    data.results.map((movie) => (
                        <CardsMovie
                            key={movie.id}
                            movie={movie}
                            setCurrentPage={setCurrentPage}
                            currentPage={currentPage}
                            totalPages={totalPages}
                        />
                    ))
                ) : (
                    <p>No se encontraron resultados.</p>
                )}
            </Row>
            <PaginationApp
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                totalPages={totalPages}
            />
        </Container>
    );
}
