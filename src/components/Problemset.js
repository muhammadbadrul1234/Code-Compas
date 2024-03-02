import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db, app } from "./firebase";
import "firebase/firestore";

import Navbar1 from "./Navbar1";
import Fetch from "./FetchData";
import { useNavigate} from "react-router-dom";
import HomeNavbar from "./LandingPage/Components/Navbar";
import styled from "styled-components";
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
      <HomeNavbar />
      <ProblemsetSection>
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
                  <strong>{problem.category}</strong>
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
      </ProblemsetSection>
    </>
  );
};

const ProblemsetSection = styled.section`
*{
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
}
  h1 {
    margin-top: 100px;
    justify-content: center;
    align-items: center;
    display: flex;
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin-bottom: 10px;
  }

  strong {
    font-weight: bold;
  }

  p {
    color: #666;
  }

  .card {
    display: block;
    margin-bottom: 20px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 3px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
  }
`;

export default Problemset;
