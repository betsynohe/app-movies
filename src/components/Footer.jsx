import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-dark text-white mt-5">
            <Container style={{
                    display:"flex",
                    justifyContent:"center"
                }}>
                <Row>
                    <Col>
                    <div style={{
                        display:"flex",
                        justifyContent:"center",
                        margin:"10px 0px"
                    }}>
                        <div style={{
                            marginRight:"20px",
                            width:"20px"
                        }}>
                            <a
                                    href="https://www.linkedin.com/in/tu-linkedin"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <FaLinkedin  style={{
                            width:"30px",
                            height:"30px"
                        }}/>
                                    
                                </a>
                        </div>
                        
                            <div>
                                <a
                                    href="https://github.com/tu-usuario"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    <FaGithubAlt style={{
                            width:"30px",
                            height:"30px"
                        }}/>
                                </a>
                            </div>
                                
                    </div>
                                
                        <h5>Hecho  <span>❤️</span> por Betsy Guitian</h5>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
