import React, { useState } from 'react';
import "./Oracle.css";

const resources = [
  {
    title: "Oracle Tutorial by TutorialsPoint",
    link: "https://www.tutorialspoint.com/oracle/oracle_tutorial.pdf",
    tag: "Beginner",
    pages: "~180 pages",
  },
  {
    title: "Oracle Database 12c: SQL Fundamentals",
    link: "https://www.oracle.com/a/ocom/docs/database/pdf/oracle-database-12c-sql.pdf",
    tag: "Beginner",
    pages: "~220 pages",
  },
  {
    title: "Oracle PL/SQL Tutorial",
    link: "https://www.oracle.com/a/ocom/docs/database/pdf/oracle-plsql-tutorial.pdf",
    tag: "Intermediate",
    pages: "~160 pages",
  },
  {
    title: "Oracle SQL Programming Notes",
    link: "https://www.cs.virginia.edu/~evans/cs1120/oldoracle.pdf",
    tag: "Intermediate",
    pages: "~90 pages",
  },
  {
    title: "Guru99 Oracle Tutorials",
    link: "https://www.guru99.com/oracle-tutorials.html",
    tag: "Beginner",
    pages: "Web-based",
  },
];

const videos = [
  {
    title: "Oracle for Beginners",
    desc: "A complete introduction to Oracle Database — covering installation, SQL basics, and your first queries.",
    url: "https://www.youtube.com/embed/ibOzwFRm32w",
    duration: "2h 14m",
    level: "Beginner",
  },
  {
    title: "Oracle Full Course",
    desc: "Learn Oracle step by step with real-world examples, exercises, and database design walkthroughs.",
    url: "https://www.youtube.com/embed/ObbNGhcxXJA",
    duration: "5h 30m",
    level: "Intermediate",
  },
  {
    title: "Oracle PL/SQL Deep Dive",
    desc: "Understand stored procedures, triggers, cursors, and exception handling in Oracle PL/SQL.",
    url: "https://www.youtube.com/embed/QHYuuXPdQNM",
    duration: "3h 10m",
    level: "Advanced",
  },
];

const topics = [
  { icon: "🗄️", title: "Database Architecture", desc: "Understand Oracle instance, SGA, PGA, tablespaces, and data files." },
  { icon: "📋", title: "SQL Fundamentals", desc: "SELECT, INSERT, UPDATE, DELETE — the core DML operations in Oracle SQL." },
  { icon: "🔗", title: "Joins & Subqueries", desc: "INNER, OUTER, CROSS joins and correlated subquery patterns." },
  { icon: "⚡", title: "PL/SQL Programming", desc: "Blocks, procedures, functions, packages, and anonymous blocks." },
  { icon: "🔁", title: "Cursors & Loops", desc: "Explicit and implicit cursors, FOR loops, and BULK COLLECT." },
  { icon: "🛡️", title: "Triggers", desc: "BEFORE/AFTER row and statement-level triggers for data integrity." },
  { icon: "📊", title: "Indexes & Performance", desc: "B-tree, bitmap indexes, EXPLAIN PLAN, and query optimization." },
  { icon: "🔐", title: "Security & Roles", desc: "Users, privileges, roles, and Oracle's fine-grained access control." },
];

const snippets = [
  {
    label: "Basic SELECT",
    code: `-- Query with filter and sort
SELECT employee_id,
       first_name,
       salary
FROM   employees
WHERE  department_id = 10
ORDER  BY salary DESC;`,
  },
  {
    label: "PL/SQL Block",
    code: `DECLARE
  v_name VARCHAR2(50);
  v_sal  NUMBER;
BEGIN
  SELECT first_name, salary
  INTO   v_name, v_sal
  FROM   employees
  WHERE  employee_id = 101;

  DBMS_OUTPUT.PUT_LINE(v_name || ': ' || v_sal);
END;
/`,
  },
  {
    label: "Stored Procedure",
    code: `CREATE OR REPLACE PROCEDURE raise_salary (
  p_emp_id IN  employees.employee_id%TYPE,
  p_pct    IN  NUMBER
) AS
BEGIN
  UPDATE employees
  SET    salary = salary * (1 + p_pct / 100)
  WHERE  employee_id = p_emp_id;
  COMMIT;
END raise_salary;
/`,
  },
];

