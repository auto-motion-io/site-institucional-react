import React from "react";
import styles from "./InputLabel.module.css";
import "./../../utils/global"

const InputLabel = ({nome, maxLenght = 255, type = "text", tamanho, onInput = null, onChange}) => {
    
    return (
        <div className={styles.inputLabel} style={{width: tamanho}}>
            <label>
                <span>{nome}</span>
                <input type={type} maxLength={maxLenght} onInput={onInput} onChange={onChange} />
            </label>
        </div>
    );
}
export default InputLabel;