import React from "react";
import styles from "./Cadastro.module.css";
import images from "./../../utils/imagesExports"

const Cadastro = () => {
    return (
        <div className={styles["body"]}>
            <div className={styles["background"]}>
                <img src={images.listraBg} alt="Background de Listras" />
            </div>

            <div className={styles["header"]}>
                <a href=""><img src={images.setaVoltar} alt="Seta de Voltar" /></a>
                <a href=""><img className={styles["img-pitstop"]} src={images.logoPitstopColorido} alt="Logo Pitstop" /></a>
            </div>

            <div id={styles["sections"]}>
                <div className={styles["container"]}>
                    <section id={styles["section-steps"]}>
                        <div className={styles["card"]}>
                            <img src={images.checkConcluido} alt="Check de Concluído" />
                            <span>Dados <b>Responsável</b></span>
                        </div>
                        <div className={styles["card"]}>
                            <img src={images.checkNaoConcluido} alt="Check de Não Concluído" />
                            <span>Dados <b>Empresa</b></span>
                        </div>
                        <div className={styles["card"]}>
                            <img src={images.checkNaoConcluido} alt="Check de Não Concluído" />
                            <span>Escolher <b>Plano</b></span>
                        </div>
                        <div className={styles["card"]}>
                            <img src={images.checkNaoConcluido} alt="Check de Não Concluído" />
                            <span>Cadastro <b>Finalizado</b></span>
                        </div>
                    </section>

                    <section id={styles["section-info"]}>
                        <h1>Dados Responsável</h1>
                        <div className={styles["labels"]}>
                            <label>
                                <span>E-mail:</span>
                                <input type="text" />
                            </label>
                            <div className={styles["linha1"]}>
                                <label>
                                    <span>Nome:</span>
                                    <input type="text" />
                                </label>
                                <label>
                                    <span>Sobrenome:</span>
                                    <input type="text" />
                                </label>
                            </div>
                            <label>
                                <span>Telefone:</span>
                                <input type="text" />
                            </label>
                        </div>
                        <div className={styles["botao-avancar"]}>
                            <a href=""><img src={images.setaSeguir} alt="Seta de Seguir" /></a>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};
export default Cadastro;