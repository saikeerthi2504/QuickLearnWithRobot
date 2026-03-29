import React, { useState } from 'react';
import "./dotnet.css";

const pdfResources = [
  {
    title: ".NET Tutorial for Beginners (Microsoft)",
    desc: "Official Microsoft beginner guide — the best starting point for .NET development.",
    tag: "Official",
    href: "https://download.microsoft.com/download/8/e/7/8e725d96-7ec3-498b-9fa7-86779aed101f/dotnet%20tutorial%20for%20beginners.pdf",
  },
  {
    title: "ASP.NET Tutorial",
    desc: "TutorialsPoint's comprehensive ASP.NET guide covering web forms, controls, and state management.",
    tag: "Web",
    href: "https://www.tutorialspoint.com/asp.net/asp.net_tutorial.pdf",
  },
  {
    title: "VB.NET Tutorial",
    desc: "Learn Visual Basic .NET from scratch — syntax, OOP, and Windows application development.",
    tag: "Beginner",
    href: "https://www.tutorialspoint.com/vb.net/vb.net_tutorial.pdf",
  },
  {
    title: "ASP.NET Core Web Programming",
    desc: "In-depth coverage of ASP.NET Core — MVC, Razor Pages, middleware, and REST APIs.",
    tag: "Advanced",
    href: "https://www.halvorsen.blog/documents/programming/csharp/textbook/aspnet/Web%20Programming%20-%20ASP.NET%20Core.pdf",
  },
  {
    title: "Little ASP.NET Core Book",
    desc: "A short, hands-on book that walks you through building a real app with ASP.NET Core.",
    tag: "Project",
    href: "https://s3.amazonaws.com/recaffeinate-files/LittleAspNetCoreBook.pdf",
  },
];

const videos = [
  {
    title: ".NET for Beginners",
    desc: "Start your journey with .NET basics — the runtime, CLI tools, and your first C# app.",
    tag: "Beginner",
    src: "https://www.youtube.com/embed/8ew1LgfWV6s",
  },
  {
    title: "Full .NET Course",
    desc: "Complete step-by-step .NET training covering C#, ASP.NET Core, EF Core, and deployment.",
    tag: "Intermediate",
    src: "https://www.youtube.com/embed/1c0tcb-QTnU",
  },
  {
    title: "Advanced .NET Concepts",
    desc: "Understand real-world .NET patterns — dependency injection, middleware, and microservices.",
    tag: "Advanced",
    src: "https://www.youtube.com/embed/skj2ii0pgss",
  },
];

const topics = [
  { icon: "⚙️", label: "C# Fundamentals" },
  { icon: "🌐", label: "ASP.NET Core" },
  { icon: "🗄️", label: "Entity Framework" },
  { icon: "🔌", label: "REST APIs" },
  { icon: "🏗️", label: "MVC Pattern" },
  { icon: "☁️", label: "Azure & Cloud" },
  { icon: "🔒", label: "Authentication" },
  { icon: "🧵", label: "Async / Await" },
  { icon: "📦", label: "NuGet Packages" },
  { icon: "🧪", label: "Unit Testing" },
];

const whyDotNet = [
  { icon: "💼", title: "High Industry Demand", desc: "C# and .NET consistently rank among the top enterprise technologies, powering banks, e-commerce platforms, and Fortune 500 backends." },
  { icon: "🌍", title: "Cross-Platform", desc: ".NET 6+ runs on Windows, Linux, and macOS. Build once and deploy anywhere — servers, containers, or the cloud." },
  { icon: "🚀", title: "Blazing Performance", desc: "ASP.NET Core is one of the fastest web frameworks in the world, regularly topping TechEmpower benchmarks." },
  { icon: "🏢", title: "Microsoft-Backed", desc: "With Microsoft's full backing, .NET receives continuous updates, enterprise-grade tooling, and long-term support." },
];

const tips = [
  { num: "01", title: "Start with C# First", detail: "Before diving into ASP.NET or Entity Framework, get comfortable with C# fundamentals — types, classes, LINQ, and async patterns." },
  { num: "02", title: "Use Visual Studio / VS Code", detail: "Visual Studio provides the best .NET experience with IntelliSense, debugging, and scaffolding built in. VS Code is great for lightweight work." },
  { num: "03", title: "Learn the CLI Early", detail: "The `dotnet` CLI lets you create, build, run, and publish apps without a GUI. Mastering it makes you faster and more flexible." },
  { num: "04", title: "Build a REST API Project", detail: "Create a CRUD API with ASP.NET Core and Entity Framework — it covers routing, controllers, database access, and deployment all at once." },
];

const tagColors = {
  Official:     "tag-blue",
  Web:          "tag-green",
  Beginner:     "tag-teal",
  Advanced:     "tag-red",
  Project:      "tag-purple",
  Intermediate: "tag-orange",
};

