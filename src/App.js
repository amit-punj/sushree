// import logo from './logo.svg';
<<<<<<< HEAD
import "./App.css";
import Todo from "./pages/todo";
import React from "react";

function App() {
  return <Todo />;
=======
import './App.css';
import Header from './pages/layouts/Header';
import Navbar from './pages/layouts/Navbar';
import Todo from './pages/Todo';
import Home from './pages/Home';
import Calculator from './pages/Calculator';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      {/* <Navbar/> */}
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/todo' element={<Todo/>}></Route>
          <Route path='/calculator' element={<Calculator/>}></Route>
        </Routes>
      {/* <Todo/> */}
    </>
  );
>>>>>>> 3ce8d51eceb3f2b76f081e6b59816743ac4818d1
}

export default App;
