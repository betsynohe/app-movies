import React from "react";
import CardsMovie from "./CardsMovie";
import { Row } from "react-bootstrap";
import PaginationApp from "./PaginationApp";

function ContainCards({ data, setCurrentPage, currentPage, totalPages }) {
    return (
        <div>
            <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                {data.map((movie) => (
                    <CardsMovie
                        key={movie.id}
                        movie={movie}
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage}
                        totalPages={totalPages}
                    />
                ))}
            </Row>
            <PaginationApp
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                totalPages={totalPages}
            />
        </div>
    );
}

export default ContainCards;
