"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; 
import axios from "axios";
import styles from "./noticiasd.module.css";

import Header from "../../../../components/Header";
import Footer from "../../../../components/Footer";

export default function NoticiaDetails() {
    const { id } = useParams(); 
    const [noticia, setNoticia] = useState(null);

    useEffect(() => {
        const fetchNoticia = async () => {
            try {
                const response = await axios.get(`http://localhost:5080/api/noticias/${id}`);
                setNoticia(response.data);
            } catch (error) {
                console.error("Erro ao buscar detalhes da notícia:", error);
            }
        };

        fetchNoticia();
    }, [id]);

    if (!noticia) {
        return <p>Carregando...</p>;
    }

    return (
        <>
        <Header />

        <div className={styles.detailsNoticia}>
            <h2 className={styles.tituloNoticia}>{noticia.titulo}</h2>
            <h3 className={styles.subtituloNoticia}>{noticia.subtitulo}</h3>
            <img
                src={noticia.photo ? `http://localhost:5080/uploads/${noticia.photo}` : "/placeholder.jpg"}
                alt={noticia.titulo}
                className={styles.imgNoticia}
            />
            <p><strong>Data de publicação:</strong> {new Date(noticia.data_publicacao).toLocaleDateString()}</p>
            <div className={styles.textoNoticia}>
                {noticia.texto.split('\n').map((par, i) => <p key={i}>{par}</p>)}
            </div>
        </div>

        <Footer />
        </>
    );
}