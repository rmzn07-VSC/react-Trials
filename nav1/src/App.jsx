import { BrowserRouter, Routes, Route } from "react-router-dom";
import AnaSayfa from "./components/AnaSayfa";
import Hakkimizda from "./components/Hakkimizda";

import Hizmetler from "./components/Hizmetler"; // Hizmetler component'ı
import YazilimGelistirme from "./components/YazilimGelistirme";
import Danismanlik from "./components/Danismanlik";
import Egitim from "./components/Egitim";
import NavbarComponent from "./components/Navbar";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<AnaSayfa />} />
        <Route path="/Hakkimizda" element={<Hakkimizda />} />
        <Route path="/Iletisim" element={<Iletisim />} />
        <Route path="/hizmetler" element={<Hizmetler />} />{" "}
        {/* Hizmetler rotası */}
        <Route path="/hizmetler/yazilim" element={<YazilimGelistirme />} />
        <Route path="/hizmetler/danismanlik" element={<Danismanlik />} />
        <Route path="/hizmetler/egitim" element={<Egitim />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