const tagColors = {
  Beginner:     "tag-green",
  Intermediate: "tag-yellow",
  Advanced:     "tag-red",
};

export default function Oracle() {
  const [activeSnippet, setActiveSnippet] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(snippets[activeSnippet].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="oracle-page">

      {/* Hero */}
      <header className="oracle-hero">
        <div className="oracle-hero-badge">Database Reference</div>
        <h1 className="oracle-hero-title">
          <span className="oracle-accent">Oracle</span> Database
        </h1>
        <p className="oracle-hero-sub">
          The world's most trusted enterprise relational database. Master Oracle SQL,
          PL/SQL, and database administration from the ground up.
        </p>
        <div className="oracle-hero-stats">
          <div className="o-stat"><span className="o-stat-num">5</span><span className="o-stat-label">PDF Books</span></div>
          <div className="o-stat-divider" />
          <div className="o-stat"><span className="o-stat-num">3</span><span className="o-stat-label">Video Courses</span></div>
          <div className="o-stat-divider" />
          <div className="o-stat"><span className="o-stat-num">8</span><span className="o-stat-label">Core Topics</span></div>
        </div>
      </header>

      {/* Topics */}
      <section className="oracle-section">
        <h2 className="oracle-section-title">
          <span className="oracle-section-num">01</span> Core Topics
        </h2>
        <div className="oracle-topics-grid">
          {topics.map((t, i) => (
            <div className="oracle-topic-card" key={i}>
              <span className="oracle-topic-icon">{t.icon}</span>
              <h3 className="oracle-topic-name">{t.title}</h3>
              <p className="oracle-topic-desc">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Snippets */}
      <section className="oracle-section">
        <h2 className="oracle-section-title">
          <span className="oracle-section-num">02</span> Quick Snippets
        </h2>
        <div className="oracle-snippet-box">
          <div className="oracle-snippet-tabs">
            {snippets.map((s, i) => (
              <button
                key={i}
                className={`oracle-snippet-tab ${activeSnippet === i ? "active" : ""}`}
                onClick={() => setActiveSnippet(i)}
              >
                {s.label}
              </button>
            ))}
            <button className="oracle-copy-btn" onClick={handleCopy}>
              {copied ? "✓ Copied" : "Copy"}
            </button>
          </div>
          <pre className="oracle-snippet-code"><code>{snippets[activeSnippet].code}</code></pre>
        </div>
      </section>

      {/* PDF Books */}
      <section className="oracle-section">
        <h2 className="oracle-section-title">
          <span className="oracle-section-num">03</span> PDF Books
        </h2>
        <div className="oracle-card-grid">
          {resources.map((item, i) => (
            <a key={i} href={item.link} target="_blank" rel="noopener noreferrer" className="oracle-pdf-card">
              <div className="oracle-pdf-icon">📄</div>
              <div className="oracle-pdf-body">
                <span className={`oracle-pdf-tag ${tagColors[item.tag]}`}>{item.tag}</span>
                <h3 className="oracle-pdf-title">{item.title}</h3>
                <span className="oracle-pdf-pages">{item.pages}</span>
              </div>
              <span className="oracle-pdf-arrow">↗</span>
            </a>
          ))}
        </div>
      </section>

      {/* Videos */}
      <section className="oracle-section">
        <h2 className="oracle-section-title">
          <span className="oracle-section-num">04</span> Video Tutorials
        </h2>
        <div className="oracle-video-grid">
          {videos.map((video, i) => (
            <div className="oracle-video-card" key={i}>
              <div className="oracle-video-frame-wrap">
                <iframe src={video.url} title={video.title} allowFullScreen loading="lazy" />
              </div>
              <div className="oracle-video-meta">
                <div className="oracle-video-badges">
                  <span className="o-badge">{video.level}</span>
                  <span className="o-badge o-badge-time">⏱ {video.duration}</span>
                </div>
                <h3 className="oracle-video-title">{video.title}</h3>
                <p className="oracle-video-desc">{video.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="oracle-footer">
        <p>Oracle Learning Hub &mdash; Query, Optimize, Master.</p>
      </footer>
    </div>
  );
}