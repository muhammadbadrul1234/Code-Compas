// ProfilePage.js

import React, { useEffect, useState } from "react";
import firebase from "firebase/app";
import { firestore } from "../../firebase";
import Box from "@mui/material/Box";
import styled from "styled-components";
import CNavbar from "../Home Page/ccomponents/CNavbar";
import Sidenav from "../Home Page/ccomponents/Sidenav";
import { auth, db } from "../../firebase";
import {
  getDatabase,
  ref,
  orderByChild,
  equalTo,
  get,
} from "firebase/database";
import {
  collection,
  getCollection,
  getDocs,
  addDoc,
  setDoc,
  doc,
} from "firebase/firestore";

const AdminProfilePage = ({ userId }) => {
  const [userData, setUserData] = useState(null);
  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const x = auth.currentUser.email;
  const dataArray = [];
  const firstItem = dataArray.length > 0 ? dataArray[0] : null;

  const purchasesRef = firestore.collection("UserData");

  const handleSubmit = () => {
    setIsEditing(true);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      const userRef = firestore.collection("UserData").doc(x);

      try {
        const userDoc = await userRef.get();
        if (userDoc.exists) {
          setUserData(userDoc.data());
          console.log(userDoc.data());
        } else {
          setError(new Error("Data not found."));
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    const fetchCourses = async () => {
      const userRef = firestore.collection("purchasedata").doc(x);

      try {
        const userDoc = await userRef.get();
        if (userDoc.exists) {
          setCourseData(userDoc.data());
          console.log("Course Data: ", courseData);
        } else {
          setError(new Error("Data not found."));
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    const fetchProblemset = async () => {
      const userRef = firestore.collection("problemdata").doc(x);

      try {
        const userDoc = await userRef.get();
        if (userDoc.exists) {
          setCourseData(userDoc.data());
          console.log("Course Data: ", courseData);
        } else {
          setError(new Error("Data not found."));
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
    fetchUserData();
  }, [userId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (courseData.courseName.length === 0) {
    return <div>No course found.</div>;
  }

  return (
    <div style={{ marginLeft: "70px" }}>
      {/* <CNavbar />
      <Box height={170} />
      <Box sx={{ display: "flex" }}></Box>
      <Sidenav /> */}
      <AdminProfileSection>
        <div>
          <h1>
            {userData.firstName}&nbsp;{userData.lastName}'s Profile
          </h1>
          <div
            style={{
              background: "#f0f0f0",
              padding: "10px",
              borderRadius: "10px",
              marginRight: "20px",
              marginLeft: "20px",
              marginTop: "5px",
            }}
          >
            <p>
              <strong>Name:</strong> {userData.firstName}&nbsp;
              {userData.lastName}
            </p>
            <p>
              <strong>Email:</strong> {userData.email}
            </p>
            <p>
              <strong>Phone:</strong> {userData.mobile}
            </p>
            <p>
              <strong>Role:</strong> {userData.role}
            </p>
          </div>

          <div className="form">
            <button className="form-submit" onClick={handleSubmit}>
              Edit
            </button>
          </div>
        </div>
        <div
          style={{
            marginTop: "40px",
          }}
        ></div>

        <div>
          <h1>Bought Courses</h1>
          <div
            style={{
              background: "#f0f0f0",
              padding: "10px",
              borderRadius: "10px",
              marginRight: "20px",
              marginLeft: "20px",
              marginTop: "5px",
            }}
          >
            <table>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Course Name</th>
                </tr>
              </thead>
              <tbody>
                {courseData.courseName.map((course, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{course}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <hr />
          </div>
        </div>
        <div
            style={{

              marginTop: "40px",
            }}
          ></div>

        <div>
          <h1>Solved Problems</h1>
          <div
            style={{
              background: "#f0f0f0",
              padding: "10px",
              borderRadius: "10px",
              marginRight: "20px",
              marginLeft: "20px",
              marginTop: "5px",
            }}
          >
            <table>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Problem Name</th>
                </tr>
              </thead>
              <tbody>
                {courseData.courseName.map((course, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{course}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <hr />
          </div>
        </div>
      </AdminProfileSection>
    </div>
  );
};

const AdminProfileSection = styled.section`
  h1 {
    justify-content: center;
    align-items: center;
    display: flex;
  }
  * {
  }
  p {
    font-size: 25px;
  }

  table {
    font-size: 20px;
    border-collapse: collapse;
    width: 100%;
    border-radius: 5px;
  }

  th,
  td {
    border: 1px solid blue;
    text-align: left;
    padding: 8px;
    border-radius: 5px;
  }

  th {
    background-color: #f2f2f2;
  }
  .form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;
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
    justify-content: center;
    align-items: center;
    display: flex;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    margin-top: 10px;
    font-size: 20px;
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

export default AdminProfilePage;
