import React from "react";
import { useSelector } from "react-redux";
import { SubHeading } from "../../components";
import { data, images } from "../../constants";
import "./Chef.css";

const Chef = () => {
  const { language } = useSelector((state) => state.settings);

  return (
    <div className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <img src={images.chef} alt="chef" />
      </div>
      <div className="app__wrapper_info">
        <SubHeading title={language === "En" ? "Chef's Word" : "سخن سرآشپز"} />
        <h1 className="headtext__cormorant">
          {language === "En" ? "What We Believe In" : "چیزی که بهش باور داریم"}
        </h1>
        <div className="app__chef-content">
          <div className="app__chef-content-quote">
            <img src={images.quote} alt="quote" />
            <p className="p__opensans">{data.Lorem.long[language]}</p>
          </div>
          <p className="p__opensans">{data.Lorem.medium[language]}</p>
        </div>
        <div className="app__chef-sign">
          <p>{language === "En" ? "kevin Lou" : "کیوان لولایی"}</p>
          <p className="p__opensans">
            {language === "En" ? "Chef & Founder" : "سرآشپز و موسس"}
          </p>
          <img src={images.sign} alt="sign" />
        </div>
      </div>
    </div>
  );
};

export default Chef;
