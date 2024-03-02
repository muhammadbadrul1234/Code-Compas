// src/App.js (or any other component)
import React from "react";
import { FetchDataById } from "./FullDescription";

import "../css/Fetch.css";
import { useEffect, useState } from "react";
import axios from "axios";
import qs from "qs";
// import "../css/Compiler.css";
import Compiler_comp from "./Compiler_comp";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import UserNavbar from "./Navbar/Navbar";
import HomeNavbar from "./LandingPage/Components/Navbar";
import { db, app, auth } from "./firebase";
import {
  collection,
  getCollection,
  getDocs,
  addDoc,
  setDoc,
  doc,
  arrayUnion,
  updateDoc,
} from "firebase/firestore";
import styled from "styled-components";

const Fetch = (props) => {
  const [fdata, setfData] = useState(null);
  const [ac, setAc] = useState("");
  // const documentId = "HpKm1Z25GUJzKPh6i9cj";
  const location = useLocation();
  const { data } = location.state || {};
  const documentId = data;
  const [problemName, setProblemName] = useState("");
  const[input,setInput]=useState(null)
  // console.log(data);
  // const { documentId } = useParams();

  const [responseData, setResponseData] = useState(null);

  const submitHandle = async (e) => {
    e.preventDefault();
    const code = e.target.code.value;
    const input = "";
    const language = e.target.language.value;
    const inputRadio = true;

    const data = qs.stringify({
      code: code,
      language: language,
      input: inputRadio === "true" ? input : "",
    });

    const config = {
      method: "post",
      url: "https://api.codex.jaagrav.in",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };

    try {
      const response = await axios(config);
      setResponseData(response.data);
      console.log(response.data);
      console.log(response.data.output);
      console.log(response.data.timestamp);
      // Store the response data in the state
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = db.collection("problemset").doc(documentId);
        const docSnapshot = await docRef.get();
        if (docSnapshot.exists) {
          setfData(docSnapshot.data());
          //  console.log(fdata.name);
        } else {
          console.log("Document not found!");
        }
      } catch (error) {
        console.error("Error fetching document:", error);
      } finally {
      }
      console.log("input is :",fdata.input);
      if (fdata.input) {
                setInput(fdata.input);
        console.log(input);
        console.log("we arre");
        
      }

    };

    fetchData();
  }, [documentId]);

  const solvedProblem = problemName;
  const datawrite = async (e) => {
    const docRef = doc(db, "problemdata", auth.currentUser.email);

    await updateDoc(docRef, {
      solvedProblem: arrayUnion(solvedProblem),
    });

  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const code = e.target.code.value;
    const input = "";
    const language = e.target.language.value;
    const inputRadio = true;

    const data = qs.stringify({
      language: "python3",
      version: "latest",
      code: code,
      input: null,
    });

    // const config = {
    //   method: "post",
    //   url: "https://api.codex.jaagrav.in",
    //   headers: {
    //     "Content-Type": "application/x-www-form-urlencoded",
    //   },
    //   data: data,
    // };
    //////////////////////////////

    const options = {
      method: "POST",
      url: "https://online-code-compiler.p.rapidapi.com/v1/",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "868374e82amsh5c51f30ed8add07p17f0f4jsn75cba2343c00",
        "X-RapidAPI-Host": "online-code-compiler.p.rapidapi.com",
      },
      data: {
        language: language,
        version: "latest",
        code: code,
        input: input,
      },
    };

    // try {
    //   const response = await axios.request(options);
    //   console.log(response.data);
    // } catch (error) {
    //   console.error(error);
    // }

    ///////////////////////////
    try {
      const response = await axios(options);
      setResponseData(response.data);
      // console.log(response.data);
      // console.log(response.data.output);
      // console.log(response.data.timestamp);

      // Store the response data in the state
    } catch (error) {
      console.log(error.response.data);
    }

    const xy = fdata.category + ": " + fdata.output;
    setProblemName(xy);

    console.log(responseData);
    console.log(fdata);

    if (fdata.output === responseData.output) {
      const ss = "Accepted";
      setAc(ss);
      datawrite();
    } else {
      console.log("Wrong Answer");
      const ss = "Wrong Answer";
      setAc(ss);
      
    }
  };
  useEffect(() => {
    // Log the current ac status for debugging purposes
    console.log("Current ac status:", ac);
  }, [ac]);

  return (
    <>
      <HomeNavbar />
      <div className="main">
        <div className="left">
          <div>
            <h1>Fetching Data by ID</h1>
            <p></p>
            <FetchDataById documentId={documentId} />
          </div>
        </div>
        <EditorComponent>
          <div className="right">
            {/* <Compiler_comp /> */}
            <center>
              <section className="compiler">
                <div className="compiler">
                  {/* <h1>Problem</h1> */}
                  <p>
                    {/* Write a program to print "Hello World" in a input loop the
              language of your choice. */}
                  </p>
                  {/* sample input */}
                  <p></p>
                  {/* sample output */}
                  {/* <p>Hello World</p> */}
                </div>
                <div className="compiler">
                  <h1>Code</h1>
                  <form id="myform" name="myform" onSubmit={submitHandler}>
                    <textarea
                      className="code"
                      id="code"
                      rows="13"
                      cols="100"
                      name="code"
                    ></textarea>
                    <br />
                    LANGUAGE:{" "}
                    <select name="language">
                      <option value="python3">Python</option>
                      <option value="c">C</option>
                      <option value="cpp17">C++</option>
                      <option value="java">Java</option>

                      {/* <option value="Go">GoLang</option>
                <option value="cs">C-Sharp</option>
                <option value="js">NodeJS</option> */}
                    </select>
                    <br />
                    {/* Compile With input:
              <input type="radio" name="inputRadio" value="true" /> Yes
              <input type="radio" name="inputRadio" value="false" /> No */}
                    <br />
                    <input type="submit" value="submit" name="submit" />
                  </form>
                  <h2
                    className="ac"
                    style={{ color: ac === "Accepted" ? "green" : "red" }}
                  >
                    {ac}
                  </h2>
                </div>
                <div>
                  {responseData ? (
                    <pre>
                      {/* {JSON.stringify(responseData, null, 2)} */}
                      <table>
                        <thead>
                          <th>Expected Output</th>
                          <th>Your Output</th>
                          <th>Problem</th>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{fdata.output}</td>
                            <td>{responseData.output}</td>
                            <td>{responseData.error}</td>
                          </tr>
                        </tbody>
                      </table>

                      <p style={{ color: "red" }}></p>
                    </pre>
                  ) : (
                    ""
                  )}
                </div>
              </section>
              
            </center>
            
          </div>
          
        </EditorComponent>
       
      </div>
    </>
  );
};

const EditorComponent = styled.div`
  table,
  thead,
  th,
  tbody {
    padding: 1rem;
    width: 20px;
  }

  .compiler1 {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  textarea {
    width: 100%;
    min-height: 150px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    resize: vertical;
  }

  .main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    flex-direction: column;
    grid-column-gap: 10px;

    padding: 10px;
  }

  .left {
    display: flex;
    flex-direction: column;

    background-color: #cecece;
    border-radius: 20px;
    padding: 20px;
    height: 100vh;
  }
  .right {
    display: flex;
    flex-direction: column;

    background-color: #cecece;
    border-radius: 20px;
    padding: 20px;
    height: 100vh;
  }
`;

export default Fetch;