function DotNet() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    { q: "What language do I need to know for .NET?", a: "C# is the primary language for .NET development. It is modern, statically typed, and shares syntax similarities with Java and JavaScript — most developers pick it up quickly." },
    { q: "Is .NET free to use?", a: "Yes. .NET (formerly .NET Core) is fully open-source and free under the MIT license. It is hosted on GitHub and backed by Microsoft." },
    { q: "What can I build with .NET?", a: "Web apps (ASP.NET Core), REST APIs, desktop apps (WPF / WinForms / MAUI), mobile apps (MAUI), cloud functions (Azure Functions), and game scripts (Unity)." },
    { q: "How is .NET different from .NET Framework?", a: ".NET Framework is the older Windows-only version. .NET (6, 7, 8…) is the modern cross-platform successor. New projects should always target the latest .NET version." },
  ];

  return (
    <div className="dn-page">

      {/* ── HERO ── */}
      <header className="dn-hero">
        <div className="dn-hero-badge">🔷 .NET Learning Hub</div>
        <h1 className="dn-hero-title">
          Build Anything with <span className="dn-accent">.NET</span>
        </h1>
        <p className="dn-hero-sub">
          Microsoft's free, open-source platform for building web apps, APIs,
          desktop tools, and cloud services. Start from zero or level up your
          existing skills with curated PDFs, videos, and guides.
        </p>
        <div className="dn-hero-stats">
          <span>📄 5 PDF Books</span>
          <span>🎬 3 Video Lessons</span>
          <span>📚 10 Core Topics</span>
          <span>🆓 100% Free</span>
        </div>
      </header>

      {/* ── WHAT IS .NET ── */}
      <section className="dn-section">
        <div className="dn-section-label">Overview</div>
        <h2 className="dn-section-title">What is .NET?</h2>
        <div className="dn-what-grid">
          <div className="dn-what-text">
            <p>
              <strong>.NET</strong> is a free, open-source, cross-platform framework developed by Microsoft
              for building modern applications. It supports multiple languages — primarily
              <strong> C#</strong>, VB.NET, and F# — and runs on Windows, Linux, and macOS.
            </p>
            <p>
              From web APIs and microservices to desktop GUIs and cloud-native apps,
              .NET provides a unified platform with a rich standard library, high performance,
              and world-class tooling via Visual Studio and VS Code.
            </p>
            <div className="dn-lang-pills">
              <span>C#</span><span>VB.NET</span><span>F#</span><span>ASP.NET Core</span><span>Blazor</span>
            </div>
          </div>
          <div className="dn-what-cards">
            {whyDotNet.map((w, i) => (
              <div className="dn-why-card" key={i}>
                <span className="dn-why-icon">{w.icon}</span>
                <div>
                  <h4>{w.title}</h4>
                  <p>{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOPICS ── */}
      <section className="dn-section">
        <div className="dn-section-label">What You'll Learn</div>
        <h2 className="dn-section-title">Core .NET Topics Covered</h2>
        <div className="dn-topics-grid">
          {topics.map((t, i) => (
            <div className="dn-topic-pill" key={i}>
              <span>{t.icon}</span><span>{t.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── PDF RESOURCES ── */}
      <section className="dn-section">
        <div className="dn-section-label">Free PDF Books</div>
        <h2 className="dn-section-title">.NET Learning Resources</h2>
        <div className="dn-card-container">
          {pdfResources.map((r, i) => (
            <a key={i} className="dn-card" href={r.href} target="_blank" rel="noopener noreferrer">
              <div className="dn-card-top">
                <span className="dn-card-icon">📄</span>
                <span className={`dn-tag ${tagColors[r.tag] || "tag-blue"}`}>{r.tag}</span>
              </div>
              <h3 className="dn-card-title">{r.title}</h3>
              <p className="dn-card-desc">{r.desc}</p>
              <div className="dn-card-link">Download PDF →</div>
            </a>
          ))}
        </div>
      </section>

      {/* ── VIDEOS ── */}
      <section className="dn-section">
        <div className="dn-section-label">Video Tutorials</div>
        <h2 className="dn-section-title">DotNet Tutorials</h2>
        <div className="dn-video-grid">
          {videos.map((v, i) => (
            <div className="dn-video-card" key={i}>
              <div className="dn-video-wrap">
                <iframe src={v.src} title={v.title} frameBorder="0" allowFullScreen />
              </div>
              <div className="dn-video-body">
                <div className="dn-video-header">
                  <h3 className="dn-video-title">{v.title}</h3>
                  <span className={`dn-tag ${tagColors[v.tag] || "tag-blue"}`}>{v.tag}</span>
                </div>
                <p className="dn-video-desc">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TIPS ── */}
      <section className="dn-section">
        <div className="dn-section-label">Developer Tips</div>
        <h2 className="dn-section-title">Tips to Learn .NET Faster</h2>
        <div className="dn-tips-grid">
          {tips.map((t, i) => (
            <div className="dn-tip-card" key={i}>
              <div className="dn-tip-num">{t.num}</div>
              <h3 className="dn-tip-title">{t.title}</h3>
              <p className="dn-tip-detail">{t.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="dn-section">
        <div className="dn-section-label">FAQ</div>
        <h2 className="dn-section-title">Common Questions</h2>
        <div className="dn-faq">
          {faqs.map((f, i) => (
            <div
              className={`dn-faq-item ${openFaq === i ? "open" : ""}`}
              key={i}
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
            >
              <div className="dn-faq-q">
                <span>{f.q}</span>
                <span className="dn-faq-arrow">{openFaq === i ? "▲" : "▼"}</span>
              </div>
              {openFaq === i && <p className="dn-faq-a">{f.a}</p>}
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="dn-cta">
        <div className="dn-cta-icon">🔷</div>
        <h2>Ready to Build with .NET?</h2>
        <p>
          Start with the official Microsoft PDF, work through the beginner video,
          and build your first ASP.NET Core API. The ecosystem is vast — but the
          first step is simple.
        </p>
        <a
          className="dn-cta-btn"
          href="https://download.microsoft.com/download/8/e/7/8e725d96-7ec3-498b-9fa7-86779aed101f/dotnet%20tutorial%20for%20beginners.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Start with Microsoft's Guide →
        </a>
      </section>

    </div>
  );
}

export default DotNet;