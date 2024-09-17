import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={6} className="footer-logo">
                        ISHITA
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/ishita-mangroliya-aa1753249" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                                <FaLinkedin />
                            </a>
                            <a href="https://github.com/ishitamangroliya7" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                                <FaGithub />
                            </a>
                            <a href=" https://web.whatsapp.com/send/?photo=9023117139" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                                <FaWhatsapp />
                            </a>
                        </div>
                        <p>Copyright 2024. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}