import React from 'react';
import styles from './Skills.module.css'; // Importing the modular CSS file
import first from './images/1.png'
import second from './images/2.png'
import third from './images/3.png'
import fourth from './images/4.png'
import fifth from './images/5.png'
import sixth from './images/6.png'
import seventh from './images/7.png'
import eighth from './images/8.png'
import nineth from './images/9.png'
import tenth from './images/10.png'
import { motion } from 'framer-motion';



const Skills = () => {
  return (
    <section className={styles.skills}>
         <div className={styles.content}>
        <motion.h1
            initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}>My Skills</motion.h1>
      </div>
      <div className={styles.slider} style={{ '--quantity': 10 }}>
        <div className={styles.item} style={{ '--position': 1 }}>
          <img src={first} alt="Skill 1" />
        </div>
        <div className={styles.item} style={{ '--position': 2 }}>
        <img src={second} alt="Skill 1" />
        </div>
        <div className={styles.item} style={{ '--position': 3 }}>
          <img src={third} alt="Skill 3" />
        </div>
        <div className={styles.item} style={{ '--position': 4 }}>
          <img src={fourth} alt="Skill 4" />
        </div>
        <div className={styles.item} style={{ '--position': 5 }}>
          <img src={fifth} alt="Skill 5" />
        </div>
        <div className={styles.item} style={{ '--position': 6 }}>
          <img src={sixth} alt="Skill 6" />
        </div>
        <div className={styles.item} style={{ '--position': 7 }}>
          <img src={seventh} alt="Skill 7" />
        </div>
        <div className={styles.item} style={{ '--position': 8 }}>
          <img src={eighth} alt="Skill 8" />
        </div>
        <div className={styles.item} style={{ '--position': 9 }}>
          <img src={nineth} alt="Skill 9" />
        </div>
        <div className={styles.item} style={{ '--position': 10 }}>
          <img src={tenth} alt="Skill 10" />
        </div>
      </div>
   
    </section>
  );
};

export default Skills;
