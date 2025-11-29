import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./java.css"
function SignUp() {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // Normally you would save user data to backend here
    alert("Signup successful!");
    navigate("/Home"); // navigate to Home page after signup
  };

  return (
    <div className='setting'>
      <h1>Sign Up Page</h1>
      <form onSubmit={handleSignup}>
        <input type="text" placeholder="Enter Username" required /><br /><br />
        <input type="email" placeholder="Enter Email" required /><br /><br />
        <input type="password" placeholder="Enter Password" required /><br /><br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
