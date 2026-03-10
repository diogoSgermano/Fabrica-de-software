import { Link } from 'react-router-dom'
import Container from './Container';
import styles from './Navbar.module.css'
import logo from '../../assets/images/ecorota_logo.png'
import { useState } from 'react'

function Navbar({ customClass }) {

    const [openDropdown, setOpenDropdown] = useState(false)

    return (
        <nav className={styles.navbar}>
            <Container>

                <Link
                    to="/"
                    className={`${styles.logoNav} ${customClass ? styles[customClass] : ''}`}
                >
                    <img src={logo} alt="Logo ecorota" />
                </Link>

                <ul className={styles.list}>

                    <li className={styles.item}>
                        <Link to="/">Início</Link>
                    </li>

                    <li className={styles.item}>
                        <Link to="/sobre">Sobre a EcoRota</Link>
                    </li>

                    <li className={`${styles.item} ${styles.dropdown}`}>
                        <span onClick={() => setOpenDropdown(!openDropdown)}>
                            Serviços
                        </span>

                        {openDropdown && (
                            <ul className={styles.dropdownMenu}>
                                <li>
                                    <Link to="/locais-de-coleta">Locais de coleta</Link>
                                </li>
                                <li>
                                    <Link to="/coleta-domiciliar">Coleta Domiciliar</Link>
                                </li>
                                <li>
                                    <Link to="/denunciar">Denunciar</Link>
                                </li>
                                <li>
                                    <Link to="/tipos-de-residuos">Tipos de resíduos</Link>
                                </li>
                            </ul>
                        )}
                    </li>

                    <li className={styles.item}>
                        <Link to="/contato">Contato</Link>
                    </li>

                    <li className={styles.item}>
                        <Link to="/outras-informacoes">Outras informações</Link>
                    </li>

                </ul>

            </Container>
        </nav>
    )
}

export default Navbar