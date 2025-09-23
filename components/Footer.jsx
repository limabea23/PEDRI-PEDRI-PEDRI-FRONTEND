import styles from "./footer.module.css";

export default function Footer() {
    return (
        <div className={styles.container}>
            <footer className={styles.footer}>
                TODOS OS DIREITOS RESERVADOS. DESENVOLVIDO POR BEATRIZ LIMA.
            </footer>
        </div>
    );
}