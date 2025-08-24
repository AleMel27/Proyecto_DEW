import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Menu } from "./components/Menu";
import { NotFound } from "./components/NotFound";
import { Pie } from "./components/Pie";
import { Reservas } from "./components/Reservas";
import { Politicas } from "./components/Politicas";
import { Nosotros } from "./components/Nosotros";
import { Consultas } from "./components/Consulta";
import { Resena } from "./components/Resena";
import { Register } from "./components/Register";
import { Login } from "./components/Login";

export default function App() {
  return(
    <div className="d-flex flex-column min-vh-100">
      <Menu />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />    
          <Route path="/reservas" element={<Reservas />} />  
          <Route path="/politicas" element={<Politicas/>} />   
          <Route path="/nosotros" element={<Nosotros/>} />   
          <Route path="/consultas" element={<Consultas/>} />   
          <Route path="/reseñas" element={<Resena/>} /> 
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} /> 
          <Route path="*" element={<NotFound />} />          
        </Routes>
      </main>
      <Pie />
    </div>
  )
}
