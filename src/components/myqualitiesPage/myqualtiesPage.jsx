import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// importing CSS
import "./myqualities.css";
// importing Icons
import arrowIcon from "../../assets/svgs/svgexport-5.svg";
import arrowIconBackground from "../../assets/imgs/backgrounds/1-9.png";
import brushIcon from "../../assets/svgs/svgexport-6.svg";
import brushIconBackground from "../../assets/imgs/backgrounds/2-7.png";
import bulbIcon from "../../assets/svgs/svgexport-7.svg";
import bulbIconBackground from "../../assets/imgs/backgrounds/3-4.png";
// importing AOS
import AOS from "aos";
import "aos/dist/aos.css";

const MyqualtiesComponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="myqualities-page">
      <Container>
        <Row className="qualities-cont d-flex justify-content-between align-items-center">
          <Col md={4} data-aos="fade-up" data-aos-delay="100">
            <div className="quality-box px-3">
              <div className="quality-icon position-relative text-center mb-4">
                <img src={arrowIcon} alt="not found" className="icon" />
                <img
                  src={arrowIconBackground}
                  alt="not found"
                  className="position-absolute icon-background"
                />
              </div>
              <div className="pt-2 text-center quality-text-box">
                <h2>Pixel Perfect</h2>
                <p className="common-para">
                  Most common methods for designing websites that work well on
                  desktop is responsive and adaptive design.
                </p>
              </div>
            </div>
          </Col>
          <Col md={4} data-aos="fade-up" data-aos-delay="200">
            <div className="quality-box px-3">
              <div className="quality-icon position-relative text-center mb-4">
                <img src={brushIcon} alt="not found" className="icon" />
                <img
                  src={brushIconBackground}
                  alt="not found"
                  className="position-absolute icon-background"
                />
              </div>
              <div className="pt-2 text-center quality-text-box">
                <h2>High Quality</h2>
                <p className="common-para">
                  Most common methods for designing websites that work well on
                  desktop is responsive and adaptive design.
                </p>
              </div>
            </div>
          </Col>
          <Col md={4} data-aos="fade-up" data-aos-delay="300">
            <div className="quality-box px-3">
              <div className="quality-icon position-relative text-center mb-4">
                <img src={bulbIcon} alt="not found" className="icon" />
                <img
                  src={bulbIconBackground}
                  alt="not found"
                  className="position-absolute icon-background"
                />
              </div>
              <div className="pt-2 text-center quality-text-box">
                <h2>Awesome Idea</h2>
                <p className="common-para">
                  Most common methods for designing websites that work well on
                  desktop is responsive and adaptive design.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyqualtiesComponent;
