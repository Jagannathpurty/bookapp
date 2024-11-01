import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./Home/Home";
import Course from "./course/Course";
import Signup from "./component/Signup";
import Contact from "./component/Contact";
import Login from "./component/Login";
import Contacts from "./contact/Contacts";
import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from "./context/AuthProvider";

const App = () => {

  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
       <div>   
  <Routes>
    <Route path="/"   element={<Home/>} />
    <Route path="/course"   element={ authUser?<Course/>:<Navigate to="/signup"/>} />
    <Route path="/login"   element={< Login />} />
   
    <Route path="/signup"   element={<Signup/> } />
    <Route path="/contact"   element={<Contacts />} />


  </Routes>
  <Toaster />
  </div>
  );
};

export default App;
