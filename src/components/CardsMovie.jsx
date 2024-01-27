import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import notImageBackdrop from "../assets/not-image-backdrop.jpg";

function CardsMovie({ movie }) {
    const image_path = "https://image.tmdb.org/t/p/original";

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div style={{
                        transform: isHovered ? "scale(1)" : "scale(0.9)",
                        transition: "transform 0.3s ease-in-out",
                    }}>
            <Col>
                <Card style={{height:"400px"}}
                    >
                    <Card.Img
                        variant="top"
                        src={
                            movie.backdrop_path
                                ? `${image_path}${
                                    movie.backdrop_path
                                }?api_key=${
                                    import.meta.env.VITE_TMDB_API_KEY
                                }`
                                : notImageBackdrop
                        }
                        alt={movie.title}
                        key={movie.id}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    />
                    <Card.Body>
                        <Card.Title>{movie.title}</Card.Title>
                        <Card.Text>
                            {movie.overview.length > 100
                                ? movie.overview.substring(0, 100) + "..."
                                : movie.overview}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
}

export default CardsMovie;
