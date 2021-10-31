import "./Categories.scss";
import { useState } from "react";
import Slider from "react-slick";
import clothes from "assets/images/clothes.jpeg";
import celebrating from "assets/images/phone.jpeg";
import education from "assets/images/furniture.jpeg";
import taken from "assets/images/plants.jpeg";
import img2 from "assets/images/sach.jpeg";
import img4 from "assets/images/beautycare.jpeg";
import img5 from "assets/images/household.jpeg";
import img3 from "assets/images/computer.jpeg";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
const images = [clothes, celebrating, education, taken, img2, img4, img5, img3];

function Categories() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <ArrowForwardIosIcon />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <ArrowBackIosIcon />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 5,
    centerMode: true,
    centerPadding: 0,
    autoplay: true,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    dots: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <div className="Categories">
      <div className="section-heading">
        <h2 className="text-center col-md-11">
          <span>FEATURE CATEGORIES</span>
        </h2>
      </div>

      <Slider {...settings}>
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <img src={img} alt={img} />
            <p>Categories {idx}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Categories;
