import { Nav, Navbar, Container, Form, Row, Col } from "react-bootstrap";
import Logo from "../../assets/pnglogo.png";
import { MdMovieFilter } from "react-icons/md";
import { BiSolidCameraMovie } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import Styles from "./Navbar.module.css";
import useMovies from "../../customHooks/useMovies";

export default function NavBar({ setSearch, search }) {
    const navigate = useNavigate();
    const { setCurrentPage } = useMovies();
    function handleSearchChange(e) {
        setCurrentPage(1);
        setSearch(e.target.value);
        navigate("/");
    }
    return (
        <>
            <Navbar
                collapseOnSelect
                expand="lg"
                className={Styles["nav-link-custom"]}
                style={{ backgroundColor: "rgb(58, 53, 53)", margin: "0" }}
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
                                className={Styles["nav-link-custom"]}>
                                <IoIosHome /> Home
                            </Nav.Link>
                            <Nav.Link
                                as={NavLink}
                                to="/novedades"
                                className={Styles["nav-link-custom"]}>
                                <MdMovieFilter /> Ultimos Lanzamientos
                            </Nav.Link>
                            <Nav.Link
                                as={NavLink}
                                to="/populares"
                                className={Styles["nav-link-custom"]}>
                                <BiSolidCameraMovie /> Populares
                            </Nav.Link>
                            <Nav.Link
                                as={NavLink}
                                to="/favoritas"
                                className={Styles["nav-link-custom"]}>
                                <FaStar /> Favoritas
                            </Nav.Link>
                        </Nav>
                        <Form>
                            <Row>
                                <Col xs="auto">
                                    <Form.Control
                                        type="search"
                                        placeholder="Buscar"
                                        className="mr-sm-2 "
                                        aria-label="Search"
                                        value={search}
                                        onChange={handleSearchChange}
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
