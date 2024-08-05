import React from "react";
import Container from "react-bootstrap/Container";

// linking Css
import "./footer.css";

const FooterComponent = () => {
  return (
    <div className="Footer-page position-relative">
      <Container className="footer-cont px-4 ps-4 d-flex justify-content-between flex-wrap align-items-center">
        <p>
        Developed with love by <span>Shtheme</span> © 2022
        </p>
        <div className="d-flex gap-5 align-items-center">
            <a href="#">
            Terms & Condition
            </a>
            <a href="#">
            Privacy Policy
            </a>
        </div>
      </Container>
    </div>
  );
};

export default FooterComponent;
