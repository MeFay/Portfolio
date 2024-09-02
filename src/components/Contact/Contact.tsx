import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import "./Contact.css";

export const Contact = () => {
  return (
    <section id="contact">
      <div className="section__wrapper contact__container">
        <div className="section__header">
          <h2 className="primary-title">Contact Me</h2>
          <p className="text__muted description">
            Need a new website or want to refresh your existing one? I'm here to
            help bring your ideas to life. Reach out to discuss your project or
            ask any questions. Looking forward to hearing from you!
          </p>
        </div>
        <div className="contact__group">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className="contact__icon" />
              <div className="contact__text">
                <h3>Email</h3>
                <h5>fatimaalvesa10@gmail.com</h5>
              </div>
              <a
                href="mailto:fatimaalvesa10@gmail.com"
                target="_blank"
                className="btn"
              >
                Send an email
              </a>
            </article>

            <article className="contact__option">
              <FaLinkedinIn className="contact__icon" />
              <div className="contact__text">
                <h3>LinkedIn</h3>
                <h5>Connect with me on LinkedIn</h5>
              </div>
              <a
                href="https://www.linkedin.com/in/fatima-alves-azevedo-271ab1212/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Let's connect
              </a>
            </article>

            <article className="contact__option">
              <FaWhatsapp className="contact__icon" />
              <div className="contact__text">
                <h3>WhatsApp</h3>
                <h5>Chat with me on WhatsApp</h5>
              </div>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Send a message
              </a>
            </article>
          </div>

          <form>
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows={7}
              placeholder="Your message"
            ></textarea>
            <button type="submit" className="btn btn--secundary">
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
