import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { useState } from "react";
import { useEffect } from "react";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import resume from '../../src/assests/img/NainviResume.pdf';

export const Homepage = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["FrondEnd Developer"];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta)

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="Homepage" id="Home">
      <Container>
        <Row className="align-item-cener">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className="body">
                  <h1>
                    {`Hi I'm Nainvi Singh `} <p className="wrap">{text}&nbsp;</p>
                  </h1>
                  <p>Enthusiastic	and	motivated fresher	with a	proficiency	in	Java	and	Knowledge
                    in	Frontend	development.	Eager	to	collaborate	with	experienced	developers	to	deliver	efficient and
                    scalable	software	solutions.	Committed	to	continuous	learning	and	contributing	effectively	to	team
                    projects.	Seeking	an	opportunity	to	leverage	my	technical	skills	and	passion	for	software	development	in	a
                    growth-oriented	environment.</p>
                  <a href={resume}>
                    <button > Resume<ArrowRightCircle size={25} href="../assests/NainviSingh_resume.pdf" /> </button>
                  </a>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
