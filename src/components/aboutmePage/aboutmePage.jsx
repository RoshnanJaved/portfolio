import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// importing CSS
import "./aboutme.css";
// importing background Imgs
import backgroundImg1 from "../../assets/imgs/backgrounds/1-1.png";
import backgroundImg2 from "../../assets/imgs/backgrounds/2-1.png";
// importing groupImg
import groupImg from "../../assets/imgs/2-3.jpg";
// importing AOS
import AOS from "aos";
import "aos/dist/aos.css";

const AboutMeComponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="AboutMe-page position-relative" id="About">
      <Container>
        <Row className="d-flex aboutme-cont">
          <Col md={6} className="aboutme-img px-5 position-relative" data-aos="fade-right">
            <img src={groupImg} alt="" />
            <div className="rounded position-absolute text-div d-flex align-items-center gap-3" data-aos="zoom-in" data-aos-delay="200">
              <h4 className="m-0">18</h4>
              <p className="m-0">Years of Success</p>
            </div>
            <div className="rounded position-absolute text-div d-flex align-items-center gap-3" data-aos="zoom-in" data-aos-delay="400">
              <h4 className="m-0">9K</h4>
              <p className="m-0">Total Projects</p>
            </div>
          </Col>
          <Col lg={5} md={6} className="aboutme-text-box ms-5" data-aos="fade-left">
            <h3 className="orange-heading">I am a Designer</h3>
            <h2 className="white-heading">I Can Design Anything You Want</h2>
            <p className="common-para">
              Hello there! I am a web designer, and I am very passionate and dedicated to my work. With 20 years experience as a professional web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.
            </p>
            <button className="rounded-pill position-relative">
              Hire Me
            </button>
          </Col>
        </Row>
        <img
          src={backgroundImg1}
          alt=""
          className="position-absolute backgroundImg1"
          data-aos="fade-up" data-aos-delay="600"
        />
        <img
          src={backgroundImg2}
          alt=""
          className="position-absolute backgroundImg2"
          data-aos="fade-up" data-aos-delay="800"
        />
      </Container>
    </div>
  );
};

export default AboutMeComponent;
