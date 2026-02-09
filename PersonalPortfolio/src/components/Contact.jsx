import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [subject, setSubject] = useState(""); // Track subject to sync with title

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const notificationTemplate = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_NOTIFICATION;
    const replyTemplate = import.meta.env.VITE_EMAILJS_TEMPLATE_ID_REPLY;

    try {
      // 1. Send the notification to yourself
      await emailjs.sendForm(
        serviceId,
        notificationTemplate,
        form.current,
        { publicKey: publicKey }
      );

      // 2. Send the auto-reply to the user
      await emailjs.sendForm(
        serviceId,
        replyTemplate,
        form.current,
        { publicKey: publicKey }
      );

      setStatus("Message sent successfully!");
      setSubject(""); // Reset subject state
      form.current.reset();
    } catch (error) {
      setStatus("Failed to send message. Please try again.");
      console.error("EmailJS Error:", error);
    }
  };

  return (
    <section className="contact" id="contact">
      <h3>Get In Touch</h3>
      <p>
        I’m currently open to opportunities and collaborations. 
        Feel free to reach out using the form below!
      </p>

      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <div className="form-group">
          <input type="text" name="name" placeholder="Your Name" required />
        </div>
        <div className="form-group">
          <input type="email" name="email" placeholder="Your Email" required />
        </div>
        <div className="form-group">
          <input 
            type="text" 
            name="subject" 
            placeholder="Subject" 
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required 
          />
          {/* Now {{title}} will always match {{subject}} exactly */}
          <input type="hidden" name="title" value={subject} />
        </div>
        <div className="form-group">
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
        </div>
        <button type="submit" className="contact-button">
          <span>Send Message</span>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
          </svg>
        </button>
      </form>
      
      {status && <p className="form-status">{status}</p>}
    </section>
  );
}

export default Contact;