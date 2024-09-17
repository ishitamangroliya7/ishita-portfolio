import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">ISHITA</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === "home" ? "active navbar-link" : "navbar-link x"} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === "skills" ? "active navbar-link" : "navbar-link x"} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === "projects" ? "active navbar-link" : "navbar-link x"} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/ishita-mangroliya-aa1753249" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                                <FaLinkedin />
                            </a>
                            <a href="https://github.com/ishitamangroliya7" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                                <FaGithub />
                            </a>
                            <a href="https://wa.me/9023117139" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                                <FaWhatsapp />
                            </a>
                        </div>
                            <button className="contact" onClick={() => window.location.href = '#connect'}><span>Let's Connect</span></button>
                        
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}