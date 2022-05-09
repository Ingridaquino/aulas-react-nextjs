import styles from './inter.module.css';

export default function integracao() {
    return (
        <div id={styles.div}>
            <div className={styles.vermelho}>Texto #1</div>
            <div className={styles.azul}>Texto #2</div>
            <div className={styles.branco}>Texto #3</div>
        </div>
    )
}