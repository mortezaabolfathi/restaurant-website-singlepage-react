import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SubHeading from "../SubHeading/SubHeading";
import "./Newsletter.css";

const Newsletter = () => {
  const { language } = useSelector((state) => state.settings);

  const dispatch = useDispatch();
  return (
    <div className="app__newsletter">
      <div className="app__newsletter-heading">
        <SubHeading title={language === "En" ? "Newsletter" : " خبرگذاری"} />
        <h1 className="headtext__cormorant">
          {language === "En"
            ? "Subscribe to Our Newsletter"
            : "در خبرگذاری ما ثبت نام کنید"}
        </h1>
        <p className="p__opensans">
          {language === "En"
            ? "And Never Miss Latest Update!"
            : "و از آخرین خبرها مطلع شوید"}
        </p>
      </div>
      <div className="app__newsletter-input flex__center">
        <input
          type="email"
          placeholder={
            language === "En"
              ? "Enter your email address"
              : " آدرس ایمیل خود را وارد کنید"
          }
        />
        <button className="custom__button">
          {language === "En" ? "Subscribe" : "ثبت نام"}
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
