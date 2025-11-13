import React, { useState } from "react";
import "./Login.css"; // we'll create this CSS file next

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome back, ${email || "User"}!`);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="title">Login</h2>
        <h3>Performing diff command</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        <p className="note">
          Don't have an account? <a href="#">Sign up</a>
        </p>
      </div>
    </div>
  );
}
