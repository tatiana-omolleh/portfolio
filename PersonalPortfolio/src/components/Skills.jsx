import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import "../styles/skills.css";

const skillCategories = [
  {
    title: "Languages",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    skills: ["Python", "JavaScript", "TypeScript", "SQL", "HTML/CSS"],
  },
  {
    title: "Frameworks",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
    skills: ["React.js", "Django", "REST APIs", "Vite"],
  },
  {
    title: "AI / ML",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.57-3.25 3.92L12 22" />
        <path d="M12 2a4 4 0 0 0-4 4c0 1.95 1.4 3.57 3.25 3.92" />
        <path d="M9 12h6" />
        <path d="M8 16h8" />
      </svg>
    ),
    skills: ["Scikit-learn", "Pandas", "NumPy", "TensorFlow"],
  },
  {
    title: "Tools & DevOps",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    skills: ["Git", "Docker", "MySQL"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3 },
  },
};

function Skills() {
  return (
    <AnimatedSection className="skills" id="skills">
      <h3 className="section-heading">Skills & Technologies</h3>
      <p className="section-subtitle">
        The tools and technologies I work with every day.
      </p>

      <motion.div
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {skillCategories.map((cat) => (
          <motion.div className="skill-card" key={cat.title} variants={cardVariants}>
            <div className="skill-card-header">
              <span className="skill-icon">{cat.icon}</span>
              <h4>{cat.title}</h4>
            </div>
            <motion.div
              className="skill-tags"
              variants={containerVariants}
            >
              {cat.skills.map((skill) => (
                <motion.span className="skill-tag" key={skill} variants={tagVariants}>
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </AnimatedSection>
  );
}

export default Skills;
