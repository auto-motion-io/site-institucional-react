
import React, { useState } from "react";
import styles from "./Formulario.module.css";
import images from "../../utils/imagesExports";
import InputLabel from "../inputLabel/InputLabel";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const FormularioEmpresa = ({data}) => {
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
        return nomeEmpresa !== "" && cnpj !== "" && cep !== "" && logradouro !== "" && numero !== "" && bairro !== "" && cidade !== "" && estado !== "";
    }

    function mudarPagina(){
        if(verificarCamposPreenchidos()){
            navigate("/cadastro", { 
                state: { 
                    form: 2, 
                    qtdConcluido: 2 ,
                    data:{
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
        } else{
            toast.warning("Preencha todos os campos");
        }
    }

    return (
        <section id={styles["section-info"]}>
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
            <div className={styles["botao-avancar"]}>
                <a onClick={mudarPagina}><img src={images.setaSeguir} alt="Seta de Seguir" /></a>
            </div>
        </section>
    );
};

export default FormularioEmpresa;