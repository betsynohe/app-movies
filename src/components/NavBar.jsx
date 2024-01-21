import { Col, Form, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assets/pnglogo.png";

export default function NavBar() {
    return (
        <>
            
                <Navbar
                    collapseOnSelect
                    expand="lg"
                    bg="dark"
                    data-bs-theme="dark">
                    <Container>
                        <Navbar.Brand href="#home">
                        <img
                                src={Logo}
                                width="100"
                                height="100"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#features">Ultimos Lanzamientos</Nav.Link>
                                <Nav.Link href="#pricing">Populares</Nav.Link>
                                <Nav.Link href="#pricing">Favoritas</Nav.Link>
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
