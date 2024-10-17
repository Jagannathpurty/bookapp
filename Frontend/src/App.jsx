import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home/Home";
import Course from "./course/Course";
import Signup from "./component/Signup";
import Contact from "./component/Contact";
import Login from "./component/Login";
import Contacts from "./contact/Contacts";

const App = () => {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/"   element={<Home/>} />
    <Route path="/course"   element={<Course/>} />
    <Route path="/login"   element={< Login />} />
   
    <Route path="/signup"   element={<Signup/> } />
    <Route path="/contact"   element={<Contacts />} />


  </Routes>
  </BrowserRouter>
  );
};

export default App;
