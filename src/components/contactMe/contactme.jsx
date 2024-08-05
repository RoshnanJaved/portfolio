import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import "./contactme.css";
import Img1 from "../../assets/imgs/backgrounds/2-6.png";
import Img2 from "../../assets/imgs/backgrounds/1-8.png";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactmeComponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="Contactme-page position-relative" id="Contact">
      <Container className="px-4 ps-4">
        <div className="text-center" data-aos="fade-down">
          <h3 className="orange-heading mb-2">Contact Me</h3>
          <h2 className="white-heading">I Want To Hear From You</h2>
          <p className="common-para">
            Please fill out the form on this section to contact with me. Or call
            between <br /> 9:00 a.m. and 8:00 p.m. ET, Monday through Friday
          </p>
        </div>
        <Row className="justify-content-between middle-div">
          <Col lg={4} md={5} className="address-Box d-flex flex-column gap-3">
            <div
              className="d-flex gap-4 align-items-center"
              data-aos="fade-right"
            >
              <div className="icon-div icon-div-1 rounded-circle align-items-center d-flex justify-content-center">
                <FaLocationDot className="icon" />
              </div>
              <div>
                <h4 className="contact-heading">Address</h4>
                <p className="contact-para">20, Somewhere in world</p>
              </div>
            </div>
            <div
              className="d-flex gap-4 align-items-center"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <div className="icon-div icon-div-2 rounded-circle align-items-center d-flex justify-content-center">
                <MdOutlineEmail className="icon" />
              </div>
              <div>
                <h4 className="contact-heading">Email</h4>
                <p className="contact-para">hello@dizme.com</p>
              </div>
            </div>
            <div
              className="d-flex gap-4 align-items-center"
              data-aos="fade-right"
              data-aos-delay="400"
            >
              <div className="icon-div icon-div-3 rounded-circle align-items-center d-flex justify-content-center">
                <IoCall className="icon" />
              </div>
              <div>
                <h4 className="contact-heading">Phone</h4>
                <p className="contact-para">+123 456 7890</p>
              </div>
            </div>
          </Col>
          <Col lg={6} md={7} data-aos="fade-left">
            <form action="">
              <div className="d-flex gap-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="rounded-3"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="rounded-3"
                />
              </div>
              <div className="d-flex mt-3 gap-3">
                <input
                  type="number"
                  placeholder="Your Phone"
                  className="rounded-3"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="rounded-3"
                />
              </div>
              <textarea
                name=""
                placeholder="Write your message here"
                className="rounded-3 mt-3"
                id=""
              ></textarea>
              <button className="rounded-pill mt-2">Submit Now</button>
            </form>
          </Col>
        </Row>
        <div
          className="rounded-4 overflow-hidden map-container"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12926.784554036087!2d74.34800360291749!3d35.90545705375125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1717845456965!5m2!1sen!2s"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="map"
          ></iframe>
        </div>
        <img
          src={Img1}
          alt=""
          className="position-absolute bg-img-1"
          data-aos="fade-right"
          data-aos-delay="800"
        />
        <img
          src={Img2}
          alt=""
          className="position-absolute bg-img-2"
          data-aos="fade-left"
          data-aos-delay="1000"
        />
      </Container>
    </div>
  );
};

export default ContactmeComponent;
