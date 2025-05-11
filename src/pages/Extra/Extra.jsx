import React from 'react';
import styles from './Extra.module.css';
import { motion } from 'framer-motion';

import comp from './comp.jpg';
import first from './first.jpg';
import workshop from './workshop.jpg';

const tileVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const Extra = () => {
  const tiles = [
    {
      className: `${styles.tile} ${styles.tile1} ${styles.big}`,
      img: first,
      title: 'Academic topper with 9.71 GPA',
      subtitle: 'Have been the academic topper of the department of Electronics and Telecommunication throughout the semesteres.',
    },
    {
      className: `${styles.tile} ${styles.tile2}`,
      title: 'President of Cyborg Robotics and coding club',
      subtitle: 'Showcasing leadership skills along with technical ability as the president of the club with 130 active members.',
    },
    {
      className: `${styles.tile} ${styles.tile3}`,
      title: 'Public speaking & hosting events',
      subtitle: 'Have managed various technical and non technical events as the host displaying public speaking abilities and managemental skills.',
    },
    {
      className: `${styles.tile} ${styles.tile4} ${styles.big}`,
      img: workshop,
      title: 'C++ workshop trainer',
      subtitle: 'Conducted a 3 hour workshop as trainer on Basics of C++ with 40+ students.',
    },
    {
      className: `${styles.tile} ${styles.tile5} ${styles.big}`,
      img: comp,
      title: 'Lead organizer for Nirmaan 2025',
      subtitle: 'Organized and managed project competition with 60+ projects and 200+ students. Creataed a fullstack site for the same',
    },
    {
      className: `${styles.tile} ${styles.tile6}`,
      title: 'Cultural contribution',
      subtitle: "Have taken part in cultural activities and grabbed titles like 'Garba Queen'. Played piano for colleges music band",
    },
  ];

  return (
    <div className={styles.container}>
      <h2>Extracurriculars and Achievements</h2>
      <div className={styles.gridContainer}>
        {tiles.map((tile, index) => (
          <motion.div
            key={index}
            className={tile.className}
            variants={tileVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {tile.img && <img src={tile.img} alt="visual" />}
            <div className={styles.textArea}>
              <h2 className={styles.title}>{tile.title}</h2>
              <p className={styles.subtitle}>{tile.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Extra;
