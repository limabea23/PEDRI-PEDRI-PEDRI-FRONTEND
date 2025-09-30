import styles from "./footer.module.css";

export default function Footer() {
    return (
        <div className={styles.container}>
            <footer className={styles.texto}>
                © TODOS OS DIREITOS RESERVADOS. DESENVOLVIDO POR{" "}
                <a href="https://github.com/limabea23" target="_blank">
                    BEA LIMA
                </a>.
            </footer>
        </div>
    );
}