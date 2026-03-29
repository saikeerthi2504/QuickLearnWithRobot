import React, { useState } from "react";
import "./C.css";

const resources = [
  {
    title: "C Programming",
    link: "https://vardhaman.org/wp-content/uploads/2021/03/CP.pdf",
    tag: "Beginner",
    pages: "~200 pages",
  },
  {
    title: "The Basics of C Programming",
    link: "https://www.phys.uconn.edu/~rozman/Courses/P2200_13F/downloads/TheBasicsofCProgramming-draft-20131030.pdf",
    tag: "Beginner",
    pages: "~80 pages",
  },
  {
    title: "C Programming Tutorial (4th Edition)",
    link: "https://markburgess.org/CTutorial/C-Tut-4.02.pdf",
    tag: "Intermediate",
    pages: "~280 pages",
  },
  {
    title: "Beej's Guide to C Programming",
    link: "https://beej.us/guide/bgc/pdf/bgc_usl_c_1.pdf",
    tag: "Intermediate",
    pages: "~350 pages",
  },
  {
    title: "The GNU C Programming Tutorial",
    link: "https://richardson.byu.edu/624/fall_2020/c-tutorial.pdf",
    tag: "Intermediate",
    pages: "~150 pages",
  },
  {
    title: "Expert C Programming: Deep C Secrets",
    link: "https://progforperf.github.io/Expert_C_Programming.pdf",
    tag: "Advanced",
    pages: "~400 pages",
  },
  {
    title: "The C Programming Language",
    link: "https://seriouscomputerist.atariverse.com/media/pdf/book/C%20Programming%20Language%20-%202nd%20Edition%20%28OCR%29.pdf",
    tag: "Classic",
    pages: "~272 pages",
  },
];

const videos = [
  {
    title: "C Programming for Beginners",
    desc: "A thorough, complete introduction to C — covering syntax, variables, loops, and functions from the ground up.",
    url: "https://www.youtube.com/embed/KJgsSFOSQv0",
    duration: "3h 46m",
    level: "Beginner",
  },
  {
    title: "C Programming Full Course",
    desc: "Step-by-step structured learning with real-world examples, exercises, and project walkthroughs.",
    url: "https://www.youtube.com/embed/irqbmMNs2Bo",
    duration: "4h 02m",
    level: "Beginner",
  },
  {
    title: "Pointers Explained",
    desc: "A focused deep-dive into pointers, memory addressing, pointer arithmetic, and common pitfalls.",
    url: "https://www.youtube.com/embed/87SH2Cn0s9A",
    duration: "1h 18m",
    level: "Intermediate",
  },
];

const topics = [
  {
    icon: "⚙️",
    title: "Basics & Syntax",
    desc: "Variables, data types, operators, control flow, and the structure of a C program.",
  },
  {
    icon: "🔁",
    title: "Loops & Functions",
    desc: "for, while, do-while loops; writing reusable functions with parameters and return values.",
  },
  {
    icon: "📦",
    title: "Arrays & Strings",
    desc: "Single and multi-dimensional arrays, character arrays, and the standard string library.",
  },
  {
    icon: "🔍",
    title: "Pointers",
    desc: "Memory addresses, pointer arithmetic, pointers to arrays, functions, and structs.",
  },
  {
    icon: "🏗️",
    title: "Structs & Unions",
    desc: "Custom data types, typedef, nested structs, and memory layout of unions.",
  },
  {
    icon: "📁",
    title: "File I/O",
    desc: "Reading and writing files using fopen, fread, fwrite, fclose, and fprintf.",
  },
  {
    icon: "🧠",
    title: "Memory Management",
    desc: "Dynamic allocation with malloc, calloc, realloc, and free — plus avoiding leaks.",
  },
  {
    icon: "🔗",
    title: "Linked Lists & DSA",
    desc: "Building linked lists, stacks, and queues from scratch using structs and pointers.",
  },
];

