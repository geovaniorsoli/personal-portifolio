import Image from 'next/image'
import img from '../public/img/pic.png'
import sty from "../styles/home.module.css"

import { Separator } from "@/components/ui/separator"

export default function Home() {
    return (
        <>
            <div className={sty.containerCenter}>
                <div className={sty.textContainer}>
                    <h1 className={sty.title}>Web dev.</h1>
                    <h2 className={sty.subtitle}>Olá, sou o Geovani Orsoli. Apaixonado por Front-end e design de UI UX.</h2>
                </div>
                <Image src={img} alt="Descrição" width={300} height={300} />
            </div>

            <Separator />

            <div className={sty.aboutContainer}>
                <h1 className={sty.aboutTitle}>
                    SOBRE MIM
                </h1>
                <h2 className={sty.aboutSubtitle}>
                    Um apaixonado designer de UI/UX e desenvolvedor frontend. Minha missão é criar experiências digitais envolventes, combinando estética inovadora com funcionalidade sólida. Explore meu portfólio para ver como posso transformar suas ideias em designs memoráveis e interfaces intuitivas. Vamos criar algo extraordinário juntos!
                </h2>
                <h1 className={sty.aboutTitle}>STACK</h1>
                <div className={sty.containerStack}>
                    <img src="https://skillicons.dev/icons?i=html,css,js,bootstrap,next" />
                    <img src="https://skillicons.dev/icons?i=express,mongo,nodejs" />
                </div>
                <h1 className={sty.aboutTitle}>SOFTWARES</h1>
                <div className={sty.containerStack}>
                    <img src="https://skillicons.dev/icons?i=ps,ae,premiere,figma" />
                </div>
            </div>

            <div className={sty.divider}></div>
            <Separator />

        </>
    )
}
