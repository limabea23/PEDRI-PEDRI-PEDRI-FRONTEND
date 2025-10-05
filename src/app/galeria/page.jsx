"use client";
import styles from "./galeria.module.css";
import { useState, useEffect } from "react";
import axios from "axios";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function Galeria() {
    const [galeria, setGaleria] = useState([]);
    const [loading, setLoading] = useState(false);

    const buscarGaleria = async () => {
        setLoading(true);
        try{
            const response = await axios.get("http://localhost:5080/api/galeria");
            setGaleria(response.data);
        } catch (error) {
            console.error("Erro ao buscar galeria:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        buscarGaleria();
    }, []);


    return (
        <>
        <Header />

        <div className={styles.container}>
            <h1 className={styles.titulo}>MOMENTOS QUE VIRARAM HISTÓRIA</h1>
            <p className={styles.subtitulo}>Reviva os lances, gols e bastidores em fotos e vídeos</p>

            <div className={styles.gridGaleria}>
                            {galeria.map((galeria) => (
                                <div key={galeria.idGaleria} className={styles.cardGaleria}> 
                                    <img 
                                        src={`http://localhost:5080/uploads/${galeria.photo}`} 
                                        alt="Foto do Pedri" 
                                        className={styles.imagemPedri}
                                    />

                                    <h3 className={styles.cardTitle}>
                                        {galeria.titulo ??  "Sem título"}
                                    </h3>
                                </div>
                            ))}
            </div>
        </div>

        <Footer />
        </>
    );
}