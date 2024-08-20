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
        <div className="section__header">
          <h2 className="primary-title">About Me</h2>
          <h1 className="title">
            I am<span className="color-primary"> Fátima Azevedo</span>
          </h1>
          <p className="text__muted description">
            I’m a front-end developer who’s really excited about making awesome,
            user-friendly websites. I get a kick out of turning ideas into cool,
            interactive experiences that people can enjoy. I’m all about
            creativity and figuring out new ways to solve problems, and I’m
            always eager to learn and improve. Looking forward to teaming up
            with others and bringing fresh ideas to life through code!
          </p>
        </div>
      </div>
    </section>
  );
};
