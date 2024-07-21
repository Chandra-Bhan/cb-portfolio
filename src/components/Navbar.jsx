import React, { useEffect, useState } from "react";
import style from "../style/Navbar.module.css";
import { Link, Element } from "react-scroll";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  const [activeLink, setActiveLink] = useState("home");
  const [hamtrigger, setHamTrigger] = useState(false);

  const handleSetActive = (to) => {
    setActiveLink(to);
  };
  useEffect(() => {
    // To highlight the first link by default when the component mounts
    setActiveLink("home");

    // Add event listener to handle scroll and update active link
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sections = ["home", "features", "projects", "resume", "contact"];

      for (const section of sections) {
        const target = document.getElementById(section);
        if (target) {
          const rect = target.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveLink(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav>
      <div className={style.logo_section}>
        <div className={style.img_div}>
          <img src="././Chandrabhan_circle_img.png"></img>
        </div>
        <div className={style.logo}>
          folio<b>.</b>
        </div>
      </div>
      <ul
        className={`${style.navItems} ${hamtrigger ? style.show : style.hide}`}
        id="links_ul"
      >
        <li>
          <Link
            to="home"
            smooth={true}
            duration={1000}
            onSetActive={handleSetActive}
            className={activeLink == "home" ? style.activeLink : ""}
          >
            HOME
          </Link>
        </li>
        <li>
          <Link
            to="features"
            smooth={true}
            onSetActive={handleSetActive}
            className={activeLink == "features" ? style.activeLink : ""}
            duration={1000}
          >
            FEATURES
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            onSetActive={handleSetActive}
            className={activeLink == "projects" ? style.activeLink : ""}
            duration={1000}
          >
            PROJECTS
          </Link>
        </li>
        <li>
          <Link
            to="resume"
            smooth={true}
            onSetActive={handleSetActive}
            className={activeLink == "resume" ? style.activeLink : ""}
            duration={1000}
          >
            RESUME
          </Link>
        </li>

        <li>
          <Link
            to="contact"
            smooth={true}
            onSetActive={handleSetActive}
            className={activeLink == "contact" ? style.activeLink : ""}
            duration={1000}
          >
            CONTACT
          </Link>
        </li>
        <li>
          <a
            target="_blank"
            href="https://drive.google.com/drive/folders/10yclMr5YR6o4dvY2JL2RihnwidS95hj8?usp=drive_link"
            className={style.cv_dwn}
          >
            DOWNLOAD_CV
          </a>
        </li>
      </ul>

      <span
        className={`${style.hamburger} `}
        onClick={() => setHamTrigger(!hamtrigger)}
      >
        <RxHamburgerMenu color="#ff014f" fontSize="35px" />
      </span>
    </nav>
  );
}

export default Navbar;
