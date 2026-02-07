import { useEffect, useRef } from "react";
import "../styles/hero.css";

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
      { type: "output", text: "Applied AI, ML systems, scalable products" }
    ];

    let currentLine = 0;
    let currentChar = 0;
    const terminal = terminalRef.current;
    terminal.innerHTML = ""; // Clear terminal before typing

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
        setTimeout(typeLine, 30); // Typing speed
      } else {
        currentChar = 0;
        currentLine++;
        setTimeout(typeLine, 400); // Pause between lines
      }
    }

    // Clear existing content before starting (prevents duplicates in StrictMode)
    terminal.innerHTML = "";
    typeLine();

    return () => {
      isCancelled = true; // Stop typing if component unmounts
    }
  }, []);

  return (
    <section className="hero">
      <div className="terminal-container">
        <div className="terminal-header">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <div className="terminal-body" ref={terminalRef}>
          {/* Content populated by JS */}
        </div>
      </div>
      <div className="hero-actions">
        <a href="#projects" className="btn-primary">View Projects</a>
        <a href="/cv.pdf" className="btn-secondary">Download CV</a>
      </div>
    </section>
  );
}

export default Hero;