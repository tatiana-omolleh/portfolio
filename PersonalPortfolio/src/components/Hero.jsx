import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero">
      <h1>Tatiana Omolleh</h1>
      <h2>Full-Stack Developer | AI & ML Enthusiast</h2>
      <p>
        I build intelligent, user-focused web applications with clean interfaces
        and strong backend logic.
      </p>

      <div className="hero-buttons">
        <a href="#projects">View Projects</a>
        <a href="/cv.pdf">Download CV</a>
      </div>
    </section>
  );
}

export default Hero;
