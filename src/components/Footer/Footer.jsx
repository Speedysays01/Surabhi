import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.text}>© {new Date().getFullYear()} Surabhi's Portfolio. All rights reserved.</p>
        <div className={styles.links}>
          <a href="https://www.linkedin.com/in/surabhi-mhamane-437119292/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:surabhimhamane05@gmail.com">Email</a>
          <a href="https://github.com/Speedysays01" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
