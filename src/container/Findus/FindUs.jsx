import React from "react";
import { useSelector } from "react-redux";
import { SubHeading } from "../../components";
import { data, images } from "../../constants";

const FindUs = () => {
  const { language } = useSelector((state) => state.settings);

  return (
    <div className="app__bg app__wrapper section__padding" id="contact">
      <div className="app__header_info">
        <SubHeading title={language === "En" ? "contact" : "تماس با ما"} />
        <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
          {language === "En" ? "Find Us" : "جستجوی ما"}
        </h1>
        <div className="app__wrapper-content">
          <p className="p__opensans">{data.Lorem.short[language]}</p>
          <p
            className="p__cormorant"
            style={{ color: "#DCCA87", margin: "2rem 0" }}
          >
            {language === "En" ? " Opening Hours" : "ساعات کاری"}
          </p>
          <p className="p__opensans">
            {language === "En"
              ? " Mon - Fri: 10:00am - 02:00pm"
              : "دوشنبه - جمعه: 10:00 ص - 02:00 ب.ظ"}
          </p>
          <p className="p__opensans">
            {language === "En"
              ? " Sat - Sun: 10:00am - 03:00pm"
              : "شنبه - یکشنبه : 10:00 ص - 03:00 ب.ظ"}
          </p>
        </div>
        <button className="custom__button" style={{ marginTop: "2rem" }}>
          {language === "En" ? "Visit Us" : "ملاقات با ما"}
        </button>
      </div>
      <div className="app__wrapper_img">
        <img src={images.findus} alt="findus" />
      </div>
    </div>
  );
};

export default FindUs;
