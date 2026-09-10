import React from "react";
import styles from "../../styles/landing.module.css";
import InView from "./InView";

const projects = [
  {
    title: "Ihsan Learning",
    type: "project",
    image: null,
    url: "https://ihsanlearning.id",
    description:
      "A free, no-registration learning platform offering a curated library of health and research reading materials — organized by category and viewable directly in the browser.",
    tags: ["Next.js", "React.js"],
  },
  {
    title: "DeweTour",
    type: "practice",
    image: null,
    url: "https://dewetour.vercel.app",
    description:
      "A travel booking platform that lets users explore and book tour packages. Features intuitive browsing, booking flow, and a responsive mobile experience.",
    tags: ["React Native", "Next.js", "Express", "REST API"],
  },
  {
    title: "The Journey",
    type: "practice",
    image: null,
    url: "https://thejourney.vercel.app",
    description:
      "A travel blog and journal web application where users can document their adventures with rich content, photos, and stories from around the world.",
    tags: ["Next.js", "Apollo", "GraphQL", "MongoDB"],
  },
  {
    title: "Dumbways",
    image: null,
    url: "https://dumbways.id",
    description:
      "Coding bootcamp platform connecting aspiring developers with structured learning paths, mentors, and career resources to launch their tech careers.",
    tags: ["React.js", "Next.js", "Node.js"],
  },
  {
    title: "Allcare",
    image: null,
    url: "https://allcare.id",
    description:
      "Healthcare platform providing accessible medical services, telemedicine, and health management tools for patients and healthcare providers.",
    tags: ["React.js", "TypeScript", "REST API"],
  },
  {
    title: "Ancorair",
    type: "project",
    image: null,
    url: "https://ancorair.com",
    description:
      "Aviation and air services platform offering streamlined booking, fleet management, and operational tools for the airline industry.",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
  },
  {
    title: "Halonora",
    type: "project",
    image: null,
    url: "https://halonora.id",
    description:
      "Digital platform delivering innovative solutions with a focus on user experience and modern web technologies for the Indonesian market.",
    tags: ["React.js", "Next.js", "GraphQL"],
  },
  {
    title: "Multiwahana Tama Logistik",
    type: "project",
    image: null,
    url: "https://multiwahanatamalogistik.co.id",
    description:
      "Logistics and transportation platform providing end-to-end freight management, delivery tracking, and supply chain solutions across Indonesia.",
    tags: ["Next.js", "React.js", "REST API"],
  },
];

const placeholderColors = [
  ["#1a1a2e", "#16213e"],
  ["#0f3460", "#533483"],
  ["#1b4332", "#2d6a4f"],
  ["#370617", "#6a040f"],
];

function ProjectImagePlaceholder({ title, index }) {
  const [bg1, bg2] = placeholderColors[index % placeholderColors.length];
  const initials = title
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: `linear-gradient(135deg, ${bg1} 0%, ${bg2} 100%)`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
      }}
    >
      <span
        style={{
          fontSize: 48,
          fontWeight: 800,
          color: "rgba(255,255,255,0.15)",
          letterSpacing: "-0.04em",
          lineHeight: 1,
        }}
      >
        {initials}
      </span>
      <span
        style={{
          fontSize: 13,
          fontWeight: 600,
          color: "rgba(255,255,255,0.35)",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        {title}
      </span>
    </div>
  );
}

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const cardVariants = (i) => ({
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  },
});

export default function ProjectsSection() {
  return (
    <section id="projects">
      <div className={styles.sectionSep} />
      <div className={styles.section}>
        <InView variants={headerVariants} threshold={0.3}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionLabel}>Work</div>
            <h2 className={styles.sectionTitle}>Featured Projects</h2>
            <div className={styles.sectionDivider} />
            <p className={styles.sectionDesc}>
              A selection of projects I&apos;ve built — from social platforms
              to travel apps. Each project reflects my passion for great UX
              and clean code.
            </p>
          </div>
        </InView>

        <div className={styles.projectsGrid}>
          {projects.map((project, i) => (
            <InView key={project.title} variants={cardVariants(i)} threshold={0.1}>
              <div
                className={styles.projectCard}
                style={{ cursor: project.url ? "pointer" : "default" }}
                onClick={() => project.url && window.open(project.url, "_blank")}
              >
                <div className={styles.projectImageWrap}>
                  {project.image ? (
                    <img
                      className={styles.projectImage}
                      src={project.image}
                      alt={project.title}
                    />
                  ) : (
                    <ProjectImagePlaceholder title={project.title} index={i} />
                  )}
                </div>
                <div className={styles.projectBody}>
                  <div className={styles.projectTitleRow}>
                    <div className={styles.projectTitle}>{project.title}</div>
                    {project.type === "practice" ? (
                      <span className={styles.badgePractice}>Practice</span>
                    ) : project.type === "project" ? (
                      <span className={styles.badgeProject}>Project</span>
                    ) : (
                      <span className={styles.badgeWork}>Work</span>
                    )}
                  </div>
                  <p className={styles.projectDesc}>{project.description}</p>
                  <div className={styles.projectTags}>
                    {project.tags.map((tag) => (
                      <span key={tag} className={styles.projectTag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </InView>
          ))}
        </div>
      </div>
    </section>
  );
}
