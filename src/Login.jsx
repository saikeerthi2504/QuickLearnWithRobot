import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Auth.css";
import confetti from "canvas-confetti";

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = e =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const launchConfetti = () => {
    const end = Date.now() + 2500;
    const interval = setInterval(() => {
      if (Date.now() > end) return clearInterval(interval);
      confetti({
        particleCount: 6 + Math.random() * 80,
        startVelocity: 28,
        spread: 22,
        ticks: 60,
        zIndex: 1000,
        origin: { x: Math.random(), y: 1.1 },
        colors: ["#2563eb", "#38bdf8", "#7dd3fc", "#fbbf24", "#a78bfa"],
      });
    }, 220);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      launchConfetti();
      setLoading(false);
      navigate("/Home");
    }, 1000);
  };

  return (
    <div className="auth-page">
      {/* Left panel */}
      <div className="auth-left">
        <div className="auth-brand">
          <span className="auth-logo">💻</span>
          <span className="auth-logo-text">QuickLearn</span>
        </div>
        <h2 className="auth-left-title">Learn Faster.<br />Build Smarter.</h2>
        <p className="auth-left-sub">
          Access structured tutorials for Java, Python, React, Spring,
          .NET, C, and Oracle — all in one place, completely free.
        </p>
        <ul className="auth-perks">
          <li>✅ 500+ free tutorials & guides</li>
          <li>✅ Beginner to advanced tracks</li>
          <li>✅ Voice assistant support</li>
          <li>✅ No subscription needed</li>
        </ul>
        <div className="auth-quote">
          "The best investment you can make is in yourself."
          <span>— Warren Buffett</span>
        </div>
      </div>

      {/* Right panel — form */}
      <div className="auth-right">
        <div className="auth-card">
          <div className="auth-card-header">
            <h1 className="auth-title">Welcome Back 👋</h1>
            <p className="auth-subtitle">Sign in to continue your learning journey.</p>
          </div>

          <form className="auth-form" onSubmit={handleLogin}>
            <div className="auth-field">
              <label htmlFor="username">Username</label>
              <div className="input-wrap">
                <span className="input-icon">👤</span>
                <input
                  id="username" name="username" type="text"
                  placeholder="Enter your username"
                  value={form.username} onChange={handleChange} required
                />
              </div>
            </div>

            <div className="auth-field">
              <div className="label-row">
                <label htmlFor="password">Password</label>
                <span className="forgot-link" onClick={() => alert("Reset link sent!")}>
                  Forgot password?
                </span>
              </div>
              <div className="input-wrap">
                <span className="input-icon">🔒</span>
                <input
                  id="password" name="password"
                  type={showPass ? "text" : "password"}
                  placeholder="Enter your password"
                  value={form.password} onChange={handleChange} required
                />
                <span
                  className="eye-toggle"
                  onClick={() => setShowPass(p => !p)}
                  title={showPass ? "Hide" : "Show"}
                >
                  {showPass ? "🙈" : "👁️"}
                </span>
              </div>
            </div>

            <button type="submit" className={`auth-btn ${loading ? "loading" : ""}`} disabled={loading}>
              {loading ? <span className="spinner" /> : "Login →"}
            </button>
          </form>

          <div className="auth-divider"><span>or continue with</span></div>

          <div className="social-auth">
            <button className="social-auth-btn" onClick={() => alert("Google login coming soon!")}>
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" width="18" />
              Google
            </button>
            <button className="social-auth-btn" onClick={() => alert("GitHub login coming soon!")}>
              <img src="https://www.svgrepo.com/show/512317/github-142.svg" alt="GitHub" width="18" />
              GitHub
            </button>
          </div>

          <p className="auth-switch">
            Don't have an account?{" "}
            <span className="auth-link" onClick={() => navigate("/signup")}>Sign up free</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;