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
export default function Project() {
    return (
        <>
            <h1 className={sty.mainTitle}>PROJETOS</h1>
            <div className={sty.projectContainer}>
                <img className={sty.img} src="/img/project/nowepage.png" alt="" />
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
                <img className={sty.img} src="/img/project/nowepage.png" alt="" />
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

        </>
    )
}