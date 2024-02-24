import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db, app } from "./firebase";
import "firebase/firestore";
import "../css/Problemset.css";
import Navbar1 from "./Navbar1";
import Fetch from "./FetchData";
import { useNavigate} from "react-router-dom";
// Import your Firebase configuration

const Problemset = () => {
  const navigate = useNavigate();
  const [allDocs, setAllDocs] = useState([]);
  const [selectedDocumentId, setSelectedDocumentId] = useState(null);
 

  useEffect(() => {
    console.log("fetching all docs");

    db.collection("problemset")
      .get()
      .then((snapshot) => {
        const docs = snapshot.docs.map((doc) => ({
          documentId: doc.id,
          ...doc.data(),
        }));
        console.log(docs);
        setAllDocs(docs);
      });
  }, []);

  const handleCardClick = (documentId) => {
     navigate("/fetch", { state: { data: documentId } });
    // You can perform additional actions if needed
  };

  return (
    <>
      <Navbar1 />

      <div>
        <h1>Problem Set from Firestore</h1>
        <ul>
          {allDocs.map((problem) => (
            <li key={problem.category1}>
              {/* <Link to={`/description/${problem.documentId}`}> */}
                <div
                  className="card"
                  onClick={() => handleCardClick(problem.documentId)}
                >
                  <strong>{problem.category1}</strong>
                  <strong>{problem.category2}</strong>
                  <strong>{"  : "}</strong>
                  <strong>{problem.name}</strong>
                  <p>
                    {"Rating: "}
                    {problem.rating}
                  </p>
                </div>
              {/* </Link> */}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Problemset;
