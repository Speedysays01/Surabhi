import React from 'react';
import styles from './Projects.module.css';

import cyb from './cyb.png';
import nirmaan from './nirmaan.png';
import imgnest from './imagenest.png';
import gelato from './gelato.png';
import resumeHero from './resumehero.png';
import success from './successMarathi.png'

const projects = [
  {
    title: 'ResumeHero',
    description: 'An ATS friendly Resume Builder with modern templates.',
    image: resumeHero,
    github: 'https://github.com/Speedysays01/Resume-Hero',
    live: 'https://resume-hero.vercel.app/',
  },
  {
    title: 'Nirmaan',
    description: 'Electronics department Official Project competition platform for both participants and organizers.',
    image: nirmaan,
    github: 'https://github.com/Speedysays01/ProjectComp-frontend',
    live: 'https://nirmaan-official.vercel.app/',
  },
  {
    title: 'ImageNest',
    description: 'A platform to search and download copyright free stock images without hassle',
    image: imgnest,
    github: 'https://github.com/Speedysays01/imageNest',
    live: 'https://speedysays01.github.io/imageNest/',
  },
  {
    title: 'Gelato',
    description: 'A client demo for minimalisitc UI for shopping platform',
    image: gelato,
    github: 'https://github.com/Speedysays01/Gelato',
    live: 'https://speedysays01.github.io/Gelato/',
  },
  {
    title: 'SuccessMarathi',
    description: 'Fullstack Learning management and affiliate marketing platform with 1000+ active users',
    image: success,
    github: 'https://successmarathi.vercel.app/',
    live: 'https://successmarathi.vercel.app/',
  },
  {
    title: 'Cyborg-official',
    description: 'Landing page for technical club of Electronics department',
    image: cyb,
    github: 'https://github.com/Speedysays01/Cyborg',
    live: 'https://cyborg-peach.vercel.app/',
  },
];

export default function Projects() {
  return (
    <main className={`${styles.container}`}>
      <h1 className={styles.heading}>My Projects</h1>
      <section className={styles.grid}>
        {projects.map((project, idx) => (
          <article className={styles.card} key={idx}>
            <div className={styles.cardImage}>
              <img src={project.image} alt={`${project.title} preview`} />
            </div>
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>{project.title}</h2>
              <p className={styles.cardDescription}>{project.description}</p>
              <div className={styles.cardLinks}>
                <a
                  className={`${styles.cardLink} ${styles.github}`}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`GitHub link for ${project.title}`}
                >
                  <i className="fab fa-github" /> GitHub
                </a>
                <a
                  className={`${styles.cardLink} ${styles.live}`}
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Live demo link for ${project.title}`}
                >
                  <i className="fas fa-external-link-alt" /> Live Demo
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}



















