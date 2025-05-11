import React from "react";
import { motion } from "framer-motion";
import styles from "./About.module.css";

const About = () => {
  return (
    <motion.section
      className={styles.aboutSection}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className={styles.heading}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
      >
        <motion.span
          className={styles.emoji}
          animate={{
            rotate: [0, -15, 15, 0],  // Hand waving rotation
                   // Slight vertical motion to mimic a wave
          }}
          transition={{
            duration: 1.5,  // Duration of one wave cycle
            repeat: Infinity,  // Repeat forever
            repeatType: "loop",  // Loop the animation
          }}
        >
          👋
        </motion.span>
        Hey there! I'm Surabhi
      </motion.h1>

      <motion.p
        className={styles.text}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        I'm a <span className={styles.highlight}>MERN Stack Developer</span> passionate about crafting seamless web experiences.  
        From designing intuitive UIs to optimizing backend efficiency, I bring ideas to life with **clean code and creative solutions**.
      </motion.p>

      <motion.p
        className={styles.freelance}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 1 }}
      >
        🌍 Open to freelance projects & collaborations!
      </motion.p>
    </motion.section>
  );
};

export default About;
