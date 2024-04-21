
import React, { useState } from "react";
import styles from "./Formulario.module.css";
import images from "../../utils/imagesExports";
import InputLabel from "../inputLabel/InputLabel";
import FormularioEmpresa from "./../formulario/FormularioEmpresa"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Formulario = () => {
    const [email, setEmail] = useState("");
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [nomeEmpresa, setNomeEmpresa] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [cep, setCep] = useState("");
    const [comp, setComp] = useState("");
    const [logradouro, setLogradouro] = useState("");
    const [numero, setNumero] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [estado, setEstado] = useState("");

    const navigate = useNavigate();

    function verificarCamposPreenchidos() {
        return email !== "" && nome !== "" && sobrenome !== "" && telefone !== "";
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
        } else {
            toast.warning("Preencha todos os campos");
        }
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
                <InputLabel nome={"Telefone"} tamanho={"50%"} value={telefone} onChange={(e) => setTelefone(e.target.value)} />
            </div>
            <div className={styles["botao-avancar"]}>
                <a onClick={mudarPagina}><img src={images.setaSeguir} alt="Seta de Seguir" /></a>
            </div>
        </section>
    );
};

export default Formulario;