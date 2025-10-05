"use client";
import styles from "./noticias.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation"; 

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function Noticias() {
    const [noticias, setNoticias] = useState([]);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const buscarNoticias = async () => {
        setLoading(true);
        try{
            const response = await axios.get("http://localhost:5080/api/noticias");
            setNoticias(response.data);
        } catch (error) {
            console.error("Erro ao buscar galeria:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        buscarNoticias();
    }, []);


    return (
        <>
        <Header />

        <div className={styles.container}>
            <h1 className={styles.titulo}>AS ÚLTIMAS NOVIDADES SOBRE PEDRI</h1>
            <p className={styles.subtitulo}>Fique por dentro dos jogos, conquistas e tudo o que rola no momento</p>

            <div className={styles.gridNoticias}>
                            {noticias.map((noticias) => (
                                <div key={noticias.id} className={styles.cardNoticias}> 
                                    <img 
                                        src={`http://localhost:5080/uploads/${noticias.photo}`} 
                                        alt="Foto do Pedri" 
                                        className={styles.imagemPedri}
                                    />

                                    <h3 className={styles.cardTitle}>
                                        {noticias.titulo ??  "Sem título"}
                                    </h3>

                                    <button
                                        onClick={() => router.push(`/noticias/${noticias.id}`)}
                                        className={styles.detalhes}
                                    >
                                    Ler na íntegra
                                    </button>
                                </div>
                            ))}
            </div>
        </div>

        <Footer />
        </>
    );
}