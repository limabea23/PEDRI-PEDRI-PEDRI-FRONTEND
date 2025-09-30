import styles from "./header.module.css";
import Image from "next/image";

export default function Header() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.imagem}>
                    <Image
                    src="/pedri-header.png"
                    alt="Logo"
                    width={200}
                    height={200}
                    />
                </div>
                <h1 className={styles.texto}>BIOGRAFIA</h1>
                <h1 className={styles.texto}>BARÇA</h1>
                <h1 className={styles.texto}>SELEÇÃO ESPANHOLA</h1>
                <h1 className={styles.texto}>GALERIA</h1>
                <h1 className={styles.texto}>CURIOSTYLE</h1>
                <h1 className={styles.texto}>NOTÍCIAS</h1>
                <h1 className={styles.texto}>CADASTRO</h1>
                <h1 className={styles.texto}>SOBRE MIM</h1>
            </header>
        </div>
    );
}