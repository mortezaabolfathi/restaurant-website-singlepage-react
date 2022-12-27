import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { useSelector } from "react-redux";
import { FooterOverlay, Newsletter } from "../../components";
import { data, images } from "../../constants";
import "./Footer.css";

const Footer = () => {
  const { language } = useSelector((state) => state.settings);

  return (
    <div className="app__footer section__padding" id="login">
      <FooterOverlay />
      <Newsletter />

      <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext">
            {language === "En" ? "Contact Us" : "تماس با ما"}
          </h1>
          <p className="p__opensans">{data.Lorem.short[language]}</p>
          <p className="p__opensans" dir="ltr">
            +1 212-344-1230
          </p>
          <p className="p__opensans" dir="ltr">
            +1 212-555-1230
          </p>
        </div>

        <div className="app__footer-links_logo">
          <img src={images.gericht} alt="footer_logo" />
          <p className="p__opensans">
            &quot;{data.Lorem.short[language]}&quot;
          </p>
          <img
            src={images.spoon}
            className="spoon__img"
            style={{ marginTop: 15 }}
          />
          <div className="app__footer-links_icons">
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>

        <div className="app__footer-links_work">
          <h1 className="app__footer-headtext">
            {language === "En" ? "Working Hours" : "ساعات کاری"}
          </h1>
          <p className="p__opensans">
            {language === "En" ? "Monday-Friday:" : "دوشنبه - جمعه:"}
          </p>
          <p className="p__opensans">
            {" "}
            {language === "En" ? "10:00am - 02:00pm" : "10:00 ص - 02:00 ب.ظ"}
          </p>
          <p className="p__opensans">
            {language === "En" ? "Saturday-Sunday:" : "شنبه - یکشنبه:"}
          </p>
          <p className="p__opensans">
            {" "}
            {language === "En" ? "10:00am - 02:00pm" : "10:00 ص - 03:00 ب.ظ"}
          </p>
        </div>
      </div>

      <div className="footer__copyright">
        <p className="p__opensans" dir="ltr">
          2022{" "}
          <span>
            <a
              rel="noreferrer"
              href="https://github.com/ErfanMalakouti"
              target="_blank"
              style={{ textDecoration: "underline" }}
            >
              Erfan Malakouti
            </a>
          </span>
          . All Rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
