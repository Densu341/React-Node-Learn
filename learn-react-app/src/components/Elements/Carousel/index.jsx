import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselItem from "./CarouselItem";
import img1 from "../../../assets/designer-1.jpg";
import img2 from "../../../assets/graphic-design-trends.png";
import img3 from "../../../assets/make-it-personal.jpg";
import img4 from "../../../assets/Synthwave-Postmodern.jpg";
import img5 from "../../../assets/Purple-Combination-colors-graphic-design-predictions-1024x576-1024x576.jpg";

const images = [img1, img2, img3, img4, img5];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
  };

  const renderImages = () =>
    images.map((image, index) => <CarouselItem key={index} image={image} />);
  return (
    <div className="flex items-center justify-center">
      <div className="w-full">
        <Slider {...settings}>{renderImages()}</Slider>
      </div>
    </div>
  );
};

export default Carousel;
