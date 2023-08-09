import './App.css';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import {Home, SingleCourse, Cart, Courses} from "./pages";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Compiler } from './pages/Compiler';
import Login from './components/Login';
import Signup from './components/Signup';
import Layout from './components/Layout';
import Fetch from './components/FetchData';
import Problemset from './components/Problemset';
import CompServer from './components/Compiler_Server';
import AdminPage from './pages/AdminPage';
import AdminUserManage from './pages/AdminUserManage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/courses/:id" element={<SingleCourse />} />
        <Route path="/category/:category" element={<Courses />} />
        <Route path="/cart" element={<Cart />} />

        
        <Route path="/compiler" element={<Compiler />} />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/layout" element={<Layout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/fetch" element={<Fetch />} />
        <Route path="/problemset" element={<Problemset />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/adminusermanage" element={<AdminUserManage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
