import React from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import { useSelector } from "react-redux";
import { SubHeading } from "../../components";
import { images, data } from "../../constants";
import "./Gallery.css";

const gallery = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
];

const Gallery = () => {
  const { language } = useSelector((state) => state.settings);

  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title={language === "En" ? "Instagram" : "اینستاگرام"} />
        <h1 className="headtext__cormorant">
          {language === "En" ? "Photo Gallery" : "گالری تصاویر"}
        </h1>
        <p className="p__opensans" style={{ color: "#AAA", marginTop: "2rem" }}>
          {data.Lorem.medium[language]}
        </p>
        <button type="button" className="custom__button">
          {language === "En" ? "View More" : " موارد بیشتر"}
        </button>
      </div>
      <div className="app__gallery-images" dir="ltr">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {gallery.map((image, index) => (
            <div
              className="app__gallery-images_card flex__center"
              key={`gallery_image-${index}`}
            >
              <img src={image} alt="gallery" />
              <BsInstagram className="gallery__images-icon" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrow">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
