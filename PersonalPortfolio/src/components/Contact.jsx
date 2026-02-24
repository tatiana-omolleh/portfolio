import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import AnimatedSection from "./AnimatedSection";
import "../styles/contact.css";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [subject, setSubject] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const notificationTemplate = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_NOTIFICATION;
    const replyTemplate = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_REPLY;

    try {
      await emailjs.sendForm(serviceId, notificationTemplate, form.current, {
        publicKey,
      });
      await emailjs.sendForm(serviceId, replyTemplate, form.current, {
        publicKey,
      });

      setStatus("Message sent successfully!");
      setSubject("");
      form.current.reset();
    } catch (error) {
      setStatus("Failed to send message. Please try again.");
      console.error("EmailJS Error:", error);
    }
  };

  return (
    <AnimatedSection className="contact" id="contact">
      <h3 className="section-heading">Get In Touch</h3>
      <p className="section-subtitle" style={{ margin: "0 auto 2.5rem" }}>
        I'm currently open to opportunities and collaborations. Feel free to
        reach out!
      </p>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        {["name", "email", "subject", "message"].map((field, i) => (
          <motion.div
            className="form-group"
            key={field}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {field === "message" ? (
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
              />
            ) : field === "subject" ? (
              <>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                />
                <input type="hidden" name="title" value={subject} />
              </>
            ) : (
              <input
                type={field === "email" ? "email" : "text"}
                name={field}
                placeholder={
                  field === "name" ? "Your Name" : "Your Email"
                }
                required
              />
            )}
          </motion.div>
        ))}

        <motion.button
          type="submit"
          className="btn-primary contact-button"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <span>Send Message</span>
          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
          </svg>
        </motion.button>
      </form>

      {status && (
        <motion.p
          className="form-status"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {status}
        </motion.p>
      )}
    </AnimatedSection>
  );
}

export default Contact;