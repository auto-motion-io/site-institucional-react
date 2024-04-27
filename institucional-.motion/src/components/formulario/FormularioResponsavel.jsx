
import React, { useState } from "react";
import styles from "./Formulario.module.css";
import images from "../../utils/imagesExports";
import InputLabel from "../inputLabel/InputLabel";
import {inputMascaraTelefoneCelular, verificaEmail} from "../../utils/global.js"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Formulario = () => {
    const [email, setEmail] = useState("");
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [telefone, setTelefone] = useState("");

    const navigate = useNavigate();

    var regex = /[^\w\s]/gi;

    function verificarCamposPreenchidos() {
        if(email !== "" || nome !== "" || sobrenome !== "" || telefone !== ""){
            if(!verificaEmail(email)){
                toast.warning("E-mail invalido!", {
                    autoClose: 2000
                })
                return false;
            }
        } else{
            toast.error("Preencha todos os campos", {
                autoClose: 2000
            })
            return false;
        }
        return true
    }

    function mudarPagina() {
        if (verificarCamposPreenchidos()) {
            navigate("/cadastro", {
                state: {
                    form: 1, 
                    qtdConcluido: 1, 
                    data: {
                        email,
                        nome,
                        sobrenome,
                        telefone
                    }
                }
            });
        } 

        console.log(telefone)
    }

    return (
        <section id={styles["section-info"]}>
            <h1>Dados Responsável</h1>
            <div className={styles.labels}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <InputLabel nome={"E-mail"} type={"email"} tamanho={"100%"} value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <InputLabel nome={"Nome"} tamanho={"49%"} value={nome} onChange={(e) => setNome(e.target.value)} />
                    <InputLabel nome={"Sobrenome"} tamanho={"49%"} value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} />
                </div>
                <InputLabel nome={"Telefone"} tamanho={"50%"} value={telefone} maxLenght={15} onInput={inputMascaraTelefoneCelular} onChange={(e) => setTelefone(e.target.value.replace(regex, ""))} />
            </div>
            <div className={styles["botao-avancar"]}>
                <a style={{cursor:"pointer"}} onClick={mudarPagina}><img src={images.setaSeguir} alt="Seta de Seguir" /></a>
            </div>
        </section>
    );
};

export default Formulario;