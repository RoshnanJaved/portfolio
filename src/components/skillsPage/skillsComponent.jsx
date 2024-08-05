import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ProgressBar from "react-bootstrap/ProgressBar";
// linking CSS
import "./skillsComponent.css";
// importing coupleImg
import coupleImg from "../../assets/imgs/2-4.jpg";
// importing background image
import Bgimg from "../../assets/imgs/backgrounds/6.png";
// importing AOS
import AOS from "aos";
import "aos/dist/aos.css";

const SkillsComponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const firstValue = 85;
  const secondValue = 95;
  const thirdValue = 75;

  return (
    <div className="Skills-page position-relative">
      <Container>
        <Row className="skills-cont justify-content-between align-items-center">
          <Col xl={5} md={6} data-aos="fade-right">
            <h3 className="orange-heading">Design is Life</h3>
            <h2 className="white-heading">
              I Develop Skills Regularly to Keep Me Updated
            </h2>
            <p className="common-para">
              Most common methods for designing websites that work well on
              desktop is responsive and adaptive design
            </p>
            <div className="d-flex flex-column gap-4 mt-5">
              <div
                className="progress-container"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <div
                  className="d-flex justify-content-between align-items-center"
                  style={{ width: `${firstValue}%` }}
                >
                  <h4>Illustrator</h4>
                  <span className="progress-label">{firstValue}%</span>
                </div>
                <ProgressBar
                  now={firstValue}
                  label={`${firstValue}%`}
                  visuallyHidden
                />
              </div>
              <div
                className="progress-container"
                data-aos="fade-right"
                data-aos-delay="400"
              >
                <div
                  className="d-flex justify-content-between align-items-center"
                  style={{ width: `${secondValue}%` }}
                >
                  <h4>Photoshop</h4>
                  <span className="progress-label">{secondValue}%</span>
                </div>
                <ProgressBar
                  now={secondValue}
                  label={`${secondValue}%`}
                  visuallyHidden
                />
              </div>
              <div
                className="progress-container"
                data-aos="fade-right"
                data-aos-delay="600"
              >
                <div
                  className="d-flex justify-content-between align-items-center"
                  style={{ width: `${thirdValue}%` }}
                >
                  <h4>Figma</h4>
                  <span className="progress-label">{thirdValue}%</span>
                </div>
                <ProgressBar
                  now={thirdValue}
                  label={`${thirdValue}%`}
                  visuallyHidden
                />
              </div>
            </div>
          </Col>
          <Col md={5} className="skills-img-cont" data-aos="fade-left">
            <img src={coupleImg} alt="Design illustration" />
          </Col>
        </Row>
      </Container>
      <img
        src={Bgimg}
        alt="not found"
        className="background-img position-absolute"
        data-aos="fade-up"
      />
    </div>
  );
};

export default SkillsComponent;
