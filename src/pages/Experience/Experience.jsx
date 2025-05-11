import React, { useEffect } from "react";
import styles from "./Experience.module.css";

const experiences = [
  {
    title: "Full stack developer (Freelance)",
    company: "SuccessMarathi",
    period: "Dec 2024 - Mar 2025",
    points: [
      "Designed, developed and deployed a learning managemnent system.",
      "Site is still running with 1500+ active users generating 2lakh+ revenue",
      "Hired and trained an intern to further maintain the site",
    ],
  },
  {
    title: "Front end developer",
    company: "AI related startup",
    period: "Nov 2024",
    points: [
      "Designed and developed front end for an AI model",
      "Helped optimize the workflow of the product",
      "Conducted testing to ensure the model provides the best user experience",
    ],
  },
  {
    title: "Open source contributor",
    company: "Hacktoberfest 2024",
    period: "October 2024",
    points: [
      "Contributed to various open source projects during Hacktoberfest.",
      "Quakified as contributor with 5 PRs Merged",
      "Collaborated with developers from around the world.",
    ],
  },
  {
    title: "Intern Developer",
    company: "Zidio development",
    period: "May 2024 - Aug 2024",
    points: [
      "Worked on a team to develop web applications.",
      "Participated in code reviews and team meetings.",
      "Gained experince in git and collaborative development.",
    ],
  },
  {
    title: "Technical Content Creator ",
    company: "DevOpsOnSteroids",
    period: "Dec 2023 - mar 2024",
    points: [
      "Created content related to DevOps and cloud technologies.",
      "Reasearched about linkedIn and its algorithms.",
      "Gained experience in content creation and marketing.",
    ],
  },
];

const Experience = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(`.${styles.glassCard}`);
    const checkVisibility = () => {
      const triggerBottom = window.innerHeight * 0.85;
      cards.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < triggerBottom) {
          card.classList.add(styles.visible);
        }
      });
    };

    window.addEventListener("scroll", checkVisibility);
    window.addEventListener("load", checkVisibility);

    return () => {
      window.removeEventListener("scroll", checkVisibility);
      window.removeEventListener("load", checkVisibility);
    };
  }, []);

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.heading}>Experience</h2>
      <div className={styles.timeline}>
        {experiences.map((exp, idx) => (
          <article key={idx} className={styles.glassCard}>
            <span className={styles.timelineDot} style={{ top: "2.5rem" }} />
            <h3 className={styles.title}>{exp.title}</h3>
            <p className={styles.company}>{exp.company}</p>
            <p className={styles.period}>{exp.period}</p>
            <ul className={styles.points}>
              {exp.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
