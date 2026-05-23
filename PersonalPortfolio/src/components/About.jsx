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
            Software engineer, almost-graduate, and firm believer that the best
            products come from genuinely caring about the people who use them. I
            build full-stack systems and AI-powered tools — the kind that solve
            real problems and actually scale.
          </p>
          <p>
            Off-screen, I'm chasing hidden gems in whatever city I'm in, hunting
            for the perfect matcha, traveling to meet new people, and occasionally
            terrorising my kitchen in the name of baking.
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
