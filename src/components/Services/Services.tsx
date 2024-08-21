import { FaPaintbrush } from "react-icons/fa6";
import "./Services.css";
import { BsCodeSquare } from "react-icons/bs";
import { MdSpeed } from "react-icons/md";

export const Services = () => {
  return (
    <section id="services">
      <div className="section__wrapper services__wrapper">
        <div className="section__header section__header--center">
          <h2 className="primary-title">Services</h2>
          <p className="text-muted description">
            I bring your creative ideas to life with custom front-end solutions
            that resonate with your audience.
          </p>
        </div>
        <div className="service-list">
          <article className="service-card">
            <div className="service-header">
              <div className="icon-container">
                <FaPaintbrush className="icon" />
              </div>
              <div className="service-content">
                <h3 className="title">UI/UX Design</h3>
                <p className="description">
                  Create intuitive and visually appealing user interfaces that
                  enhance user experience and engagement.
                </p>
              </div>
            </div>
            <div className="service-footer">
              <button className="btn btn--primary">Read more</button>
            </div>
          </article>
          <article className="service-card">
            <div className="service-header">
              <div className="icon-container">
                <BsCodeSquare className="icon" />
              </div>
              <div className="service-content">
                <h3 className="title">Web Development</h3>
                <p className="description">
                  Build responsive and interactive websites with clean,
                  efficient code that ensures a smooth user experience across
                  all devices.
                </p>
              </div>
            </div>
            <div className="service-footer">
              <button className="btn btn--primary">Read more</button>
            </div>
          </article>
          <article className="service-card">
            <div className="service-header">
              <div className="icon-container">
                <MdSpeed className="icon" />
              </div>
              <div className="service-content">
                <h3 className="title">Optimization</h3>
                <p className="description">
                  Enhance your website’s speed and efficiency for a smoother
                  user experience and better SEO performance.
                </p>
              </div>
            </div>
            <div className="service-footer">
              <button className="btn btn--primary">Read more</button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
