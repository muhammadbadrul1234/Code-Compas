import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Header from "./Header";
import Table from "./Table";
import Add from "./Add";
import Edit from "./Edit";

import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db } from "../../../firebase";

const Dashboard = ({ setIsAuthenticated }) => {
  const [users, setUsers] = useState();
  const [selectedUser, setSelectedUser] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const getUsers = async () => {
    const querySnapshot = await getDocs(collection(db, "UserData"));
    const users = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setUsers(users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handleEdit = (id) => {
    const [user] = users.filter((user) => user.id === id);

    setSelectedUser(user);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    Swal.fire({
      icon: "warning",
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonText: "Yes, block!",
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.value) {
        const [user] = users.filter((user) => user.id === id);

        deleteDoc(doc(db, "UserData",id));

        Swal.fire({
          icon: "Success",
          title: "User Blocked!",
          text: `${user.firstname} ${user.lastname}'s data has been deleted.`,
          showConfirmButton: false,
          timer: 1500,
        });

        const usersCopy = users.filter(
          (user) => user.id !== id
        );
        setUsers(usersCopy);
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
            users={users}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      )}
      {isAdding && (
        <Add
          users={users}
          setUsers={setUsers}
          setIsAdding={setIsAdding}
          getUsers={getUsers}
        />
      )}
      {isEditing && (
        <Edit
          users={users}
          selectedUser={selectedUser}
          setUsers={setUsers}
          setIsEditing={setIsEditing}
          getUsers={getUsers}
        />
      )}

    </div>
  );
};

export default Dashboard;
