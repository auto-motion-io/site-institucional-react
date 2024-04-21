import React from "react";
import styles from "./InputLabel.module.css";
import images from "./../../utils/imagesExports"

const InputLabel = ({nome, type = "text", tamanho, value, onChange}) => {
    
    return (
        <div className={styles.inputLabel} style={{width: tamanho}}>
            <label>
                <span>{nome}</span>
                <input type={type} value={value} onChange={onChange}/>
            </label>
        </div>
    );
}
export default InputLabel;