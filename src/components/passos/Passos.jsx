import React from "react";
import styles from "./Passos.module.css";
import images from "./../../utils/imagesExports"
import { useNavigate } from "react-router-dom";

const Passos = ({ qtdConcluido, data, disabled = false }) => {
    var imgConcluido = new Array(4);
    var imgMsgConcluido = new Array(4);
    var passos = <></>;

    for (var i = 0; i < 4; i++) {
        if (i < qtdConcluido) {
            imgConcluido[i] = images.checkConcluido;
            imgMsgConcluido[i] = "Check Concluido";
        } else {
            imgConcluido[i] = images.checkNaoConcluido;
            imgMsgConcluido[i] = "Check Não Concluido";
        }
    }
    if (qtdConcluido == 5) {
        passos = <div style={{ width: "100px" }}></div>
    } else {
        passos =
            <div className={[styles.body]}>
                <section id={styles["section-steps"]}>
                    <div className={styles["card"]}>
                        <img src={imgConcluido[0]} alt={imgMsgConcluido[0]} />
                        <a><span>Dados do <b>Responsável</b></span></a>
                    </div>
                    <div className={styles["card"]}>
                        <img src={imgConcluido[1]} alt={imgMsgConcluido[1]} />
                        <a><span>Dados da <b>Empresa</b></span></a>
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