import { Container, Row, Col } from "react-bootstrap";
import CardsMovie from "./CardsMovie";
import PaginationApp from "./PaginationApp";

export default function ContainCards({
    data,
    currentPage,
    setCurrentPage,
    totalPages,
}) {
    return (
        <Container
            style={{
                display: "flex",
                width: "95%",
                justifyContent: "space-around",
                flexWrap: "wrap",
                padding: "20px",
            }}>
            <Row md={3}>
                {data &&
                    data.map((movie) => (
                        <Col key={movie.id}>
                            <CardsMovie movie={movie} />
                        </Col>
                    ))}
            </Row>
            <PaginationApp
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                totalPages={totalPages}
            />
        </Container>
    );
}
