import React from 'react';
import "./Home.css";

function Home() {
  const highlights = [
    {
      icon: "⚡",
      title: "Quick & Structured Learning",
      desc: "Learn programming languages and frameworks step-by-step in a clear, structured way — no fluff, just what matters."
    },
    {
      icon: "🧩",
      title: "Wide Technology Coverage",
      desc: "Covers Java, Python, .NET, C, Oracle, React, and Spring — all in one place, so you never have to look elsewhere."
    },
    {
      icon: "🎯",
      title: "For Every Skill Level",
      desc: "Designed for both beginners taking their first steps and experienced developers brushing up on advanced concepts."
    },
    {
      icon: "🔍",
      title: "Easy Navigation & Search",
      desc: "Find what you need instantly with our intuitive navigation and quick search across all topics and technologies."
    }
  ];

  const technologies = [
    { name: "Java",   color: "#f89820", icon: "☕" },
    { name: "Python", color: "#3776ab", icon: "🐍" },
    { name: ".NET",   color: "#512bd4", icon: "🔷" },
    { name: "C",      color: "#a8b9cc", icon: "⚙️" },
    { name: "Oracle", color: "#f80000", icon: "🛢️" },
    { name: "React",  color: "#61dafb", icon: "⚛️" },
    { name: "Spring", color: "#6db33f", icon: "🌿" },
  ];

  const stats = [
    { value: "7+",   label: "Technologies"       },
    { value: "100+", label: "Guides & Tutorials" },
    { value: "Free", label: "Always Accessible"  },
    { value: "24/7", label: "Learn Anytime"      },
  ];

  return (
    <div className="home-wrapper">

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-badge">🚀 Start Learning Today</div>
        <h1>
          Welcome to <span className="brand">QuickLearn</span>
        </h1>
        <p className="hero-sub">
          QuickLearn is your one-stop platform to explore and learn different
          programming languages and technologies. Whether you are a beginner
          or an experienced developer, we provide resources and guides to
          help you grow your skills.
        </p>
        <div className="hero-actions">
          <button className="btn-primary">Explore Topics →</button>
          <button className="btn-ghost">Search Resources</button>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="stats-strip">
        {stats.map((s, i) => (
          <div className="stat-item" key={i}>
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </section>

      {/* ── HIGHLIGHTS ── */}
      <section className="section highlights-section">
        <div className="section-label">Why QuickLearn</div>
        <h2>Everything You Need to Level Up</h2>
        <div className="highlights-grid">
          {highlights.map((h, i) => (
            <div className="highlight-card" key={i}>
              <div className="card-icon">{h.icon}</div>
              <h3>{h.title}</h3>
              <p>{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TECHNOLOGIES ── */}
      <section className="section tech-section">
        <div className="section-label">What We Cover</div>
        <h2>Technologies at a Glance</h2>
        <div className="tech-grid">
          {technologies.map((t, i) => (
            <div className="tech-pill" key={i} style={{ "--pill-color": t.color }}>
              <span className="tech-icon">{t.icon}</span>
              <span className="tech-name">{t.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="section how-section">
        <div className="section-label">How It Works</div>
        <h2>Get Started in 3 Simple Steps</h2>
        <div className="steps">
          <div className="step">
            <div className="step-num">01</div>
            <h3>Pick a Technology</h3>
            <p>Browse our library or use the search bar to find the language or framework you want to learn.</p>
          </div>
          <div className="step-arrow">→</div>
          <div className="step">
            <div className="step-num">02</div>
            <h3>Follow the Guide</h3>
            <p>Work through structured, beginner-friendly tutorials with real examples and explanations.</p>
          </div>
          <div className="step-arrow">→</div>
          <div className="step">
            <div className="step-num">03</div>
            <h3>Practice & Grow</h3>
            <p>Apply what you've learned with exercises and move on to advanced topics at your own pace.</p>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="cta-banner">
        <h2>Ready to Start Learning?</h2>
        <p>
          Use the navigation bar or the search option above to explore any technology.
          QuickLearn makes learning <strong>simple</strong>, <strong>structured</strong>, and <strong>accessible</strong>.
        </p>
        <button className="btn-primary">Browse All Topics →</button>
      </section>

    </div>
  );
}

export default Home;