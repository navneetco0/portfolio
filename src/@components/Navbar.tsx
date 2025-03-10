import React, { useEffect, useState } from "react";
import { GoHome } from "react-icons/go";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setVisible(window.scrollY > 100);
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (
    section: string
  ) => {
    setActiveLink(section);
    document.querySelector(section)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav className={`navbar ${visible ? "visible" : ""}`}>
      <ul>
        <li>
          <a
            href="#home"
            className={activeLink === "#home" ? "active" : ""}
            onClick={() => handleLinkClick("#home")}
            aria-current={activeLink === "#home" ? "page" : undefined}
          >
            <GoHome size={20} />
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className={activeLink === "#projects" ? "active" : ""}
            onClick={() => handleLinkClick("#projects")}
            aria-current={activeLink === "#projects" ? "page" : undefined}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#journal"
            className={activeLink === "#journal" ? "active" : ""}
            onClick={() => handleLinkClick("#journal")}
            aria-current={activeLink === "#journal" ? "page" : undefined}
          >
            Journal
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className={activeLink === "#contact" ? "active" : ""}
            onClick={() => handleLinkClick("#contact")}
            aria-current={activeLink === "#contacts" ? "page" : undefined}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
