import React from 'react';
import Hero from "../components/Hero";
import CoursesList from "../components/CourseList";
import CategoriesList from "../components/CategoriesList";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import HomeNavbar from '../../LandingPage/Components/Navbar';



const HomePage = () => {
  return (
    <div className="holder">
      <HomeNavbar/>
      <Sidebar />
      <Hero />
      <CoursesList />
      <CategoriesList />
    </div>
  );
}

export default HomePage