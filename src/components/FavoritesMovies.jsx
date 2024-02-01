import { useContext } from "react";
import { FavoriteContext } from "../context/FavoriteContext";
import ContainCards from "../components/ContainCards";
import { Container, Row, Col, Card } from "react-bootstrap";
import NotFound from "../components/NotFound";

export default function FavoritesMovies() {
    const { allFavorits } = useContext(FavoriteContext);

    return (
        <Container className="mt-5">
            {allFavorits.length ? (
                <div>
                    <Row className="justify-content-center">
                        <Col xs={12} md={10} lg={4}>
                            <Card bg="light" text="dark" className="mt-4 mb-4">
                                <Card.Body className="text-center">
                                    <Card.Title className="fw-bold fs-2">
                                        Favoritas
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Col>
                        <ContainCards data={allFavorits} />
                    </Col>
                </div>
            ) : (
                <NotFound />
            )}
        </Container>
    );
}
