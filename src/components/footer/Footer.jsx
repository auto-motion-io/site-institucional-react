import React from 'react';
import styles from './Footer.module.css';
import images from './../../utils/imagesExports';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  function mudarPagina(nomePagina) {
    if (nomePagina.startsWith("/#")) {
      // Redireciona para a Home e rola até a seção correspondente
      const sectionId = nomePagina.replace("/#", ""); // Extrai o ID da seção
      navigate("/"); // Redireciona para a Home
      setTimeout(() => {
        const targetElement = document.getElementById(sectionId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" }); // Rola suavemente até a seção
        }
      }, 0); // Aguarda o carregamento da Home
    } else {
      // Navegação para outras páginas
      navigate(nomePagina);
      // Garante que a página seja rolada para o topo após navegar
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
  return (
    <footer>
      <div className={styles.container}>
        <img className={styles["img-bg"]} src={images.motionBg} alt="" />
        <div className={styles.menu}>
          <div className={styles["img-footer"]}>
            <img src={images.logoMotionReduzido} alt="Logo da Motion Reduzido" />
          </div>
          <div className={styles.links}>
            <div className={styles.card}>
              <h3>Quem Somos</h3>
              <a onClick={()=> mudarPagina("/#section-titulo")}>Soluções</a>
              <a onClick={()=> mudarPagina("/#section-pilares")}>Pilares</a>
            </div>
            <div className={styles.card}>
              <h3>Produtos</h3>
              <a onClick={()=> mudarPagina("/pitstop")}>Pitstop</a>
              <a onClick={()=> mudarPagina("/buscar")}>Buscar!</a>
            </div>
            <div className={styles.card}>
              <h3>Contato</h3>
              <a href="">E-mail</a>
              <a href="">Telefones</a>
              <a href="">Endereço</a>
            </div>
            <div className={styles.logos}>
              <a target='blank' href="https://pitstop.motionweb.me/"><img src={images.logoPitstopFooter} alt="Logo Pitstop" /></a>
              <a target='blank' href="https://buscar.motionweb.me/"><img src={images.logoBuscarFooter} alt="Logo Buscar" /></a>
              <div className={styles["logos-redes"]}>
                <a target='blank' href="https://www.instagram.com/motionweb.io/"><img src={images.logoInstagram} alt="Logo Instagram" /></a>
                <a target='blank' href=""><img src={images.logoLinkedin} alt="Logo Linkedin" /></a>
                <a target='blank' href="https://github.com/auto-motion-io"><img src={images.logoGithub} alt="Logo Github" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
