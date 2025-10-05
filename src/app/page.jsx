import Image from "next/image";
import Link from 'next/link';
import styles from "./home.module.css";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Home() {
    return (
        <>
        <Header />

        <div className={styles.container}>
            <h1 className={styles.titulo}>PEDRI PEDRI PEDRI</h1>
            <p className={styles.subtitulo}>Mais que um site, sua fonte número 1 sobre Pedri — o espaço definitivo para fãs conhecerem tudo sobre o Maestro do Barça e da Espanha.</p>

            <Image
                src="/pedriedit.jpg"
                alt="Edit do Pedri"
                width={900}
                height={300}
                className={styles.image}
            />

            <p className={styles.frase}>O futuro do futebol veste a camisa 8 do Barcelona - De Tegueste para o mundo.</p>

            <p className={styles.bio}>Pedri González é um dos maiores talentos do futebol espanhol da atualidade. Nascido em Tegueste, nas Ilhas Canárias, em 2002, rapidamente conquistou espaço no FC Barcelona e na Seleção Espanhola. Conhecido por sua visão de jogo, inteligência tática e habilidade técnica, Pedri é considerado o sucessor natural dos grandes meio-campistas da história do clube catalão.</p>

            <Link href="/conteudos" className={styles.button}>
                        DESVENDAR CATEGORIAS
            </Link>
        </div>

        <Footer />
        </>
    );
}