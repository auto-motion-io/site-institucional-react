
import React, { useState } from "react";
import styles from "./Formulario.module.css";
import images from "../../utils/imagesExports";
import InputLabel from "../inputLabel/InputLabel";
import { inputMascaraTelefoneCelular, verificaEmail } from "../../utils/global.js"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const FormularioResponsavel = ({ oldData }) => {
    debugger
    const [email, setEmail] = useState(oldData && oldData.email ? oldData.email : "");
    const [nome, setNome] = useState(oldData && oldData.nome ? oldData.nome : "");
    const [sobrenome, setSobrenome] = useState(oldData && oldData.sobrenome ? oldData.sobrenome : "");
    const [telefone, setTelefone] = useState(oldData && oldData.telefone ? oldData.telefone : "");
    const [nomeEmpresa, setNomeEmpresa] = useState(oldData && oldData.nomeEmpresa ? oldData.nomeEmpresa : "");
    const [cnpj, setCnpj] = useState(oldData && oldData.cnpj ? oldData.cnpj : "");
    const [cep, setCep] = useState(oldData && oldData.cep ? oldData.cep : "");
    const [logradouro, setLogradouro] = useState(oldData && oldData.logradouro ? oldData.logradouro : "");
    const [numero, setNumero] = useState(oldData && oldData.numero ? oldData.numero : "");
    const [comp, setComp] = useState(oldData && oldData.comp ? oldData.comp : "");
    const [bairro, setBairro] = useState(oldData && oldData.bairro ? oldData.bairro : "");
    const [cidade, setCidade] = useState(oldData && oldData.cidade ? oldData.cidade : "");
    const [estado, setEstado] = useState(oldData && oldData.estado ? oldData.estado : "");


    const navigate = useNavigate();

    function verificarCamposPreenchidos() {
        debugger
        if (email !== "" || nome !== "" || sobrenome !== "" || telefone !== "") {
            if (!verificaEmail(email)) {
                toast.warning("E-mail invalido!", {
                    autoClose: 2000
                })
                return false;
            }
            else if (telefone.length < 14 || telefone.length > 15) {
                toast.warning("Telefone invalido!", {
                    autoClose: 2000
                })
                return false;
            }
        } else {
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
                        telefone,
                        nomeEmpresa,
                        cnpj,
                        cep,
                        logradouro,
                        numero,
                        comp,
                        bairro,
                        cidade,
                        estado
                    }
                }
            });
        }
    }

    return (
        <section id={styles["section-info"]}>
            <h1>Dados do Responsável</h1>
            <div className={styles.labels}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <InputLabel nome={"E-mail"} type={"email"} tamanho={"100%"} value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <InputLabel nome={"Nome"} tamanho={"49%"} value={nome} onChange={(e) => setNome(e.target.value)} />
                    <InputLabel nome={"Sobrenome"} tamanho={"49%"} value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} />
                </div>
                <InputLabel nome={"Telefone"} tamanho={"50%"} value={telefone} maxLenght={15} onInput={inputMascaraTelefoneCelular} onChange={(e) => setTelefone(e.target.value)} />
            </div>
            <div className={styles["botao-avancar"]}>
                <a style={{ cursor: "pointer" }} onClick={mudarPagina}><img src={images.setaSeguir} alt="Seta de Seguir" /></a>
            </div>
        </section>
    );
};

export default FormularioResponsavel;