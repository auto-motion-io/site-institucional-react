import React, { useState } from "react";
import styles from "./Cadastro.module.css";
import images from "./../../utils/imagesExports"
import Passos from "./../../components/passos/Passos"
import Formulario from "../../components/formulario/Formulario";

const Cadastro = () => {
    const [qtdConcluido, setQtdConcluido] = useState(0);
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
                    <Passos qtdConcluido={qtdConcluido}/>
                    <Formulario tipo={"Responsavel"} atualizarQtdConcluido={setQtdConcluido}/>
                </div>
            </div>
        </div>
    );
};
export default Cadastro;