import React from 'react';
import "./AboutUs.css";

const stats = [
  { number: "10K+", label: "Learners Worldwide" },
  { number: "7+",   label: "Technologies Covered" },
  { number: "500+", label: "Tutorials & Guides" },
  { number: "100%", label: "Free to Access" },
];

const values = [
  {
    icon: "📘",
    title: "Quality Learning",
    desc: "Every resource is carefully structured, accurate, and written to ensure clarity for learners at all levels.",
  },
  {
    icon: "🌍",
    title: "Accessibility",
    desc: "We believe great education should have no price tag. All content is free, open, and available to everyone.",
  },
  {
    icon: "🚀",
    title: "Growth Mindset",
    desc: "From beginner fundamentals to advanced patterns, we help learners build confidence and real-world skills.",
  },
  {
    icon: "🤝",
    title: "Community First",
    desc: "QuickLearn is built around a growing community of students, developers, and mentors who learn together.",
  },
];

const team = [
  { name: "Arjun Mehta",   role: "Founder & Lead Instructor",  emoji: "👨‍💻" },
  { name: "Priya Sharma",  role: "Curriculum Designer",         emoji: "👩‍🏫" },
  { name: "Rohan Das",     role: "Full-Stack Developer",        emoji: "🧑‍🔬" },
  { name: "Sneha Rao",     role: "Content Strategist",          emoji: "👩‍💼" },
];

const technologies = ["Java", "Python", ".NET", "C", "Oracle", "React", "Spring"];

function AboutUs() {
  return (
    <div className="about-page">

      {/* ── HERO ── */}
      <section className="about-hero">
        <div className="hero-badge">Our Story</div>
        <h1 className="hero-title">
          Learning, <span className="accent">Simplified.</span>
        </h1>
        <p className="hero-sub">
          QuickLearn was built with one purpose — to remove the friction between
          a curious mind and the knowledge it seeks. No paywalls. No noise.
          Just clear, structured resources for the technologies that matter.
        </p>
        <div className="tech-pills">
          {technologies.map(t => (
            <span className="tech-pill" key={t}>{t}</span>
          ))}
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="stats-row">
        {stats.map(s => (
          <div className="stat-card" key={s.label}>
            <span className="stat-number">{s.number}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </section>

      {/* ── MISSION ── */}
      <section className="section mission-section">
        <div className="section-tag">Mission</div>
        <h2 className="section-title">Why We Exist</h2>
        <div className="mission-grid">
          <div className="mission-text">
            <p style={{color:"white"}}>
              When we started QuickLearn, we noticed a gap — learners had to 
              jump between dozens of sites just to understand a single concept.
              Tutorials were scattered, inconsistent, and often gatekept behind 
              subscriptions.
            </p>
            <p style={{color:"white"}}>
              We set out to fix that. QuickLearn brings together structured 
              guides, quick references, and hands-on examples for the most 
              in-demand technologies — all in one clean, focused place.
            </p>
            <p style={{color:"white"}}>
              Our mission is simple: <strong style={{color:"white"}}>give every learner — student, 
              switcher, or seasoned dev — the fastest path to understanding.</strong>
            </p>
          </div>
          <div className="mission-visual">
            <div className="visual-ring">
              <span className="ring-icon">🎯</span>
            </div>
            <p className="visual-caption">Focused. Structured. Free.</p>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="section values-section">
        <div className="section-tag">Values</div>
        <h2 className="section-title">What Drives Us</h2>
        <div className="values-grid">
          {values.map(v => (
            <div className="value-card" key={v.title}>
              <span className="value-icon">{v.icon}</span>
              <h3 className="value-title">{v.title}</h3>
              <p className="value-desc">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="section team-section">
        <div className="section-tag">Team</div>
        <h2 className="section-title">The People Behind It</h2>
        <p className="section-sub">
          A small but passionate team committed to making technical education 
          genuinely useful.
        </p>
        <div className="team-grid">
          {team.map(m => (
            <div className="team-card" key={m.name}>
              <div className="team-avatar">{m.emoji}</div>
              <h4 className="team-name">{m.name}</h4>
              <p className="team-role">{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="about-cta">
        <h2>Ready to Start Learning?</h2>
        <p>Dive into any technology and go from zero to confident — at your own pace.</p>
        <a href="/Home" className="cta-btn">Explore Resources →</a>
      </section>

    </div>
  );
}

export default AboutUs;