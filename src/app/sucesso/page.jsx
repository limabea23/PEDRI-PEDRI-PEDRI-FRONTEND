import Link from "next/link";
import styles from "./sucesso.module.css";

export default function Sucesso() {
    return (
        <div className={styles.container}>
            <div className={styles.conteudo}>
                <h1 className={styles.titulo}>CADASTRO CONCLUÍDO COM SUCESSO!</h1>
                <p className={styles.subtitulo}>Obrigado por se juntar à torcida do Pedri!</p>
                <Link href="/" className={styles.button}>
                    VOLTAR PARA A HOME
                </Link>
            </div>
        </div>
    );
}