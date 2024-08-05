import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

// importing CSS
import "./services.css";
// importing background images
import bacgroundImg from "../../assets/imgs/backgrounds/5.png";
// importing Data
import ServiesData from "../../data/servicesData";
// importing AOS
import AOS from "aos";
import "aos/dist/aos.css";

const ServicesComponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="Service-page position-relative" id="Service">
      <Container className="md-px-4">
        <div className="text-center" data-aos="fade-down">
          <h3 className="orange-heading mb-2">Services</h3>
          <h2 className="white-heading">What I Do for Clients</h2>
          <p className="common-para">
            Most common methods for designing websites that work well on desktop
            is <br /> responsive and adaptive design
          </p>
        </div>
        <Row className="service-card-wrapper justify-content-center mx-1 d-flex gap-4 align-items-center">
          {ServiesData.map((data, index) => (
            <Col
              md={6}
              className="service-card rounded-4"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              key={index}
            >
              <div className="icon-box d-flex justify-content-center align-items-center">
                <img src={data.img} alt="no found" />
              </div>
              <h3>{data.heading}</h3>
              <h4 className="my-3">
                Starts from <span>{data.price}</span>
              </h4>
              <p className="common-para">{data.para}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ServicesComponent;
