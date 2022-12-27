import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { images, data } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => {
  const { language } = useSelector((state) => state.settings);

  return (
    <div
      className="app__aboutus app__bg flex__center section__padding"
      id="about"
    >
      <div className="app__aboutus-overlay flex__center">
        <img src={images.G} alt="g letter" />
      </div>
      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about ">
          <h1 className="headtext__cormorant">
            {language === "En" ? "About Us" : "درباره ما"}
          </h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">{data.Lorem.long[language]}</p>
          <button type="button" className="custom__button">
            {language === "En" ? "know more" : "اطلاعات بیشتر"}
          </button>
        </div>
        <div className="app__aboutus-content_knife flex__center">
          <img src={images.knife} alt="knife" />
        </div>
        <div className="app__aboutus-content_history ">
          <h1 className="headtext__cormorant">
            {language === "En" ? "About Us" : "تاریخچه ما"}
          </h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">{data.Lorem.long[language]}</p>
          <button type="button" className="custom__button">
            {language === "En" ? "know more" : "اطلاعات بیشتر"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
