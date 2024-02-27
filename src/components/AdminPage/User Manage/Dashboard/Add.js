import React, { useState } from "react";
import Swal from "sweetalert2";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
} from "firebase/auth";

const Add = ({ users, setUsers, setIsAdding, getUsers }) => {
  const [userType, setUserType] = useState("User");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [date, setDate] = useState("");
  const [password, setPassword] = useState("");

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  const handleAdd = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !mobile || !password || !userType) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    const newUser = {
      firstName,
      lastName,
      email,
      mobile,
      userType
      // date,
    };

    users.push(newUser);

    try {
      const docRef = doc(db, "UserData", email);
      const result = await setDoc(
        docRef,
        {
          firstName: firstName,
          lastName: lastName,
          email: email,
          mobile: mobile,
          role: userType,
        },
        { merge: true }
      );

      const auth = getAuth();

      const user = createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
      console.log("user created");
    } catch (error) {
      console.log(error);
    }
    try {
    } catch (error) {
      console.log(error);
    }

    setUsers(users);
    setIsAdding(false);
    getUsers();

    Swal.fire({
      icon: "success",
      title: "Added!",
      text: `${firstName} ${lastName}'s data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h1>Add User</h1>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="mobile">Mobile</label>
        <input
          id="mobile"
          type="Number"
          name="mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="text"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label htmlFor="userType">User Type</label>
        <select
          id="userType"
          name="userType"
          value={userType}
          onChange={handleUserTypeChange}
        >
          <option value="User">User</option>
          <option value="Admin">Admin</option>
        </select>

        <div style={{ marginTop: "30px" }}>
          <input type="submit" value="Add" />
          <input
            style={{ marginLeft: "12px" }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Add;
