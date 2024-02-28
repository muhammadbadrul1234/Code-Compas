import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, SingleCourse, Cart, Courses } from "./components/Courses/pages";
import Navbar from "./components/Courses/components/Navbar";
import Sidebar from "./components/Courses/components/Sidebar";
// import { Compiler } from "./pages/Compiler";
import Login from "./components/LoginPage/Login";
import Signup from "./components/LoginPage/Signup";
import Layout from "./components/Layout";
import Fetch from "./components/FetchData";
import Problemset from "./components/Problemset";
import CompServer from "./components/Compiler_Server";
import AdminPage from "./components/AdminPage/Home Page/AdminPage";

import LandingPage from "./components/LandingPage/LandingPage";
import AdminHome from "./components/AdminPage/Home Page/cpages/Home";
import About from "./components/About Us/About";
import Bio from "./components/About Us/Bio";
import ErrorPage from "./components/ErrorPage/404";
import UserManage from "./components/AdminPage/User Manage/UserManage";
import ProblemSetManage from "./components/AdminPage/ProblemsetManagement/problemsetManage";
import CraftPen from "./components/CraftPen/Craftpen";
function App() {
  const isMobile = window.innerWidth <= 899;
  if (isMobile) {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <h1 style={{ color: "red" }}>
          Sorry, Code Compass Website is Not Supported on Mobile Devices
        </h1>
        <h5 style={{ color: "red" }}>
          Mobile Development is in Early Stage. We are working on it!!!!!
        </h5>
        <p>
          Our website utilizes highly advanced architecture and features that
          are optimized for desktop environments. To provide the best user
          experience, we recommend accessing this website on a larger screen
          with a width more than 900 pixels.
        </p>
        <p>
          If you are on a mobile device, please switch to a desktop or laptop
          computer for the optimal experience. We apologize for any
          inconvenience.
        </p>
      </div>
    );
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/courses/:id" element={<SingleCourse />} />
        <Route path="/category/:category" element={<Courses />} />
        <Route path="/cart" element={<Cart />} />

        {/* <Route path="/compiler" element={<Compiler />} /> */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/layout" element={<Layout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/fetch" element={<Fetch />} />
        <Route path="/problemset" element={<Problemset />} />
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/usermanage" element={<UserManage />} />
        <Route path="/prbmanage" element={<ProblemSetManage />} />
        <Route path="/craftpen" element={<CraftPen />} />

        <Route path="/description/:id" component={Fetch} />

        <Route path="/about" element={<About />} />
        <Route path="/devs" element={<Bio />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
