import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import emailjs from "emailjs-com";
import Header from "./../../components/header/Header";
import Footer from "./../../components/footer/Footer";
import styles from "./Home.module.css";
import images from "./../../utils/imagesExports";
import { useLocation } from "react-router-dom";
import Loader from "./../../components/loader/Loader";

const Home = () => {
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        const hash = location.hash; // Obtém o hash da URL (ex: #section-jornada)
        if (hash) {
            const targetElement = document.getElementById(hash.replace("#", ""));
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false); // Para evitar loops

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isSubmitting) return; // Evita múltiplos envios simultâneos

        setIsSubmitting(true); // Bloqueia envios até que o processamento termine

        try {
            setIsLoading(true)
            // Envia o e-mail usando o EmailJS
            await emailjs.send(
                "service_5zjiuv9", // Substitua pelo seu Service ID
                "template_y7jyrbi", // Substitua pelo seu Template ID
                {
                    from_name: formData.name,
                    to_email: "contatomotion.io@gmail.com",
                    message: formData.message,
                    reply_to: formData.email,
                },
                "Gkosz-6p2DUgQlM2A" // Substitua pela sua Public Key
            );
            setIsLoading(false)
            toast.success("Mensagem enviada com sucesso!", {
                autoClose: 3000,
            });

            // Reseta o formulário após sucesso
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            setIsLoading(false)
            toast.error("Erro ao enviar a mensagem. Tente novamente.", {
                autoClose: 3000,
            });
            console.error("Erro no envio:", error);
        } finally {
            setIsLoading(false)
            setIsSubmitting(false); // Libera o botão para novos envios
        }
    };

    return (
        <div className={styles["body"]}>
            <Loader show={isLoading} />
            <Header />
            <section className={styles["section-titulo"]} id="section-titulo">
                <div className={styles["container"]}>
                    <div className={styles["textos"]}>
                        <h1>Tudo que sua oficina precisa,</h1>
                        <h6>
                            .motion <b>o motor da mudança.</b>
                        </h6>
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
                </div>
            </div>

            <div className={styles["section-jornada"]} id="section-jornada">
                <div className={styles["container"]}>
                    <div className={styles["texto"]}>
                        <h5>
                            Unimos a <span> tecnologia </span> com as necessidades do setor{" "}
                            <span> automotivo</span>, compondo soluções inovadoras que
                            impulsionam o crescimento de <span>oficinas</span>, fidelizam{" "}
                            <span>clientes</span> e elevam os serviços a novos patamares.
                        </h5>
                    </div>
                </div>
            </div>

            <div className={styles["section-pilares"]} id="section-pilares">
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
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="name">
                                <h6>Nome*</h6>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <label htmlFor="email">
                                <h6>E-mail*</h6>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                            <label htmlFor="message">
                                <h6>Mensagem*</h6>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </label>
                            <div className={styles["botao"]}>
                                <button type="submit" disabled={isSubmitting}>
                                    {isSubmitting ? "Enviando..." : "Enviar"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Home;
