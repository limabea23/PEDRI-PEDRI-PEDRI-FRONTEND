import Image from "next/image";
import styles from "./biografia.module.css";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function Biografia() {
    return (
        <>
        <Header />

        <div className={styles.container}>
            <h1 className={styles.titulo}>DE TEGUESTE PARA O MUNDO</h1>
            <p className={styles.subtitulo}>Conheça a trajetória de Pedri desde a infância até o estrelato</p>

            <div className={styles.conteudo}>
                <div className={styles.img}>
                    <Image
                        src="/primeirosanos.jpg"
                        alt="Pedri criança"
                        width={160}
                        height={120}
                        className={styles.image}
                    />
                </div>
                <div className={styles.bio}>
                    <h2 className={styles.tituloBio}>Os Primeiros Anos</h2>
                    <p className={styles.textoBio}>Pedro González López, mais conhecido como Pedri, nasceu em 25 de novembro de 2002, em Tegueste, um município da Espanha com pouco mais de 11 mil habitantes. Apesar de crescer longe de Barcelona, o espírito culé estava presente desde muito cedo. Seus pais sempre o incentivaram com camisas do Barça, e seu avô fundou o primeiro grupo de torcedores do Barcelona em Tegueste. Para contextualizar sua juventude, no ano em que Pedri nasceu, Ronaldinho Gaúcho já brilhava no PSG e havia conquistado a Copa do Mundo de 2002. Desde pequeno, Pedri demonstrava grande paixão pelo futebol, cercado de referências do Barcelona, nos jogos transmitidos na televisão e até nas louças da casa da família.</p>
                </div>
            </div>

            <div className={`${styles.conteudo} ${styles.reverse}`}>
                <div className={styles.img}>
                    <Image
                        src="/primeirospassos.jpg"
                        alt="Pedri criança"
                        width={160}
                        height={120}
                        className={styles.image}
                    />
                </div>
                <div className={styles.bio}>
                    <h2 className={styles.tituloBio}>Primeiros Passos no Futebol</h2>
                    <p className={styles.textoBio}>O primeiro contato de Pedri com a bola aconteceu nas ruas de Tegueste, como acontece com muitas crianças. Inspirado por ídolos como Andrés Iniesta, aos 9 anos entrou para um clube local. Nos primeiros anos, enfrentar clubes de maior expressão foi um desafio, mas aos 13 anos ele conseguiu ingressar em uma academia mais relevante, aprimorando suas habilidades. Na Juventud Laguna, Pedri evoluiu tecnicamente e começou a atrair a atenção de olheiros de equipes profissionais. Em 2018, foi recrutado para a equipe juvenil do UD Las Palmas, conhecida nacionalmente por formar grandes jogadores, consolidando seu talento.</p>
                </div>
            </div>

        </div>

        <Footer />
        </>
    );
}