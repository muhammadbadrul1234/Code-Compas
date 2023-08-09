import React, { useState, useEffect } from 'react';
import { db, app } from "./firebase";
import "firebase/firestore";


export const FetchDataById = ({ documentId }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = db.collection("problemset").doc(documentId);
        const docSnapshot = await docRef.get();
        if (docSnapshot.exists) {
          setData(docSnapshot.data());
        } else {
          console.log("Document not found!");
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [documentId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data ? (
        <div>
          <h2>Data for ID: {documentId}</h2>
          <p>Name: {data.name}</p>
          <p>Age: {data.age}</p>
          {/* Add other fields you have in your data */}
        </div>
      ) : (
        <div>No data found for ID: {documentId}</div>
      )}
    </div>
  );
};


