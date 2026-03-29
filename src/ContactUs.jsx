import React, { useState } from 'react';
import "./ContactUs.css";

const contactInfo = [
  { icon: "✉️", label: "Email",   value: "support@quicklearn.com",        href: "mailto:support@quicklearn.com" },
  { icon: "📞", label: "Phone",   value: "+91-9876543210",                 href: "tel:+919876543210" },
  { icon: "📍", label: "Address", value: "QuickLearn HQ, Hyderabad, India", href: null },
  { icon: "🕐", label: "Support Hours", value: "Mon–Sat, 9 AM – 6 PM IST", href: null },
];

const socials = [
  { icon: "in", label: "LinkedIn",  color: "#0077b5", href: "https://www.linkedin.com" },
  { icon: "𝕏",  label: "Twitter",  color: "#1da1f2", href: "https://twitter.com" },
  { icon: "f",  label: "Facebook", color: "#1877f2", href: "https://facebook.com" },
  { icon: "▶",  label: "YouTube",  color: "#ff0000", href: "https://youtube.com" },
];

const faqs = [
  {
    q: "Is QuickLearn completely free?",
    a: "Yes! All tutorials, guides, and reference materials on QuickLearn are 100% free with no hidden charges.",
  },
  {
    q: "How can I suggest a new topic or technology?",
    a: "Use the contact form on this page or email us directly. We review every suggestion and prioritise based on community demand.",
  },
  {
    q: "Can I contribute content to QuickLearn?",
    a: "Absolutely. We welcome contributions from experienced developers. Reach out to us and our team will guide you through the process.",
  },
  {
    q: "How quickly do you respond to queries?",
    a: "We aim to respond within 24–48 hours on working days. Complex technical queries may take a little longer.",
  },
];

function ContactUs() {
  const [form, setForm]     = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent]     = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = e =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="contact-page">

      {/* ── HERO ── */}
      <section className="contact-hero">
        <div className="hero-tag">Get In Touch</div>
        <h1 className="hero-title">We'd Love to <span className="accent">Hear From You</span></h1>
        <p className="hero-sub">
          Questions, feedback, collaboration ideas — whatever's on your mind,
          our team is just a message away.
        </p>
      </section>

      {/* ── MAIN GRID ── */}
      <div className="contact-grid">

        {/* LEFT — Info */}
        <aside className="contact-info">
          <h2 className="info-heading">Contact Details</h2>
          <p className="info-sub">Reach us through any of the channels below.</p>

          <ul className="info-list">
            {contactInfo.map(item => (
              <li className="info-item" key={item.label}>
                <span className="info-icon">{item.icon}</span>
                <div>
                  <span className="info-label">{item.label}</span>
                  {item.href
                    ? <a href={item.href} className="info-value link">{item.value}</a>
                    : <span className="info-value">{item.value}</span>}
                </div>
              </li>
            ))}
          </ul>

          <div className="divider" />

          <h3 className="social-heading">Follow Us</h3>
          <div className="social-row">
            {socials.map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                style={{ "--scolor": s.color }}
                title={s.label}
              >
                <span className="social-icon">{s.icon}</span>
                <span className="social-label">{s.label}</span>
              </a>
            ))}
          </div>

          <div className="map-placeholder">
            <span>📍 Hyderabad, Telangana, India</span>
          </div>
        </aside>

        {/* RIGHT — Form */}
        <section className="contact-form-wrap">
          {sent ? (
            <div className="success-state">
              <div className="success-icon">✅</div>
              <h3>Message Sent!</h3>
              <p>Thanks for reaching out. We'll get back to you within 24–48 hours.</p>
              <button className="reset-btn" onClick={() => { setSent(false); setForm({ name:"", email:"", subject:"", message:"" }); }}>
                Send Another
              </button>
            </div>
          ) : (
            <>
              <h2 className="form-heading">Send Us a Message</h2>
              <p className="form-sub">Fill in the form and we'll respond as soon as possible.</p>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="field">
                    <label htmlFor="name">Your Name</label>
                    <input
                      id="name" name="name" type="text"
                      placeholder="e.g. Rohan Sharma"
                      value={form.name} onChange={handleChange} required
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="email">Email Address</label>
                    <input
                      id="email" name="email" type="email"
                      placeholder="you@example.com"
                      value={form.email} onChange={handleChange} required
                    />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="subject">Subject</label>
                  <input
                    id="subject" name="subject" type="text"
                    placeholder="What's this about?"
                    value={form.subject} onChange={handleChange} required
                  />
                </div>
                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message" name="message" rows={5}
                    placeholder="Tell us more..."
                    value={form.message} onChange={handleChange} required
                  />
                </div>
                <button type="submit" className="submit-btn">
                  Send Message →
                </button>
              </form>
            </>
          )}
        </section>
      </div>

      {/* ── FAQ ── */}
      <section className="faq-section">
        <div className="section-tag">FAQ</div>
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <div
              className={`faq-item ${openFaq === i ? "open" : ""}`}
              key={i}
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
            >
              <div className="faq-question">
                <span>{f.q}</span>
                <span className="faq-arrow">{openFaq === i ? "▲" : "▼"}</span>
              </div>
              {openFaq === i && <p className="faq-answer">{f.a}</p>}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default ContactUs;