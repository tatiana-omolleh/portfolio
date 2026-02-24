import { motion } from "framer-motion";
import "../styles/footer.css";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/tatiana-omolleh",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/tatiana-omolleh",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-socials">
          {socials.map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              whileHover={{ y: -3, color: "var(--accent)" }}
              transition={{ duration: 0.2 }}
            >
              {s.icon}
            </motion.a>
          ))}
        </div>

        <div className="footer-divider" />

        <p className="footer-copy">
          Designed & built by{" "}
          <span className="footer-name">Tatiana Omolleh</span> &mdash;{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
