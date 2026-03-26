import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(formData);
    alert("Message sent successfully ");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  }

  return (
    <section className="contact-section">

      {/* 🔥 Heading Added */}
      <div className="contact-container">
        <h2 className="contact-title">Get in Touch</h2>

        <form className="contact-form" onSubmit={handleSubmit}>
          
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
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>

    </section>
  );
}