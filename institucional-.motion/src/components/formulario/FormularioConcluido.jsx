
import React, { useState } from "react";
import styles from "./Formulario.module.css";
import images from "../../utils/imagesExports";
import InputLabel from "../inputLabel/InputLabel";
import { toast } from "react-toastify";

const FormularioConcluido = ({data}) => {

    

    return (
        <section id={styles["section-info"]} className={styles["concluido"]}>
            <img src={images.checkConcluido}></img>
            <h1>Cadastro Realizado!</h1>
        </section>
    );
};

export default FormularioConcluido;