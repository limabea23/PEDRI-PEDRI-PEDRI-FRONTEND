import Image from "next/image";
import styles from "./curiostyles.module.css";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function Curiostyle() {
    return (
        <>
        <Header />

        <div className={styles.container}>
            <h1 className={styles.titulo}>MUTIO ALÉM DAS QUATRO LINHAS</h1>
            <p className={styles.subtitulo}>Conheça curiosidades e o dia a dia do craque fora de campo</p>

            <Image
                src="/grade.png"
                alt="Edit do Pedri"
                width={900}
                height={300}
                className={styles.image}
            />
            <ul className={styles.lista}>
                <li><strong>Nome verdadeiro:</strong> Pedro González López, mas é mundialmente conhecido como Pedri.</li>
                <li><strong>Cidade natal:</strong> Nasceu em Tegueste, uma pequena cidade de cerca de 11 mil habitantes nas Ilhas Canárias.</li>
                <li><strong>Apaixonado pelo Barça desde pequeno:</strong> Seu avô fundou o primeiro grupo de torcedores do Barcelona em Tegueste.</li>
                <li><strong>Ídolos de infância:</strong> Cresceu admirando Andrés Iniesta, Xavi, Messi e Ronaldinho.</li>
                <li><strong>Primeiros passos:</strong> Começou a jogar nas ruas com amigos antes de ingressar em clubes de base.</li>
                <li><strong>Rapidez no campo:</strong> É conhecido por tomar decisões muito rápidas, mesmo sob pressão, o que lembra os grandes meio-campistas clássicos do Barça.</li>
                <li><strong>Número 8:</strong> Herdou a icônica camisa do meio-campo que já pertenceu a Iniesta, símbolo de confiança do clube.</li>
                <li><strong>Versatilidade:</strong> Além de ser excelente na criação de jogadas, também contribui defensivamente, recuperando bolas e ajudando a equipe a pressionar.</li>
                <li><strong>Respeito pelo corpo:</strong> Apesar da habilidade técnica, dedica-se muito ao condicionamento físico, mas prioriza inteligência e leitura de jogo sobre força bruta.</li>
            </ul>

            <Image
                src="/grade.png"
                alt="Edit do Pedri"
                width={900}
                height={300}
                className={styles.image}
            />
            <ul className={styles.lista}>
                <li><strong>Humildade:</strong> Mesmo com fama mundial, Pedri mantém perfil discreto fora de campo.</li>
                <li><strong>Vida simples:</strong> Prefere passar tempo com família e amigos nas Ilhas Canárias quando não está jogando.</li>
                <li><strong>Rotina profissional intensa:</strong> Treina várias horas por dia e tem acompanhamento físico e nutricional para manter o desempenho.</li>
                <li><strong>Foco em estudo tático:</strong> Dedica tempo assistindo vídeos de jogos para analisar adversários e melhorar sua tomada de decisão.</li>
                <li><strong>Coleção de camisas:</strong> Mantém lembranças e camisas de grandes ídolos do Barça em casa, como inspiração.</li>
                <li><strong>Cuidado com lesões:</strong> Em temporadas anteriores, precisou se recuperar com exercícios específicos, mostrando paciência e disciplina.</li>
                <li><strong>Perfil discreto nas redes sociais:</strong> Apesar de jovem, usa redes com moderação e prioriza conteúdo ligado ao futebol e família.</li>
                <li><strong>Hobbies:</strong> Gosta de videogames e momentos de lazer com amigos, mantendo o equilíbrio entre trabalho e vida pessoal.</li>
            </ul>

        </div>

        <Footer />
        </>
    );
}