import React from "react";
import ReactDOM from "react-dom/client";
import "../css/Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar1 from "./Navbar1";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import styled from "styled-components";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);

  const toggle = () => {
    setShowPassword(!showPassword);
  };

  const login = async (e) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      if (email === "admin@gmail.com") {
        navigate("/admin");
      } else {
        navigate("/home");
      }
    } catch (error) {
      console.log(error.message);
      console.log("cant create user");
    }
  };

  const handlelogin = (e) => {
    e.preventDefault();
    setError(true);
    login();
  };

  return (
    <>
      <Navbar1 />
      <LoginSection className="Login">
        {/* <Header/> */}

        <div className="container mt-5">
          <div className="Login-content">
            <div className="Login-h"></div>
            <h2>Login</h2>
            <form className="Login-form" id="Login-form">
              {/* Email */}
              <div className="login-form-group">
                <label htmlFor="email"></label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* Password */}
              <div className="form-group">
                <label htmlFor="password"></label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  autoComplete="off"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {/* {error && <span>Wrong Email or Password</span>} */}

              {/* Checkbox */}
              <div className="checkbox">
                <input
                  type="checkbox"
                  name="checkbox"
                  id="checkbox"
                  className="checkbox"
                  onClick={toggle}
                />{" "}
                Show Password
              </div>
              <div>
                <a href="/signup">Don't have an account? Sign Up</a>
              </div>
              {/* Submit */}
              <div className="form-group form-button">
                <input
                  type="submit"
                  name="Login"
                  id="Login"
                  className="form-submit"
                  value="Login"
                  onClick={handlelogin}
                />
              </div>
            </form>
          </div>
        </div>
      </LoginSection>
    </>
  );
};

const LoginSection = styled.section`
  body {
    background-color: #f2f2f2;
  }
  .container {
    width: 100%;
    max-width: 500px;
    background-color: #fff;
    padding: 25px;
    border-radius: 5px;
    margin-top: 100px;
  }
  form {
    width: 100%;
    max-width: 300px;
    margin: auto;
  }
  form input {
    width: 100%;
    height: 40px;
    border: 1px solid #646464;
    border-radius: 5px;
    outline: 1;
    padding: 0 10px;
    background: #f2f2f1;
    font-size: 18px;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
    letter-spacing: 1px;
    margin-bottom: 10px;
    transition: all 0.6s ease-in-out;
  }
  .checkbox {
    margin-bottom: 101px;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    border-radius: 5px;
  }
  .checkbox input {
    width: 20px;
    height: 20px;
    margin: 10px;
    border-radius: 5px;
    background-color: #f2f2f2;
    border: 1px solid #646464;
    transition: all 0.6s ease-in-out;
  }
  span {
    font-size: 13px;
    color: #ff0000;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
    margin: 10px;
    transition: all 0.6s ease-in-out;
  }
  h2 {
    font-size: 30px;
    font-weight: 600;
    font-family: "Poppins", sans-serif;
    letter-spacing: 0.5px;
    margin-top: 40px;
    margin-bottom: 60px;
    color: #000000;
  }
  .signup {
    width: 100%;
    text-align: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .signup .container {
    margin-top: 100px;
  }
  a {
    text-decoration: none;
    color: #336cff;
    font-size: 13px;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
    letter-spacing: 0.1px;
    transition: all 0.6s ease-in-out;
    margin-bottom: 10px;
  }
  .form-submit {
    width: 200px;
    margin-top: 10px;
    height: 40px;
    border-radius: 5px;
    background-color: #336cff;
    border: 1px solid #336cff;
    color: #fff;
    font-size: 13px;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
    letter-spacing: 0.1px;
    transition: all 0.6s ease-in-out;
  }
`;

export default Login;
