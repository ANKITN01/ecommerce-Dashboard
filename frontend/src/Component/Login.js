import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();

  const handleLogin = async () => {
    console.log(email, password);
    // Send a POST request to the server with the user's email and password
    let result = await fetch("http://13.235.190.97:5000/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);

    if (result.name) {
      // If login is successful, store user data in local storage and navigate to the main page
      localStorage.setItem("user", JSON.stringify(result));
      Navigate("/");
    } else {
      // If login fails, show an alert to the user
      alert("Please Enter Correct EMAIL and PASSWORD");
    }
  };

  return (
    <div className="login">
      <h1>Login</h1>
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
      <button className="appButton" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
