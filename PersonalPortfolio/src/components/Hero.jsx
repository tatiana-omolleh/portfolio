import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "../styles/hero.css";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function Hero() {
  const terminalRef = useRef(null);

  useEffect(() => {
    let isCancelled = false;
    const lines = [
      { type: "command", text: "whoami" },
      { type: "output", text: "Tatiana Omolleh" },
      { type: "command", text: "role" },
      { type: "output", text: "Software Engineer | AI Engineer" },
      { type: "command", text: "interests" },
      { type: "output", text: "Applied AI, ML systems, scalable products" },
    ];

    let currentLine = 0;
    let currentChar = 0;
    const terminal = terminalRef.current;
    terminal.innerHTML = "";

    function typeLine() {
      if (isCancelled || currentLine >= lines.length) {
        if (!isCancelled && currentLine >= lines.length) {
          const cursor = document.createElement("span");
          cursor.className = "terminal-cursor";
          terminal.lastChild?.appendChild(cursor);
        }
        return;
      }

      const { type, text } = lines[currentLine];

      if (currentChar === 0) {
        const lineElement = document.createElement("div");
        lineElement.className = `terminal-line ${type}`;
        if (type === "command") lineElement.setAttribute("data-prompt", "> ");
        terminal.appendChild(lineElement);
      }

      const activeLine = terminal.lastChild;
      activeLine.textContent += text[currentChar];
      currentChar++;

      if (currentChar < text.length) {
        setTimeout(typeLine, 30);
      } else {
        currentChar = 0;
        currentLine++;
        setTimeout(typeLine, 400);
      }
    }

    terminal.innerHTML = "";
    typeLine();

    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <section className="hero">
      {/* Animated gradient blobs */}
      <div className="hero-bg" aria-hidden="true">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      {/* Floating particles */}
      <div className="particles" aria-hidden="true">
        {Array.from({ length: 20 }).map((_, i) => (
          <span
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 8}s`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              opacity: 0.15 + Math.random() * 0.25,
            }}
          />
        ))}
      </div>

      <motion.div
        className="hero-content"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="terminal-container" variants={fadeUp}>
          <div className="terminal-header">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
            <span className="terminal-title">tatiana@portfolio ~ %</span>
          </div>
          <div className="terminal-body" ref={terminalRef} />
        </motion.div>

        <motion.div className="hero-actions" variants={fadeUp}>
          <a href="#projects" className="btn-primary">
            View Projects
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17l9.2-9.2M7 7h10v10" />
            </svg>
          </a>
          <a href="/cv.pdf" className="btn-secondary">
            Download CV
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;