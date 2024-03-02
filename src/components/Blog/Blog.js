import React, { useState, useEffect } from "react";
import { firestore } from "../firebase";
import Post from "./Post";
import HomeNavBar from "../LandingPage/Components/Navbar";
import UserNavbar from "../Navbar/Navbar";

function Blogs() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch data from Firestore
    const fetchData = async () => {
      const postsCollection = await firestore.collection("Blogs").get();
      const postsData = postsCollection.docs.map((doc) => doc.data());
      setPosts(postsData);
    };

    fetchData();
  }, []);

  return (
    <div>
      <UserNavbar />
      <h1>Welcome to Code Compass Blog</h1>
      <div className="posts">
        {posts.map((post, index) => (
          <Post
            key={index}
            title={post.title}
            description={post.description}
            timestamp={post.date}
            // Convert Firestore timestamp to JavaScript Date object
          />
        ))}
      </div>
    </div>
  );
}

export default Blogs;
