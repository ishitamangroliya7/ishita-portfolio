import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCards";
import project1 from "../assets/img/project1.png";
import project2 from "../assets/img/project2.png";
import project3 from "../assets/img/project3.png";
import project4 from "../assets/img/project4.png";
import project5 from "../assets/img/project5.png";
import project6 from "../assets/img/project6.png";
import project7 from "../assets/img/project7.png";
import project8 from "../assets/img/project8.png";


export const Projects = () => {

    const projects = [
        {
            title: "Online cake shop home page design",
            description: "HTMl , CSS & JS",
            imgUrl: project1,
            githubUrl: "https://github.com/ishitamangroliya7/online-cake-shop"
        },
        {
            title: "Tour package website design",
            description: "HTML & CSS",
            imgUrl: project2,
            githubUrl:"https://github.com/ishitamangroliya7/Tour-Package-Website"
        },
        {
            title: "Calculator",
            description: "JQUERY",
            imgUrl: project3,
            githubUrl:"https://github.com/ishitamangroliya7/calc_using_jquery"
        },
        {
            title: "Multiple form validation",
            description: "JQUERY",
            imgUrl: project4,
            githubUrl:"https://github.com/ishitamangroliya7/Multiple_form_jqueryvalidation"
        },
        {
            title: "Text transform",
            description: "JQUERY",
            imgUrl: project5,
            githubUrl:"https://github.com/ishitamangroliya7/jquery_text_transform"
        },
        {
            title: "Image gallery",
            description: "JQUERY",
            imgUrl: project6,
            githubUrl:"https://github.com/ishitamangroliya7/image-gallery-jquery"
        },
    ];

    const projects2 = [
        {
            title: "Alarm clock",
            description: "PYTHON",
            imgUrl: project7,
            githubUrl:"https://github.com/ishitamangroliya7/alarm-clock"
        },
        {
            title: "Pharmacy managment system",
            description: "JAVA",
            imgUrl: project8,
            githubUrl:"https://github.com/ishitamangroliya7/Pharmacy-Managment-System"
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>I've developed some academic projects showcasing my skills in web development, JavaScript, jQuery, React, and Java.</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">One</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Two</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Three</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {
                                            projects2.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    Panding...
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}