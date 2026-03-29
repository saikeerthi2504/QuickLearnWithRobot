import React, { useState } from 'react';
import "./React.css";

const resources = [
  {
    title: "Official React Documentation",
    link: "https://react.dev/learn",
    tag: "Beginner",
    pages: "Interactive",
  },
  {
    title: "ReactJS Tutorial by TutorialsPoint",
    link: "https://www.tutorialspoint.com/reactjs/reactjs_tutorial.pdf",
    tag: "Beginner",
    pages: "~120 pages",
  },
  {
    title: "ReactJS Official Getting Started Guide",
    link: "https://reactjs.org/docs/getting-started.html",
    tag: "Beginner",
    pages: "Web-based",
  },
  {
    title: "Programiz ReactJS Tutorial",
    link: "https://www.programiz.com/reactjs",
    tag: "Intermediate",
    pages: "Web-based",
  },
  {
    title: "React Beginners Book (GitHub)",
    link: "https://github.com/vasanthk/react-beginners-book",
    tag: "Beginner",
    pages: "~80 pages",
  },
];

const videos = [
  {
    title: "React for Beginners",
    desc: "A complete introduction to React — JSX, components, props, and state from the very beginning.",
    url: "https://www.youtube.com/embed/s2skans2dP4",
    duration: "2h 45m",
    level: "Beginner",
  },
  {
    title: "React Full Course",
    desc: "Learn React step by step with real-world projects, hooks, routing, and API integration.",
    url: "https://www.youtube.com/embed/SqcY0GlETPk",
    duration: "11h 00m",
    level: "Intermediate",
  },
  {
    title: "React Hooks & Advanced Patterns",
    desc: "Master useState, useEffect, useContext, custom hooks, and advanced component composition.",
    url: "https://www.youtube.com/embed/QFaFIcGhPoM",
    duration: "4h 20m",
    level: "Advanced",
  },
];

const topics = [
  { icon: "⚛️", title: "JSX & Components", desc: "Writing JSX syntax, functional components, and composing UIs from reusable building blocks." },
  { icon: "📦", title: "Props & State", desc: "Passing data via props, managing local state with useState, and lifting state up." },
  { icon: "🔁", title: "useEffect & Lifecycle", desc: "Side effects, data fetching, subscriptions, and cleanup with the useEffect hook." },
  { icon: "🌐", title: "Context API", desc: "Sharing state across the component tree without prop drilling using createContext." },
  { icon: "🗺️", title: "React Router", desc: "Client-side routing with React Router — dynamic routes, nested routes, and navigation." },
  { icon: "⚡", title: "Performance", desc: "useMemo, useCallback, React.memo, lazy loading, and code splitting strategies." },
  { icon: "🎣", title: "Custom Hooks", desc: "Extracting reusable stateful logic into custom hooks for cleaner, shareable code." },
  { icon: "🧪", title: "Testing", desc: "Unit and integration testing with React Testing Library and Jest." },
];

const snippets = [
  {
    label: "Functional Component",
    code: `import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default Counter;`,
  },
  {
    label: "useEffect",
    code: `import { useState, useEffect } from "react";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));

    return () => {
      // cleanup on unmount
    };
  }, []); // runs once on mount

  return <ul>{users.map((u) => <li key={u.id}>{u.name}</li>)}</ul>;
}`,
  },
  {
    label: "Custom Hook",
    code: `import { useState, useEffect } from "react";

function useFetch(url) {
  const [data,    setData]    = useState(null);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(null);

  useEffect(() => {
    fetch(url)
      .then((r) => r.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}

export default useFetch;`,
  },
];

const tagColors = {
  Beginner:     "tag-green",
  Intermediate: "tag-blue",
  Advanced:     "tag-purple",
};

export default function ReactResource() {
  const [activeSnippet, setActiveSnippet] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(snippets[activeSnippet].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="react-page">

      {/* Hero */}
      <header className="react-hero">
        <div className="react-hero-badge">Frontend Framework</div>
        <h1 className="react-hero-title">
          <span className="react-accent">React</span> Framework
        </h1>
        <p className="react-hero-sub">
          The library for building fast, declarative, component-based user interfaces.
          Learn React and build anything on the web.
        </p>
        <div className="react-hero-stats">
          <div className="r-stat"><span className="r-stat-num">5</span><span className="r-stat-label">Resources</span></div>
          <div className="r-stat-divider" />
          <div className="r-stat"><span className="r-stat-num">3</span><span className="r-stat-label">Video Courses</span></div>
          <div className="r-stat-divider" />
          <div className="r-stat"><span className="r-stat-num">8</span><span className="r-stat-label">Core Topics</span></div>
        </div>
      </header>

      {/* Topics */}
      <section className="react-section">
        <h2 className="react-section-title">
          <span className="react-section-num">01</span> Core Topics
        </h2>
        <div className="react-topics-grid">
          {topics.map((t, i) => (
            <div className="react-topic-card" key={i}>
              <span className="react-topic-icon">{t.icon}</span>
              <h3 className="react-topic-name">{t.title}</h3>
              <p className="react-topic-desc">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Snippets */}
      <section className="react-section">
        <h2 className="react-section-title">
          <span className="react-section-num">02</span> Quick Snippets
        </h2>
        <div className="react-snippet-box">
          <div className="react-snippet-tabs">
            {snippets.map((s, i) => (
              <button
                key={i}
                className={`react-snippet-tab ${activeSnippet === i ? "active" : ""}`}
                onClick={() => setActiveSnippet(i)}
              >
                {s.label}
              </button>
            ))}
            <button className="react-copy-btn" onClick={handleCopy}>
              {copied ? "✓ Copied" : "Copy"}
            </button>
          </div>
          <pre className="react-snippet-code"><code>{snippets[activeSnippet].code}</code></pre>
        </div>
      </section>

      {/* Resources */}
      <section className="react-section">
        <h2 className="react-section-title">
          <span className="react-section-num">03</span> Learning Resources
        </h2>
        <div className="react-card-grid">
          {resources.map((item, i) => (
            <a key={i} href={item.link} target="_blank" rel="noopener noreferrer" className="react-pdf-card">
              <div className="react-pdf-icon">📘</div>
              <div className="react-pdf-body">
                <span className={`react-pdf-tag ${tagColors[item.tag]}`}>{item.tag}</span>
                <h3 className="react-pdf-title">{item.title}</h3>
                <span className="react-pdf-pages">{item.pages}</span>
              </div>
              <span className="react-pdf-arrow">↗</span>
            </a>
          ))}
        </div>
      </section>

      {/* Videos */}
      <section className="react-section">
        <h2 className="react-section-title">
          <span className="react-section-num">04</span> Video Tutorials
        </h2>
        <div className="react-video-grid">
          {videos.map((video, i) => (
            <div className="react-video-card" key={i}>
              <div className="react-video-frame-wrap">
                <iframe src={video.url} title={video.title} allowFullScreen loading="lazy" />
              </div>
              <div className="react-video-meta">
                <div className="react-video-badges">
                  <span className="r-badge">{video.level}</span>
                  <span className="r-badge r-badge-time">⏱ {video.duration}</span>
                </div>
                <h3 className="react-video-title">{video.title}</h3>
                <p className="react-video-desc">{video.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="react-footer">
        <p>React Learning Hub &mdash; Compose, Render, Ship.</p>
      </footer>
    </div>
  );
}