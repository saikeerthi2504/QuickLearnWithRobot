import React, { useState } from 'react';
import "./Spring.css";

const resources = [
  {
    title: "Spring Framework Tutorial by TutorialsPoint",
    link: "https://www.tutorialspoint.com/spring/spring_tutorial.pdf",
    tag: "Beginner",
    pages: "~200 pages",
  },
  {
    title: "Official Spring Framework Documentation",
    link: "https://docs.spring.io/spring-framework/docs/current/reference/html/",
    tag: "Intermediate",
    pages: "Web-based",
  },
  {
    title: "Javatpoint Spring Tutorial",
    link: "https://www.javatpoint.com/spring-tutorial",
    tag: "Beginner",
    pages: "Web-based",
  },
  {
    title: "Spring Guides (Official Step-by-Step)",
    link: "https://spring.io/guides",
    tag: "Intermediate",
    pages: "Web-based",
  },
  {
    title: "Spring PetClinic Sample Project",
    link: "https://github.com/spring-projects/spring-petclinic",
    tag: "Advanced",
    pages: "GitHub Repo",
  },
];

const videos = [
  {
    title: "Spring Boot Basics",
    desc: "Spring Boot fundamentals — auto-configuration, starter dependencies, and building your first REST API.",
    url: "https://www.youtube-nocookie.com/embed/Nv2DERaMx-4",
    duration: "3h 22m",
    level: "Beginner",
  },
  {
    title: "Spring Full Course",
    desc: "Learn Spring Boot, Spring MVC, Spring Data JPA, and Spring Security step by step with real projects.",
    url: "https://www.youtube-nocookie.com/embed/gJrjgg1KVL4",
    duration: "10h 30m",
    level: "Intermediate",
  },
  {
    title: "Spring Features Explained",
    desc: "Understand new Spring features, reactive programming with WebFlux, and modern Spring patterns.",
    url: "https://www.youtube-nocookie.com/embed/35EQXmHKZYs",
    duration: "4h 10m",
    level: "Advanced",
  },
];

const topics = [
  { icon: "🌿", title: "IoC & Dependency Injection", desc: "ApplicationContext, BeanFactory, constructor vs setter injection, and @Autowired." },
  { icon: "🧩", title: "Spring Core Annotations", desc: "@Component, @Service, @Repository, @Controller, and stereotype scanning." },
  { icon: "🌐", title: "Spring MVC", desc: "@RestController, @RequestMapping, request params, path variables, and response bodies." },
  { icon: "🗄️", title: "Spring Data JPA", desc: "Repositories, JPQL queries, @Entity mapping, and database transactions." },
  { icon: "🔒", title: "Spring Security", desc: "Authentication, authorization, JWT tokens, OAuth2, and role-based access control." },
  { icon: "⚙️", title: "Spring Boot Auto-Config", desc: "Starter POMs, application.properties, profiles, and conditional beans." },
  { icon: "🔁", title: "AOP & Transactions", desc: "Aspect-oriented programming, @Transactional, pointcuts, and cross-cutting concerns." },
  { icon: "🧪", title: "Testing with Spring", desc: "@SpringBootTest, MockMvc, @DataJpaTest, and integration testing patterns." },
];

const snippets = [
  {
    label: "REST Controller",
    code: `@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public List<User> getAllUsers() {
        return userService.findAll();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public User createUser(@RequestBody User user) {
        return userService.save(user);
    }
}`,
  },
  {
    label: "JPA Repository",
    code: `@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String username;

    private String email;
    // getters & setters
}

public interface UserRepository
        extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}`,
  },
  {
    label: "Spring Security",
    code: `@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(
            HttpSecurity http) throws Exception {
        http
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/public/**").permitAll()
                .anyRequest().authenticated()
            )
            .httpBasic(Customizer.withDefaults());
        return http.build();
    }
}`,
  },
];

const tagColors = {
  Beginner:     "tag-green",
  Intermediate: "tag-teal",
  Advanced:     "tag-red",
};

