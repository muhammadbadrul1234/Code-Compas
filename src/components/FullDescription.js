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
          <h5>ID: {documentId}</h5>
          <h3>Name: {data.name}</h3>
          <p>Description: {data.description}</p>
          {/* Add other fields you have in your data */}
          <h4>Guide:</h4>
          <p>Input Guide: {data.inputGuide}</p>
          <p>Output Guide: {data.outputGuide}</p>
          <h4>Example:</h4>
          <div
            style={{
              background: "navy",
              color: "white",
              
              padding: "10px",
              borderRadius: "10px",
              marginRight: "20px",
              marginLeft: "20px",
            }}
          >
            <p>{data.input}</p>
            <p>{data.output}</p>
          </div>
        </div>
      ) : (
        <div>No data found for ID: {documentId}</div>
      )}
    </div>
  );
};


