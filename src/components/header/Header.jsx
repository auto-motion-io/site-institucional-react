import React from 'react';
import styles from './Header.module.css';
import images from '../../utils/imagesExports.js'
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    function mudarPagina(nomePagina){
        navigate(nomePagina);
    };
    return (
        <header>
            <div className={styles["container"]}>
                <div className={styles["menu"]}>
                    <span>
                        <a onClick={() => mudarPagina("/")} className={styles["motion-logo"]}>
                            Quem Somos
                        </a>
                    </span>
                    <span>
                        <a onClick={() => mudarPagina("/pitstop")} className={styles["header-img"]}>
                            Produtos
                        </a>
                    </span>
                    <span>
                        <a onClick={() => mudarPagina("/")} className={styles["motion-logo"]}>
                            <img src={images.motionLogo} alt="Logo Motion" />
                        </a>
                    </span>
                    <span>
                        <a onClick={() => mudarPagina("/pitstop")} className={styles["header-img"]}>
                            <img src={images.logoPitstopColorido} alt="Logo Pitstop" />
                        </a>
                    </span>
                    <span>
                        <a onClick={() => mudarPagina("/buscar")} className={styles["header-img"]}>
                            <img src={images.logoBuscarColorido} alt="Logo Buscar" />
                        </a>
                    </span>
                </div>
            </div>
        </header>
    );
};
export default Header;
