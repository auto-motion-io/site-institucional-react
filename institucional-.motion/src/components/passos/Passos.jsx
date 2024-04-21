import React from "react";
import styles from "./Passos.module.css";
import images from "./../../utils/imagesExports"

const Passos = ({ qtdConcluido }) => {
    var imgConcluido = new Array(4);
    var imgMsgConcluido = new Array(4);
    for (var i = 0; i < 4; i++) {
        if (i < qtdConcluido) {
            imgConcluido[i] = images.checkConcluido;
            imgMsgConcluido[i] = "Check Concluido";
        } else {
            imgConcluido[i] = images.checkNaoConcluido;
            imgMsgConcluido[i] = "Check Não Concluido";
        }
    }
    return (
        <div className={[styles.body]}>
            <section id={styles["section-steps"]}>
                <div className={styles["card"]}>
                    <img src={imgConcluido[0]} alt={imgMsgConcluido[0]} />
                    <span>Dados <b>Responsável</b></span>
                </div>
                <div className={styles["card"]}>
                    <img src={imgConcluido[1]} alt={imgMsgConcluido[1]} />
                    <span>Dados <b>Empresa</b></span>
                </div>
                <div className={styles["card"]}>
                    <img src={imgConcluido[2]} alt={imgMsgConcluido[2]} />
                    <span>Escolher <b>Plano</b></span>
                </div>
                <div className={styles["card"]}>
                    <img src={imgConcluido[3]} alt={imgMsgConcluido[3]} />
                    <span>Cadastro <b>Finalizado</b></span>
                </div>
            </section>
        </div>
    )
}

export default Passos;