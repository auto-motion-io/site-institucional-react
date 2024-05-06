import React, { useState } from "react";
import styles from "./Formulario.module.css";
import images from "./../../utils/imagesExports";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import api from "../../api";
import Loader from "../loader/Loader";

const FormularioPlanos = ({ data }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false)

  async function mudarPagina() {
    let isConfirmed = await Swal.fire({
      title: "Tem certeza?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#315C32",
      cancelButtonColor: "#d33",
      confirmButtonText: "Quero este plano!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      return result.isConfirmed;
    });
    if (isConfirmed) {
      let cadastrou = await cadastrar();
      ;
      if(cadastrou){
          navigate("/cadastro",{
            state:{
              form:3,
              qtdConcluido:4
            }
          })
      } 
      
    }
  }


  async function cadastrar() {
    setIsLoading(true);
    const oficina = {
      nome: data.nomeEmpresa,
      cnpj: data.cnpj,
      cep: data.cep,
      numero: data.numero,
      complemento: data.complemento,
      hasBuscar: data.hasBuscar,
    };
    try{
        const resOficina = await api.post(`/oficinas`, oficina).then((response) => {
          console.log(response)  
          return {
                email: data.email,
                nome: data.nome,
                sobrenome: data.sobrenome,
                fkOficina: response.data.idOficina,
            };
        });
        console.log(resOficina);
        const resGerente = await api.post(`/gerentes`, resOficina).then((response) => {
          console.log("Res Gerente: " + response);
        });
    }catch(error){
        console.log(error.response)
        console.error("Erro ao cadastrar-se:", error);
        toast.error("Ocorreu um erro no cadastro por favor, tente novamente.");
        setIsLoading(false);
        return false;
    }
    setIsLoading(false);
    return true;
  }

  return (
    <>
    <Loader show={isLoading} />
    <section id={styles["section-info"]}>
      <h1>Escolher Plano</h1>
      <div className={styles["container-planos"]}>
        <div className={styles["plano"]}>
          <div className={styles["box"]}>
            <div className={styles["preco"]}>
              <h1 className={styles["titulo-preco"]}>R$300</h1>
              <p>/por mês</p>
            </div>
            <div className={styles["linha"]}>
              <img src={images.checkConcluido} alt="Imagem de Confirmação" />
              <p>Módulos Completos</p>
            </div>
            <div className={styles["linha"]}>
              <img src={images.checkConcluido} alt="Imagem de Confirmação" />
              <p>Relatórios e Dashboards</p>
            </div>
            <div className={styles["linha"]}>
              <img src={images.botaoX} alt="Imagem de Não Confirmado" />
              <p>Impulsionamento com Buscar!</p>
            </div>
            <div className={styles["linha"]}>
              <img src={images.botaoX} alt="Imagem de Não Confirmado" />
              <p>Integração com o Whatsapp</p>
            </div>
          </div>
          <div className={styles["botao"]}>
            <a onClick={() => mudarPagina(false)}>Escolher</a>
          </div>
        </div>
        <div className={styles["plano"]}>
          <div className={styles["box"]}>
            <div className={styles["preco"]}>
              <h1>R$350</h1>
              <p>/por mês</p>
            </div>
            <div className={styles["linha"]}>
              <img src={images.checkConcluido} alt="Imagem de Confirmação" />
              <p>Módulos Completos</p>
            </div>
            <div className={styles["linha"]}>
              <img src={images.checkConcluido} alt="Imagem de Confirmação" />
              <p>Relatórios e Dashboards</p>
            </div>
            <div className={styles["linha"]}>
              <img src={images.checkConcluido} alt="Imagem de Confirmação" />
              <p>Impulsionamento com Buscar!</p>
            </div>
            <div className={styles["linha"]}>
              <img src={images.checkConcluido} alt="Imagem de Confirmação" />
              <p>Integração com o Whatsapp</p>
            </div>
          </div>
          <div className={styles["botao"]}>
            <a style={{ cursor: "pointer" }} onClick={() => mudarPagina(true)}>
              Escolher
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default FormularioPlanos;
