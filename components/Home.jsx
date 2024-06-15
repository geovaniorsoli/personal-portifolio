import Image from 'next/image'
import img from '../public/img/pic.png'
import sty from "../styles/home.module.css"
import { Spotlight } from './ui/Spotlight'
import { Separator } from "@/components/ui/separator"
import TextGenerateEffect from "./ui/TextGenerateEffect"
export default function Home() {
    return (
        <>
        <Spotlight />
            <div id='home' className={sty.containerCenter}>
                <div className={sty.textContainer}>
                    <h1 className={sty.title}>Web dev.</h1>
                    <TextGenerateEffect className={sty.subtitle} words="Olá, sou o Geovani Orsoli. Apaixonado por Tecnologia." /> 
                </div>
                <Image src={img} alt="Descrição" width={300} height={300} />
            </div>


            <div id='sobre' className={sty.aboutContainer}>
                <h1  className={sty.aboutTitle}>
                    SOBRE MIM
                </h1>
                <h2 className={sty.aboutSubtitle}>
                Meu nome é Geovani Orsoli, tenho 18 anos e desde pequeno sou apaixonado por tecnologia. Minha curiosidade me levou a desenvolver familiaridade com computadores através de jogos, produção de vídeos e imagens, e cursos na área de robótica, incluindo trabalho com Arduino e programação em blocos. No ensino médio, estudei programação e cursei Informática no Bento Quirino, onde adquiri conhecimentos valiosos. Desenvolvi um projeto de TCC baseado em um sistema GED (Gerenciamento Eletrônico de Documentos) com tabelas customizáveis e dashboards para análise de dados. O sucesso desse projeto levou meu grupo a continuar trabalhando nele fora da escola, e ele permanece ativo até hoje.     
                </h2> 

                <h1 className={sty.aboutTitle}>STACK</h1>
                <div className={sty.containerStack}>
                    <img src="https://skillicons.dev/icons?i=html,css,js,tailwind,next,nodejs,c,python" />
                </div>
                <h1 className={sty.aboutTitle}>SOFTWARES</h1>
                <div className={sty.containerStack}>
                    <img src="https://skillicons.dev/icons?i=ps,ae,premiere,figma" />
                </div>

                <h1  className={sty.aboutTitle}>
                    IDIOMAS
                </h1>

                <h2 className={sty.aboutSubtitle}>
                    Português: Fluente 
                </h2>

                <h2 className={sty.aboutSubtitle}>
                    inglês: profissionalmente. Estudei por cinco anos em várias escolas, incluindo a Cultura Inglesa, sendo esta minha última instituição.
                </h2>
            </div>

            <div className={sty.divider}></div>
            <Separator />

        </>
    )
}
