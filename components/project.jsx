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


export default function Project() {
    return (
        <>
            <h1 className={sty.mainTitle}>PROJETOS</h1>

            <div className={sty.projectContainer}>
            <Badge variant="destructive" className={sty.badge}> privado </Badge>
                <Carousel>
                    <CarouselContent>
                        <CarouselItem><img className={sty.img} src="/img/weon1.png" alt="" /></CarouselItem>
                        <CarouselItem><img className={sty.img} src="/img/weon2.png" alt="" /></CarouselItem>
                        <CarouselItem><img className={sty.img} src="/img/weon3.png" alt="" /></CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
                <div className={sty.contentText}>
                    <h1 className={sty.description}>WEON </h1>
                    <Dialog>
                        <DialogTrigger asChild>
                            <h1 className={sty.conheca}>CONHECER</h1>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>NOWE-PAGE</DialogTitle>
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>Tech</AccordionTrigger>
                                        <AccordionContent>
                                            NextJS
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-2">
                                        <AccordionTrigger>Code</AccordionTrigger>
                                        <AccordionContent>
                                            <a href="https://github.com/nowecompany/nowe-page" target="_blank"> github </a>
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-3">
                                        <AccordionTrigger>View</AccordionTrigger>
                                        <AccordionContent>
                                            <a href="https://nowecompany.com.br" target="_blank"> page </a>
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-4">
                                        <AccordionTrigger>About</AccordionTrigger>
                                        <AccordionContent>
                                            Uma pagina  de apresentação da Nowe Company...
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
                            <h1 className={sty.conheca}>CONHECER</h1>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>NOWE-PAGE</DialogTitle>
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>Tech</AccordionTrigger>
                                        <AccordionContent>
                                            NextJS
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-2">
                                        <AccordionTrigger>Code</AccordionTrigger>
                                        <AccordionContent>
                                            <a href="https://github.com/nowecompany/nowe-page" target="_blank"> github </a>
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-3">
                                        <AccordionTrigger>View</AccordionTrigger>
                                        <AccordionContent>
                                            <a href="https://nowecompany.com.br" target="_blank"> page </a>
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-4">
                                        <AccordionTrigger>About</AccordionTrigger>
                                        <AccordionContent>
                                            Uma pagina  de apresentação da Nowe Company...
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
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
                <div className={sty.contentText}>
                    <h1 className={sty.description}>CLIMA TEMPO </h1>
                    <Dialog>
                        <DialogTrigger asChild>
                            <h1 className={sty.conheca}>CONHECER</h1>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>NOWE-PAGE</DialogTitle>
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>Tech</AccordionTrigger>
                                        <AccordionContent>
                                            NextJS
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-2">
                                        <AccordionTrigger>Code</AccordionTrigger>
                                        <AccordionContent>
                                            <a href="https://github.com/nowecompany/nowe-page" target="_blank"> github </a>
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-3">
                                        <AccordionTrigger>View</AccordionTrigger>
                                        <AccordionContent>
                                            <a href="https://nowecompany.com.br" target="_blank"> page </a>
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-4">
                                        <AccordionTrigger>About</AccordionTrigger>
                                        <AccordionContent>
                                            Uma pagina  de apresentação da Nowe Company...
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
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
                <div className={sty.contentText}>
                    <h1 className={sty.description}>PORSCHE-TIME </h1>
                    <Dialog>
                        <DialogTrigger asChild>
                            <h1 className={sty.conheca}>CONHECER</h1>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>NOWE-PAGE</DialogTitle>
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>Tech</AccordionTrigger>
                                        <AccordionContent>
                                            NextJS
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-2">
                                        <AccordionTrigger>Code</AccordionTrigger>
                                        <AccordionContent>
                                            <a href="https://github.com/nowecompany/nowe-page" target="_blank"> github </a>
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-3">
                                        <AccordionTrigger>View</AccordionTrigger>
                                        <AccordionContent>
                                            <a href="https://nowecompany.com.br" target="_blank"> page </a>
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-4">
                                        <AccordionTrigger>About</AccordionTrigger>
                                        <AccordionContent>
                                            Uma pagina  de apresentação da Nowe Company...
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
                        <CarouselItem><img className={sty.img} src="/img/climatempo1.png" alt="" /></CarouselItem>
                        <CarouselItem><img className={sty.img} src="/img/climatempo2.png" alt="" /></CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
                <div className={sty.contentText}>
                    <h1 className={sty.description}>MARKET-LIST </h1>
                    <Dialog>
                        <DialogTrigger asChild>
                            <h1 className={sty.conheca}>CONHECER</h1>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                                <DialogTitle>NOWE-PAGE</DialogTitle>
                                <Accordion type="single" collapsible className="w-full">
                                    <AccordionItem value="item-1">
                                        <AccordionTrigger>Tech</AccordionTrigger>
                                        <AccordionContent>
                                            NextJS
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-2">
                                        <AccordionTrigger>Code</AccordionTrigger>
                                        <AccordionContent>
                                            <a href="https://github.com/nowecompany/nowe-page" target="_blank"> github </a>
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-3">
                                        <AccordionTrigger>View</AccordionTrigger>
                                        <AccordionContent>
                                            <a href="https://nowecompany.com.br" target="_blank"> page </a>
                                        </AccordionContent>
                                    </AccordionItem>
                                    <AccordionItem value="item-4">
                                        <AccordionTrigger>About</AccordionTrigger>
                                        <AccordionContent>
                                            Uma pagina  de apresentação da Nowe Company...
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