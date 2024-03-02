import React from "react";
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";
import styled from "styled-components";
import HomeNavbar from "../LandingPage/Components/Navbar";
import Swal from "sweetalert2";
import UserNavbar from "../Navbar/Navbar";
import BannerBackground from "./assets/home-banner-background.png";

const Reset = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
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

  const reset = async (e) => {
      try {
          const user = await sendPasswordResetEmail(auth, formValues.email);
          console.log(user);

          
    } catch (error) {
      console.log(error.message);
      const errorMessage = error.message;
      const role = await getUserRole(formValues.email);
      console.log(role);
      if (errorMessage.includes("auth/wrong-password")) {
        setLoginError("Wrong Password");
      } else if (errorMessage.includes("auth/user-not-found")) {
        setLoginError("No Registered User Found");
      } else if (errorMessage.includes("auth/too-many-requests")) {
        setLoginError("Too Many Requests");
      } else {
        setLoginError(errorMessage);
      }

      if (!role && errorMessage.includes("auth/user-not-found") ) {
        setLoginError("No Registered User Found");
          }
      else {
          setLoginError("User Banned! Contact The Admin");
          
          }
    }
  };

  const getUserRole = async (email) => {
    try {
      // Reference to the user document based on their email
      const userDocRef = doc(db, "UserData", email);

      // Retrieve the user document from Firestore
      const userDocSnapshot = await getDoc(userDocRef);

      if (userDocSnapshot.exists()) {
        // If the user document exists, get the 'role' field
        const userData = userDocSnapshot.data();
        const userRole = userData.role;

        // Now you have the user's role
        console.log("User Role:", userRole);

        return userRole;
      } else {
        console.log("User not found in Firestore");
        return null;
      }
    } catch (error) {
      console.error("Error fetching user data:", error.message);
      return null;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
        console.log(formValues);
        reset();
        return Swal.fire({
          icon: "Success",
          title: "Success!",
          text: "Password Reset Email Sent",
          showConfirmButton: true,
          customClass: {
            confirmButton: "btn-custom-color", // Add your custom class here
          },
        }).then(() => {
          window.location.href = "/login";
        });

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

    return errors;
  };

  return (
    <>
      <UserNavbar />
      <LoginSection className="Login">
        <div className="container mt-5">
          <div className="home-bannerImage-container">
            <img src={BannerBackground} alt="" />
          </div>
          <div className="Login-content">
            <div className="Login-h"></div>
            <h2>Reset Password</h2>
            <form className="Login-form" id="Login-form">
              <p>{loginError}</p>
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

              {/* {error && <span>Wrong Email or Password</span>} */}

              {/* Checkbox */}

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
                  value="Reset Password"
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
  .home-bannerImage-container {
    position: absolute;
    width: 100%;
    top: -100px;
    right: -170px;
    z-index: -2;
    max-width: 1000px;
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
    margin-top: 20px;
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

export default Reset;
