import { React, useState } from "react";
import { API } from "./config";

function Login(e) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginAdmin = async (e) => {
    e.preventDefault();

    const response = await fetch(`${API}auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const data = await response.json();

    if (data.user) {
      window.location.href = "/dashboard";
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={loginAdmin}>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          name="email"
        ></input>
        <input
          type="text"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          name="password"
        ></input>
        <input type="submit" value="Login"></input>
      </form>
    </div>
  );
}

export default Login;
