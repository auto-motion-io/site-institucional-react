import React from "react";
import styles from "./Home.module.css";
import images from "./../../utils/imagesExports"

const Home = () => {
   
    return (
        <div className={styles["body"]}>
            <section id={styles["section-titulo"]}>
                <div className={styles["container"]}>
                    <div className={styles["textos"]}>
                        <h1>Tudo que sua oficina precisa,</h1>
                        <h6>.motion <b>o motor da mudança.</b></h6>
                    </div>
                </div>
            </section>

            <div id={styles["section-carros"]}>
                <div className={styles["container"]}>
                    <div className={styles["carros-animacao"]}>
                        <div className={styles["imagens"]}>
                            <img src={images.carro1} alt="Imagem Carro 1" />
                            <img src={images.carro2} alt="Imagem Carro 2" />
                            <img src={images.moto3} alt="Imagem Moto 3" />
                            <img src={images.carro4} alt="Imagem Carro 4" />
                        </div>
                        <div className={styles["imagens"]}>
                            <img src={images.carro1} alt="Imagem Carro 1" />
                            <img src={images.carro2} alt="Imagem Carro 2" />
                            <img src={images.moto3} alt="Imagem Moto 3" />
                            <img src={images.carro4} alt="Imagem Carro 4" />
                        </div>
                        <div className={styles["imagens"]}>
                            <img src={images.carro1} alt="Imagem Carro 1" />
                            <img src={images.carro2} alt="Imagem Carro 2" />
                            <img src={images.moto3} alt="Imagem Moto 3" />
                            <img src={images.carro4} alt="Imagem Carro 4" />
                        </div>
                    </div>
                    <a href="">Conhecer</a>
                </div>
            </div>

            <div id={styles["section-jornada"]}>
                <div className={styles["container"]}>
                    <div className={styles["texto"]}>
                        <h5>
                            Unimos a <span>tecnologia</span> com as necessidades do setor <span>automotivo</span>, compondo soluções
                            inovadoras que impulsionam o crescimento de
                            <span>oficinas</span>, fidelizam <span>clientes</span>
                            e elevam os serviços a
                            novos patamares.
                        </h5>
                    </div>
                </div>
            </div>

            <div id={styles["section-pilares"]}>
                <div className={styles["container"]}>
                    <div className={styles["imagens"]}>
                        <div className={styles["card"]}>
                            <img src={images.chaveInglesa} alt="Chave Inglesa" />
                            <h6>Oficinas</h6>
                        </div>
                        <div className={styles["card"]}>
                            <img src={images.pneu} alt="Pneu" />
                            <h6>Clientes</h6>
                        </div>
                        <div className={styles["card"]}>
                            <img src={images.notebook} alt="Notebook" />
                            <h6>Tecnologia</h6>
                        </div>
                    </div>
                </div>
            </div>

            <section id={styles["section-milton"]}>
                <div className={styles["container"]}>
                    <div className={styles["img-milton"]}>
                        <img src={images.milton} alt="Imagem do mascote Milton" />
                    </div>
                    <div className={styles["duvidas"]}>
                        <h4>Dúvidas?</h4>
                        <h1>Fale com o Milton!</h1>
                        <label htmlFor="Nome">
                            <h6>Nome*</h6>
                            <input type="text" />
                        </label>
                        <label htmlFor="Email">
                            <h6>E-mail*</h6>
                            <input type="email" />
                        </label>
                        <label htmlFor="Mensagem">
                            <h6>Mensagem*</h6>
                            <textarea name="mensagem-milton" cols="30" rows="10"></textarea>
                        </label>
                        <div className={styles["botao"]}><a href="">Enviar</a></div>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default Home;