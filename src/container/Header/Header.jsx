import React from "react";
import { images, data } from "../../constants";
import { SubHeading } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "../../redux/features/settingsSlice";
import "./Header.css";

const Header = () => {
  const { language, theme } = useSelector((state) => state.settings);
  const dispatch = useDispatch();
  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading
          title={
            language === "En"
              ? "Chase the new flavour"
              : "طعم های جدید رو دنبال کن"
          }
        />
        <h1 className="app__header-h1">
          {language === "En" ? "The Key to Fine Dining" : "راز یک غذای خوشمزه"}
        </h1>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
          {data.Lorem.long[language]}
        </p>
        <button type="button" className="custom__button">
          {language === "En" ? "Explore More" : "جستجوی بیشتر"}
        </button>
      </div>
      <div className="app__wrapper_img">
        <img src={images.welcome} alt="header img" />
      </div>
    </div>
  );
};

export default Header;
