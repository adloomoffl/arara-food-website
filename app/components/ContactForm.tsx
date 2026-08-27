"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");

    // Build mailto fallback with form data
    const subject = encodeURIComponent(`Enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`
    );
    window.open(`mailto:hello@ararafood.com?subject=${subject}&body=${body}`, "_self");

    setTimeout(() => setStatus("sent"), 600);
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
        {status === "sending" && "Sending…"}
        {status === "sent" && "✓ Enquiry Sent"}
      </button>

      {status === "sent" && (
        <p className="form-success">Thank you! We&apos;ll be in touch soon.</p>
      )}
    </form>
  );
}
