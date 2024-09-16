import styles from "./Formulario.module.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import api from "../../api";
import images from "../../utils/imagesExports";
import { useState } from "react";
import Loader from "../loader/Loader";

const FormularioConfirmaEmail = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [senha, setSenha] = useState("");
  const [isLoading, setIsLoading] = useState(false)

  async function handleEnviar() {
    setIsLoading(true);
    api.post("/gerentes/confirmar-token?op=senha", {
      email: sessionStorage.getItem("email"),
      token: token,
      senha: senha
    }).then((response) => {
      console.log(response.data);
      sessionStorage.removeItem("email");
      toast.success('Senha alterada com sucesso!');
      navigate("/cadastro", {
        state: {
          form: 4,
          qtdConcluido: 5
        }
      })
    }).catch((error) => {
      console.log("Erro foi esse aqui: ", error);
      toast.error('Erro ao alterar senha!');
      setIsLoading(false);
    });
    setIsLoading(false);
  }

  // async function deletarOficina() {
  //   debugger;
  //   try {
  //     const response = await api.get("/oficinas");
  //     for (let i = 0; i < response.length; i++) {
  //       if (i === response.length - 1) {
  //         console.log(response[i].id)
  //         await api.delete(`/oficinas/${response[i].id}`).then(() => {
  //           navigate("/cadastro", {
  //             state: {
  //               form: 5,
  //               qtdConcluido: 0
  //             }
  //           });
  //         }).catch((error) => {
  //           console.log("Erro ao deletar última oficina: ", error);
  //         });
  //       }
  //     }
  //   } catch (error) {
  //     console.log("Erro ao deletar última oficina: ", error);
  //   }
  // }

  return (
    <>
      <Loader show={isLoading} />
      <section id={styles["section-confirma"]} className={styles["confirma"]}>
        <div className={styles["box-confirma"]}>
          <div className={styles["title-confirma"]}>
            <h1>Confirmação de E-mail</h1>
          </div>
          <p>Enviamos um token para o seu e-mail, verifique e digite a baixo com a sua nova senha.</p>
          <div className={styles["box-inputs"]}>
            <div className={styles["input-label"]}>
              <label>
                <span>Token*</span>
                <input onChange={(e) => setToken(e.target.value)} />
              </label>
            </div>
            <div className={styles["input-label"]}>
              <label>
                <span>Senha*</span>
                <input type="password" onChange={(e) => setSenha(e.target.value)} />
              </label>
            </div>
          </div>
          <button onClick={(handleEnviar)} className={styles["btn-confirma btn-confirma-email"]}>Confirmar</button>
          <div className={styles["botao-avancar"]}>
            <a style={{ cursor: "pointer" }}><img src={images.setaLaranjaVoltar} alt="Seta de Seguir" /></a>
          </div>
        </div>
      </section>
    </>
  );
};

export default FormularioConfirmaEmail;
