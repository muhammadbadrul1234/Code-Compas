import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db, app } from "./firebase";
import "firebase/firestore";
import "../css/Problemset.css";
import Navbar1 from "./Navbar1";


const Problemset = () => {
  const [allDocs, setAllDocs] = useState([]);

  useEffect(() => {
    console.log("fetching all docs");

    db.collection("problemset")
      .get()
      .then((snapshot) => {
        const docs = snapshot.docs.map((doc) => doc.data());
        console.log(docs);
        setAllDocs(docs);
      });
  }, []);

  return (
    <>
      <Navbar1 />

      <div>
        <h1>Problem Set from Firestore</h1>
        <ul>
          {allDocs.map((problem) => (
            <li key={problem.category1}>
              <Link to={`/description/${problem.id}`}>
                <div className="card">
                  <strong>{problem.category1}</strong>
                  <strong>{problem.category2}</strong>
                  <strong>{"  : "}</strong>
                  <strong>{problem.name}</strong>
                  <p>
                    {"Rating: "}
                    {problem.rating}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Problemset;


