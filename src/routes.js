import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pitstop from "./pages/pitstop/Pitstop"
import Buscar from "./pages/buscar/Buscar"
import Cadastro from "./pages/cadastro/Cadastro"
import Home from "./pages/home/Home"
import FormularioConfirmaEmail from "./components/formulario/FormularioConfirmaEmail";
import FormularioConcluido from "./components/formulario/FormularioConcluido";


function Rotas() {
    return (
        <>
            <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/pitstop" element={<Pitstop/>} />
                        <Route path="/buscar" element={<Buscar />} />
                        <Route path="/cadastro" element={<Cadastro />} />
                        <Route path="/confirma" element={<FormularioConfirmaEmail />} />
                        <Route path="/concluido" element={<FormularioConcluido />} />
                    </Routes>
            </BrowserRouter>
        </>
    )
}
export default Rotas;