import React, { useState } from "react";
import axios from "axios"; // Import axios for API calls
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [, setMessage] = useState(""); // For success/error messages
  const [, setLoading] = useState(false); // Loading state

  const handleReset = async () => {
    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post("http://localhost:3007/api/forgotpassword", { email });

      if (response.status === 200) {
        setMessage("Password reset link sent! Check your email.");
      }
    } catch (error) {
      setMessage("Error: " + (error.response?.data?.message || "Something went wrong."));
    }

    setLoading(false);
  };

  return (
    <div className="forgot-password-container">
        <div className="forgot-password-form">
      <h2>Forgot Password</h2>
      <p>Enter your email address you used when you joined to this website.</p>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="email-input"
      />
      <button onClick={handleReset} className="reset-button">
        Reset Password
      </button>
      <a href="/login" className="back-to-login">
        Back to Login
      </a>
    </div>
    </div>
  );
};


export default ForgotPassword;
