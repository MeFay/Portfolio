import "./header.css";
import header1 from "../../assets/Header/header-1.png";
import { Facts } from "./facts";

export const Header = () => {
  return (
    <header id="header" className="header header--blur-effect">
      <div className="header__intro-text header__intro-text--stroke">HELLO</div>
      <div className="header__container section__wrapper">
        <div className="header__intro-column header__column header__column--blur-effect">
          <div className="header__info">
            <div className="header__info-top">
              Hello there! I'm
              <span className="header__info-name fourth-color-shade-1">
                {" "}
                Fátima Azevedo
              </span>
            </div>
            <div className="header__info-middle">
              <h1 className="header__title primary-title">
                I'M A <br /> FRONT-END DEV
              </h1>
              <p className="header__description text-muted">
                I create seamless, user-friendly interfaces that bring your
                digital vision to life.
              </p>
            </div>
            <Facts />
            <div className="header__info-bottom">
              <button className="btn btn--primary">Download CV</button>
              <a
                href="mailto:fatimaalvesa10@gmail.com"
                className="btn btn--primary"
              >
                Email Me
              </a>
            </div>
          </div>
        </div>
        <div className="header__profile-column header__column">
          <div className="header__profile-photo-container">
            <img
              src={header1}
              className="header__profile-photo"
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
