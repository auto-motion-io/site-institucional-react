import styles from "./Formulario.module.css";
import images from "../../utils/imagesExports";
import { useNavigate } from "react-router-dom";

const FormularioConcluido = () => {
  const navigate = useNavigate();
  
  return (
    <section id={styles["section-info"]} className={styles["concluido"]}>
      <img src={images.checkConcluido} alt="Cadastro realizado"></img>
      <h1>Cadastro Realizado!</h1>
    </section>
  );
};

export default FormularioConcluido;
