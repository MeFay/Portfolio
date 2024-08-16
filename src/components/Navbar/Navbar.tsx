import "./Navbar.css";
import Logo from "../../assets/Navbar/Logo.svg";
import { menu } from "../../types/menu";
import { Link } from "react-scroll";
import { FaArrowUpRightFromSquare, FaBarsStaggered } from "react-icons/fa6";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

export const Navbar = () => {
  const [showSideBar, setShowSidebar] = useState(false);

  return (
    <nav className="navbar">
      {showSideBar ? (
        <div
          className="navbar__overlay"
          onClick={() => setShowSidebar(!showSideBar)}
        ></div>
      ) : ""}
      <div className="navbar__logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className={`navbar__tabs ${showSideBar ? "navbar__tabs--visible" : ""}`}>
        <span
          className="navbar__close-icon"
          onClick={() => setShowSidebar(!showSideBar)}
        >
          <FaTimes />
        </span>
        {menu.map((list, index) => (
          <Link
            activeClass="navbar__tab--active"
            className="navbar__tab"
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
      </div>
      <div className="navbar__actions">
        <button className="btn btn-primary">
          Hire me <FaArrowUpRightFromSquare />
        </button>
        <FaBarsStaggered
          className="navbar__menu-icon"
          onClick={() => setShowSidebar(!showSideBar)}
        />
      </div>
    </nav>
  );
};
