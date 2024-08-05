import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// linking CSS
import "./myblog.css";
// importing block data
import BlogData from "../../data/blogData";
// importing backgroundImages
import Img1 from "../../assets/imgs/backgrounds/1-7.png";
import Img2 from "../../assets/imgs/backgrounds/2-5.png";
// importing AOS
import AOS from "aos";
import "aos/dist/aos.css";

const MyblogComponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="Myblog-page position-relative overflow-hidden" id="Blog">
      <Container className="md-px-4 md-ps-4">
        <img src={Img1} className="position-absolute bg-img-1" alt="not found" data-aos="fade-right" />
        <img src={Img2} className="position-absolute bg-img-2" alt="not found" data-aos="fade-left" />
        <div className="text-center" data-aos="fade-down">
          <h3 className="orange-heading mb-2">From My Blog</h3>
          <h2 className="white-heading">
            Our Recent Updates, Blog, Tips, <br /> Tricks & More
          </h2>
        </div>
        <Row className="blog-card-container d-flex justify-content-between align-items-baseline">
          {BlogData.map((data, index) => (
            <Col
              xl={4}
              md={6}
              sm={12}
              className="blog-card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div className="position-relative blog-img-box rounded-4 overflow-hidden">
                <img src={data.img} alt="not found" />
                <div className="blogDate text-center position-absolute rounded-4">
                  <h4>19</h4>
                  <span>Aprail</span>
                </div>
              </div>
              <h3 className="mt-4 mb-2">{data.smallHeading}</h3>
              <h2>{data.Heading}</h2>
            </Col>
          ))}
        </Row>
        <Row className="rounded-4 news-box mx-1" data-aos="fade-up" data-aos-delay="600">
          <Col xl={6} className="p-0">
            <h3>Subscribe Now</h3>
            <h2>Get My Newsletter</h2>
            <p>Get latest news, updates, tips and tricks in your inbox</p>
          </Col>
          <Col
            xl={6}
            className="input-box p-0 d-flex rounded-3 overflow-hidden"
          >
            <input
              type="email"
              placeholder="Your email here"
              className="border-0 h-100"
            />
            <button className="border-0" href="#">Send Now</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyblogComponent;
