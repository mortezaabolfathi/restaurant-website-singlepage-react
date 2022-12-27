import React from "react";
import { useSelector } from "react-redux";
import { SubHeading, MenuItem } from "../../components";
import { images, data } from "../../constants";
import "./SpecialMenu.css";

const SpecialMenu = () => {
  const { language } = useSelector((state) => state.settings);

  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app_specialMenu-title">
        <SubHeading
          title={
            language === "En"
              ? "Menu that fits you palate"
              : "منویی متناسب با هر سلیقه"
          }
        />
        <h1 className="headtext__cormorant">
          {language === "En" ? "Todays's Special" : "ویژه های امروز"}
        </h1>
      </div>
      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu-wine flex__center">
          <p className="app__specialMenu-menu_heading">
            {language === "En" ? "Wine & Beer" : "کوکتل ها"}
          </p>
          <div className="app__specialMenu-menu_items">
            {data.wines[language].map((wine, index) => (
              <MenuItem
                key={wine.title + index}
                title={wine.title}
                price={wine.price}
                tags={wine.tags}
              />
            ))}
          </div>
        </div>

        <div className="app__specialMenu-menu_img">
          <img src={images.menu} alt="menu" />
        </div>

        <div className="app__specialMenu-menu-cocktails flex__center">
          <p className="app__specialMenu-menu_heading">
            {language === "En" ? "Cocktails" : "دمنوش ها"}
          </p>
          <div className="app__specialMenu-menu_items">
            {data.cocktails[language].map((cocktails, index) => (
              <MenuItem
                key={cocktails.title + index}
                title={cocktails.title}
                price={cocktails.price}
                tags={cocktails.tags}
              />
            ))}
          </div>
        </div>
      </div>
      <div style={{ marginTop: "15px" }}>
        <button type="button" className="custom__button">
          {language === "En" ? "View More" : "موارد بیشتر"}
        </button>
      </div>
    </div>
  );
};

export default SpecialMenu;
