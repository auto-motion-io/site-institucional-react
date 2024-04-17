import React from 'react';
import styles from './Footer.module.css';
import images from './../../../utils/imagesExports'

const Footer = () => {
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
              <a href="">Soluções</a>
              <a href="">Pilares</a>
            </div>
            <div className={styles.card}>
              <h3>Produtos</h3>
              <a href="">Pitstop</a>
              <a href="">Buscar!</a>
            </div>
            <div className={styles.card}>
              <h3>Contato</h3>
              <a href="">E-mail</a>
              <a href="">Telefones</a>
              <a href="">Endereço</a>
            </div>
            <div className={styles.logos}>
              <a href=""><img src={images.logoPitstopFooter} alt="Logo Pitstop" /></a>
              <a href=""><img src={images.logoBuscarFooter} alt="Logo Buscar" /></a>
              <div className={styles["logos-redes"]}>
                <a href=""><img src={images.logoInstagram} alt="Logo Instagram" /></a>
                <a href=""><img src={images.logoLinkedin} alt="Logo Linkedin" /></a>
                <a href=""><img src={images.logoGithub} alt="Logo Github" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
