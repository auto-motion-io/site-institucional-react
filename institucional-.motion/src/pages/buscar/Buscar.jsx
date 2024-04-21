import React from "react";
import styles from "./Buscar.module.css";
import images from "./../../utils/imagesExports";
import Header from "./../../components/header/Header"
import Footer from "./../../components/footer/Footer"

const Buscar = () => {
    return (
        <div className={styles["body"]}>
            <Header/>
            <section id={styles["section-pesquisa"]}>
                <div className={styles["container"]}>
                    <div className={styles["mensagem-principal"]}>
                        <h1>Dê um <img src={images.buscarTitulo} alt="Logo Buscar"/> e encontre a oficina <br/> perfeita <span>com alguns </span>cliques</h1>
                    </div>
                    <div className={styles["caixa-pesquisa"]}>
                        <div className={styles["caixa"]}>
                            <div className={styles["lupa"]}><img src={images.lupa} alt="Lupa"/></div>
                            <input type="text" placeholder="Oficina mecânica em São Paulo"/>
                        </div>
                    </div>
                    <div className={styles["busque-encontre"]}>
                        <div className={styles["titulo-busque"]}>
                            <h1>Busque <b>encontre por:</b></h1>
                        </div>
                        <div className={styles["cards"]}>
                            <div className={styles["card"]}>
                                <div className={styles["box"]}>
                                    <img src={images.estrela} alt="Estrela"/>
                                </div>
                                <h3>Avaliações com Descrição</h3>
                            </div>
                            <div className={styles["card"]}>
                                <div className={styles["box"]}>
                                    <img src={images.whatsapp} alt="WhatsApp"/>
                                </div>
                                <h3>Integração com WhatsApp</h3>
                            </div>
                            <div className={styles["card"]}>
                                <div className={styles["box"]}>
                                    <img src={images.doc} alt="Imagem de um documento"/>
                                </div>
                                <h3>Ordens de Serviço Emitidas</h3>
                            </div>
                        </div>
                    </div>
                    <div className={styles["bg"]}>
                        <img src={images.chaveVerdeBuscar} alt="Chave Inglesa Verde"/>
                        <img src={images.chaveLaranjaBuscar} alt="Chave Inglesa Laranja"/>
                    </div>
                </div>
            </section>

            <section id={styles["section-info"]}>
                <div className={styles["container"]}>
                    <h1>Além de <b>informações adicionais</b></h1>
                    <div className={styles["cards"]}>
                        <div className={styles["card"]}>
                            <img src={images.telefones} alt="Imagem Telefone"/>
                            <h3>Contato</h3>
                        </div>
                        <div className={styles["card"]}>
                            <img src={images.iconEndereco} alt="Imagem com um ponteiro de local"/>
                            <h3>Endereço</h3>
                        </div>
                        <div className={styles["card"]}>
                            <img src={images.caixa} alt="Imagem de uma caixa de ferramentas"/>
                            <h3>Serviços</h3>
                        </div>
                        <div className={styles["card"]}>
                            <img src={images.dinheiro} alt="Imagem de um cifrão"/>
                            <h3>Preços</h3>
                        </div>
                    </div>
                </div>
            </section>

            <section id={styles["section-marcas"]}>
                <div className={styles["container"]}>
                    <div className={styles["mensagem-marca"]}>
                        <div className={styles["mensagem"]}>
                            <h1>Filtre e procure as <b>marcas</b> pelas quais <b>deseja atendimento</b></h1>
                        </div>
                        <div className={styles["marcas"]}>
                            <img src={images.marcas} alt="Imagem com marcas de veículos"/>
                        </div>
                    </div>
                    <a href="">Acessar o <img src={images.logoBuscarColorido} alt="Logo do Buscar"/></a>
                </div>
            </section>
            <Footer/>
        </div>
    );
};

export default Buscar;
