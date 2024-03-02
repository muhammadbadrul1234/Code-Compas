import React from "react";
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import HomeNavbar from "../LandingPage/Components/Navbar";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
} from "firebase/auth";
import { auth, db } from "../firebase";
import {
  collection,
  getCollection,
  getDocs,
  addDoc,
  setDoc,
  doc,
} from "firebase/firestore";
import styled from "styled-components";
import app from "../firebase";
import BannerBackground from "./assets/home-banner-background.png";
import Modal from "../Modals/SignUp/Modal";
import UserNavbar from "../Navbar/Navbar";

const Signup = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  };

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const [signupError, setSignupError] = useState(null);
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const toggle = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    if (!formErrors) {
      signup();
    }
  };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
      signup();
    }
  }, [formErrors]);

  const signup = async (e) => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        formValues.email,
        formValues.password
      );
      console.log(user);
      console.log("user created");
      sendEmailVerification(auth.currentUser);
      const docRef = doc(db, "UserData", formValues.email);
      const docRef1 = doc(db, "purchasedata", formValues.email);
      const docRef2 = doc(db, "problemdata", formValues.email);
      const result = await setDoc(
        docRef,
        {
          firstName: formValues.firstName,
          lastName: formValues.lastName,
          email: formValues.email,
          mobile: formValues.phone,
          role: "User",
        },
        { merge: true }
      );
      const result1 = await setDoc(
        docRef1,
        {
          email: formValues.email,
        },
        { merge: true }
      );
      const result2 = await setDoc(
        docRef2,
        {
          email: formValues.email,

        },
        { merge: true }
      );
      setOpenModal(true);
    } catch (error) {
      const errorMessage = error.message;
      if (errorMessage.includes("auth/email-already-in-use")) {
        setSignupError(
          "The email address is already in use by another account."
        );
      } else {
        // Handle other errors
        setSignupError(errorMessage);
      }

      console.log("cant create user");
    }
  };

  const validate = (values) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const mobileRegex = /^(?:\+8801\d{9}|\b01\d{9}\b)$/;
    if (!values.firstName) {
      errors.firstName = "First name is required!";
    }
    if (!values.lastName) {
      errors.lastName = "Last name is required!";
    }
    if (!values.confirmPassword) {
      errors.confirmPassword = "This field is required!";
    }

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!values.phone) {
      errors.phone = "Phone is required!";
    } else if (!mobileRegex.test(values.phone)) {
      errors.phone = "This is not a valid number";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }
    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "Password does not match";
    }
    return errors;
  };

  return (
    <>
      <UserNavbar />
      <div>
        <button
          onClick={() => setOpenModal(true)}
          className="modalButton"
        ></button>
        <Modal open={openModal} onClose={() => setOpenModal(false)} />
      </div>
      <Signupsection className="signup">
        <div className="container mt-5">
          <div className="home-bannerImage-container">
            <img src={BannerBackground} alt="" />
          </div>

          <div className="signup-content">
            <div className="signup-form"></div>
            <h2>Create your Account</h2>

            <form className="register-form" id="register-form">
              <p>{signupError}</p>
              {/* First Name */}
              <div className="signup-form-group">
                <label htmlFor="firstname"></label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  autoComplete="on"
                  placeholder="First Name"
                  onChange={handleChange}
                  value={formValues.firstName}
                />
                <p>{formErrors.firstName}</p>
              </div>

              {/* Last Name */}
              <div className="signup-form-group">
                <label htmlFor="last-name"></label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  autoComplete="off"
                  placeholder="Last Name"
                  onChange={handleChange}
                  value={formValues.lastName}
                />
                <p>{formErrors.lastName}</p>
              </div>

              {/* Email */}
              <div className="signup-form-group">
                <label htmlFor="email"></label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  placeholder="Email"
                  onChange={handleChange}
                  value={formValues.email}
                />
                <p>{formErrors.email}</p>
              </div>

              {/* Phone */}
              <div className="signup-form-group">
                <label htmlFor="phone"></label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="off"
                  placeholder="Phone"
                  onChange={handleChange}
                  value={formValues.phone}
                />
                <p>{formErrors.phone}</p>
              </div>

              {/* Password */}
              <div className="signup-form-group">
                <label htmlFor="password"></label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  id="password"
                  autoComplete="off"
                  placeholder="Password"
                  onChange={handleChange}
                  value={formValues.password}
                />
                <p>{formErrors.password}</p>
              </div>

              {/* Confirm Password */}
              <div className="signup-form-group">
                <label htmlFor="confirm-password"></label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="confirmPassword"
                  id="confirmPassword"
                  autoComplete="off"
                  placeholder="Confirm Password"
                  onChange={handleChange}
                  value={formValues.confirmPassword}
                />
                <p>{formErrors.confirmPassword}</p>
              </div>

              {/* Checkbox */}
              <div className="checkbox">
                <input
                  type="checkbox"
                  name="checkbox"
                  id="checkbox"
                  className="checkbox"
                  onChange={toggle}
                />{" "}
                Show Password
              </div>
              <div>
                <a href="/login">Already have an account?</a>
              </div>
              {/* Submit */}
              <div className="form-group form-button">
                <input
                  type="submit"
                  name="signup"
                  id="signup"
                  className="form-submit"
                  value="Signup"
                  onClick={handleSubmit}
                />
              </div>
              {/* <div className="or">
                <span>Or</span>
              </div> */}
              {/* Google Signup
              <div className="gform-group form-button">
                <input
                  type="gsubmit"
                  name="gsignup"
                  id="gsignup"
                  className="gform-submit"
                  value="Signup with Google"
                  // onClick={handleSignUp}
                />
              </div> */}
            </form>
          </div>
        </div>
      </Signupsection>
    </>
  );
};

const Signupsection = styled.section`
  /* SignupComponent.css */

  /* SignupComponent.css */
  p {
    color: red;
    font-size: 13px;
  }

  .modal-wrapper {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background-color: rgba(189, 189, 189, 0.9);
  }

  body {
    background-color: #f2f2f2;
  }

  div {
    text-align: center;
  }
  .container {
    width: 100%;
    max-width: 500px;
    background-color: #fff;
    padding: 25px;
    border-radius: 5px;
    margin-top: 150px;
    margin-bottom: 200px;
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

  .home-bannerImage-container {
    position: absolute;
    width: 100%;
    top: -100px;
    right: -170px;
    z-index: -2;
    max-width: 1000px;
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
    border-radius: 5px;
    outline: 1;
    padding: 0 20px;
    background: #f2f2f1;
    font-size: 13px;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
    letter-spacing: 0.1px;
    margin-top: 20px;
    transition: all 0.6s ease-in-out;
  }

  form input:focus {
    border: 0.5px solid #336cff;
    transition: all 0.6s ease-in-out;
    background: white;
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

  }


  .gform-submit {
    width: 200px;
    margin-top: 0px;
    height: 0px;
    border-radius: 5px;
    font-size: 13px;
    font-weight: 500;
    font-family: "Poppins", sans-serif;
    letter-spacing: 0.1px;
    transition: all 0.6s ease-in-out;
    align-items: center;
    justify-content: center;
  }
`;

export default Signup;
