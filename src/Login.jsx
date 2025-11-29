import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./java.css";
import confetti from "canvas-confetti";

function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Normally, you would check credentials with backend here
    alert("Login successful!");
    navigate("/Home"); // Navigate to Home page after login
  };

  const goToSignup = () => {
    navigate("/signup");
  };

  // 🎈 Balloons animation (optional)
  const launchBalloons = () => {
    const duration = 5000;
    const end = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 20, ticks: 60, zIndex: 1000 };

    const interval = setInterval(() => {
      if (Date.now() > end) return clearInterval(interval);
      confetti({
        ...defaults,
        particleCount: 5 + Math.random() * 100,
        origin: { x: Math.random(), y: 1.2 },
        colors: ["#ff0000", "#00ff00", "#0000ff", "#ff00ff", "#00ffff", "#ffff00"],
      });
    }, 250);
  };

  return (
    <div className='setting'>
      <h1>Login Page</h1>
      <form onSubmit={handleLogin}>
  <input id="username" type="text" placeholder="Enter Username" required /><br /><br />
  <input id="password" type="password" placeholder="Enter Password" required /><br /><br />
  <button id="loginBtn" type="submit" onClick={launchBalloons}>Login</button>
</form>

      <p>
        Don't have an account?{" "}
        <button
          onClick={goToSignup}
          style={{ color: "blue", background: "none", border: "none", cursor: "pointer" }}
        >
          Sign Up here
        </button>
      </p>
    </div>
  );
}

export default Login;
