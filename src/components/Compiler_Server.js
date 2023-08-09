import React, { useState } from "react";

const CompServer = () => {
  const [code, setCode] = useState("");
  const [input, setInput] = useState("");
  const [lang, setLang] = useState("C");
  const [inputRadio, setInputRadio] = useState("false");
  const [output, setOutput] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("localhost:3001/compilecode", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code, input, lang, inputRadio }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const data = await response.json();
      setOutput(data.output);
    } catch (error) {
        console.log(error);
      setOutput("Error: Failed to compile the code.");
    }
  };

  return (
    <center>
      <h1>Compilex Demo</h1>
      <form onSubmit={handleFormSubmit}>
        <h3>Code</h3>
        <textarea
          rows="13"
          cols="100"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        ></textarea>
        <br />
        <h3>Input</h3>
        <textarea
          rows="10"
          cols="100"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></textarea>
        <br />
        Language :{" "}
        <select value={lang} onChange={(e) => setLang(e.target.value)}>
          <option value="C">C</option>
          <option value="C++">C++</option>
          <option value="Java">Java</option>
          <option value="Python">Python</option>
          <option value="CS">C#</option>
          <option value="VB">VB</option>
        </select>
        Compile With Input :
        <input
          type="radio"
          name="inputRadio"
          value="true"
          checked={inputRadio === "true"}
          onChange={() => setInputRadio("true")}
        />
        Yes
        <input
          type="radio"
          name="inputRadio"
          value="false"
          checked={inputRadio === "false"}
          onChange={() => setInputRadio("false")}
        />
        No
        <br />
        <input type="submit" value="Submit" name="submit" />
      </form>
      <div>
        <h3>Output</h3>
        <pre>{output}</pre>
      </div>
    </center>
  );
};

export default CompServer;

