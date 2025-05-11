import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import styles from "./Navbar.module.css";
// import logo from "./logo.jpg"; // Optional: If you have a logo

const NavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // Improved scroll handler using getBoundingClientRect
  const handleScroll = () => {
    const sections = ["about","skills", "projects", "experience", "contact"];
    let closestSection = null;
    let minDistance = Infinity;

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        const distance = Math.abs(rect.top - 70); // 70 matches offset in Link
        if (rect.top <= window.innerHeight && distance < minDistance) {
          closestSection = section;
          minDistance = distance;
        }
      }
    });

    if (closestSection) {
      setActiveSection(closestSection);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <h3>SURABHI</h3>
      </div>

      <div className={styles.menuIcon} onClick={toggleSidebar}>
        &#9776;
      </div>

      <ul className={`${styles.navLinks} ${isSidebarOpen ? styles.sidebarOpen : ""}`}>
        <div className={styles.closeIcon} onClick={closeSidebar}>
          &times;
        </div>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            offset={70}
            className={`${styles.navLink} ${activeSection === "about" ? styles.activeLink : ""}`}
            onClick={closeSidebar}
          >
            Me
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            spy={true}
            offset={1700}
            className={`${styles.navLink} ${activeSection === "skills" ? styles.activeLink : ""}`}
            onClick={closeSidebar}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            // offset={-70}
            className={`${styles.navLink} ${activeSection === "projects" ? styles.activeLink : ""}`}
            onClick={closeSidebar}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="experience"
            smooth={true}
            duration={500}
            spy={true}
            // offset={-70}
            className={`${styles.navLink} ${activeSection === "experience" ? styles.activeLink : ""}`}
            onClick={closeSidebar}
          >
            Experience
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            spy={true}
            // offset={-70}
            className={`${styles.navLink} ${activeSection === "contact" ? styles.activeLink : ""}`}
            onClick={closeSidebar}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
