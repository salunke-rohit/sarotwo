import { useState } from "react";
import axios from "axios";
import "./Contact.css";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [success, setSuccess] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // Handle Input Change
  function handleChange(e) {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  // Handle Form Submit
  async function handleSubmit(e) {

    e.preventDefault();

    try {

      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        formData
      );

      console.log(res.data);

      // Success Message
      setSuccess("Message sent successfully ✅");
      setErrorMsg("");

      // Clear Form
      setFormData({
        name: "",
        email: "",
        message: ""
      });

      // Auto Hide Success
      setTimeout(() => {
        setSuccess("");
      }, 3000);

    } catch (error) {

      console.log(error.response?.data || error.message);

      setErrorMsg("Something went wrong ❌");
      setSuccess("");

      // Auto Hide Error
      setTimeout(() => {
        setErrorMsg("");
      }, 3000);
    }
  }

  return (
    <section className="contact-section">

      <div className="contact-container">

        <h2 className="contact-title">
          Get in Touch
        </h2>

        {/* Success Message */}
        {success && (
          <p className="success-msg">
            {success}
          </p>
        )}

        {/* Error Message */}
        {errorMsg && (
          <p className="error-msg">
            {errorMsg}
          </p>
        )}

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

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

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}