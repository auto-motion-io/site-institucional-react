import React from "react";
import styles from "./Pitstop.module.css";
import images from "./../../utils/imagesExports"
import { useNavigate } from "react-router-dom";
import Header from "./../../components/header/Header"
import Footer from "./../../components/footer/Footer"
import AcessePit from "../../utils/assets/acessePit.svg"
const Pitstop = () => {
    const navigate = useNavigate();
    function mudarPagina(nomePagina) {
        navigate(nomePagina);
    }
    return (
        <div className={styles["body"]}>
            <Header />
            <section id={styles["section-banner"]}>
                <div className={styles["container"]}>
                    <div className={styles["container-texto"]}>
                        <div className={styles["banner-texto"]}>
                            <span><b>A solução</b> completa <br />
                                para <b>otimizar sua <br />
                                    oficina</b> começa com <br />
                                um <img src={images.pitstopLaranja} width={"45%"} alt="Logo Pitstop Laranja" /></span>
                            <div className={styles["botao-cadastro"]} style={{ marginTop: "2vh" }} ><a onClick={() => mudarPagina("/cadastro")}>Cadastrar</a></div>
                        </div>
                    </div>
                </div>
                <div className={styles["img-banner"]}>
                    <img src={images.pistaPistop} alt="Imagem da Pista de Corrida" />
                </div>
            </section>

            <section id={styles["section-modulos"]}>
                <div className={styles["container"]}>
                    <div className={styles["modulo-texto"]}>
                        <p>Com módulos <b>intuitivos</b> é <b>você no <br />
                            controle</b> total do seu negócio</p>
                    </div>
                    <div className={styles["cards"]}>
                        <div className={styles["card"]}>
                            <div className={styles["img-card"]}><img src={images.tarefas}
                                alt="Imagem para indicar tarefas" /></div>
                            <h1>Tarefas</h1>
                        </div>
                        <div className={styles["card"]}>
                            <div className={styles["img-card"]}><img src={images.financeiro}
                                alt="Imagem para indicar o financeiro" /></div>
                            <h1>Financeiro</h1>
                        </div>
                        <div className={styles["card"]}>
                            <div className={styles["img-card"]}><img src={images.ordemDeServico}
                                alt="Imagem para indicar as ordens de serviço" /></div>
                            <h1>Ordens de Serviço</h1>
                        </div>
                        <div className={styles["card"]}>
                            <div className={styles["img-card"]}><img src={images.servico}
                                alt="Imagem para indicar os serviços" /></div>
                            <h1>Serviços</h1>
                        </div>
                        <div className={styles["card"]}>
                            <div className={styles["img-card"]}><img src={images.estoque}
                                alt="Imagem para indicar o estoque" /></div>
                            <h1>Estoque</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section id={styles["section-impulsione"]}>
                <div className={styles["container"]}>
                    <div className={styles["impulsione-texto"]}>
                        <p><b>Impulsione</b> ainda mais seu negócio com o <img src={images.buscarLogo}
                            alt="Imagem que representa o produto buscar!" /></p>
                    </div>
                </div>
            </section>

            <section id={styles["section-planos"]}>
                <div className={styles["container"]}>
                    <div className={styles["plano"]}>
                        <h3>Plano Básico</h3>
                        <div className={styles["box"]}>
                            <div className={styles["preco"]}>
                                <h1>R$300</h1>
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
                                <img src={images.checkNaoConcluido} alt="Imagem de Não Confirmado" />
                                <p>Impulsionamento com Buscar!</p>
                            </div>
                            <div className={styles["linha"]}>
                                <img src={images.checkNaoConcluido} alt="Imagem de Não Confirmado" />
                                <p>Integração com o Whatsapp</p>
                            </div>
                        </div>
                        <div className={styles["botao"]}>
                            <a onClick={()=> mudarPagina("/cadastro")}>Escolher</a>
                        </div>
                    </div>
                    <div className={styles["plano"]}>
                        <h3>Plano Buscar!</h3>
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
                            <a onClick={()=> mudarPagina("/cadastro")}>Escolher</a>
                        </div>
                    </div>
                </div>
            </section>

            <div>
                <a href="https://pitstop.motionweb.me/"><img  src={AcessePit} alt="" /></a>
            </div>

            <Footer />
        </div>
    );
};
export default Pitstop;
