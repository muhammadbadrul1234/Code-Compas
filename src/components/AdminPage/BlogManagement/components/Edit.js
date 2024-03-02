import React, { useState } from 'react';
import Swal from 'sweetalert2';

import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../firebase";

const Edit = ({ blogs, selectedBlog, setBlogs, setIsEditing, getBlogs }) => {
  const id = selectedBlog.id;
    const [title, settitle] = useState(selectedBlog.title);
  const [description, setDescription] = useState(selectedBlog.description);
  const [date, setUploadDate] = useState(selectedBlog.date);

  const getCurrentDateTime = () => {
    const currentDate = new Date();

    // Get date components
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Months are zero-based
    const day = currentDate.getDate();

    // Get time components
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    // Add leading '0' if minutes or seconds are less than 10
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

    // Format the date and time
    const formattedDateTime = `${year}-${month < 10 ? "0" + month : month}-${
      day < 10 ? "0" + day : day
    } ${hours}:${formattedMinutes}:${formattedSeconds}`;

    return formattedDateTime;
  };
  

  const handleUpdate = async (e) => {
    e.preventDefault();
    const editDate = getCurrentDateTime();

    if (

      !title ||
      !description
    ) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    const blog = {

      title,
      description,
      date,
      editDate,


    };

    await setDoc(doc(db, "Blogs", id), {
      ...blog
    });

    setBlogs(blogs);
    setIsEditing(false);
    getBlogs()

    Swal.fire({
      icon: 'success',
      title: 'Updated!',
      text: `${blog.title}'s data has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleUpdate}>
        <h1>Edit Blog</h1>
       
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />

        <label htmlFor="description">Description</label>
        <input
          id="description"
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
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
