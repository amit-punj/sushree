// import logo from './logo.svg';
import './App.css';
import Header from './pages/layouts/Header';
import Navbar from './pages/layouts/Navbar';
import Todo from './pages/Todo';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Calculator from './pages/Calculator';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/todo' element={<Todo/>}></Route>
          <Route path='/calculator' element={<Calculator/>}></Route>
          <Route path='/signin' element={<Signin/>}></Route>
        </Routes>
    </>
  );
}

export default App;
