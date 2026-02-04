import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="socials">
        <a href="https://github.com/tatiana-omolleh" target="_blank">GitHub</a>
        <a href="https://linkedin.com/in/tatiana-omolleh" target="_blank">LinkedIn</a>
        {/* <a href="https://twitter.com/tatiana_omolleh" target="_blank">Twitter</a> */}
      </div>

      <p>© {new Date().getFullYear()} Tatiana Omolleh</p>
    </footer>
  );
}

export default Footer;
