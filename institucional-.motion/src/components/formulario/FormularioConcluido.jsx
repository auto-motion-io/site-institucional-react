
import React, { useEffect, useState } from "react";
import styles from "./Formulario.module.css";
import images from "../../utils/imagesExports";
import InputLabel from "../inputLabel/InputLabel";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import api from "../../api";

const FormularioConcluido = ({ data }) => {
    const [redirect, setRedirect] = useState(false);
    const navigate = useNavigate();
    const [objetoAdicionadoEmpresa, setObjetoAdicionadoEmpresa] = useState({});
    const [objetoAdicionadoGerente, setObjetoAdicionadoGerente] = useState({});
    const [idOficina, setIdOficina] = useState(null);

    function cadastrar() {
        setObjetoAdicionadoEmpresa(
            {
                nome: data.nomeEmpresa,
                cnpj: data.cnpj,
                cep: data.cep,
                numero: data.numero,
                complemento: data.complemento,
                hasBuscar: data.hasBuscar
            }
        )
        api.post(`/oficinas`, objetoAdicionadoEmpresa).then((response) => {
            setIdOficina(response.id);
            toast.success("Oficina cadastrada!")
        }).catch((error) => {
            console.error("Erro ao salvar os dados de oficina:", error);
            toast.error("Ocorreu um erro ao salvar os dados de oficina, por favor, tente novamente.");
            return false;
        });

        setObjetoAdicionadoGerente(
            {
                email: data.email,
                nome: data.nome,
                sobrenome: data.sobrenome,
                fkOficina: idOficina
            }
        )
        
        api.post(`/gerentes`, objetoAdicionadoGerente).then(() =>{
            toast.success("Gerente cadastrado!")
            return true;
        }).catch((error) => {
            console.error("Erro ao salvar os dados de oficina:", error);
            toast.error("Ocorreu um erro ao salvar os dados do gerente, por favor, tente novamente.");
            return false;
        })

        
    }

    // useEffect(() => {
    //     if(cadastrar()){
    //         const timer = setTimeout(() => {
    //             setRedirect(true);
    //         }, 5000);
    //         return () => clearTimeout(timer);
    //     } else{
    //         return false;
    //     }
    // }, []);

    useEffect(() => {
        cadastrar();
        if (redirect) {
            navigate("/pitstop");
        }
    }, [redirect]);

    return (
        <section id={styles["section-info"]} className={styles["concluido"]}>
            <img src={images.checkConcluido} alt="Cadastro realizado"></img>
            <h1>Cadastro Realizado!</h1>
        </section>
    );
};

export default FormularioConcluido;