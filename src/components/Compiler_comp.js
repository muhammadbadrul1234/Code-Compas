import React, { useEffect, useState, version } from "react";
import axios from "axios";
import qs from "qs";
import "../css/Compiler.css";

const Compiler_comp = () => {
  const [responseData, setResponseData] = useState(null);

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
      data:{
        language: language,
        version: "latest",
        code: code,
        input: null,
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
      console.log(response.data);
      console.log(response.data.output);
      console.log(response.data.timestamp);
      // Store the response data in the state
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <>
      <center>
        <section className="compiler">
          <div className="compiler">
            {/* <h1>Problem</h1> */}
            <p>
              {/* Write a program to print "Hello World" in a input loop the
              language of your choice. */}
            </p>
            {/* sample input */}
            <p>1</p>
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
                {/* <option value="c">C</option>
                <option value="cpp">C++</option>
                <option value="java">Java</option> */}
                <option value="python3">Python</option>
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
          </div>
          <div>
            {responseData ? (
              <pre>
                {/* {JSON.stringify(responseData, null, 2)} */}
                <table>
                  <thead>
                    <th>Expected Output</th>
                    <th>Your Output</th>
                    <th>Result</th>
                    <th>Comment</th>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{responseData.output}</td>
                      <td>{responseData.output}</td>
                      <td>AC</td>
                      <td>{responseData.error}</td>
                    </tr>
                  </tbody>
                </table>
              </pre>
            ) : (
              ""
            )}

          </div>
        </section>
      </center>
    </>
  );
};

export default Compiler_comp;
