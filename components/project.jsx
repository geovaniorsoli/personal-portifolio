import sty from "../styles/project.module.css"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import { Badge } from "@/components/ui/badge"

import { Info } from 'lucide-react';

export default function Project() {
    return (
        <>  
            <div id="projeto"></div>
            <h1 className={sty.mainTitle}>PROJETOS</h1>
            <h1 className={sty.tipMobile}> arraste para o lado para ver mais!</h1>
            <div className={sty.projectContainer}>
                <Badge variant="destructive" className={sty.badge}> Privado </Badge>
                <Carousel >
                    <CarouselContent>
                        <CarouselItem><img className={sty.img} src="/img/weon1.png" alt="" /></CarouselItem>
                        <CarouselItem><img className={sty.img} src="/img/weon2.png" alt="" /></CarouselItem>
                        <CarouselItem><img className={sty.img} src="/img/weon3.png" alt="" /></CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className={sty.carosel} />
                    <CarouselNext className={sty.carosel} />
                </Carousel>
                <div className={sty.contentText}>
                    <h1 className={sty.description}>WEON </h1>
                    <Dialog>
                        <DialogTrigger asChild>
                            <h1 className={sty.conheca}><Info/></h1>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>NOWE-PAGE</DialogTitle>
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>SOBRE</AccordionTrigger>
                                        <AccordionContent>
                                            Um sistema do tipo GED (GERENCIAMENTO ELETRONICO DE DOCUMENTOS)
                                            com o diferencial de ser customizável pelo cliente, com facilidade 
                                            é possivel criar tabelas e gerenciar dados, além disso é possivel
                                            visualizar dados em dashboards. 
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-2">
                                        <AccordionTrigger>STACK</AccordionTrigger>
                                        <AccordionContent>
                                            <li>TS</li>
                                            <li>NextJS</li>
                                            <li>ShadcnUI</li>
                                            <li>Dockers</li>
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-3">
                                        <AccordionTrigger>VER O PROJETO</AccordionTrigger>
                                        <AccordionContent>
                                        <div className={sty.containerContentAcordion}>
                                            <a className={sty.link} href="https://weon.nowecompany.com.br" target="_blank"> Demo </a>
                                            <a className={sty.link} href="https://github.com/nowecompany/weon" target="_blank"> Code - github </a>
                                        </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>

            <div className={sty.projectContainer}>
                <Badge variant="secondary" className={sty.badge}> Publico </Badge>
                <a href="https://nowecompany.com.br" target="_blank">
                    <img className={sty.img} src="/img/project/nowepage.png" alt="" />
                </a>
                <div className={sty.contentText}>
                    <h1 className={sty.description}>NOWE-PAGE </h1>
                    <Dialog>
                        <DialogTrigger asChild>
                            <h1 className={sty.conheca}><Info/></h1>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>NOWE-PAGE</DialogTitle>
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>SOBRE</AccordionTrigger>
                                        <AccordionContent>
                                            Uma landing page onde o foco é apresentar
                                            o sistema WEON 
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-2">
                                        <AccordionTrigger>STACK</AccordionTrigger>
                                        <AccordionContent>
                                            <li>NextJS</li>
                                            <li>ShadcnUI</li>
                                        </AccordionContent>
                                    </AccordionItem>
                                 
                                    <AccordionItem value="item-3">
                                        <AccordionTrigger>VER O PROJETO</AccordionTrigger>
                                        <AccordionContent>
                                        <div className={sty.containerContentAcordion}>
                                            <a className={sty.link} href="https://nowecompany.com.br" target="_blank"> Demo </a>
                                            <a className={sty.link} href="https://github.com/nowecompany/nowe-page" target="_blank"> Code - github </a>
                                        </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>

            <div className={sty.projectContainer}>
                <Badge variant="secondary" className={sty.badge}> Publico </Badge>
                <Carousel>
                    <CarouselContent>
                        <CarouselItem><img className={sty.img} src="/img/climatempo1.png" alt="" /></CarouselItem>
                        <CarouselItem><img className={sty.img} src="/img/climatempo2.png" alt="" /></CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious  className={sty.carosel}/>
                    <CarouselNext className={sty.carosel}/>
                </Carousel>
                <div className={sty.contentText}>
                    <h1 className={sty.description}>CLIMA TEMPO </h1>
                    <Dialog>
                        <DialogTrigger asChild>
                            <h1 className={sty.conheca}><Info/></h1>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>NOWE-PAGE</DialogTitle>
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>SOBRE</AccordionTrigger>
                                        <AccordionContent>
                                            Uma simples aplicação que consome uma API
                                            e mostra informações sobre o clima da região
                                            em que busca.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-2">
                                        <AccordionTrigger>STACK</AccordionTrigger>
                                        <AccordionContent>
                                            <li>HTML</li>
                                            <li>CSS</li>
                                            <li>JS</li>
                                        </AccordionContent>
                                    </AccordionItem>
                                 
                                    <AccordionItem value="item-3">
                                        <AccordionTrigger>VER O PROJETO</AccordionTrigger>
                                        <AccordionContent>
                                        <div className={sty.containerContentAcordion}>
                                            <a className={sty.link} href="clima-tempo-teal.vercel.app" target="_blank"> Demo </a>
                                            <a className={sty.link} href="https://github.com/geovaniorsoli/Clima-tempo" target="_blank"> Code - github </a>
                                        </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>

            <div className={sty.projectContainer}>
                <Badge variant="secondary" className={sty.badge}> Publico </Badge>
                <img className={sty.img} src="/img/911.png" alt="" />
                <div className={sty.contentText}>
                    <h1 className={sty.description}>PORSCHE-TIME </h1>
                    <Dialog>
                        <DialogTrigger asChild>
                            <h1 className={sty.conheca}><Info/></h1>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>NOWE-PAGE</DialogTitle>
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>SOBRE</AccordionTrigger>
                                        <AccordionContent>
                                           Uma divertida aplicação que sempre quando os
                                           horários batem 9:11 AM/PM uma porsche 911 é exibida.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-2">
                                        <AccordionTrigger>STACK</AccordionTrigger>
                                        <AccordionContent>
                                            <li>HTML</li>
                                            <li>CSS</li>
                                            <li>JS</li>
                                        </AccordionContent>
                                    </AccordionItem>
                                 
                                    <AccordionItem value="item-3">
                                        <AccordionTrigger>VER O PROJETO</AccordionTrigger>
                                        <AccordionContent>
                                        <div className={sty.containerContentAcordion}>
                                            <a className={sty.link} href="its-porsche-time.vercel.app" target="_blank"> Demo </a>
                                            <a className={sty.link} href="https://github.com/geovaniorsoli/its-porsche-time" target="_blank"> Code - github </a>
                                        </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>

            <div className={sty.projectContainer}>
                <Badge variant="destructive" className={sty.badge}> Privado </Badge>
                <Carousel>
                    <CarouselContent>
                        <CarouselItem><img className={sty.img} src="/img/MARKET1.png" alt="" /></CarouselItem>
                        <CarouselItem><img className={sty.img} src="/img/MARKET2.png" alt="" /></CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className={sty.carosel} />
                    <CarouselNext className={sty.carosel} />
                </Carousel>
                <div className={sty.contentText}>
                    <h1 className={sty.description}>MARKET-LIST </h1>
                    <Dialog>
                        <DialogTrigger asChild>
                            <h1 className={sty.conheca}><Info/></h1>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>NOWE-PAGE</DialogTitle>
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>SOBRE</AccordionTrigger>
                                        <AccordionContent>
                                           Uma aplicação para fazer uma lista de compras.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-2">
                                        <AccordionTrigger>STACK</AccordionTrigger>
                                        <AccordionContent>
                                            <li>HTML</li>
                                            <li>CSS</li>
                                            <li>NODEJS</li>
                                        </AccordionContent>
                                    </AccordionItem>
                                 
                                    <AccordionItem value="item-3">
                                        <AccordionTrigger>VER O PROJETO</AccordionTrigger>
                                        <AccordionContent>
                                        <div className={sty.containerContentAcordion}>
                                            <a className={sty.link} href="https://github.com/geovaniorsoli/Market-list" target="_blank"> Code - github </a>
                                        </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>

            <div className={sty.projectContainer}>
                <Badge variant="secondary" className={sty.badge}> Publico </Badge>
                <Carousel>
                    <CarouselContent>
                        <CarouselItem><img className={sty.img} src="/img/scriptoitchau1.png" alt="" /></CarouselItem>
                        <CarouselItem><img className={sty.img} src="/img/scriptoitchau2.png" alt="" /></CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className={sty.carosel} />
                    <CarouselNext className={sty.carosel} />
                </Carousel>
                <div className={sty.contentText}>
                    <h1 className={sty.description}>AUTOMAÇÃO PONTO ELETRÔNICO</h1>
                    <Dialog>
                        <DialogTrigger asChild>
                            <h1 className={sty.conheca}><Info/></h1>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>AUTOMAÇÃO PARA PONTO</DialogTitle>
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>SOBRE</AccordionTrigger>
                                        <AccordionContent>
                                           Uma script para bater ponto de forma facilitada na plataforma OITCHAU.
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-2">
                                        <AccordionTrigger>STACK</AccordionTrigger>
                                        <AccordionContent>
                                            <li>NEXT.JS</li>
                                            <li>NEXT UI</li>
                                            <li>PYTHON</li>
                                        </AccordionContent>
                                    </AccordionItem>
                                 
                                    <AccordionItem value="item-3">
                                        <AccordionTrigger>VER O PROJETO</AccordionTrigger>
                                        <AccordionContent>
                                        <div className={sty.containerContentAcordion}>
                                            <a className={sty.link} href="https://github.com/geovaniorsoli/oitchau-facilitador-script" target="_blank"> Code Script - github </a>
                                            <a className={sty.link} href="https://github.com/geovaniorsoli/oitchau-facilitador" target="_blank"> Code Page - github </a>
                                            <a className={sty.link} href="https://oitchau-facilitador.vercel.app/" target="_blank"> view - web </a>
                                        </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </>
    )
}