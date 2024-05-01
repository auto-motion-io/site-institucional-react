import React from "react";
import styles from "./Passos.module.css";
import images from "./../../utils/imagesExports"
import { useNavigate } from "react-router-dom";

const Passos = ({ qtdConcluido, data }) => {
    var imgConcluido = new Array(4);
    var imgMsgConcluido = new Array(4);
    var passos = <></>;

    const navigate = useNavigate();

    function mudarPagina(formulario) {
        switch (formulario) {
            case "Responsavel": {
                if (qtdConcluido > 0) {
                    navigate("/cadastro", {
                        state: {
                            form: 5,
                            qtdConcluido: 0,
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
                                estado: data.estado
                            }
                        }
                    })
                }
                console.log(data);
                break;
            }
            case "Empresa": {
                if (qtdConcluido > 1) {
                    navigate("/cadastro", {
                        state: {
                            form: 1,
                            qtdConcluido: 1,
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
                                estado: data.estado
                            }
                        }
                    })
                }
                break;
            }
        }
    }

    for (var i = 0; i < 4; i++) {
        if (i < qtdConcluido) {
            imgConcluido[i] = images.checkConcluido;
            imgMsgConcluido[i] = "Check Concluido";
        } else {
            imgConcluido[i] = images.checkNaoConcluido;
            imgMsgConcluido[i] = "Check Não Concluido";
        }
    }
    if (qtdConcluido == 4) {
        passos = <div style={{ width: "100px" }}></div>
    } else {
        passos =
            <div className={[styles.body]}>
                <section id={styles["section-steps"]}>
                    <div className={styles["card"]}>
                        <img src={imgConcluido[0]} alt={imgMsgConcluido[0]} />
                        <a onClick={() => mudarPagina("Responsavel")}><span>Dados do <b>Responsável</b></span></a>
                    </div>
                    <div className={styles["card"]}>
                        <img src={imgConcluido[1]} alt={imgMsgConcluido[1]} />
                        <a onClick={() => mudarPagina("Empresa")}><span>Dados da <b>Empresa</b></span></a>
                    </div>
                    <div className={styles["card"]}>
                        <img src={imgConcluido[2]} alt={imgMsgConcluido[2]} />
                        <a><span>Escolher <b>Plano</b></span></a>
                    </div>
                    <div className={styles["card"]}>
                        <img src={imgConcluido[3]} alt={imgMsgConcluido[3]} />
                        <span>Cadastro <b>Finalizado</b></span>
                    </div>
                </section>
            </div>
    }
    return (
        passos
    )
}

export default Passos;