import { Link } from "react-scroll";
import "./Footer.css";
import { socialHandles } from "../../types/socialHandles";
import { menu } from "../../types/menu";

export const Footer = () => {
  return (
    <footer id="footer">
      <div className="section__wrapper">
        <ul className="footer__link__container">
          {menu.map((list, index) => (
            <Link
              activeClass="footer__tab--active"
              className="footer__tab"
              to={list.name.toLowerCase()}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              key={index}
            >
              {list.name}
            </Link>
          ))}
        </ul>

        <div className="social__handles__container">
          {socialHandles.map((list, index) => (
            <a
              href={list.link}
              className="icon-container social__handle"
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              style={{ fontSize: "1.6rem" }}
            >
              {list.icon}
            </a>
          ))}
        </div>

        <div className="copyright__container">
          <h3>Copyright &copy; All rights reserved | 2024</h3>
          <p className="text-muted">
            Built by the one and only Fátima Alves Azevedo!
          </p>
        </div>
      </div>
    </footer>
  );
};
