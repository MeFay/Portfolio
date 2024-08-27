import "./about.css";
import Image from "../../assets/About/about-pic.png";

export const About = () => {
  return (
    <section id="about">
      <div className="section__wrapper about__container">
        <div className="me__container blur-effect">
          <div className="photo__container">
            <img src={Image} alt="" />
          </div>
        </div>
        <div className="section__header--center">
          <h2 className="primary-title">About Me</h2>
          <h1 className="title">
            Passionate about
            <span className="color-primary"> Front-End Development</span>
          </h1>
          <p className="text__muted description">
            I’m dedicated to creating engaging, responsive websites and
            applications that deliver exceptional user experiences. With a focus
            on design and usability, I strive to make every project a unique and
            effective solution.
          </p>
        </div>
      </div>
    </section>
  );
};
