import React, { useState } from "react";
import styles from "./Home.module.css";
import MarqueeStrip from "../../components/Marquee/Marquee";
import hero from "./hero.jpg";
import { motion } from "framer-motion";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.hover}>
          <div className={styles.imageCard}>
            <img
              src={hero}
              alt="Animated portrait of Surabhi"
              className={styles.image}
            />
          </div>
          <div className={styles.shadow}></div>
        </div>

        <div className={styles.textCard}>
          <motion.h1
            className={styles.name}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            SURABHI MHAMANE
          </motion.h1>

          <motion.p
            className={styles.subtitle}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Crafting elegant web experiences with modern design and clean code.
          </motion.p>

          <motion.div
            className={styles.btns}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <a href="#contact" className={styles.ctaButton}>
              Get in Touch
            </a>
         <a
  href="https://drive.google.com/file/d/1SGIwL74e4Sz2jOy1WoQsFmHuMo0kWrey/view?usp=drivesdk"
  target="_blank"
  rel="noopener noreferrer"
  className={styles.ctaButton}
>
  Download CV
</a>


          </motion.div>

          <motion.div
            className={styles.socialLinks}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <a href="https://github.com/Speedysays01" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github" />
            </a>
            <a href="https://www.linkedin.com/in/surabhi-mhamane-437119292/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin" />
            </a>
            <a href="https://www.instagram.com/speedysays01?igsh=cmtoMmxiOXFoYnhk" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram" />
            </a>
            <a href="mailto:surabhimhamane05@gmail.com" aria-label="Email">
              <i className="fas fa-envelope" />
            </a>
          </motion.div>
        </div>
      </main>
      <MarqueeStrip />
    </div>
  );
};

export default Home;
