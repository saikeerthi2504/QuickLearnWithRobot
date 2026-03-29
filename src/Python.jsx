import React from "react";
import "./python.css";

const pdfResources = [
  {
    title: "Python Tutorial by TutorialsPoint",
    desc: "A comprehensive beginner-to-advanced Python guide packed with examples and exercises.",
    tag: "Beginner",
    href: "https://www.tutorialspoint.com/python/python_tutorial.pdf",
  },
  {
    title: "Learn Python Interactive Guide",
    desc: "Hands-on interactive guide covering Python fundamentals with bite-sized lessons.",
    tag: "Interactive",
    href: "https://www.learnpython.org/static/learnpython_guide.pdf",
  },
  {
    title: "Programiz Python Programming",
    desc: "Clean, structured introduction to Python programming with real-world code samples.",
    tag: "Beginner",
    href: "https://www.programiz.com/sites/programiz/files/python-programming.pdf",
  },
  {
    title: "W3Schools Python Tutorial",
    desc: "W3Schools' tried-and-tested Python reference — great for quick lookup and revision.",
    tag: "Reference",
    href: "https://www.w3schools.com/python/python_pdf.asp",
  },
  {
    title: "CMU Python Notes",
    desc: "University-level Python lecture notes from Carnegie Mellon with in-depth coverage.",
    tag: "Academic",
    href: "https://www.cs.cmu.edu/~112/schedule/Spring19/notes/python/PythonNotes.pdf",
  },
];

const videos = [
  {
    title: "Python for Beginners",
    desc: "A complete introduction to Python — variables, loops, functions, and your first programs.",
    tag: "Beginner",
    src: "https://www.youtube.com/embed/pIiKuPhPl0A?si=9MfFv0dfZw_yWc-9",
  },
  {
    title: "Python — Second Edition Deep Dive",
    desc: "Step-by-step Python learning with real examples, exercises, and project walkthroughs.",
    tag: "Intermediate",
    src: "https://www.youtube.com/embed/4LLREJHp8FQ?si=CLcZ1oCShPTL9bvp",
  },
  {
    title: "Full Python Course",
    desc: "A full Python bootcamp covering data types, OOP, file handling, and advanced topics.",
    tag: "Advanced",
    src: "https://www.youtube.com/embed/_uQrJ0TkZlc?si=-VpoYpDGJSA96RfY",
  },
];

const topics = [
  { icon: "🐍", label: "Python Syntax" },
  { icon: "📦", label: "Modules & Packages" },
  { icon: "🧩", label: "OOP in Python" },
  { icon: "📋", label: "Lists & Dicts" },
  { icon: "🔁", label: "Loops & Iterators" },
  { icon: "⚠️", label: "Exception Handling" },
  { icon: "📂", label: "File I/O" },
  { icon: "🌐", label: "Web Scraping" },
  { icon: "🤖", label: "ML with Python" },
  { icon: "🛠️", label: "Virtual Environments" },
];

const tips = [
  {
    num: "01",
    title: "Read the Official Docs",
    detail: "Python's official documentation at python.org is beginner-friendly and exhaustive. Make it your first stop, not your last.",
  },
  {
    num: "02",
    title: "Use the REPL Daily",
    detail: "Open your terminal, type `python3`, and experiment. Instant feedback makes learning faster than reading alone.",
  },
  {
    num: "03",
    title: "Build Mini Projects Early",
    detail: "A number guessing game, a to-do list, a web scraper — small projects cement concepts better than any tutorial.",
  },
  {
    num: "04",
    title: "Understand List Comprehensions",
    detail: "They're a Python superpower. Once you think in list comprehensions, your code becomes faster, cleaner, and more Pythonic.",
  },
];

const tagColors = {
  Beginner:    "tag-green",
  Interactive: "tag-blue",
  Reference:   "tag-orange",
  Academic:    "tag-purple",
  Intermediate:"tag-yellow",
  Advanced:    "tag-red",
};

function Python() {
  return (
    <div className="py-page">

      {/* ── HERO ── */}
      <header className="py-hero">
        <div className="py-hero-badge">🐍 Python Learning Hub</div>
        <h1 className="py-hero-title">
          Learn <span className="py-accent">Python</span> the Right Way
        </h1>
        <p className="py-hero-sub">
          From your very first script to advanced machine learning pipelines —
          explore handpicked PDFs, video courses, and topic guides to master
          Python at your own pace.
        </p>
        <div className="py-hero-stats">
          <span>📄 5 PDF Books</span>
          <span>🎬 3 Video Lessons</span>
          <span>📚 10 Core Topics</span>
          <span>🆓 100% Free</span>
        </div>
      </header>

      {/* ── TOPICS ── */}
      <section className="py-section">
        <div className="py-section-label">What You'll Learn</div>
        <h2 className="py-section-title">Core Python Topics Covered</h2>
        <div className="py-topics-grid">
          {topics.map((t, i) => (
            <div className="py-topic-pill" key={i}>
              <span>{t.icon}</span>
              <span>{t.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── PDF RESOURCES ── */}
      <section className="py-section">
        <div className="py-section-label">Free PDF Books</div>
        <h2 className="py-section-title">Python Learning Resources</h2>
        <div className="py-card-container">
          {pdfResources.map((r, i) => (
            <a
              key={i}
              className="py-card"
              href={r.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="py-card-top">
                <span className="py-card-icon">📄</span>
                <span className={`py-tag ${tagColors[r.tag] || "tag-blue"}`}>{r.tag}</span>
              </div>
              <h3 className="py-card-title">{r.title}</h3>
              <p className="py-card-desc">{r.desc}</p>
              <div className="py-card-link">Download PDF →</div>
            </a>
          ))}
        </div>
      </section>

      {/* ── VIDEO TUTORIALS ── */}
      <section className="py-section">
        <div className="py-section-label">Video Tutorials</div>
        <h2 className="py-section-title">Python Tutorials</h2>
        <div className="py-video-grid">
          {videos.map((v, i) => (
            <div className="py-video-card" key={i}>
              <div className="py-video-wrap">
                <iframe
                  width="100%"
                  height="210"
                  src={v.src}
                  title={v.title}
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
              <div className="py-video-body">
                <div className="py-video-header">
                  <h3 className="py-video-title">{v.title}</h3>
                  <span className={`py-tag ${tagColors[v.tag] || "tag-blue"}`}>{v.tag}</span>
                </div>
                <p className="py-video-desc">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TIPS ── */}
      <section className="py-section">
        <div className="py-section-label">Developer Tips</div>
        <h2 className="py-section-title">Tips to Learn Python Faster</h2>
        <div className="py-tips-grid">
          {tips.map((t, i) => (
            <div className="py-tip-card" key={i}>
              <div className="py-tip-num">{t.num}</div>
              <h3 className="py-tip-title">{t.title}</h3>
              <p className="py-tip-detail">{t.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-cta">
        <div className="py-cta-icon">🐍</div>
        <h2>Ready to Write Your First Python Script?</h2>
        <p>
          Start with the beginner PDFs, follow along with the video tutorials,
          and practice the core topics — you'll be writing real Python
          programs faster than you think.
        </p>
        <a
          className="py-cta-btn"
          href="https://www.tutorialspoint.com/python/python_tutorial.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Start with the Basics →
        </a>
      </section>

    </div>
  );
}

export default Python;