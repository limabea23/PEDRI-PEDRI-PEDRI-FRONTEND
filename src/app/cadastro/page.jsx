"use client";
import styles from "./cadastro.module.css";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function Cadastro() {
    return (
        <>
        <Header />

        <div className={styles.container}>
            <h1 className={styles.titulo}>JUNTE-SE À COMUNIDADE DE FÃS DO PEDRI</h1>
            <p className={styles.subtitulo}>Deixe seu nome e seu e-mail para receber novidades e conteúdos exclusivos</p>

            <div className={styles.input}>
            <h1>Entre para o time do Pedri! 🔥⚽</h1>
            <p>Deixe seu nome, e-mail e uma mensagem para o nosso craque. Sua voz também faz parte dessa torcida!</p>
            <input type="name" placeholder="Seu nome completo" />
            <input type="email" placeholder="Seu e-mail para contato" />
            <input type="text" placeholder="Sua mensagem para o Pedri (Opcional)" />

                    <button className={styles.button}><a href="/sucesso">Fazer parte do time</a></button>
            </div>
        </div>

        <Footer />
        </>
    );
}