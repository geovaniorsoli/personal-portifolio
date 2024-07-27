import React, { useState } from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Button,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Chip,
    Image,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent
} from '@nextui-org/react'
import { ArrowRight } from 'lucide-react'

interface CardData {
    id: number
    title: string
    description: string
    imageSrc: string
    isPrivate: boolean
    privateName: string
    modalContent: string
    url: string
    githubUrl: string
    githubPrivate: boolean
    urlPrivate: boolean
}

interface CardListProps {
    cards: CardData[]
}


const CardList: React.FC<CardListProps> = ({ cards }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [currentCard, setCurrentCard] = useState<CardData | null>(null)

    const handleOpen = (card: CardData) => {
        setCurrentCard(card)
        setIsOpen(true)
    }
    const handleClose = () => {
        setIsOpen(false)
        setCurrentCard(null)
    }

    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => (
                <Card key={card.id} isHoverable className="py-4 bg-default-200">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-end gap-2">
                        <Chip variant='flat' color={card.isPrivate ? "success" : "danger"}>{card.privateName}</Chip>
                    </CardHeader>
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start gap-2">
                        <div>
                            <h4 className="font-bold text-large">{card.title}</h4>
                            <small className="text-default-500">{card.description}</small>
                        </div>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                        <Link isExternal href={card.url}>
                            <Image
                                alt="Card background"
                                className="object-cover rounded-xl"
                                src={card.imageSrc}
                                isZoomed
                                width={1920}
                                height={1080}
                            />
                        </Link>
                    </CardBody>
                    <CardFooter className="flex justify-between items-center px-4 py-2">
                        <Button color="warning" variant='flat' onPress={() => handleOpen(card)}>
                            conhecer mais sobre <ArrowRight />
                        </Button>
                    </CardFooter>
                </Card>
            ))}

            {currentCard && (
                <Modal backdrop="blur" isOpen={isOpen} onClose={handleClose}>
                    <ModalContent>
                        {() => (
                            <>
                                <ModalHeader className="flex flex-col gap-1">{currentCard.title}</ModalHeader>
                                <ModalBody>
                                    <p>{currentCard.modalContent}</p>
                                    <p className='text-default-500 text-small'> Acessar o projeto</p>
                                </ModalBody>
                                <ModalFooter>
                                    <Popover placement="right">
                                        <PopoverTrigger>
                                            <Button radius="full" color="warning" variant="flat">
                                                Acessar o projeto
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent>
                                            <div className="px-1 py-2 grid">
                                                <div className="text-small font-bold">Acesse os links</div>
                                                <Link showAnchorIcon isExternal isDisabled={currentCard.githubPrivate} href={currentCard.githubUrl} className="text-tiny">Github</Link>
                                                <Link showAnchorIcon isExternal isDisabled={currentCard.urlPrivate } href={currentCard.url} className="text-tiny">Page</Link>
                                            </div>
                                        </PopoverContent>
                                    </Popover>
                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </Modal>
            )}
        </div>
    )
}

export default CardList
