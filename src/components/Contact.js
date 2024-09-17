import React, { useRef, useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact.png";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Contact = () => {
    const form = useRef();
    const [buttonText, setButtonText] = useState('Send');
    const [isSending, setIsSending] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setButtonText('Sending...');
        setIsSending(true);

        emailjs
            .sendForm('service_xroudpv', 'template_qcz8bc2', form.current, {
                publicKey: '8fqzhmFBrD96hM4s8',
            })
            .then(
                () => {
                    setButtonText('Send');
                    setIsSending(false);
                    form.current.reset(); // Reset form fields
                    toast.success('Your message has been sent successfully!');
                    console.log('SUCCESS!');
                },
                (error) => {
                    setButtonText('Send');
                    setIsSending(false);
                    toast.error('Failed to send your message. Please try again later.');
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contact Us" />
                    </Col>
                    <Col md={6}>
                        <div>
                            <h2>Get In Touch</h2>
                            <form ref={form} onSubmit={sendEmail}>
                                <Row>
                                    <Col sm={12} className="px-1">
                                        <input type="text" name="from_name" placeholder="Name" required />
                                    </Col>
                                    <Col sm={6} className="px-1">
                                        <input type="email" name="from_email" placeholder="Email Address" required />
                                    </Col>
                                    <Col sm={6} className="px-1">
                                        <input type="tel" name="phone" placeholder="Phone No." />
                                    </Col>
                                    <Col className="px-1">
                                        <textarea rows="6" name="message" placeholder="Message" required></textarea>
                                        <button type="submit" className='contact' disabled={isSending}>
                                            {buttonText}
                                        </button>
                                    </Col>
                                </Row>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
            <ToastContainer />
        </section>
    );
};
