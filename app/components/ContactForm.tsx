"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("sent");
        setForm({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Failed to submit enquiry. Please try WhatsApp below.");
      }
    } catch (err: unknown) {
      console.error("Submission failed:", err);
      setStatus("error");
      setErrorMessage("Network issue. Please connect with us directly on WhatsApp below.");
    }
  }

  return (
    <form className="enquiry-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="contact-name">Full Name</label>
        <input
          id="contact-name"
          name="name"
          type="text"
          placeholder="Your name"
          required
          value={form.name}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="contact-email">Email Address</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          placeholder="you@example.com"
          required
          value={form.email}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="contact-phone">Phone Number</label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          placeholder="+91 98765 43210"
          required
          value={form.phone}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="contact-message">Message <span style={{ fontWeight: 400, opacity: .6 }}>(optional)</span></label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          placeholder="Tell us which products you're interested in..."
          value={form.message}
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        className="button button-gold form-submit"
        disabled={status === "sending"}
      >
        {status === "idle" && "Send Enquiry"}
        {status === "sending" && "Sending Enquiry…"}
        {status === "sent" && "✓ Enquiry Sent Successfully"}
        {status === "error" && "Retry Sending"}
      </button>

      {status === "sent" && (
        <div className="form-success">
          <strong>✓ Enquiry Sent!</strong>
          <p style={{ margin: "4px 0 0", fontSize: "13px", opacity: 0.9 }}>
            Thank you! Your message has been sent to our team at <strong>ararafoodindustry@gmail.com</strong>. We will contact you shortly.
          </p>
        </div>
      )}

      {status === "error" && (
        <div className="form-error">
          <p style={{ margin: 0, fontSize: "13px" }}>
            {errorMessage || "Submission error. Please reach us directly on WhatsApp below."}
          </p>
        </div>
      )}

      <div className="form-or-divider">
        <span>OR</span>
      </div>

      <a
        href={`https://wa.me/919645420727?text=${encodeURIComponent(
          form.name || form.message
            ? `Hello ARARA FOOD, my name is ${form.name || "Customer"}. ${form.message ? `Enquiry: ${form.message}` : "I would like to enquire about your products."}`
            : "Hello ARARA FOOD, I would like to enquire about your products."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="button button-whatsapp form-whatsapp-btn"
        id="form-open-whatsapp"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01C17.18 3.03 14.69 2 12.04 2zm0 1.67c2.21 0 4.27.86 5.83 2.42 1.55 1.56 2.41 3.63 2.41 5.83 0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.32c-.82-1.3-1.26-2.82-1.26-4.38 0-4.54 3.7-8.24 8.24-8.24zm-3.1 3.66c-.22 0-.59.08-.89.41-.3.33-1.15 1.12-1.15 2.74 0 1.62 1.18 3.18 1.34 3.4.16.22 2.33 3.56 5.64 4.99.79.34 1.4.54 1.88.7.79.25 1.51.21 2.08.13.63-.1 1.95-.8 2.22-1.58.28-.78.28-1.44.2-1.58-.08-.14-.3-.22-.63-.39-.33-.17-1.96-.97-2.26-1.08-.3-.11-.52-.17-.74.16-.22.33-.85 1.09-1.04 1.31-.19.22-.38.24-.71.08-.33-.16-1.4-.51-2.67-1.64-.99-.88-1.66-1.97-1.85-2.3-.19-.33-.02-.51.15-.68.15-.15.33-.39.5-.58.17-.19.22-.33.33-.55.11-.22.06-.41-.02-.57-.08-.16-.71-1.7-.96-2.33-.25-.6-.51-.52-.7-.53-.18-.01-.4-.01-.62-.01z"/>
        </svg>
        <span>Chat on WhatsApp (+91 96454 20727)</span>
      </a>
    </form>
  );
}

