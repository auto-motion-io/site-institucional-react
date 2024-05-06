import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pitstop from "./pages/pitstop/Pitstop"
import Buscar from "./pages/buscar/Buscar"
import Cadastro from "./pages/cadastro/Cadastro"
import Home from "./pages/home/Home"


function Rotas() {
    return (
        <>
            <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/pitstop" element={<Pitstop/>} />
                        <Route path="/buscar" element={<Buscar />} />
                        <Route path="/cadastro" element={<Cadastro />} />
                    </Routes>
            </BrowserRouter>
        </>
    )
}
export default Rotas;