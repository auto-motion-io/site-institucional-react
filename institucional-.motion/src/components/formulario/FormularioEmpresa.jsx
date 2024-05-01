
import React, { useState } from "react";
import styles from "./Formulario.module.css";
import images from "../../utils/imagesExports";
import InputLabel from "../inputLabel/InputLabel";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./../../utils/global"
import { inputMascaraCPF_CNPJ, inputMascaraCep } from "./../../utils/global";

const FormularioEmpresa = ({ data, oldData = null }) => {
    const [nomeEmpresa, setNomeEmpresa] = useState(oldData && oldData.nomeEmpresa ? oldData.nomeEmpresa : "");
    const [cnpj, setCnpj] = useState(oldData && oldData.cnpj ? oldData.cnpj : "");
    const [cep, setCep] = useState(oldData && oldData.cep ? oldData.cep : "");
    const [comp, setComp] = useState(oldData && oldData.comp ? oldData.comp : "");
    const [logradouro, setLogradouro] = useState(oldData && oldData.logradouro ? oldData.logradouro : "");
    const [numero, setNumero] = useState(oldData && oldData.numero ? oldData.numero : "");
    const [bairro, setBairro] = useState(oldData && oldData.bairro ? oldData.bairro : "");
    const [cidade, setCidade] = useState(oldData && oldData.cidade ? oldData.cidade : "");
    const [estado, setEstado] = useState(oldData && oldData.estado ? oldData.estado : "");


    var regex = /[^\w\s]/gi;

    const navigate = useNavigate();

    function handleValores(endereco) {
        setLogradouro(endereco.logradouro);
        setCidade(endereco.localidade);
        setBairro(endereco.bairro);
        setComp(endereco.complemento);
        setEstado(endereco.uf);
        setCep(endereco.cep);
    }

    function verificarCamposPreenchidos() {
        return nomeEmpresa !== "" && cnpj !== "" && cep !== "" && logradouro !== "" && numero !== "" && bairro !== "" && cidade !== "" && estado !== "";
    }

    function setCamposMudarPagina() {
        setLogradouro(logradouro.replace(regex, ""));
        setCidade(cidade.replace(regex, ""));
        setBairro(bairro.replace(regex, ""));
        setComp(comp.replace(regex, ""));
        setEstado(estado.replace(regex, ""));
        setCep(cep.replace(regex, ""));
        setNumero(numero.replace(regex, ""));
        setCnpj(cnpj.replace(regex, ""));
        setNomeEmpresa(nomeEmpresa.replace(regex, ""))
    }

    function mudarPagina() {
        setCamposMudarPagina();
        if (verificarCamposPreenchidos()) {
            navigate("/cadastro", {
                state: {
                    form: 2,
                    qtdConcluido: 2,
                    data: {
                        email: data.email,
                        nome: data.nome,
                        sobrenome: data.sobrenome,
                        telefone: data.telefone,
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
            console.log(data);
        } else {
            toast.warning("Preencha todos os campos");
        }
    }

    return (
        <section id={styles["section-info"]}>
            <h1>Dados Empresa</h1>
            <div className={styles.labels}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <InputLabel nome={"Nome"} tamanho={"49%"} value={nomeEmpresa} onChange={(e) => setNomeEmpresa(e.target.value)} />
                    <InputLabel nome={"CNPJ"} tamanho={"49%"} value={cnpj} maxLenght={18} onInput={inputMascaraCPF_CNPJ} onChange={(e) => setCnpj(e.target.value)} />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <InputLabel nome={"CEP"} tamanho={"17%"} value={cep} maxLenght={9} onInput={(e) => inputMascaraCep(e, handleValores)} onChange={(e) => setCep(e.target.value.replace(regex, ""))} />
                    <InputLabel nome={"Logradouro"} tamanho={"38%"} value={logradouro} onChange={(e) => setLogradouro(e.target.value)} />
                    <InputLabel nome={"N°"} tamanho={"12%"} value={numero} onChange={(e) => setNumero(e.target.value)} />
                    <InputLabel nome={"Comp"} tamanho={"29%"} value={comp} onChange={(e) => setComp(e.target.value)} />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <InputLabel nome={"Bairro"} tamanho={"40%"} value={bairro} onChange={(e) => setBairro(e.target.value)} />
                    <InputLabel nome={"Cidade"} tamanho={"42%"} value={cidade} onChange={(e) => setCidade(e.target.value)} />
                    <InputLabel nome={"Estado"} tamanho={"12%"} value={estado} onChange={(e) => setEstado(e.target.value)} />
                </div>
            </div>
            <div className={styles["botao-avancar"]}>
                <a onClick={mudarPagina}><img src={images.setaSeguir} alt="Seta de Seguir" /></a>
            </div>
        </section>
    );
};

export default FormularioEmpresa;