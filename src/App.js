// import logo from './logo.svg';
import React from 'react';
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Menu } from './Components/Navbar';
import { Home } from './Screens/Home';
import { ListVehicles } from './Screens/ListVehicles';
import { Vehicle } from './Screens/Vehicle';

function App() {
  return (
    <div className="m-auto">
      <BrowserRouter>
        <Menu />
        <div className='container marketing'>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vehicle/driver/:idDriver" element={<ListVehicles />} />
            <Route path="/vehicle/:id/:idDriver" element={<Vehicle />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div >
  );
}


export default App;
