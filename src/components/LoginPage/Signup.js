import React from "react";
import ReactDOM from "react-dom/client";
import { useState } from "react";

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

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const toggle = () => {
    setShowPassword(!showPassword);
  };


  const signup = async (e) => {
    e.preventDefault();
    
    try {
      // navigate("/home");
      
      
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
      console.log("user created");
      sendEmailVerification(auth.currentUser);
      const docRef = doc(db, "UserData", email);
      const result = await setDoc(
        docRef,
        { firstname: firstName, lastname: lastName, email: email, phone: phone },
        { merge: true }
        
      );
      setOpenModal(true);
      
      


    } catch (error) {
      console.log(error.message);
      console.log("cant create user");

    }

  };

  return (
    <>
      <HomeNavbar />
      <div>
        <button onClick={() => setOpenModal(true)} className="modalButton"></button>
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
              {/* First Name */}
              <div className="signup-form-group">
                <label htmlFor="firstname"></label>
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  autoComplete="off"
                  placeholder="First Name"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              {/* Last Name */}
              <div className="signup-form-group">
                <label htmlFor="last-name"></label>
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="off"
                  placeholder="Last Name"
                  onChange={(e) => setLastName(e.target.value)}
                />
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
                  onChange={(e) => setEmail(e.target.value)}
                />
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
                  onChange={(e) => setPhone(e.target.value)}
                />
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
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {/* Confirm Password */}
              <div className="signup-form-group">
                <label htmlFor="confirm-password"></label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="confirm-password"
                  id="confirm-password"
                  autoComplete="off"
                  placeholder="Confirm Password"
                />
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
                  onClick={signup}
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
    margin-bottom: 20px;
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
`;

export default Signup;
