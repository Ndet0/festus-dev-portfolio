import './Contact.css';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

// Contact component
// - Uses EmailJS to send form submissions from the client.
// - API keys and IDs are provided via environment variables (Vite uses import.meta.env).
//   Ensure you set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID and VITE_EMAILJS_PUBLIC_KEY
//   in a .env file (not committed to source control) when deploying locally or to production.

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [toastVisible, setToastVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send the form via EmailJS. This runs in the browser and uses the public key
    // configured in environment variables. EmailJS will handle the SMTP sending.
    // If sending fails, we show an alert and log the error for debugging.
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        // Show a short success toast and reset the form
        setToastVisible(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setToastVisible(false), 4000);
      })
      .catch((error) => {
        // Log the error and show a user-friendly message
        console.error('Email send error:', error);
        alert('❌ Failed to send message. Please try again later.');
      });
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
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
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
          <a href="mailto:festuskisoi@gmail.com" title="Email">
            <FaEnvelope />
          </a>
          <a href="https://github.com/Ndet0" target="_blank" rel="noopener noreferrer" title="GitHub">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/festus-ndeto-500227262"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter">
            <FaTwitter />
          </a>
        </div>
      </div>

      {toastVisible && <div className="toast">✅ Message sent successfully!</div>}
    </section>
  );
}

export default Contact;
