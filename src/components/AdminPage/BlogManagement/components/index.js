import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Header from "./Header";
import Table from "./Table";
import Add from "./Add";
import Edit from "./Edit";

import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { db } from "../../../firebase";

const BlogDashboard = ({ setIsAuthenticated }) => {
  const [blogs, setBlogs] = useState();
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const getBlogs = async () => {
    const querySnapshot = await getDocs(collection(db, "Blogs"));
    const blogs = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setBlogs(blogs);
  };

  useEffect(() => {
    getBlogs();
  }, []);

  const handleEdit = (id) => {
    const [blog] = blogs.filter((blog) => blog.id === id);

    setSelectedBlog(blog);
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
        const [blog] = blogs.filter((blog) => blog.id === id);

        deleteDoc(doc(db, "Blogs", id));

        Swal.fire({
          icon: "Success",
          title: "Blog Deleted",
          text: ` ${blog.title}'s data has been deleted.`,
          showConfirmButton: false,
          timer: 1500,
        });

        const blogsCopy = blogs.filter((blog) => blog.id !== id);
        setBlogs(blogsCopy);
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
            blogs={blogs}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        </>
      )}
      {isAdding && (
        <Add
          blogs={blogs}
          setBlogs={setBlogs}
          setIsAdding={setIsAdding}
          getBlogs={getBlogs}
        />
      )}
      {isEditing && (
        <Edit
          blogs={blogs}
          selectedBlog={selectedBlog}
          setBlogs={setBlogs}
          setIsEditing={setIsEditing}
          getBlogs={getBlogs}
        />
      )}
    </div>
  );
};

export default BlogDashboard;
