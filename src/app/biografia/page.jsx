import Image from "next/image";
import styles from "./biografia.module.css";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Card from "../../../components/Cards";

export default function Biografia() {
    return (
        <>
        <Header />

        <div className={styles.container}>
            <h1 className={styles.titulo}>DE TEGUESTE PARA O MUNDO</h1>
            <p className={styles.subtitulo}>Conheça a trajetória de Pedri desde a infância até o estrelato</p>

                <Card
                image="/primeirosanos.jpg"
                imageAlt="Pedri criança"
                tituloBio="Os Primeiros Anos"
                textoBio="Pedro González López, mais conhecido como Pedri, nasceu em 25 de novembro de 2002, em Tegueste, um município da Espanha com pouco mais de 11 mil habitantes. Apesar de crescer longe de Barcelona, o espírito culé estava presente desde muito cedo. Seus pais sempre o incentivaram com camisas do Barça, e seu avô fundou o primeiro grupo de torcedores do Barcelona em Tegueste.Para contextualizar sua juventude, no ano em que Pedri nasceu, Ronaldinho Gaúcho já brilhava no PSG e havia conquistado a Copa do Mundo de 2002. Desde pequeno, Pedri demonstrava grande paixão pelo futebol, cercado de referências do Barcelona, nos jogos transmitidos na televisão e até nas louças da casa da família."
                />

                <Card
                image="/primeirospassos.jpg"
                imageAlt="Pedri jogando"
                tituloBio="Primeiros Passos no Futebol"
                textoBio="O primeiro contato de Pedri com a bola aconteceu nas ruas de Tegueste, como acontece com muitas crianças. Inspirado por ídolos como Andrés Iniesta, aos 9 anos entrou para um clube local. Nos primeiros anos, enfrentar clubes de maior expressão foi um desafio, mas aos 13 anos ele conseguiu ingressar em uma academia mais relevante, aprimorando suas habilidades. Na Juventud Laguna, Pedri evoluiu tecnicamente e começou a atrair a atenção de olheiros de equipes profissionais. Em 2018, foi recrutado para a equipe juvenil do UD Las Palmas, conhecida nacionalmente por formar grandes jogadores, consolidando seu talento."
                reverse
                />

                <Card
                image="/laspalmaspedri.jpg"
                imageAlt="Pedri jogando"
                tituloBio="A Ascensão Profissional"
                textoBio="Pedri estreou profissionalmente em 2019, com apenas 16 anos, pelo Las Palmas, na Segunda Divisão da Espanha. Em seu primeiro jogo, já demonstrou personalidade e maturidade tática muito acima da idade. O Barcelona não demorou a enxergar seu potencial e, no mesmo ano, fechou um contrato para tê-lo a partir da temporada seguinte. Em 2020, aos 17 anos, realizou o sonho de vestir a camisa blaugrana. Mesmo chegando como uma promessa desconhecida, rapidamente conquistou espaço no elenco principal. Sua leitura de jogo, calma com a bola e inteligência em campo lembravam os tempos de Iniesta, e a imprensa espanhola logo o comparou ao lendário meia."
                />

                <Card
                image="/goldenboypedri.jpg"
                imageAlt="Pedri jogando"
                tituloBio="Golden Boy"
                textoBio="O ano de 2021 marcou o início do reconhecimento global de Pedri. Com apenas 18 anos, após uma temporada de destaque no Barcelona e atuações brilhantes pela Seleção Espanhola, ele recebeu o prêmio Golden Boy, concedido ao melhor jogador sub-21 da Europa pelo jornal Tuttosport. O troféu refletiu uma temporada impressionante: mais de 50 partidas pelo Barça, ajudando o clube a conquistar a Copa do Rei, participação de destaque na Eurocopa 2020, onde foi eleito Melhor Jovem do Torneio, e a medalha de prata nos Jogos Olímpicos de Tóquio. O Golden Boy confirmou que Pedri não era apenas uma promessa, mas uma realidade em ascensão, consolidando seu lugar entre os jovens talentos mais promissores do futebol mundial."
                reverse
                />

            <div className={styles.botoes}>
                <button className={styles.button}><a href="/barcelona">No Barça</a></button>
                <button className={styles.button}><a href="/espanha">Na Seleção</a></button>
            </div>

        </div>

        <Footer />
        </>
    );
}