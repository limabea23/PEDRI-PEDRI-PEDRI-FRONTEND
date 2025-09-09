"use client";

import { useState } from "react";
import axios from "axios";
import styles from "./home.module.css";

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

    return (
        <div className={styles.container}>
            <h1 className={styles.titulo}>PEDRI PEDRI PEDRI</h1>
            <p className={styles.subtitulo}>Mais que um site, sua fonte número 1 sobre Pedri — o espaço definitivo para fãs conhecerem tudo sobre o Maestro do Barça e da Espanha.</p>

            <div className={styles.button}>
                <button onClick={buscarListagem} disabled={loading} className={styles.btnLiberar}>
                    {loading ? "Carregando ..." : "Liberar a próxima história"}
                </button>
            </div>

            <div className={styles.gridListagem}>
                {listagem.map((listagem) => (
                    <div key={listagem.idListagem} className={styles.cardListagem}> 
                        <p>{listagem.conteudo}</p>
                    </div>
                )
            )}
            </div>




        </div>
    );
}