import "../styles/projects.css";

const projects = [
  {
    title: "Kazìni",
    description:
      "An AI-powered career planning and mentorship platform using machine learning to recommend career paths and internships.",
    tech: ["Django", "React", "Machine Learning", "MySQL"],
    github: "https://github.com/yourusername/kazini",
    demo: "",
  },
  {
    title: "ML Recommendation System",
    description:
      "A machine learning project that analyzes unstructured data to generate personalized recommendations.",
    tech: ["Python", "Scikit-learn", "Pandas"],
    github: "https://github.com/yourusername/ml-project",
    demo: "",
  },
  {
    title: "Meeting Scheduler",
    description:
      "A full-stack scheduling application with calendar integration and authentication.",
    tech: ["Django", "React", "REST API"],
    github: "https://github.com/yourusername/scheduler",
    demo: "",
  },
];

function Projects() {
  return (
    <section className="projects" id="projects">
      <h3>Projects</h3>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h4>{project.title}</h4>
            <p>{project.description}</p>

            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>

            <div className="project-links">
              <a href={project.github} target="_blank">GitHub</a>
              {project.demo && (
                <a href={project.demo} target="_blank">Live Demo</a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
