import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// getting icons
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaBehance,
} from "react-icons/fa";
// importing homePage css
import "./homePage.css";
// importing AvatarImg
import AvatarImg from "../../assets/imgs/avatar.png";
// importing icons
import Ai from "../../assets/svgs/svgexport-1.svg";
import Ps from "../../assets/svgs/svgexport-2.svg";
import Figma from "../../assets/svgs/svgexport-3.svg";
// importing AOS
import AOS from "aos";
import "aos/dist/aos.css";

const HomeComponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="home-page" id="Home">
      <Container fluid="sm" className="px-1 ps-4">
        <Row className="home-cont align-items-center">
          <Col md={6} className="home-text-box" data-aos="fade-right">
            <h3 className="orange-heading">Hello, I am</h3>
            <h1>James Smith</h1>
            <p>
              A <span className="span-1">Creative Designer</span> From{" "}
              <span className="span-2">New York</span>
            </p>
            <p>
              I am a creative designer based in New York, and I am very
              passionate and dedicated to my work.
            </p>
            <div className="home-button-box d-flex align-items-center">
              <button className="rounded-pill position-relative" >
                About Me
              </button>
              <div className="d-flex home-icon-box gap-3">
                <a href="#">
                  <FaFacebookF />
                </a>
                <a href="#">
                  <FaTwitter />
                </a>
                <a href="#">
                  <FaLinkedinIn />
                </a>
                <a href="#">
                  <FaBehance />
                </a>
              </div>
            </div>
          </Col>
          <Col md={5} data-aos="fade-left">
            <div className="home-img-box position-relative">
              <img className="w-full" src={AvatarImg} alt="Avatar" />
              <div
                className="icon-box rounded position-absolute"
                data-aos="zoom-in"
                data-aos-delay="500"
              >
                <img src={Ai} alt="AI Icon" />
              </div>
              <div
                className="icon-box rounded position-absolute"
                data-aos="zoom-in"
                data-aos-delay="700"
              >
                <img src={Ps} alt="PS Icon" />
              </div>
              <div
                className="icon-box rounded position-absolute"
                data-aos="zoom-in"
                data-aos-delay="900"
              >
                <img src={Figma} alt="Figma Icon" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomeComponent;
