import Image from "next/image";
import styles from "./barcelona.module.css";

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Card from "../../../components/Cards";

export default function Biografia() {
    return (
        <>
        <Header />

        <div className={styles.container}>
            <h1 className={styles.titulo}>A HISTÓRIA NO BARCELONA</h1>
            <p className={styles.subtitulo}>Temporada após temporada, os números e conquistas com a camisa blaugrana</p>

            <Card
                image="/20pedri.jpg"
                imageAlt="Pedri criança"
                tituloBio="2020–21"
                textoBio="Aos 17 anos, Pedri González realizou o sonho de vestir a camisa do Barcelona. Recém-chegado das Ilhas Canárias e vindo do Las Palmas, o jovem meia rapidamente conquistou o coração dos torcedores com sua visão de jogo e maturidade impressionante. Na sua primeira temporada, disputou mais de 50 partidas, marcou 4 gols e deu várias assistências, sendo peça-chave na conquista da Copa do Rei. Foi também neste ano que encantou a Europa, recebendo o prêmio Golden Boy 2021, dado ao melhor jogador sub-21 do continente."
            />
            
            <Card
                image="/21pedri.jpg"
                imageAlt="Pedri jogando"
                tituloBio="2021–22"
                textoBio="Após um primeiro ano mágico, Pedri enfrentou uma das fases mais duras da carreira: as lesões. Passou boa parte da temporada afastado dos gramados, mas quando retornou, mostrou a mesma qualidade e elegância de sempre. Mesmo com apenas 22 jogos, marcou 5 gols, muitos deles decisivos, e foi apontado como o novo símbolo da reconstrução do Barça pós-Messi."
                reverse
            />

            <Card
                image="/22pedri.jpg"
                imageAlt="Pedri criança"
                tituloBio="2022–23"
                textoBio="Com Xavi Hernández no comando, Pedri se consolidou como o cérebro da equipe. Sua leitura de jogo, passes entre linhas e calma em campo lembravam as de seus ídolos — Iniesta e Xavi. Na temporada, participou de 36 jogos, marcou 7 gols e ajudou o clube a conquistar La Liga e a Supercopa da Espanha. Foi o ano da afirmação: Pedri deixou de ser promessa e se tornou realidade."
            />
            
            <Card
                image="/23pedri.jpg"
                imageAlt="Pedri jogando"
                tituloBio="2023–24"
                textoBio="Mesmo enfrentando novamente períodos de recuperação física, Pedri seguiu como uma das principais referências do elenco. Com 34 partidas e 4 gols, demonstrou liderança, maturidade e comprometimento com o projeto do técnico Xavi. Sua presença em campo fazia o time jogar de forma mais criativa e equilibrada."
                reverse
            />

            <Card
                image="/24pedri.jpg"
                imageAlt="Pedri criança"
                tituloBio="2023–24"
                textoBio="Com apenas 22 anos, Pedri já é um dos grandes nomes da história recente do Barcelona. Na temporada mais recente, somou mais de 50 jogos, 6 gols e novos títulos — La Liga, Copa do Rei e Supercopa da Espanha. Agora, é visto como o herdeiro natural dos lendários meio-campistas que marcaram a era dourada do Barça."
            />
            
            <Card
                image="/25pedri.jpg"
                imageAlt="Pedri jogando"
                tituloBio="2025–26"
                textoBio="Com a braçadeira de liderança simbólica e o respeito absoluto da torcida, Pedri entra em mais uma temporada como referência técnica e emocional do time.Ultrapassando a marca de 190 jogos pelo clube, ele representa a essência do futebol criativo e coletivo que define o estilo do Barcelona. De promessa a protagonista, Pedri é o símbolo vivo da nova geração blaugrana — um jogador que honra o passado e inspira o futuro."
                reverse
            />

            <h1 className={styles.titulo}>Títulos de Pedri pelo Barcelona</h1>
            <p>Em apenas cinco anos, Pedri levantou seis troféus oficiais com o Barcelona, tornando-se um dos jogadores mais vitoriosos de sua geração. Mais do que números, suas conquistas representam a continuidade da alma do Barça — o futebol inteligente, criativo e leal às origens que ele carrega desde menino</p>
            <Image
                src="/trofeusbarca.png"
                alt="Troféus"
                width={900}
                height={100}
            />
        </div>

        <Footer />
        </>
    );
}