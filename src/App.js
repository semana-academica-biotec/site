import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import React from "react";
import Inscrever from "./components/Inscrever";
import Submeta from "./components/Submeta";
import Ensino from "./components/Papers/Ensino";
import PesquisaGrad from "./components/Papers/PesquisaGrad";
import PesquisaPos from "./components/Papers/PesquisaPos";
import Regimentos from "./components/Regimentos";
import Minicursos from "./components/Minicursos";
import Programacao from "./components/Programacao";
import Footer from "./components/Footer";
import Certificados from "./components/Certificados";
import FAQ from "./components/FAQ";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inscrições" element={<Inscrever />} />
          <Route path="/submeta" element={<Submeta />} />
          <Route path="/ensino-extensao" element={<Ensino />} />
          <Route path="/pesquisa-graduacao" element={<PesquisaGrad />} />
          <Route path="/pesquisa-pos-graduacao" element={<PesquisaPos />} />
          <Route path="/regimentos" element={<Regimentos />} />
          <Route path="/minicursos" element={<Minicursos />} />
          <Route path="/programacao" element={<Programacao />} />
          <Route path="/certificados" element={<Certificados />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
