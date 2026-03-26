import { useState } from "react";
import "./Contact.css";
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:5000/api/contact",
        formData
      );

      // ✅ Success Message
      setSuccess("Message sent successfully ✅");
      setErrorMsg("");

      // Clear form
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      // Auto hide after 3 sec
      setTimeout(() => {
        setSuccess("");
      }, 3000);

    } catch (error) {
      console.log(error.response?.data || error.message);

      setErrorMsg("Something went wrong ❌");
      setSuccess("");

      setTimeout(() => {
        setErrorMsg("");
      }, 3000);
    }
  }

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Get in Touch</h2>

        {/* ✅ Success Message */}
        {success && <p className="success-msg">{success}</p>}

        {/* ❌ Error Message */}
        {errorMsg && <p className="error-msg">{errorMsg}</p>}

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