export default function SpringResources() {
  const [activeSnippet, setActiveSnippet] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(snippets[activeSnippet].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="spring-page">

      {/* Hero */}
      <header className="spring-hero">
        <div className="spring-hero-badge">Java Framework</div>
        <h1 className="spring-hero-title">
          <span className="spring-accent">Spring</span> Framework
        </h1>
        <p className="spring-hero-sub">
          The leading Java ecosystem for building production-grade microservices,
          REST APIs, and enterprise applications with elegance.
        </p>
        <div className="spring-hero-stats">
          <div className="sp-stat"><span className="sp-stat-num">5</span><span className="sp-stat-label">Resources</span></div>
          <div className="sp-stat-divider" />
          <div className="sp-stat"><span className="sp-stat-num">3</span><span className="sp-stat-label">Video Courses</span></div>
          <div className="sp-stat-divider" />
          <div className="sp-stat"><span className="sp-stat-num">8</span><span className="sp-stat-label">Core Topics</span></div>
        </div>
      </header>

      {/* Topics */}
      <section className="spring-section">
        <h2 className="spring-section-title">
          <span className="spring-section-num">01</span> Core Topics
        </h2>
        <div className="spring-topics-grid">
          {topics.map((t, i) => (
            <div className="spring-topic-card" key={i}>
              <span className="spring-topic-icon">{t.icon}</span>
              <h3 className="spring-topic-name">{t.title}</h3>
              <p className="spring-topic-desc">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Snippets */}
      <section className="spring-section">
        <h2 className="spring-section-title">
          <span className="spring-section-num">02</span> Quick Snippets
        </h2>
        <div className="spring-snippet-box">
          <div className="spring-snippet-tabs">
            {snippets.map((s, i) => (
              <button
                key={i}
                className={`spring-snippet-tab ${activeSnippet === i ? "active" : ""}`}
                onClick={() => setActiveSnippet(i)}
              >
                {s.label}
              </button>
            ))}
            <button className="spring-copy-btn" onClick={handleCopy}>
              {copied ? "✓ Copied" : "Copy"}
            </button>
          </div>
          <pre className="spring-snippet-code"><code>{snippets[activeSnippet].code}</code></pre>
        </div>
      </section>

      {/* Resources */}
      <section className="spring-section">
        <h2 className="spring-section-title">
          <span className="spring-section-num">03</span> Learning Resources
        </h2>
        <div className="spring-card-grid">
          {resources.map((item, i) => (
            <a key={i} href={item.link} target="_blank" rel="noopener noreferrer" className="spring-pdf-card">
              <div className="spring-pdf-icon">🌿</div>
              <div className="spring-pdf-body">
                <span className={`spring-pdf-tag ${tagColors[item.tag]}`}>{item.tag}</span>
                <h3 className="spring-pdf-title">{item.title}</h3>
                <span className="spring-pdf-pages">{item.pages}</span>
              </div>
              <span className="spring-pdf-arrow">↗</span>
            </a>
          ))}
        </div>
      </section>

      {/* Videos */}
      <section className="spring-section">
        <h2 className="spring-section-title">
          <span className="spring-section-num">04</span> Video Tutorials
        </h2>
        <div className="spring-video-grid">
          {videos.map((video, i) => (
            <div className="spring-video-card" key={i}>
              <div className="spring-video-frame-wrap">
                <iframe src={video.url} title={video.title} allowFullScreen loading="lazy" />
              </div>
              <div className="spring-video-meta">
                <div className="spring-video-badges">
                  <span className="sp-badge">{video.level}</span>
                  <span className="sp-badge sp-badge-time">⏱ {video.duration}</span>
                </div>
                <h3 className="spring-video-title">{video.title}</h3>
                <p className="spring-video-desc">{video.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="spring-footer">
        <p>Spring Learning Hub &mdash; Inject, Boot, Deploy.</p>
      </footer>
    </div>
  );
}