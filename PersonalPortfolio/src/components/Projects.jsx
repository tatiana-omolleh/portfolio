import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import "../styles/projects.css";

const projects = [
  {
    title: "Kazìni",
    description:
      "An AI-powered career mentorship platform that combines Machine Learning (Cosine Similarity) and domain logic to recommend realistic career paths, analyze skill gaps, and match students with internships.",
    tech: ["React", "Django", "Scikit-Learn", "Gemini API"],
    github: "https://github.com/tatiana-omolleh/Intelligent-Career-Planning-Platform",
    demo: "",
  },
  {
    title: "TikitiLeo",
    description:
      "An event ticketing web application designed to increase accessibility by allowing users to purchase tickets using flexible payment options and installment plans.",
    tech: ["Laravel", "PHP", "MySQL"],
    github: "https://github.com/tatiana-omolleh/tikitileo",
    demo: "",
  },
  {
    title: "Careers Management System",
    description:
      "Led the end-to-end development of a platform to digitize admissions, alumni engagement, and internship tracking. Streamlined manual processes to reduce administrative workload by 40%.",
    tech: ["React", "Django", "SQL", "Google Meet API"],
    github: "", 
    demo: "",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function Projects() {
  return (
    <AnimatedSection className="projects" id="projects">
      <h3 className="section-heading">Projects</h3>
      <p className="section-subtitle">
        Selected work that I'm proud of. Each built to solve a real problem.
      </p>

      <motion.div
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projects.map((project, index) => (
          <motion.div className="project-card" key={index} variants={cardVariants}>
            <div className="project-card-top">
              <div className="project-folder-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
                </svg>
              </div>
              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                    </svg>
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                  </a>
                )}
              </div>
            </div>

            <h4 className="project-title">{project.title}</h4>
            <p className="project-description">{project.description}</p>

            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </AnimatedSection>
  );
}

export default Projects;
