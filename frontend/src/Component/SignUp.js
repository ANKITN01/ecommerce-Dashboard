import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const validateEmail = (input) => {
    // A simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(input);
  };

  const validatePassword = (input) => {
    // You can add your own password validation logic here
    // For example, checking if it's a minimum length or contains special characters
    return input.length >= 8; // Minimum length of 8 characters
  };

  const collectData = async () => {
    if (!name || !email || !password) {
      setError("All fields are required");
      return;
    }

    if (!validateEmail(email)) {
      setError("Invalid email address");
      return;
    }

    if (!validatePassword(password)) {
      setError("Password must be at least 8 characters long");
      return;
    }

    try {
      let result = await fetch("http://localhost:5000/register", {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (result.ok) {
        const data = await result.json();
        console.warn(data);
        localStorage.setItem("user", JSON.stringify(data));
        navigate("/"); // Redirect to the main page upon successful registration
      } else {
        const errorData = await result.json();
        setError(errorData.error || "Registration failed");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setError("Registration failed");
    }
  };

  return (
    <div className="register">
      <h1>Register</h1>
      <input
        className="inputBox"
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <input
        className="inputBox"
        type="text"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <input
        className="inputBox"
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <button className="signUp" onClick={collectData}>
        Sign Up
      </button>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default SignUp;
