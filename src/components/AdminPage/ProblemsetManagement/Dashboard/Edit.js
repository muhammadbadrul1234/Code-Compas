import React, { useState } from 'react';
import Swal from 'sweetalert2';

import { doc, setDoc } from "firebase/firestore"; 
import { db } from "../../../firebase";

const Edit = ({ problemSets, selectedProblemSet, setProblemSets, setIsEditing, getProblemSets }) => {
  const id = selectedProblemSet.id;



    const [category, setCategory] = useState(selectedProblemSet.category);
    const [rating, setRating] = useState(selectedProblemSet.rating);
    const [name, setName] = useState(selectedProblemSet.name);
    const [description, setDescription] = useState(selectedProblemSet.description);
    const [inputGuide, setInputGuide] = useState(selectedProblemSet.inputGuide);
    const [outputGuide, setOutputGuide] = useState(selectedProblemSet.outputGuide);
    const [input, setInput] = useState(selectedProblemSet.input);
    const [output, setOutput] = useState(selectedProblemSet.output);
    const [source, setSource] = useState(selectedProblemSet.source);
  


  const handleUpdate = async (e) => {
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

    const problemSet = {
      id,
      category,
      rating,
      name,
      description,
      inputGuide,
      outputGuide,
      input,
      output,
      source
    };

    await setDoc(doc(db, "problemset", id), {
      ...problemSet
    });

    setProblemSets(problemSets);
    setIsEditing(false);
    getProblemSets()

    Swal.fire({
      icon: 'success',
      title: 'Updated!',
      text: `${problemSet.category} ${problemSet.name}'s data has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h1>Edit ProblemSet</h1>
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
          <input type="submit" value="Update" />
          <input
            style={{ marginLeft: "12px" }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Edit;
