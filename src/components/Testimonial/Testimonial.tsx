import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Testimonial.css";

import { Pagination } from "swiper/modules";
import profile1 from "../../assets/Testimonial/p1.jpeg";
import profile2 from "../../assets/Testimonial/p2.jpg";
import profile3 from "../../assets/Testimonial/p3.jpg";

export const Testimonial = () => {
  const data = [
    {
      avatar: profile1,
      name: "John Doe",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      linkedin: "https://www.linkedin.com/in/johndoe",
    },
    {
      avatar: profile2,
      name: "Jane Smith",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      linkedin: "https://www.linkedin.com/in/janesmith",
    },
    {
      avatar: profile3,
      name: "Emily Johnson",
      message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      linkedin: "https://www.linkedin.com/in/emilyjohnson",
    },
  ];

  return (
    <section id="testimonial">
      <div className="section__wrapper testimonial__container">
        <div className="testimonial__content">
          <h2 className="primary-title">Testimonials</h2>
          <p className="text__muted description">
            Check out the testimonials from professionals who have collaborated
            with me. Read their thoughts on our projects together and check their profiles!
          </p>
        </div>

        <div className="testimonial__slider">
          <Swiper
            className="testimonial__container"
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            {data.map(({ avatar, name, message, linkedin }, index) => (
              <SwiperSlide className="testimonial" key={index}>
                <div className="avatar">
                  <a href={linkedin} target="_blank" rel="noopener noreferrer">
                    <img src={avatar} alt={name} />
                  </a>
                </div>
                <h3 className="name">
                  <a href={linkedin} target="_blank" rel="noopener noreferrer">
                    {name}
                  </a>
                </h3>
                <small className="message">{message}</small>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
