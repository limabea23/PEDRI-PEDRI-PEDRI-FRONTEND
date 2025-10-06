import Image from "next/image";
import styles from "./espanha.module.css";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Card from "../../../components/Cards";

export default function Espanha() {
    return (
        <>
        <Header />

        <div className={styles.container}>
            <h1 className={styles.titulo}>O ORGULHO DA ROJA</h1>
            <p className={styles.subtitulo}>Descubra os feitos de Pedri vestindo a camisa da Espanha</p>

            <Card
                image="/20pedri.jpg"
                imageAlt="Pedri criança"
                tituloBio="2021: O início de uma nova era"
                textoBio="Pedri foi convocado pela primeira vez para a Seleção Principal da Espanha em março de 2021, com apenas 18 anos. Seu talento já chamava atenção no Barcelona, e o técnico Luis Enrique enxergou nele o futuro do meio-campo espanhol. Logo em sua estreia, o jovem encantou pela calma, inteligência e domínio de bola típicos de um veterano."
            />
            
            <Card
                image="/europedri.jpg"
                imageAlt="Pedri jogando"
                tituloBio="EURO 2020 (disputada em 2021)"
                textoBio="Após um primeiro ano mágico, Pedri enfrentou uma das fases mais duras da carreira: as lesões. Passou boa parte da temporada afastado dos gramados, mas quando retornou, mostrou a mesma qualidade e elegância de sempre. Mesmo com apenas 22 jogos, marcou 5 gols, muitos deles decisivos, e foi apontado como o novo símbolo da reconstrução do Barça pós-Messi."
                reverse
            />

            <Card
                image="/olimpiadapedri.jpg"
                imageAlt="Pedri criança"
                tituloBio="Tóquio 2020 (Jogos Olímpicos)"
                textoBio="Poucas semanas depois da Euro, Pedri representou a Espanha também nos Jogos Olímpicos de Tóquio, mesmo após uma temporada exaustiva. Disputou sete partidas em apenas 29 dias, ajudando a equipe a chegar à final contra o Brasil, onde ficaram com a medalha de prata. A imprensa espanhola o chamou de “incansável” — símbolo de entrega e paixão pela camisa da seleção."
            />
            
            <Card
                image="/copapedri.jpg"
                imageAlt="Pedri jogando"
                tituloBio="2022: Copa do Mundo do Catar"
                textoBio="Pedri foi novamente titular absoluto da Roja na Copa do Mundo de 2022, no Catar. Com apenas 20 anos, comandou o meio-campo ao lado de Gavi e Busquets, mostrando maturidade e visão de jogo excepcionais. A Espanha foi eliminada nas oitavas de final, nos pênaltis contra o Marrocos, mas Pedri foi um dos nomes mais elogiados da equipe."
                reverse
            />

            <Card
                image="/uefapedri.jpg"
                imageAlt="Pedri criança"
                tituloBio="2023–24"
                textoBio="Participou da campanha da Liga das Nações da UEFA 2023, onde a Espanha conquistou o título após vencer a Croácia na final. Foi mais um marco importante na curta, mas brilhante carreira internacional do jovem meia."
            />
        </div>

        <Footer />
        </>
    );
}