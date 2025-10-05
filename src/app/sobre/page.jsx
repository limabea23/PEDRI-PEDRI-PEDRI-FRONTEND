import styles from "./sobre.module.css";
import Image from "next/image";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function Sobre() {
    return (
        <>
        <Header />

        <div className={styles.container}>
            <h1 className={styles.titulo}>¡HOLA! YO SOY...</h1>
            <p className={styles.subtitulo}>Aqui você conhece um pouco mais sobre mim e pode me contatar pelas minhas redes ou e-mail</p>

            <div className={styles.infos}>
                <Image
                src="/beapedri.png"
                alt="Imagem da desenvolvedora do projeto, Beatriz, ao lado do Pedri. (Imagem gerada por inteligência artificial)"
                width={500}
                height={500}
                className={styles.image}
                />

            <div className={styles.direita}>
                <h2>QUEM SOU EU?</h2>
                <p className={styles.texto}>Eu sou a Bea — a mente (e o coração) por trás deste site.</p>
                <p className={styles.texto}>Criei este espaço para reunir tudo sobre o Pedri — sua história, momentos marcantes, curiosidades e muito mais coisas.</p>
                <p className={styles.texto}>Feito com carinho e criatividade, espero que você sinta a mesma alegria e orgulho que senti ao montar cada detalhe. 💛".</p>

                <div className={styles.contatos}>
                    <a href="beatriz.lima14@aluno.senai.br" target="_blank">
                        <FaEnvelope size={32}/> 
                    </a>
                    <a href="https://www.linkedin.com/in/seulinkedin" target="_blank">
                        <FaLinkedin size={32}/>
                    </a>
                    <a href="https://github.com/limabea23" target="_blank">
                        <FaGithub size={32}/> 
                    </a>
                </div>
            </div>
            </div>
        </div>
        
        <Footer />
        </>
    );
}