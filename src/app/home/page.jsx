"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./home.module.css";

import Footer from "../../../components/Footer";
import Header from "../../../components/Header";

export default function Page() {
    const [listagem, setListagem] = useState([]);
    const [loading, setLoading] = useState(false);

    const buscarListagem = async () => {
        setLoading(true);
        try{
            const response = await axios.get("http://localhost:5080/api/listagem");
            setListagem(response.data);
        } catch (error) {
            console.error("Erro ao buscar listagem:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        buscarListagem();
    }, []);

    return (
        <>
        <Header />
        <div className={styles.container}>
            <h1 className={styles.titulo}>TUDO SOBRE O PEDRI, EM UM SÓ LUGAR</h1>
            <p className={styles.subtitulo}>Encontre aqui os conteúdos mais importantes organizados para você.</p>

            <div className={styles.gridListagem}>
                {listagem.map((listagem) => (
                    <div key={listagem.idListagem} className={styles.cardListagem}> 
                        <img 
                            src={`http://localhost:5080/uploads/${listagem.photo}`} 
                            alt="Foto do Pedri" 
                            className={styles.imagemPedri}
                        />
                    </div>
                )
            )}
            </div>
        </div>
        <Footer />
        </>
    );
}