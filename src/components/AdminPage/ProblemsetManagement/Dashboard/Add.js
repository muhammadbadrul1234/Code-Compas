import React, { useState } from "react";
import Swal from "sweetalert2";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase";

const Add = ({ problemSets, setProblemSets, setIsAdding, getProblemSets }) => {
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [inputGuide, setInputGuide] = useState("");
  const [outputGuide, setOutputGuide] = useState("");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [source, setSource] = useState("");

  const handleAdd = async (e) => {
    e.preventDefault();
    if (
      !category ||
      !rating ||
      !name ||
      !description ||
      !inputGuide ||
      !outputGuide ||
      !input ||
      !output ||
      !source
    ) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }
    try {
      const docRef = doc(db, "problemset", category);
      const result = await setDoc(
        docRef,
        {
          category: category,
          rating: rating,
          name: name,
          description: description,
          inputGuide: inputGuide,
          outputGuide: outputGuide,
          input: input,
          output: output,
          source: source
        },
        { merge: true }
      );

      if (result) {
        console.log("problemSet created");
      }

      console.log("problemSet created");
    } catch (error) {
      console.log(error);
    }

    setProblemSets(problemSets);
    setIsAdding(false);
    getProblemSets();

    Swal.fire({
      icon: "success",
      title: "Added!",
      text: `${category} ${name}'s data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h1>Add ProblemSet</h1>

        <label htmlFor="Source">Source</label>
        <select
          id="Source"
          name="Source"
          value={source}
          onChange={(e) => setSource(e.target.value)}
        >
          <option value="New">New</option>
          <option value="Codeforces">Codeforces</option>
          <option value="Codechef">Codechef</option>
          <option value="vJudge">vJudge</option>
          <option value="HackerRank">HackerRank</option>
          <option value="Leetcode">Leetcode</option>
        </select>
        <label htmlFor="firstName">Category</label>
        <input
          id="category"
          type="text"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <label htmlFor="rating">Rating</label>
        <input
          id="rating"
          type="text"
          name="rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />

        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="description">Description</label>
        <input
          id="description"
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label htmlFor="inputGuide">Input Guide</label>
        <input
          id="inputGuide"
          type="text"
          name="inputGuide"
          value={inputGuide}
          onChange={(e) => setInputGuide(e.target.value)}
        />

        <label htmlFor="outputGuide">Output Guide</label>
        <input
          id="outputGuide"
          type="text"
          name="outputGuide"
          value={outputGuide}
          onChange={(e) => setOutputGuide(e.target.value)}
        />

        <label htmlFor="input">Input</label>
        <input
          id="input"
          type="text"
          name="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <label htmlFor="output">Output</label>
        <input
          id="output"
          type="text"
          name="output"
          value={output}
          onChange={(e) => setOutput(e.target.value)}
        />

        <div style={{ marginTop: "30px" }}>
          <input type="submit" value="Add" />
          <input
            style={{ marginLeft: "12px" }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Add;
