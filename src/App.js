// import logo from './logo.svg';
import React from 'react';
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { Menu } from './Components/Navbar';
import { Home } from './Screens/Home';

function App() {
  return (
    <div className="m-auto">
      <BrowserRouter>
        <Menu />
        <div className='container marketing'>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vehicle/driver/:idDriver" element={<About />} />
            <Route path="/vehicle/:id" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div >
  );
}


function About() {
  return (
    <div>
      <h1>About</h1>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="about">About</Link>
      </nav>
    </div>
  );
}

export default App;
