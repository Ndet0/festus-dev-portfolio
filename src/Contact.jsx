import './Contact.css';
import { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [toastVisible, setToastVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate sending message (you can replace this with backend logic later)
    setToastVisible(true);
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => setToastVisible(false), 4000);
  };

  return (
    <section id="contact" className="contact">
      <div className="overlay"></div>

      <div className="contact-content fade-in">
        <h1>Let’s Connect</h1>
        <p className="contact-subtitle">
          Have a project idea or just want to say hi? Let’s create something amazing together.
        </p>

        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div className="social-icons">
          <a
            href="mailto:festuskisoi@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Email"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/Ndet0"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/festus-ndeto-500227262?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Twitter"
          >
            <FaTwitter />
          </a>
        </div>
      </div>

      {toastVisible && (
        <div className="toast">
          ✅ Message sent successfully!
        </div>
      )}
    </section>
  );
}

export default Contact;
