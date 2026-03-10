import ContainerCenter from "../components/layouts/ContainerCenter";
import styles from "../pages/Inicio.module.css"
import portal from "../../src/assets/images/portal-joinville-inicio.png"
import LinkButton from "../components/LinkButton";
function Inicio(){
  return(
    <>
      <ContainerCenter>
        <div>
          <h1 className={styles.h1}>Sejam bem vindo(a) ao EcoRota</h1>
          <h3 className={styles.h3}> Sistema de gestão de resíduos do município de Joinville</h3>
        </div>
      </ContainerCenter>
      <div className={styles.portalContainer}>
        <img className={styles.portalImage} src={portal} alt="portal de Joinville"></img>
        <div className={styles.buttonOverlay}>
          <LinkButton to="/locais-de-coleta" text="Para iniciar, clique aqui" />
        </div>
      </div>
    </>
  );
}

export default Inicio;