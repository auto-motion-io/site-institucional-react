
import React, { useState } from "react";
import styles from "./Formulario.module.css";
import images from "./../../utils/imagesExports"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const FormularioPlanos = ({ data }) => {

    const navigate = useNavigate();

    function mudarPagina(pitstop, buscar) {
        navigate("/cadastro", {
            state: {
                form: 3,
                qtdConcluido: 4,
                data: {
                    email: data.email,
                    nome: data.nome,
                    sobrenome: data.sobrenome,
                    telefone: data.telefone,
                    nomeEmpresa: data.nomeEmpresa,
                    cnpj: data.cnpj,
                    cep: data.cep,
                    logradouro: data.logradouro,
                    numero: data.numero,
                    comp: data.comp,
                    bairro: data.bairro,
                    cidade: data.cidade,
                    estado: data.estado,
                    pitstop,
                    buscar
                }
            }
        });
        console.log(data);
    }

    return (
        <section id={styles["section-info"]}>
            <h1>Escolher Plano</h1>
            <div className={styles["container-planos"]}>
                <div className={styles["plano"]}>
                    <div className={styles["box"]}>
                        <div className={styles["preco"]}>
                            <h1 className={styles["titulo-preco"]}>R$300</h1>
                            <p>/por mês</p>
                        </div>
                        <div className={styles["linha"]}>
                            <img src={images.checkConcluido} alt="Imagem de Confirmação" />
                            <p>Módulos Completos</p>
                        </div>
                        <div className={styles["linha"]}>
                            <img src={images.checkConcluido} alt="Imagem de Confirmação" />
                            <p>Relatórios e Dashboards</p>
                        </div>
                        <div className={styles["linha"]}>
                            <img src={images.botaoX} alt="Imagem de Não Confirmado" />
                            <p>Impulsionamento com Buscar!</p>
                        </div>
                        <div className={styles["linha"]}>
                            <img src={images.botaoX} alt="Imagem de Não Confirmado" />
                            <p>Integração com o Whatsapp</p>
                        </div>
                    </div>
                    <div className={styles["botao"]}>
                        <a onClick={() => mudarPagina(true, false)}>Escolher</a>
                    </div>
                </div>
                <div className={styles["plano"]}>
                    <div className={styles["box"]}>
                        <div className={styles["preco"]}>
                            <h1>R$300</h1>
                            <p>/por mês</p>
                        </div>
                        <div className={styles["linha"]}>
                            <img src={images.checkConcluido} alt="Imagem de Confirmação" />
                            <p>Módulos Completos</p>
                        </div>
                        <div className={styles["linha"]}>
                            <img src={images.checkConcluido} alt="Imagem de Confirmação" />
                            <p>Relatórios e Dashboards</p>
                        </div>
                        <div className={styles["linha"]}>
                            <img src={images.checkConcluido} alt="Imagem de Confirmação" />
                            <p>Impulsionamento com Buscar!</p>
                        </div>
                        <div className={styles["linha"]}>
                            <img src={images.checkConcluido} alt="Imagem de Confirmação" />
                            <p>Integração com o Whatsapp</p>
                        </div>
                    </div>
                    <div className={styles["botao"]}>
                        <a onClick={() => mudarPagina(false, true)}>Escolher</a>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default FormularioPlanos;