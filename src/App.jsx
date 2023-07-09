import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import AddTask from "./components/AddTask";
import MyTasks from "./components/MyTasks";
import Profile from "./components/Profile";

import { Toaster } from "react-hot-toast";
import { useEffect, useContext } from "react";
import axios from "axios";
import { Context, server } from "./main";
import "./style.css";

function App() {
  const { setUser, setIsAuthenticated, isAuthenticated } = useContext(Context);
  // console.log(isAuthenticated);
  useEffect(() => {
    axios
      .get(`${server}/users/me`, { withCredentials: true })
      .then((res) => {
        setUser(res.data.user);
        setIsAuthenticated(true);
      })
      .catch((error) => {
        setUser({});
        setIsAuthenticated(false);
      });
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/api/v1/task/new" element={<AddTask />} />
        <Route path="/api/v1/task/mytasks" element={<MyTasks />} />
        <Route path="/api/v1/users/me" element={<Profile />} />
      </Routes>
      <Footer />
      <Toaster />
    </Router>
  );
}

export default App;
