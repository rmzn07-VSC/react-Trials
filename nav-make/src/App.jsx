import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/Navbar";
import AnaSayfa from "./components/AnaSayfa";
import Hakkimizda from "./components/Hakkimizda";
import Iletisim from "./components/Iletisim";
import Hizmetler from "./components/Hizmetler"; 
import YazilimGelistirme from "./components/YazilimGelistirme";
import Danismanlik from "./components/Danismanlik";
import Egitim from "./components/Egitim";

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent /> 
      <Routes>
        <Route path="/" element={<AnaSayfa />} />
        <Route path="/Hakkimizda" element={<Hakkimizda />} />
        <Route path="/Iletisim" element={<Iletisim />} />
        <Route path="/hizmetler" element={<Hizmetler />} />
        <Route path="/hizmetler/yazilim" element={<YazilimGelistirme />} />
        <Route path="/hizmetler/danismanlik" element={<Danismanlik />} />
        <Route path="/hizmetler/egitim" element={<Egitim />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;