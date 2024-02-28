// ProfilePage.js

import React, { useEffect, useState } from "react";
import firebase from "firebase/app";
import { firestore } from "../firebase";

const ProfilePage = ({ userId }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
      const fetchUserData = async () => {
          const x = "admin@gmail.com";

      const userRef = firestore.collection("UserData").doc("admin@gmail.com");

      try {
        const userDoc = await userRef.get();
        if (userDoc.exists) {
          setUserData(userDoc.data());
        } else {
          setError(new Error("Data not found."));
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>
        {userData.firstName}&nbsp;{userData.lastName}'s Profile
      </h1>
      <p>
        Name: {userData.firstName}&nbsp;{userData.lastName}
      </p>
      <p>Email: {userData.email}</p>
      <p>Phone: {userData.mobile}</p>
    </div>
  );
};

export default ProfilePage;
