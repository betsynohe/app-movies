import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { useState, useContext } from "react";
import NotImageBackdrop from "../assets/not-image-backdrop.jpg";
import { FaRegStar, FaEye } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FavoriteContext } from "../context/FavoriteContext";


function CardsMovie({ movie }) {
    const image_path = "https://image.tmdb.org/t/p/original";
    
    const { getFavorite, addFavorite, removeFavorite } =
    useContext(FavoriteContext);

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
                    <Card.Img style={{height:"70%"}}
                        variant="top"
                        src={
                            movie.backdrop_path
                                ? `${image_path}${
                                    movie.poster_path
                                }?api_key=${
                                    import.meta.env.VITE_TMDB_API_KEY
                                }`
                                : NotImageBackdrop
                        }
                        alt={movie.title}
                        key={movie.id}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    />
                    <Card.Body >
                        <Card.Title style={{fontWeight:"bold", height:"50%"}}>{movie.title}</Card.Title>
                        <div style={{display:"flex", justifyContent:"space-evenly", fontSize:"24px"}}>
                            <Link to={`/detailMovie/${movie.id}`}>
                                <FaEye style={{color:"black"}}/>
                            </Link>
                            <div>
                            {getFavorite(movie.id) ? (
                            <FaStar
                                onClick={() => removeFavorite(movie)}
                                style={{ cursor: "pointer" }}
                            />
                        ) : (
                            <FaRegStar
                                onClick={() => addFavorite(movie)}
                                style={{ cursor: "pointer" }}
                            />
                        )}
                                
                            </div>
                            
                        </div>
                        
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
}

export default CardsMovie;
