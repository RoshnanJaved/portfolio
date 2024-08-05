import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Masonry from "react-masonry-css";
// importing CSS
import "./portfolio.css";
// importing background Imgs
import backgroundImg1 from "../../assets/imgs/backgrounds/1.png";
import backgroundImg2 from "../../assets/imgs/backgrounds/2.png";
// importing Data
import portfolioData from "../../data/portfolioData";
// importing AOS
import AOS from "aos";
import "aos/dist/aos.css";

const PortfolioComponent = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const filters = ["All", "Detail", "Popup", "Soundcloud", "Vimeo", "Youtube"];

  const filteredData =
    activeFilter === "All"
      ? portfolioData
      : portfolioData.filter((item) => item.id === activeFilter);

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <div className="Portfolio-page position-relative" id="Portfolio">
      <Container>
        <div className="text-center" data-aos="fade-down">
          <h3 className="orange-heading">Portfolio</h3>
          <h2 className="white-heading">My Amazing Works</h2>
          <p className="common-para">
            Most common methods for designing websites that work well on desktop
            is <br /> responsive and adaptive design
          </p>
        </div>

        <div className="portfolio-filter text-center d-flex justify-content-between" data-aos="fade-up" data-aos-delay="200">
          {filters.map((filter, index) => (
            <button
              key={index}
              onClick={() => handleFilterChange(filter)}
              className={`filter-btn ${
                activeFilter === filter ? "active" : ""
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid mt-5 pt-3"
          columnClassName="my-masonry-grid_column"
        >
          {filteredData.map((data, index) => (
            <div
              className="img-box overflow-hidden rounded-4"
              key={index}
              id={data.id}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <a href={data.link}>
                <img src={data.img} alt="Project Image" />
              </a>
            </div>
          ))}
        </Masonry>

        <img
          src={backgroundImg1}
          alt=""
          className="position-absolute backgroundImg1"
          data-aos="fade-up"
          data-aos-delay="600"
        />
        <img
          src={backgroundImg2}
          alt=""
          className="position-absolute backgroundImg2"
          data-aos="fade-up"
          data-aos-delay="800"
        />
      </Container>
    </div>
  );
};

export default PortfolioComponent;
