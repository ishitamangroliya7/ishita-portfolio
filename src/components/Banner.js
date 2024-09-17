import { IoMdArrowDropright } from "react-icons/io";
import { useState, useEffect, useCallback, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/Removal-488.png";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    // Memoizing the toRotate array
    const toRotate = useMemo(() => ["Frontend developer", "Web Developer", "Software Developer"], []);

    const tick = useCallback(() => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }, [isDeleting, text, loopNum, toRotate, period]);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [delta, tick]);

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi! I'm Ishita`} <span className="txt-rotate" dataperiod="1000" data-rotate='["Frontend developer" , "Web Developer" , "Software Developer"]'><span className="wrap">{text}</span></span></h1>
                        <p> Seeking an opportunity as a web developer or software
                            developer to apply my strong programming skills. I aim to gain
                            practical experience and enhance knowledge of the field. I am
                            able to learn new technologies and build a future on them.</p>
                        <button onClick={() => window.location.href = '#connect'}>Let's Connect  <IoMdArrowDropright size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
