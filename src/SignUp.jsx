import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Auth.css";

function SignUp() {
  const navigate = useNavigate();
  const [form, setForm]       = useState({ username: "", email: "", password: "", confirm: "" });
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading]  = useState(false);
  const [agree, setAgree]      = useState(false);

  const handleChange = e =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const strength = (() => {
    const p = form.password;
    if (!p) return 0;
    let s = 0;
    if (p.length >= 8)          s++;
    if (/[A-Z]/.test(p))        s++;
    if (/[0-9]/.test(p))        s++;
    if (/[^A-Za-z0-9]/.test(p)) s++;
    return s;
  })();

  const strengthLabel = ["", "Weak", "Fair", "Good", "Strong"][strength];
  const strengthClass = ["", "weak", "fair", "good", "strong"][strength];

  const handleSignup = (e) => {
    e.preventDefault();
    if (form.password !== form.confirm) return alert("Passwords do not match!");
    if (!agree) return alert("Please accept the terms to continue.");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/Home");
    }, 1100);
  };

  return (
    <div className="auth-page">
      {/* Left panel */}
      <div className="auth-left">
        <div className="auth-brand">
          <span className="auth-logo">💻</span>
          <span className="auth-logo-text">QuickLearn</span>
        </div>
        <h2 className="auth-left-title">Join 10,000+<br />Learners Today.</h2>
        <p className="auth-left-sub">
          Create your free account and get instant access to hundreds of
          tutorials across the most in-demand technologies.
        </p>
        <ul className="auth-perks">
          <li>🚀 Start learning in under 2 minutes</li>
          <li>📚 Structured beginner-to-pro content</li>
          <li>🎯 Progress tracking (coming soon)</li>
          <li>🤝 Community of learners & mentors</li>
        </ul>
        <div className="auth-quote">
          "An investment in knowledge pays the best interest."
          <span>— Benjamin Franklin</span>
        </div>
      </div>

      {/* Right panel — form */}
      <div className="auth-right">
        <div className="auth-card">
          <div className="auth-card-header">
            <h1 className="auth-title">Create Account 🎉</h1>
            <p className="auth-subtitle">It's free. No credit card required.</p>
          </div>

          <form className="auth-form" onSubmit={handleSignup}>
            <div className="form-row-2">
              <div className="auth-field">
                <label htmlFor="username">Username</label>
                <div className="input-wrap">
                  <span className="input-icon">👤</span>
                  <input
                    id="username" name="username" type="text"
                    placeholder="Choose a username"
                    value={form.username} onChange={handleChange} required
                  />
                </div>
              </div>
              <div className="auth-field">
                <label htmlFor="email">Email Address</label>
                <div className="input-wrap">
                  <span className="input-icon">✉️</span>
                  <input
                    id="email" name="email" type="email"
                    placeholder="you@example.com"
                    value={form.email} onChange={handleChange} required
                  />
                </div>
              </div>
            </div>

            <div className="auth-field">
              <label htmlFor="password">Password</label>
              <div className="input-wrap">
                <span className="input-icon">🔒</span>
                <input
                  id="password" name="password"
                  type={showPass ? "text" : "password"}
                  placeholder="Min. 8 characters"
                  value={form.password} onChange={handleChange} required
                />
                <span className="eye-toggle" onClick={() => setShowPass(p => !p)}>
                  {showPass ? "🙈" : "👁️"}
                </span>
              </div>
              {form.password && (
                <div className="strength-bar">
                  {[1,2,3,4].map(i => (
                    <span
                      key={i}
                      className={`strength-seg ${i <= strength ? strengthClass : ""}`}
                    />
                  ))}
                  <span className={`strength-label ${strengthClass}`}>{strengthLabel}</span>
                </div>
              )}
            </div>

            <div className="auth-field">
              <label htmlFor="confirm">Confirm Password</label>
              <div className="input-wrap">
                <span className="input-icon">🔑</span>
                <input
                  id="confirm" name="confirm"
                  type={showPass ? "text" : "password"}
                  placeholder="Re-enter password"
                  value={form.confirm} onChange={handleChange} required
                />
              </div>
              {form.confirm && form.password !== form.confirm && (
                <span className="field-error">Passwords do not match</span>
              )}
            </div>

            <label className="checkbox-row">
              <input type="checkbox" checked={agree} onChange={() => setAgree(p => !p)} />
              <span>I agree to the <span className="auth-link">Terms of Service</span> and <span className="auth-link">Privacy Policy</span></span>
            </label>

            <button
              type="submit"
              className={`auth-btn ${loading ? "loading" : ""}`}
              disabled={loading}
            >
              {loading ? <span className="spinner" /> : "Create Account →"}
            </button>
          </form>

          <div className="auth-divider"><span>or sign up with</span></div>

          <div className="social-auth">
            <button className="social-auth-btn" onClick={() => alert("Google signup coming soon!")}>
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" width="18" />
              Google
            </button>
            <button className="social-auth-btn" onClick={() => alert("GitHub signup coming soon!")}>
              <img src="https://www.svgrepo.com/show/512317/github-142.svg" alt="GitHub" width="18" />
              GitHub
            </button>
          </div>

          <p className="auth-switch">
            Already have an account?{" "}
            <span className="auth-link" onClick={() => navigate("/")}>Log in</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;