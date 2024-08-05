import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Scrollspy from "react-scrollspy";
// logo Img
import Logo from "../../assets/imgs/dark.png";
// linking css
import "./navbar.css";

function NavbarComp() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      className={show ? "position-fixed fixed-nav" : "position-absolute"}
    >
      <Container>
        <Navbar.Brand href="#home">
          <img src={Logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="text-light" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Scrollspy 
            items={['Home', 'About', 'Portfolio', 'Service', 'Blog', 'Contact']} 
            currentClassName="is-current" 
            className="ms-auto nav"
          >
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#About">About</Nav.Link>
            <Nav.Link href="#Portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#Service">Service</Nav.Link>
            <Nav.Link href="#Blog">Blog</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
            <button className="rounded-pill">Download Cv</button>
          </Scrollspy>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
