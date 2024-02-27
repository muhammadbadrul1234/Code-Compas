import React from "react";
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import styled from "styled-components";
import HomeNavbar from "../LandingPage/Components/Navbar";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [loginError, setLoginError] = useState(null);

  const toggle = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const login = async (e) => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        formValues.email,
        formValues.password
      );

      if (formValues.email === "admin@gmail.com") {
        navigate("/admin");
      } else {
        navigate("/home");
      }
    } catch (error) {
      console.log(error.message);

    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    login();
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }
    return errors;
  };

  return (
    <>
      <HomeNavbar />
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
                  // onChange={(e) => setEmail(e.target.value)}
                  onChange={handleChange}
                  value={formValues.email}
                />
                <p>{formErrors.email}</p>
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
                  // onChange={(e) => setPassword(e.target.value)}
                  value={formValues.password}
                  onChange={handleChange}
                />
              </div>
              <p>{formErrors.password}</p>

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
                  onClick={handleSubmit}
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
    margin-top: 200px;
  }
  form {
    width: 100%;
    max-width: 300px;
    margin: auto;
  }
  form input {
    width: 100%;
    height: 10px;
    border: 1px solid #646464;
    border-radius: 5px;
    outline: 1;
    padding: 0 10px;
    background: #f2f2f1;
    font-size: 18px;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
    letter-spacing: 1px;
    margin-bottom: 20px;
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
  div {
    text-align: center;
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
  body {
    background-color: #f2f2f2;
  }

  h2 {
    font-size: 30px;
    font-weight: 600;
    font-family: "Poppins", sans-serif;
    letter-spacing: 0.5px;
    margin-top: 40px;
    margin-bottom: 60px;
    color: #000000;
    text-align: center; /* Center the text */
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

    width: 100%;
    max-width: 500px;
    background-color: #fff;
    padding: 25px;
    border-radius: 5px;
  }

  form {
    width: 100%;
    max-width: 300px;
    margin: auto;
  }

  form input {
    width: 100%;
    height: 40px;
    border-color: #eeeeec;
    border-radius: 5px;
    outline: none;
    padding: 0 20px;
    background: #f2f2f1;
    font-size: 13px;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
    letter-spacing: 0.1px;
    margin-bottom: 0px;
    margin-top: 10px;
    transition: all 0.6s ease-in-out;
  }
  form input:focus {
    border-color: #336cff;
    background: #fff;
  }

  .checkbox {
    margin-bottom: 101px;
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: left;
    align-items: center;
    border-radius: 5px;
    font-size: 13px;
    font-weight: 400;
    font-family: "Poppins", sans-serif;
    letter-spacing: 0.8px;
  }

  .checkbox input {
    width: 20px;
    height: 20px;
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    background-color: #336cff;
    border: 1px solid #336cff;
    border-color: #336cff;
    transition: all 0.6s ease-in-out;
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
    border-color: #336cff;
    color: #fff;
    font-size: 13px;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
    letter-spacing: 0.1px;
    transition: all 0.6s ease-in-out;
  }

  .gform-submit {
    width: 200px;
    margin-top: 10px;
    height: 40px;
    border-radius: 5px;
    font-size: 13px;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
    letter-spacing: 0.1px;
    transition: all 0.6s ease-in-out;
    align-items: center;
    justify-content: center;
  }
  p {
    color: red;
    font-size: 13px;
  }
`;

export default Login;
