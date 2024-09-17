import React from "react";
import Carousel from "react-multi-carousel";
import { Container, Row, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import { Card } from "react-bootstrap";
import C from "../assets/img/c.png";
import HTML from "../assets/img/html,css,js.png";
// import ML from "../assets/img/ml.png";

// Sample data for certificates
const certificates = [
    { id: 1, title: "C Language", image: C },
    { id: 2, title: "HTML, CSS and Javascript", image: HTML },
    // { id: 3, title: "Machine Learning", image: ML },
];

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 3
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

export const Certificates = () => {
    return (
        <section className="certificates" id="certificates">
            <Container>
                <Row>
                    <Col>
                        <div className="certificates-bx">
                            <h2>Certificates</h2>
                            <Carousel
                                responsive={responsive}
                                infinite={true}
                                className="certificates-slider"
                                autoPlay={true}
                                autoPlaySpeed={2000}
                                pauseOnHover={true}
                            >
                                {certificates.map((certificate) => (
                                    <div className="item" key={certificate.id}>
                                        <Card>
                                            <Card.Img variant="top" src={certificate.image} />
                                            <Card.Body>
                                                <Card.Title>{certificate.title}</Card.Title>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
