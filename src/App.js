// import logo from './logo.svg';
import "./App.css";
import React from "react";
import Header from "./pages/layouts/Header";
import Navbar from "./pages/layouts/Navbar";
import Todo from "./pages/Todo";
import Home from "./pages/Home";
import Calculator from "./pages/Calculator";
import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
function App() {
  return (
    <>
      <Header />
      {/* <Navbar/> */}
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/todo" element={<Todo />}></Route>
        <Route path="/calculator" element={<Calculator />}></Route>
        <Route path="/SignUp" element={<SignUp />}></Route>
      </Routes>
      {/* <Todo/> */}
    </>
  );
}

export default App;
