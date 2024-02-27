import React, { useState } from 'react';
import Swal from 'sweetalert2';

import { doc, setDoc } from "firebase/firestore"; 
import { db } from "../../../firebase";

const Edit = ({ users, selectedUser, setUsers, setIsEditing, getUsers }) => {
  const id = selectedUser.id;

  const [firstName, setFirstName] = useState(selectedUser.firstName);
  const [lastName, setLastName] = useState(selectedUser.lastName);
  const [email, setEmail] = useState(selectedUser.email);
  const [mobile, setMobile] = useState(selectedUser.mobile);
  const [date, setDate] = useState(selectedUser.date);
  const [role, setUserType] = useState(selectedUser.role);

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !mobile ) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'All fields are required.',
        showConfirmButton: true,
      });
    }

    const user = {
      id,
      firstName,
      lastName,
      email,
      mobile,
      role

    };

    await setDoc(doc(db, "UserData", id), {
      ...user
    });

    setUsers(users);
    setIsEditing(false);
    getUsers()

    Swal.fire({
      icon: 'success',
      title: 'Updated!',
      text: `${user.firstName} ${user.lastName}'s data has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h1>Edit User</h1>
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

        <label htmlFor="mobile">Mobile</label>
        <input
          id="mobile"
          type="Number"
          name="mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />

        <label htmlFor="userType">User Type</label>
        <select
          id="userType"
          name="userType"
          value={role}
          onChange={handleUserTypeChange}
        >
          <option value="User">User</option>
          <option value="Admin">Admin</option>
        </select>

        <div style={{ marginTop: "30px" }}>
          <input type="submit" value="Update" />
          <input
            style={{ marginLeft: "12px" }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Edit;
