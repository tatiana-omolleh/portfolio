import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import "../styles/about.css";

const stats = [
  { label: "Projects", value: "10+" },
  { label: "Technologies", value: "15+" },
  { label: "Focus Areas", value: "AI & Web" },
];

function About() {
  return (
    <AnimatedSection className="about" id="about">
      <h3 className="section-heading">About Me</h3>
      <p className="section-subtitle">
        A bit about who I am and what drives me.
      </p>

      <div className="about-content">
        <div className="about-text">
          <p>
            I'm a Computer Science student with a strong interest in full-stack
            development and AI-powered systems. I enjoy building applications
            that solve real problems and combine clean user interfaces with
            intelligent backend logic.
          </p>
          <p>
            I've worked with technologies like React, Django, and Python, and
            I'm especially interested in machine learning and scalable web
            applications. I'm always looking to push my skills further and
            contribute to meaningful projects.
          </p>
        </div>

        <div className="about-stats">
          {stats.map((stat, i) => (
            <motion.div
              className="stat-card"
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
            >
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

export default About;
