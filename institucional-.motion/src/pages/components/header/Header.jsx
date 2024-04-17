    import React from 'react';
    import styles from './Header.module.css';
    import images from './../../../utils/imagesExports.js'
    import {Link} from 'react-router-dom';

    const Header = () => {
        return (
            <header>
                    <div className={styles["container"]}>
                        <div className={styles["menu"]}>
                            <span>
                                <a className={styles["header-text"]} href="./index.html">
                                    Quem Somos
                                </a>
                            </span>
                            <span>
                                <a className={styles["header-text"]} href="./produtos.html">
                                    Produtos
                                </a>
                            </span>
                            <span>
                                <Link to="/" className={styles["motion-logo"]}>
                                    <img src={images.motionLogo} alt="Logo Motion" />
                                </Link>
                            </span>
                            <span>
                                <Link to="/pitstop" className={styles["header-img"]}>
                                    <img src={images.logoPitstopColorido} alt="Logo Pitstop" />
                                </Link>
                            </span>
                            <span>
                                <Link to="/buscar" className={styles["header-img"]} href="./buscar.html">
                                    <img src={images.logoBuscarColorido} alt="Logo Buscar" />
                                </Link>
                            </span>
                        </div>
                    </div>
                </header>
        );
    };
    export default Header;
