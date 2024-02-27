import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Header from "./Header";
import Table from "./Table";
import Add from "./Add";
import Edit from "./Edit";

import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db } from "../../../firebase";

const Dashboard = ({ setIsAuthenticated }) => {
  const [problemSets, setProblemSets] = useState();
  const [selectedProblemSet, setSelectedProblemSet] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const getProblemSets = async () => {
    const querySnapshot = await getDocs(collection(db, "problemset"));
    const problemSets = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setProblemSets(problemSets);
  };

  useEffect(() => {
    getProblemSets();
  }, []);

  const handleEdit = (id) => {
    const [problemSet] = problemSets.filter((problemSet) => problemSet.id === id);

    setSelectedProblemSet(problemSet);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: "Delete",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.value) {
        const [problemSet] = problemSets.filter((problemSet) => problemSet.id === id);

        deleteDoc(doc(db, "problemset",id));

        Swal.fire({
          icon: "Success",
          title: "ProblemSet Deleted",
          text: `${problemSet.firstname} ${problemSet.lastname}'s data has been deleted.`,
          showConfirmButton: false,
          timer: 1500,
        });

        const problemSetsCopy = problemSets.filter(
          (problemSet) => problemSet.id !== id
        );
        setProblemSets(problemSetsCopy);
      }
    });
  };

  return (
    <div className="container">
      {!isAdding && !isEditing && (
        <>
          <Header
            setIsAdding={setIsAdding}
            setIsAuthenticated={setIsAuthenticated}
          />
          <Table
            problemSets={problemSets}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      )}
      {isAdding && (
        <Add
          problemSets={problemSets}
          setProblemSets={setProblemSets}
          setIsAdding={setIsAdding}
          getProblemSets={getProblemSets}
        />
      )}
      {isEditing && (
        <Edit
          problemSets={problemSets}
          selectedProblemSet={selectedProblemSet}
          setProblemSets={setProblemSets}
          setIsEditing={setIsEditing}
          getProblemSets={getProblemSets}
        />
      )}

    </div>
  );
};

export default Dashboard;
