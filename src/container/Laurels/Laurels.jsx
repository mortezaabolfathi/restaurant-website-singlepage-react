import React from "react";
import { useSelector } from "react-redux";
import { SubHeading } from "../../components";
import { images, data } from "../../constants";
import "./Laurels.css";

const AwardCard = ({ award }) => (
  <div className="app__laurels_awards-card">
    <img src={award.imgUrl} alt="award" />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{ color: "#DCCA87" }}>
        {award.title}
      </p>
      <p className="p__cormorant">{award.subtitle}</p>
    </div>
  </div>
);

const Laurels = () => {
  const { language } = useSelector((state) => state.settings);

  return (
    <div className="app__bg app__wrapper section__padding" id="awards">
      <div className="app__wrapper_info">
        <SubHeading
          title={
            language === "En" ? "Awards & Recognition" : " جوایز و افتخارات"
          }
        />
        <h1 className="headtext__cormorant">
          {language === "En" ? "Our Laurels" : "افتخارات ما"}
        </h1>
        <div className="app__laurels_awards">
          {data.awards[language].map((award) => (
            <AwardCard award={award} key={award.title} />
          ))}
        </div>
      </div>
      <div className="app__wrapper_img">
        <img src={images.laurels} alt="laurels" />
      </div>
    </div>
  );
};

export default Laurels;
