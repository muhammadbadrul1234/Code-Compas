// src/App.js (or any other component)
import React from "react";
import { FetchDataById } from "./FullDescription";
import { Header } from "./Header";
import "../css/Fetch.css";
import { useEffect, useState } from "react";
import axios from "axios";
import qs from "qs";
import "../css/Compiler.css";
import Compiler_comp from "./Compiler_comp";

const Fetch = () => {
    const documentId = "OH36fIXXcLtyvFxRIy73";
    



    const [responseData, setResponseData] = useState(null);

    const submitHandler = async (e) => {
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

  return (
    <>
      <Header />
      <div className="main">
        <div className="left">
          <div>
            <h1>Fetching Data by ID</h1>
            <FetchDataById documentId={documentId} />
          </div>
        </div>
        <div className="right">
          <Compiler_comp/>
          
        </div>
      </div>
    </>
  );
};

export default Fetch;
