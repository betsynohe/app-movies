import { Nav, Navbar, Container, Form, Row, Col } from "react-bootstrap";
import Logo from "../assets/pnglogo.png";
import { MdMovieFilter } from "react-icons/md";
import { BiSolidCameraMovie } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { IoIosHome } from "react-icons/io";

export default function NavBar() {
    return (
        <>
            <Navbar
                collapseOnSelect
                expand="lg"
                style={{ backgroundColor: "rgb(58, 53, 53)" }}
                data-bs-theme="light">
                <Container>
                    <Navbar.Brand as={NavLink} to="/">
                        <img
                            src={Logo}
                            width="100"
                            height="100"
                            className="d-inline-block align-top"
                            alt="logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle
                        aria-controls="responsive-navbar-nav"
                        style={{ borderColor: "white", color: "white" }}
                    />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto" style={{ marginLeft: "20px" }}>
                            <Nav.Link
                                as={NavLink}
                                to="/"
                                className="nav-link-custom">
                                <IoIosHome /> Home
                            </Nav.Link>
                            <Nav.Link
                                as={NavLink}
                                to="/novedades"
                                className="nav-link-custom">
                                <MdMovieFilter /> Ultimos Lanzamientos
                            </Nav.Link>
                            <Nav.Link
                                as={NavLink}
                                to="/populares"
                                className="nav-link-custom">
                                <BiSolidCameraMovie /> Populares
                            </Nav.Link>
                            <Nav.Link
                                as={NavLink}
                                to="/favoritas"
                                className="nav-link-custom">
                                <FaStar /> Favoritas
                            </Nav.Link>
                        </Nav>
                        <Form>
                            <Row>
                                <Col xs="auto">
                                    <Form.Control
                                        type="text"
                                        placeholder="Buscar"
                                        className="mr-sm-2"
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
