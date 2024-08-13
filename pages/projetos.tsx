import CardList from "@/components/projects"
import NavigationBar from "@/components/nav"
import sty from "../styles/main.module.css"
import Footer from "@/components/footer"
export default function projetos() {

    const cardsProjects = [
        {
            id: 1,
            title: "Weon",
            description: "Sistema GED customizável que gera dashboards.",
            imageSrc: ["/img/weon1.png", "/img/weon2.png", "/img/weon3.png",],
            isPrivate: false,
            modalContent: ["Um sistema do tipo GED (GERENCIAMENTO ELETRONICO DE DOCUMENTOS) com o diferencial de ser customizável pelo cliente, com facilidade é possivel criar tabelas e gerenciar dados, além disso é possivel visualizar dados em dashboards."],
            stack: ["TS", "JS", "NEXT.JS", "ShadcnUI", "Tailwind", "Dockers", "MongoBD", "AWS"],
            privateName: "Privado, em progresso",
            url: "http://its-porsche-time.vercel.app",
            githubUrl: "https://github.com/nowecompany",
            githubPrivate: false,
            urlPrivate: true
        },
        {
            id: 2,
            title: "Nowe",
            description: "Landing page da nowe company",
            imageSrc: ["/img/nowepage.png"],
            isPrivate: false,
            modalContent: ["Uma landing page para apresentar os produtos da nowe company, no momento o projeto está parado pelo sistema ainda estar tomando corpo, porém voltará a estar ativo em breve com reformulação total do visual"],
            stack: ["Next.JS", "CSS"],
            privateName: "Em desenvolvimento",
            url: "",
            githubUrl: "https://github.com/nowecompany",
            githubPrivate: false,
            urlPrivate: true
        },
        {
            id: 3,
            title: "Porsche time",
            description: "Um divertido site que mostra de forma aleatória um porsche às 9:11",
            imageSrc: ["/img/911.png", "/img/9112.png"],
            isPrivate: true,
            modalContent: ["Um divertido site que renderiza de forma aleatória um porsche sempre as 9:11 AM/PM"],
            stack: ["HTML", "JS", "CSS", "Bootstrap"],
            privateName: "Público",
            url: "http://its-porsche-time.vercel.app",
            githubUrl: "https://github.com/geovaniorsoli/its-porsche-time",
            githubPrivate: false,
            urlPrivate: false
        },
        {
            id: 4,
            title: "Chat",
            description: "Apenas um chat",
            imageSrc: ["/img/chat1.png", "/img/chat2.png", "/img/chat3.png",],
            isPrivate: true,
            modalContent: ["Um chat usando websocket onde é possível escolher um icone para chamar de seu na conversa"],
            stack: ["TS", "JS", "NEXT.JS", "NextUI"],
            privateName: "Público",
            url: "https://chat-gamma-eight-84.vercel.app/",
            githubUrl: "https://github.com/geovaniorsoli/chat",
            githubPrivate: false,
            urlPrivate: false
        },
        {
            id: 5,
            title: "Script falicitador de ponto eletrônico",
            description: "Script em python para te ajudar.",
            imageSrc: ["/img/scriptoitchau1.png", "/img/scriptoitchau2.png",],
            isPrivate: true,
            modalContent: ["Da necessidade de esperar a plataforma carregar, veio a solução de usar um script em python que espera para você o tempo de carregamento e assim após carregar a página e bater o ponto ainda bloqueia o seu computador ou delisga no caso da saida "],
            stack: ["Python", "Selenium", "NEXT.JS", "NextUI"],
            privateName: "Público",
            url: "oitchau-facilitador.vercel.app/",
            githubUrl: "https://github.com/geovaniorsoli/oitchau-facilitador-script",
            githubPrivate: false,
            urlPrivate: false
        },
        {
            id: 6,
            title: "Elojob Valorant Site",
            description: "Um site desenovolvido para calcular preço de serviço no valorant.",
            imageSrc: ["/img/valorant1.png", "/img/valorant2.png", "/img/valorant3.png", "/img/valorant4.png",],
            isPrivate: true,
            modalContent: ["Da necessidade sempre calcular na mão e divulgar o trabalho de forma informal, fui contratado para desenvolver um site que divulgasse o serviço e ainda tivesse uma calculadora para mostrar o resultado final do serviço escolhido e depois enviasse para o Whatsapp um resumo do pedido."],
            stack: ["Next.JS", "NextUI"],
            privateName: "Público",
            url: "https://vstore-valorant.vercel.app/elojob",
            githubUrl: "https://github.com/geovaniorsoli/vstore",
            githubPrivate: true,
            urlPrivate: false
        }
    ]


    return (
        <>
            <NavigationBar />

            <div className={sty.containerProjeto}>
                <h2 className={sty.masterTitle}>PROJETOS</h2>
            </div>
            <div className='margin'>
                <div className={sty.containerProjeto}>
                    <h3 className="text-small text-default-500"> Deslize para o lado para ver mais fotos dos projetos</h3>
                </div>
            </div>
            <div className={sty.containerProjeto}>
                <CardList cards={cardsProjects} />
            </div>
            <Footer />
        </>
    )
}