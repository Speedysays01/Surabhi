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



















// import React from "react";
// import styles from "./Projects.module.css";
// import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
// import resumeHero from './resumehero.png';
// import cyb from './cyb.png';
// import nirmaan from './nirmaan.png';
// import imageNest from './imagenest.png';
// import gelato from './gelato.png';
// import suceeesMarathi from './successMarathi.png'

// const projects = [
//   {
//     id: 1,
//     title: "ResumeHero",
//     description: "A resume builder with modern templates.",
//     image: resumeHero, // Update with actual image path
//     github: "https://github.com/Speedysays01/Resume-Hero",
//     deployed: "https://resume-hero.vercel.app/",
//   },
//   {
//     id: 2,
//     title: "Nirmaan",
//     description: "A learning platform for students.",
//     image: nirmaan,
//     github: "https://github.com/Speedysays01/ProjectComp-frontend",
//     deployed: "https://nirmaan-official.vercel.app/",
//   },
//   {
//     id: 3,
//     title: "Imagenest",
//     description: "A hackathon management system.",
//     image: imageNest,
//     github: "https://github.com/Speedysays01/imageNest",
//     deployed: "https://speedysays01.github.io/imageNest/",
//   },
//   {
//     id: 4,
//     title: "Gelato",
//     description: "An online shopping platform.",
//     image: gelato,
//     github: "https://github.com/Speedysays01/Gelato",
//     deployed: "https://speedysays01.github.io/Gelato/",
//   },
//   {
//     id: 5,
//     title: "SuccessMarathi",
//     description: "My personal portfolio website.",
//     image: suceeesMarathi,
//     github: "https://successmarathi.vercel.app/",
//     deployed: "https://successmarathi.vercel.app/",
//   },
//   {
//     id: 6,
//     title: "Cyborg",
//     description: "A content management system for blogs.",
//     image: cyb,
//     github: "https://github.com/Speedysays01/Cyborg",
//     deployed: "https://cyborg-peach.vercel.app/ ",
//   },
// ];

// const Projects = () => {
//   return (
//     <div className={styles.projectsContainer}>
//       <h2 className={styles.title}>Projects</h2>
//       <div className={styles.projectsGrid}>
//         {projects.map((project) => (
//           <div key={project.id} className={styles.card}>
//             <a href={project.deployed} target="_blank" rel="noopener noreferrer">
//               <img src={project.image} alt={project.title} className={styles.image} />
//             </a>
//             <div className={styles.cardContent}>
//               <p className={styles.description}>{project.description}</p>
//               <div className={styles.links}>
//                 <a href={project.github} target="_blank" rel="noopener noreferrer">
//                   <FaGithub className={styles.icon} />
//                 </a>
//                 <a href={project.deployed} target="_blank" rel="noopener noreferrer">
//                   <FaExternalLinkAlt className={styles.icon} />
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;
