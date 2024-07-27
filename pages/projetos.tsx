import CardList from "@/components/projects"
import NavigationBar from "@/components/nav"
import sty from "../styles/main.module.css"
export default function projetos() {

    const cardsProjects = [
        {
            id: 1,
            title: "Porsche Time",
            description: "Simples projeto e divertido",
            imageSrc: "/img/911.png",
            isPrivate: true,
            modalContent: "Detalhes do carro 911...",
            privateName: "Público",
            url: "http://its-porsche-time.vercel.app",
            githubUrl: "",
            githubPrivate: true,
            urlPrivate: true,
        }
    ]

    return (
        <>
            <NavigationBar />

            <div className={sty.containerProjeto}>
                <h2 className={sty.masterTitle}>PROJETOS</h2>
                <CardList cards={cardsProjects} />
            </div>
        </>
    )
}