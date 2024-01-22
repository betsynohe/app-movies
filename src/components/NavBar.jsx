import { Col, Form, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assets/pnglogo.png";
import { MdMovieFilter } from "react-icons/md";
import { BiSolidCameraMovie } from "react-icons/bi";
import { FaRegStar } from "react-icons/fa6";

export default function NavBar() {
    return (
        <>
            <Navbar
                collapseOnSelect
                expand="lg"
                style={{ backgroundColor: "rgb(58, 53, 53)" }}
                data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={Logo}
                            width="100"
                            height="100"
                            className="d-inline-block align-top"
                            alt="logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto" style={{marginLeft: "20px"}}>
                            <Nav.Link
                                href="#features"
                                style={{
                                    marginRight: "20px",
                                    color: "white",
                                    border: "1px solid transparent",
                                    transition: "border-color 0.5s ease-in-out",
                                }}
                                onMouseOver={(e) => {
                                    e.target.style.background = "white";
                                    e.target.style.color = "black";
                                    e.target.style.borderColor = "lightgray";
                                }}
                                onMouseOut={(e) => {
                                    e.target.style.background = "transparent";
                                    e.target.style.color = "white";
                                    e.target.style.borderColor = "transparent";
                                }}>
                                <MdMovieFilter /> Ultimos Lanzamientos
                            </Nav.Link>
                            <Nav.Link
                                href="#pricing"
                                style={{
                                    marginRight: "20px",
                                    color: "white",
                                    border: "1px solid transparent",
                                    transition: "border-color 0.5s ease-in-out",
                                }}
                                onMouseOver={(e) => {
                                    e.target.style.background = "white";
                                    e.target.style.color = "black";
                                    e.target.style.borderColor = "lightgray";
                                }}
                                onMouseOut={(e) => {
                                    e.target.style.background = "transparent";
                                    e.target.style.color = "white";
                                    e.target.style.borderColor = "transparent";
                                }}>
                                <BiSolidCameraMovie /> Populares
                            </Nav.Link>
                            <Nav.Link
                                href="#pricing"
                                style={{
                                    color: "white",
                                    border: "1px solid transparent",
                                    transition: "border-color 0.5s ease-in-out",
                                }}
                                onMouseOver={(e) => {
                                    e.target.style.background = "white";
                                    e.target.style.color = "black";
                                    e.target.style.borderColor = "lightgray";
                                }}
                                onMouseOut={(e) => {
                                    e.target.style.background = "transparent";
                                    e.target.style.color = "white";
                                    e.target.style.borderColor = "transparent";
                                }}>
                                <FaRegStar /> Favoritas
                            </Nav.Link>
                        </Nav>
                        <Form>
                            <Row>
                                <Col xs="auto">
                                    <Form.Control
                                        type="text"
                                        placeholder="Buscar"
                                        className=" mr-sm-2"
                                    />
                                </Col>
                            </Row>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