const codeSnippets = [
  {
    label: "Hello World",
    code: `#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`,
  },
  {
    label: "Pointers",
    code: `#include <stdio.h>

int main() {
    int x = 42;
    int *ptr = &x;

    printf("Value: %d\\n", *ptr);
    printf("Address: %p\\n", ptr);
    return 0;
}`,
  },
  {
    label: "Linked List",
    code: `#include <stdlib.h>

struct Node {
    int data;
    struct Node *next;
};

struct Node* newNode(int val) {
    struct Node* n = malloc(sizeof(*n));
    n->data = val;
    n->next = NULL;
    return n;
}`,
  },
];

const tagColors = {
  Beginner: "tag-green",
  Intermediate: "tag-yellow",
  Advanced: "tag-red",
  Classic: "tag-blue",
};

export default function C() {
  const [activeSnippet, setActiveSnippet] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeSnippet].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="c-container">
      {/* Hero */}
      <header className="hero">
        <div className="hero-badge">Language Reference</div>
        <h1 className="hero-title">
          <span className="hero-c">C</span> Programming
        </h1>
        <p className="hero-sub">
          The language that powers operating systems, compilers, and embedded
          systems. Master C — master the machine.
        </p>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-num">7</span>
            <span className="stat-label">PDF Books</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">3</span>
            <span className="stat-label">Video Courses</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">8</span>
            <span className="stat-label">Core Topics</span>
          </div>
        </div>
      </header>

      {/* Topics Grid */}
      <section className="section">
        <h2 className="section-title">
          <span className="section-num">01</span> Core Topics
        </h2>
        <div className="topics-grid">
          {topics.map((t, i) => (
            <div className="topic-card" key={i}>
              <span className="topic-icon">{t.icon}</span>
              <h3 className="topic-name">{t.title}</h3>
              <p className="topic-desc">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Code Snippet */}
      <section className="section">
        <h2 className="section-title">
          <span className="section-num">02</span> Quick Snippets
        </h2>
        <div className="snippet-box">
          <div className="snippet-tabs">
            {codeSnippets.map((s, i) => (
              <button
                key={i}
                className={`snippet-tab ${activeSnippet === i ? "active" : ""}`}
                onClick={() => setActiveSnippet(i)}
              >
                {s.label}
              </button>
            ))}
            <button className="copy-btn" onClick={handleCopy}>
              {copied ? "✓ Copied" : "Copy"}
            </button>
          </div>
          <pre className="snippet-code">
            <code>{codeSnippets[activeSnippet].code}</code>
          </pre>
        </div>
      </section>

      {/* PDF Books */}
      <section className="section">
        <h2 className="section-title">
          <span className="section-num">03</span> PDF Books
        </h2>
        <div className="card-grid">
          {resources.map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="pdf-card"
            >
              <div className="pdf-icon">📄</div>
              <div className="pdf-body">
                <span className={`pdf-tag ${tagColors[item.tag]}`}>
                  {item.tag}
                </span>
                <h3 className="pdf-title">{item.title}</h3>
                <span className="pdf-pages">{item.pages}</span>
              </div>
              <span className="pdf-arrow">↗</span>
            </a>
          ))}
        </div>
      </section>

      {/* Videos */}
      <section className="section">
        <h2 className="section-title">
          <span className="section-num">04</span> Video Tutorials
        </h2>
        <div className="video-grid">
          {videos.map((video, i) => (
            <div className="video-card" key={i}>
              <div className="video-frame-wrap">
                <iframe
                  src={video.url}
                  title={video.title}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <div className="video-meta">
                <div className="video-badges">
                  <span className="v-badge">{video.level}</span>
                  <span className="v-badge v-badge-time">⏱ {video.duration}</span>
                </div>
                <h3 className="video-title">{video.title}</h3>
                <p className="video-desc">{video.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="c-footer">
        <p>C Programming Resource Hub &mdash; Learn, Build, Master.</p>
      </footer>
    </div>
  );
}