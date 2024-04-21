
import React, { useState } from "react";
import styles from "./Formulario.module.css";
import images from "./../../utils/imagesExports";
import InputLabel from "../inputLabel/InputLabel";
import { toast } from "react-toastify";

const Formulario = ({ tipo, atualizarQtdConcluido }) => {
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

    const [tipoFormulario, setTipoFormulario] = useState(
        <>
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
        </>);

    function mudarTipo() {
        if (verificarCamposPreenchidos(tipo)) {
            if (tipo === "Responsavel") {
                tipo = "Empresa";
            } else if (tipo === "Empresa") {
                tipo = "Planos";
            }
            mudarTela();
            atualizarQtdConcluido((prevQtd) => prevQtd + 1);
        } else {
            toast.warning("Preencha todos os dados corretamente!")
        }
    }

    function verificarCamposPreenchidos(tipoForm) {
        if (tipoForm === "Responsavel") {
            return email !== "" && nome !== "" && sobrenome !== "" && telefone !== "";
        } else if (tipoForm === "Empresa") {
            return nomeEmpresa !== "" && cnpj !== "" && cep !== "" && logradouro !== "" && numero !== "" && comp !== "" && bairro !== "" && cidade !== "" && estado !== ""
        } else {

        }
    }

    function mudarTela() {
        if (tipo === "Empresa") {
            tipo = "Planos";
            setTipoFormulario(
                <>
                    <h1>Dados Empresa</h1>
                    <div className={styles.labels}>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <InputLabel nome={"Nome"} tamanho={"49%"} value={nomeEmpresa} onChange={(e) => setNomeEmpresa(e.target.value)} />
                            <InputLabel nome={"CNPJ"} tamanho={"49%"} value={cnpj} onChange={(e) => setCnpj(e.target.value)} />
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <InputLabel nome={"CEP"} tamanho={"29%"} value={cep} onChange={(e) => setCep(e.target.value)} />
                            <InputLabel nome={"Logradouro"} tamanho={"49%"} value={logradouro} onChange={(e) => setLogradouro(e.target.value)} />
                            <InputLabel nome={"N°"} tamanho={"9%"} value={numero} onChange={(e) => setNumero(e.target.value)} />
                            <InputLabel nome={"Comp"} tamanho={"9%"} value={comp} onChange={(e) => setComp(e.target.value)} />
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <InputLabel nome={"Bairro"} tamanho={"40%"} value={bairro} onChange={(e) => setBairro(e.target.value)} />
                            <InputLabel nome={"Cidade"} tamanho={"42%"} value={cidade} onChange={(e) => setCidade(e.target.value)} />
                            <InputLabel nome={"Estado"} tamanho={"12%"} value={estado} onChange={(e) => setEstado(e.target.value)} />
                        </div>
                    </div>
                </>
            );
        }
    }

    return (
        <section id={styles["section-info"]}>
            {tipoFormulario}
            <div className={styles["botao-avancar"]}>
                <a onClick={mudarTipo}><img src={images.setaSeguir} alt="Seta de Seguir" /></a>
            </div>
        </section >
    );
};

export default Formulario;