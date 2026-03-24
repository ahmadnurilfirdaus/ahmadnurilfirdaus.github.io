import React from "react";
import styles from "../../styles/landing.module.css";
import InView from "./InView";

const experiences = [
  {
    type: "work",
    year: "Jun 2022 – Present",
    title: "Senior Frontend Developer",
    company: "PT Pertamina Training & Consulting",
    location: "Central Jakarta, Indonesia",
    description:
      "Build user interfaces and API integrations for web applications at one of Indonesia's largest state-owned energy companies. Responsible for delivering scalable, high-performance front-end solutions.",
    tags: ["Next.js", "React.js"],
  },
  // {
  //   type: "work",
  //   year: "Jan 2022 – Present",
  //   title: "Frontend Developer",
  //   company: "PT Kencana Konsep",
  //   location: "Kramatjati, Jakarta, Indonesia",
  //   description:
  //     "Develop and maintain front-end web applications, collaborating with design and back-end teams to deliver user-friendly interfaces.",
  //   tags: ["React.js", "Next.js"],
  // },
  {
    type: "work",
    year: "Jun 2021 – May 2022",
    title: "Frontend Developer",
    company: "Digital Sistem Indonesia",
    location: "Remote",
    description:
      "Built user interfaces for web applications remotely. Worked on multiple client projects ensuring responsive and performant front-end experiences.",
    tags: ["Next.js", "React.js"],
  },
  {
    type: "work",
    year: "Feb 2021 – Jun 2021",
    title: "Full Stack Developer",
    company: "Dedicated IT",
    location: "Remote",
    description:
      "Developed full-stack web features using React.js on the front end and Node.js on the back end, delivering end-to-end solutions for clients.",
    tags: ["React.js", "Node.js"],
  },
  {
    type: "work",
    year: "Oct 2018 – Feb 2021",
    title: "Physics Teacher",
    company: "Ruangguru",
    location: "Indonesia",
    description:
      "Physics educator at Ruangguru's digital bootcamp — one of Indonesia's leading edtech platforms. Created and delivered engaging physics curriculum for students online.",
    tags: ["Education", "Teaching"],
  },
  {
    type: "work",
    year: "Sep 2020 – Nov 2020",
    title: "Frontend Developer",
    company: "PT. Mejik Utama Sugiharta",
    location: "Tangerang Selatan, Banten, Indonesia",
    description:
      "Created user interfaces for several web applications at this South Jakarta-based software house.",
    tags: ["Next.js", "React.js"],
  },
  {
    type: "training",
    year: "Aug 2020 – Sep 2020",
    title: "Coding Training",
    company: "PT. DumbWays Indonesia Teknologi",
    location: "Indonesia",
    description:
      "Intensive full-stack JavaScript bootcamp — learned React.js, Node.js, and modern web development practices that launched my software engineering career.",
    tags: ["React.js", "Node.js", "Bootcamp"],
  },
  {
    type: "work",
    year: "Aug 2018 – Dec 2018",
    title: "Physics Teacher",
    company: "Unacademy",
    location: "Online",
    description:
      "Online physics educator on Unacademy, an Indian edtech platform. Produced video lessons and practice materials for students across the platform.",
    tags: ["Education", "Teaching"],
  },
  {
    type: "education",
    year: "2009 – 2016",
    title: "Bachelor's Degree — Physics Teacher Education",
    company: "University of Jember (UNEJ)",
    location: "Jember, East Java, Indonesia",
    description:
      "Graduated with a degree in Physics Teacher Education. Built strong foundations in analytical thinking and problem-solving that later proved invaluable in software engineering.",
    tags: ["Education"],
  },
];

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const itemVariants = (i) => ({
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  },
});

const typeColor = {
  work: "#39c869",
  training: "#039be5",
  education: "#a78bfa",
};

export default function ExpSection() {
  return (
    <section id="experience">
      <div className={styles.sectionSep} />
      <div className={styles.section}>
        <InView variants={headerVariants} threshold={0.3}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionLabel}>Background</div>
            <h2 className={styles.sectionTitle}>Experience & Education</h2>
            <div className={styles.sectionDivider} />
            <p className={styles.sectionDesc}>
              5+ years delivering web applications for startups and government
              agencies — from physics classroom to Senior Frontend Developer.
            </p>
          </div>
        </InView>

        <div className={styles.timeline}>
          <div className={styles.timelineLine} />
          {experiences.reverse().map((exp, i) => (
            <InView
              key={exp.title + i}
              variants={itemVariants(i)}
              threshold={0.1}
              style={{ marginBottom: 30 }}
            >
              <div className={styles.timelineItem}>
                <div
                  className={styles.timelineDot}
                  style={{ borderColor: typeColor[exp.type] }}
                />
                <div
                  className={styles.timelineYear}
                  style={{ color: typeColor[exp.type] }}
                >
                  {exp.year}
                </div>
                <div className={styles.timelineTitle}>{exp.title}</div>
                <div className={styles.timelineCompany}>
                  {exp.company}
                  {exp.location && (
                    <span className={styles.timelineLocation}>
                      {" · "}
                      {exp.location}
                    </span>
                  )}
                </div>
                <p className={styles.timelineDesc}>{exp.description}</p>
                <div className={styles.timelineTags}>
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className={styles.timelineTag}
                      style={{
                        borderColor: `${typeColor[exp.type]}33`,
                        color: typeColor[exp.type],
                        background: `${typeColor[exp.type]}0d`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </InView>
          ))}
        </div>
      </div>
    </section>
  );
}
