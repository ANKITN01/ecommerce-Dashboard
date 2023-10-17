import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });

  async function collectData() {
    console.log(name, email, password);

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
  }

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
