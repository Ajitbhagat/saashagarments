import React from "react";
import Navbar from "./Component/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Corporate from "./Component/Page/Corporate.jsx"
import  Hotel from "./Component/Page/Hotel.jsx"
import Industrial from "./Component/Page/Industrial.jsx"
import Hospital from "./Component/Page/Hospital.jsx"
import Security from "./Component/Page/Security.jsx"
import By_Profession from "./Component/Page/By_Profession.jsx"
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/corporate' element={<Corporate/>} />
        <Route path='/hotel' element={<Hotel/>} />
        <Route path='/industrial' element={<Industrial/>} />
        <Route path='/hospital' element={<Hospital/>} />
        <Route path='/security' element={<Security/>} />
        <Route path='/byprofession' element={<By_Profession/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
