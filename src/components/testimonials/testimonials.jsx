import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
// importing css
import "./testimonials.css";
// importing icon
import icon from "../../assets/svgs/svgexport-12.svg";
// importing TestimonialsData
import TestimonialsData from "../../data/testimonialsData";
// importing backgroundImage
import Img1 from "../../assets/imgs/backgrounds/1-4.png";
// importing brandImg
import BrandImg from "../../assets/imgs/brands/1-5.png";
import BrandImg2 from "../../assets/imgs/brands/2-3.png";
import BrandImg3 from "../../assets/imgs/brands/3-2.png";
import BrandImg4 from "../../assets/imgs/brands/4-1.png";
// importing AOS
import AOS from "aos";
import "aos/dist/aos.css";

const TestimonialsComponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="Testimonial-page position-relative" id="Service">
      <Container>
        <img
          src={Img1}
          alt=""
          className="position-absolute Testimonial-bg-img"
          data-aos="fade-in"
        />
        <div className="text-center top-box" data-aos="fade-down">
          <h3 className="orange-heading mb-2">Testimonials</h3>
          <h2 className="white-heading">What My Clients Say</h2>
          <p className="common-para">
            Most common methods for designing websites that work well on desktop
            is <br /> responsive and adaptive design
          </p>
        </div>
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {TestimonialsData.map((data, index) => (
            <SwiperSlide key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <img src={icon} alt="" className="icon-img mb-5 mt-2" />
              <p>
                <i>{data.para}</i>
              </p>
              <div className="d-flex justify-content-center align-items-center mt-5 gap-4">
                <div className="rounded-circle overflow-hidden img-box-testimonials">
                  <img src={data.img} alt="" className="img-testimonials" />
                </div>
                <div className="text-start bottom-box">
                  <h3>{data.name}</h3>
                  <p>{data.position}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Row className="company-Cont rounded-4" data-aos="fade-up" data-aos-delay="400" >
          <Col
            md={3}
            className="company-box border border-end-0 d-flex align-items-center justify-content-center"
          >
            <img src={BrandImg} alt="" />
          </Col>
          <Col
            md={3}
            className="company-box border border-end-0 d-flex align-items-center justify-content-center"
          >
            <img src={BrandImg2} alt="" />
          </Col>
          <Col
            md={3}
            className="company-box border border-end-0 d-flex align-items-center justify-content-center"
          >
            <img src={BrandImg3} alt="" />
          </Col>
          <Col
            md={3}
            className="company-box border d-flex align-items-center justify-content-center"
          >
            <img src={BrandImg} alt="" />
          </Col>
          <Col
            md={3}
            className="company-box border border-end-0 border-top-0 d-flex align-items-center justify-content-center"
          >
            <img src={BrandImg4} alt="" />
          </Col>
          <Col
            md={3}
            className="company-box border border-end-0 border-top-0 d-flex align-items-center justify-content-center"
          >
            <img src={BrandImg} alt="" />
          </Col>
          <Col
            md={3}
            className="company-box border border-end-0 border-top-0 d-flex align-items-center justify-content-center"
          >
            <img src={BrandImg2} alt="" />
          </Col>
          <Col
            md={3}
            className="company-box border border-top-0 d-flex align-items-center justify-content-center"
          >
            <img src={BrandImg3} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TestimonialsComponent;
