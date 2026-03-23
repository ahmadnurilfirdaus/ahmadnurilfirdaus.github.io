import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import styles from "../../styles/landing.module.css";

const Typed = dynamic(() => import("react-typed"), { ssr: false });

const makeVariant = (delay) => ({
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  },
});

export default function HeroSection() {
  const scrollToAbout = (e) => {
    e.preventDefault();
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className={styles.hero}>
      {/* Background grid */}
      <div className={styles.heroGrid} />
      <div className={styles.heroGlow} />

      <div className={styles.heroContent}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={makeVariant(0.1)}
        >
          <span className={styles.heroBadge}>
            <span className={styles.heroDot} />
            Available for work
          </span>
        </motion.div>

        <motion.p
          className={styles.heroGreeting}
          initial="hidden"
          animate="visible"
          variants={makeVariant(0.25)}
        >
          Hello, I&apos;m
        </motion.p>

        <motion.h1
          className={styles.heroName}
          initial="hidden"
          animate="visible"
          variants={makeVariant(0.35)}
        >
          Ahmad Nuril Firdaus
        </motion.h1>

        <motion.div
          className={styles.heroTypedWrap}
          initial="hidden"
          animate="visible"
          variants={makeVariant(0.5)}
        >
          <Typed
            strings={[
              "Senior Frontend Developer",
              "React.js &amp; Next.js Specialist",
              "5+ Years of Experience",
              "Building for Startups &amp; Gov&apos;t",
            ]}
            typeSpeed={60}
            backSpeed={40}
            backDelay={1800}
            loop
            cursorChar="|"
          />
        </motion.div>

        <motion.div
          className={styles.heroButtons}
          initial="hidden"
          animate="visible"
          variants={makeVariant(0.65)}
        >
          <a
            className={styles.btnPrimary}
            href="#about"
            onClick={scrollToAbout}
          >
            About Me ↓
          </a>
          <a
            className={styles.btnSecondary}
            href="/resume.pdf"
            download
            target="_blank"
            rel="noreferrer"
          >
            Resume ↗
          </a>
        </motion.div>
      </div>

      <div className={styles.heroScrollIndicator}>
        <span>Scroll</span>
        <div className={styles.heroScrollBar} />
      </div>
    </section>
  );
}
