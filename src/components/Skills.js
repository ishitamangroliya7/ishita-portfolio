import React from "react";
import Carousel from "react-multi-carousel";
import { Container, Row, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
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

    const skills = [
        { name: "HTML", percentage: 99 },
        { name: "CSS", percentage: 90 },
        { name: "Javascript", percentage: 70 },
        { name: "Jquery", percentage: 60 },
        { name: "C Language", percentage: 90 },
        { name: "Python", percentage: 60 },
        { name: "Java", percentage: 60 },
        { name: "React JS", percentage: 60 }
    ];

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>
                            I have acquired these skills through education, professional experience,<br />
                                and continuing education. Each of the skills listed below plays an <br />
                                important role in my ability to tackle complex projects and achieve successful results.<br/>
                                The skills are categorized into three levels:<br/>
                                <strong>Beginner:</strong> Up to 60% <br/> <strong>Intermediate:</strong> Up to 90% <br/><strong>Advanced:</strong> Up to 100%
                            </p>
                            <Carousel
                                responsive={responsive}
                                infinite={true}
                                className="skill-slider"
                                autoPlay={true}
                                autoPlaySpeed={2000}
                                pauseOnHover={true}
                            >
                                {skills.map((skill, index) => (
                                    <div className="item" key={index}>
                                        <CircularProgressbar
                                            value={skill.percentage}
                                            text={`${skill.percentage}%`}
                                            styles={buildStyles({
                                                textColor: "#fff",
                                                pathColor: "#7e339a",
                                                trailColor: "#d6d6d600"
                                            })}
                                        />
                                        <h5>{skill.name}</h5>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
