import React, { useState } from "react";
import "./java.css";

const pdfResources = [
  {
    title: "Java Tutorial by TutorialsPoint",
    desc: "Comprehensive beginner-to-advanced Java guide with examples.",
    tag: "Beginner",
    href: "https://www.tutorialspoint.com/java/java_tutorial.pdf",
  },
  {
    title: "Teach Yourself Java in 21 Days",
    desc: "A fast-paced self-study book covering core Java concepts day by day.",
    tag: "Self-Paced",
    href: "https://www.cs.cmu.edu/afs/cs.cmu.edu/user/gchen/www/download/java/LearnJava.pdf",
  },
  {
    title: "Java™ — A Beginner's Guide",
    desc: "Official beginner guide with hands-on exercises and real code samples.",
    tag: "Beginner",
    href: "https://yourlogix.wordpress.com/wp-content/uploads/2016/10/java-a-beginners-guide.pdf",
  },
  {
    title: "Learning Java with Examples",
    desc: "Example-driven approach to understanding Java syntax and OOP.",
    tag: "Examples",
    href: "https://www.cp.eng.chula.ac.th/books/wp-content/uploads/sites/5/2018/01/java101.pdf",
  },
  {
    title: "Introduction to Programming Using Java",
    desc: "University-level textbook covering Java fundamentals and algorithms.",
    tag: "Academic",
    href: "https://www.iitk.ac.in/esc101/share/downloads/javanotes5.pdf",
  },
];

const videos = [
  {
    title: "Java Basics & Data Types",
    desc: "Java fundamentals — syntax, variables, and core data types explained simply.",
    tag: "Beginner",
    src: "https://www.youtube.com/embed/SuaaihAwaaQ?si=S4F0e5eLJk3dSZnI",
  },
  {
    title: "Exception Handling in Java",
    desc: "Master try-catch blocks, custom exceptions, and best error-handling practices.",
    tag: "Intermediate",
    src: "https://www.youtube.com/embed/G2nt3wt02XI?si=jQOLpoSsro1yjHKE",
  },
  {
    title: "Java 8 — New Features Explained",
    desc: "Deep dive into lambdas, streams, Optional, and the Date/Time API in Java 8.",
    tag: "Advanced",
    src: "https://www.youtube.com/embed/Klet3haFX74?si=7-HxT_djOhXO4o0b",
  },
];

const topics = [
  { icon: "🧱", label: "OOP Concepts" },
  { icon: "🔁", label: "Loops & Control Flow" },
  { icon: "📦", label: "Collections Framework" },
  { icon: "🧵", label: "Multithreading" },
  { icon: "🌊", label: "Java Streams" },
  { icon: "🔗", label: "JDBC & Databases" },
  { icon: "⚠️", label: "Exception Handling" },
  { icon: "🧩", label: "Design Patterns" },
  { icon: "🌐", label: "Java Web (Servlets)" },
  { icon: "🔒", label: "Java Security" },
];

const tagColors = {
  Beginner:     "tag-green",
  "Self-Paced": "tag-blue",
  Examples:     "tag-orange",
  Academic:     "tag-purple",
  Intermediate: "tag-orange",
  Advanced:     "tag-red",
};

function Java() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <div className="java-page">

      {/* ── HERO ── */}
      <header className="java-hero">
        <div className="java-hero-badge">☕ Java Learning Hub</div>
        <h1 className="java-hero-title">
          Master <span className="java-accent">Java</span> from Zero to Pro
        </h1>
        <p className="java-hero-sub">
          Curated PDFs, video tutorials, and topic guides — everything you need
          to learn Java at your own pace, whether you're just starting out or
          leveling up to advanced concepts.
        </p>
        <div className="java-hero-stats">
          <span>📄 5 PDF Books</span>
          <span>🎬 3 Video Lessons</span>
          <span>📚 10 Core Topics</span>
          <span>🆓 100% Free</span>
        </div>
      </header>

      {/* ── TOPICS STRIP ── */}
      <section className="java-section">
        <div className="java-section-label">What You'll Learn</div>
        <h2 className="java-section-title">Core Java Topics Covered</h2>
        <div className="java-topics-grid">
          {topics.map((t, i) => (
            <div className="java-topic-pill" key={i}>
              <span>{t.icon}</span>
              <span>{t.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── PDF RESOURCES ── */}
      <section className="java-section">
        <div className="java-section-label">Free PDF Books</div>
        <h2 className="java-section-title">Java Learning Resources</h2>
        <div className="java-card-container">
          {pdfResources.map((r, i) => (
            <a
              key={i}
              className="java-card"
              href={r.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="java-card-top">
                <span className="java-card-icon">📄</span>
                <span className={`java-tag ${tagColors[r.tag] || "tag-blue"}`}>{r.tag}</span>
              </div>
              <h3 className="java-card-title">{r.title}</h3>
              <p className="java-card-desc">{r.desc}</p>
              <div className="java-card-link">Download PDF →</div>
            </a>
          ))}
        </div>
      </section>

      {/* ── VIDEO TUTORIALS ── */}
      <section className="java-section">
        <div className="java-section-label">Video Tutorials</div>
        <h2 className="java-section-title">Java Tutorials</h2>
        <div className="java-video-grid">
          {videos.map((v, i) => (
            <div className="java-video-card" key={i}>
              <div className="java-video-wrap">
                <iframe
                  width="100%"
                  height="210"
                  src={v.src}
                  title={v.title}
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
              <div className="java-video-body">
                <div className="java-video-header">
                  <h3 className="java-video-title">{v.title}</h3>
                  <span className={`java-tag ${tagColors[v.tag] || "tag-blue"}`}>{v.tag}</span>
                </div>
                <p className="java-video-desc">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── QUICK TIPS ── */}
      <section className="java-section">
        <div className="java-section-label">Developer Tips</div>
        <h2 className="java-section-title">Tips to Learn Java Faster</h2>
        <div className="java-tips-grid">
          {[
            { num: "01", tip: "Write code every day", detail: "Even 30 minutes of daily practice beats 5-hour weekend sessions. Consistency builds muscle memory." },
            { num: "02", tip: "Read error messages carefully", detail: "Java's stack traces are detailed. Learning to parse them quickly will save you hours of debugging." },
            { num: "03", tip: "Understand OOP deeply", detail: "Java revolves around objects. Master encapsulation, inheritance, and polymorphism before moving to frameworks." },
            { num: "04", tip: "Build real projects early", detail: "Apply concepts by building a todo app, calculator, or library system — don't just follow tutorials passively." },
          ].map((t, i) => (
            <div className="java-tip-card" key={i}>
              <div className="java-tip-num">{t.num}</div>
              <h3 className="java-tip-title">{t.tip}</h3>
              <p className="java-tip-detail">{t.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="java-cta">
        <div className="java-cta-icon">☕</div>
        <h2 style={{color:"white"}}>Ready to Write Your First Java Program?</h2>
        <p>Start with the beginner PDFs above, follow along with the video tutorials, and practice the core topics — you'll be writing production-ready Java in no time.</p>
        <a
          className="java-cta-btn"
          href="https://www.tutorialspoint.com/java/java_tutorial.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Start with the Basics →
        </a>
      </section>

    </div>
  );
}

export default Java;