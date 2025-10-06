import Image from "next/image";
import styles from "./cards.module.css";

export default function Card({tituloBio, textoBio, image, imageAlt, reverse = false }) {
    return (
        <div className={`${styles.conteudo} ${reverse ? styles.reverse : ""}`}>
                        <div className={styles.img}>
                            <Image
                                src={image}
                                alt={imageAlt}
                                width={160}
                                height={120}
                                className={styles.imagem}
                            />
                        </div>
                        <div className={styles.bio}>
                            <h2 className={styles.tituloBio}>{tituloBio}</h2>
                            <p className={styles.textoBio}>{textoBio}</p>
                        </div>
                    </div>
    );
}