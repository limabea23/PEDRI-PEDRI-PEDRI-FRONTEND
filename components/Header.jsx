import styles from "./header.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.imagem}>
                    <Link href="/">
                        <Image
                            src="/pedri-header.png"
                            alt="Logo"
                            width={200}
                            height={200}
                        />
                    </Link>
                </div>
                <Link href="/biografia"><h1 className={styles.texto}>BIOGRAFIA</h1></Link>
                <Link href="/barcelona"><h1 className={styles.texto}>BARÇA</h1></Link>
                <Link href="/espanha"><h1 className={styles.texto}>SELEÇÃO</h1></Link>
                <Link href="/galeria"><h1 className={styles.texto}>GALERIA</h1></Link>
                <Link href="/curiostyle"><h1 className={styles.texto}>CURIOSTYLE</h1></Link>
                <Link href="/noticias"><h1 className={styles.texto}>NOTÍCIAS</h1></Link>
                <Link href="/cadastro"><h1 className={styles.texto}>CADASTRO</h1></Link>
                <Link href="/sobre"><h1 className={styles.texto}>SOBRE MIM</h1></Link>
            </header>
        </div>
    );
}