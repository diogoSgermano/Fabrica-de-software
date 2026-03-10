import styles from './ContainerCenter.module.css'

function ContainerCenter(props){
    return(
        <div className={styles.container}>
            {props.children}
        </div>
    );
}
 
export default ContainerCenter;

