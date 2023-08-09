import React from 'react';
import Hero from "../components/Hero";
import CoursesList from "../components/CourseList";
import CategoriesList from "../components/CategoriesList";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Navbar2 from "../components/Navbar2";


const HomePage = () => {
  return (
    <div className="holder">
      <Navbar2 />
      <Navbar />
      <Sidebar />
      <Hero />
      <CoursesList />
      <CategoriesList />
    </div>
  );
}

export default HomePage