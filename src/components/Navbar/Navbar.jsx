import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "../../redux/features/settingsSlice";
import images from "../../constants/images";
import item from "../../constants/data";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  const { language } = useSelector((state) => state.settings);

  const dispatch = useDispatch();

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="Logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">{item.nav.Home[language]}</a>
        </li>
        <li className="p__opensans">
          <a href="#about">{item.nav.About[language]}</a>
        </li>
        <li className="p__opensans">
          <a href="#menu">{item.nav.Menu[language]}</a>
        </li>
        <li className="p__opensans">
          <a href="#awards">{item.nav.Awards[language]}</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">{item.nav.Contact[language]}</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">
          {item.nav.Login[language]}
        </a>
        <a href="/" className="p__opensans">
          {item.nav.BookTable[language]}
        </a>

        <select
          className="select__opensans"
          onChange={(e) => {
            dispatch(setLanguage(e.target.value));
            if (e.target.value === "Per") {
              document.getElementById("root").dir = "rtl";
              document.documentElement.style.setProperty(
                "--font-alt",
                "'Vazirmatn', sans-serif"
              );
              document.documentElement.style.setProperty(
                "--font-base",
                "'Farnaz', sans-serif"
              );
            } else {
              document.getElementById("root").dir = "ltr";
              document.documentElement.style.setProperty(
                "--font-alt",
                "'Open Sans', sans-serif"
              );
              document.documentElement.style.setProperty(
                "--font-base",
                "'Cormorant Upright', sans-serif"
              );
            }
          }}
          value={language}
        >
          <option>En</option>
          <option>Per</option>
        </select>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="white"
          fontSize={27}
          onClick={() => {
            setToggleMenu(true);
          }}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => {
                setToggleMenu(false);
              }}
            />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans">
                <a
                  href="#home"
                  onClick={() => {
                    setToggleMenu(false);
                  }}
                >
                  {item.nav.Home[language]}
                </a>
              </li>
              <li className="p__opensans">
                <a
                  href="#about"
                  onClick={() => {
                    setToggleMenu(false);
                  }}
                >
                  {item.nav.About[language]}
                </a>
              </li>
              <li
                className="p__opensans"
                onClick={() => {
                  setToggleMenu(false);
                }}
              >
                <a href="#menu">{item.nav.Menu[language]}</a>
              </li>
              <li className="p__opensans">
                <a
                  href="#awards"
                  onClick={() => {
                    setToggleMenu(false);
                  }}
                >
                  {item.nav.Awards[language]}
                </a>
              </li>
              <li className="p__opensans">
                <a
                  href="#contact"
                  onClick={() => {
                    setToggleMenu(false);
                  }}
                >
                  {item.nav.Contact[language]}
                </a>
              </li>
              <li className="p__opensans">
                <select
                  className="select__opensans"
                  onChange={(e) => {
                    dispatch(setLanguage(e.target.value));
                    if (e.target.value === "Per") {
                      document.getElementById("root").dir = "rtl";
                      document.documentElement.style.setProperty(
                        "--font-alt",
                        "'Vazirmatn', sans-serif"
                      );
                      document.documentElement.style.setProperty(
                        "--font-base",
                        "'Farnaz', sans-serif"
                      );
                    } else {
                      document.getElementById("root").dir = "ltr";
                      document.documentElement.style.setProperty(
                        "--font-alt",
                        "'Open Sans', sans-serif"
                      );
                      document.documentElement.style.setProperty(
                        "--font-base",
                        "'Cormorant Upright', sans-serif"
                      );
                    }
                  }}
                  value={language}
                >
                  <option>En</option>
                  <option>Per</option>
                </select>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
