import React from "react";
import Link from "next/link";
import "../style/contact.css"; // Import custom CSS
import "../style/contact.css";

function Contact() {
  return (
    <section className="container">
      <div className="title">
        <Link href="/contact" className="link">
          Contact
        </Link>
        <div className="underline"></div>
      </div>

      <form className="form">
        <div className="form-grid">
          <input
            type="text"
            placeholder="Name"
            className="input"
            required
          />
          <input
            type="text"
            placeholder="Email"
            className="input"
            required
          />
        </div>

        <input
          type="text"
          placeholder="Subject"
          className="input"
          required
        />
        <textarea
          rows={6}
          placeholder="Message"
          className="textarea"
          required
        ></textarea>
        <button type="submit" className="submit-btn">
          SEND MESSAGE
        </button>
      </form>
    </section>
  );
}

export default Contact;