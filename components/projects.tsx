import React, { useState } from 'react';
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
    Image
} from '@nextui-org/react';

import * as lucide from "lucide-react"

interface CardData {
    id: number;
    title: string;
    description: string;
    imageSrc: string;
    isPrivate: boolean;
    modalContent: string;
}

interface CardListProps {
    cards: CardData[];
}

const CardList: React.FC<CardListProps> = ({ cards }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentCard, setCurrentCard] = useState<CardData | null>(null);

    const handleOpen = (card: CardData) => {
        setCurrentCard(card);
        setIsOpen(true);
    };
    const handleClose = () => {
        setIsOpen(false);
        setCurrentCard(null);
    };

    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => (
                <Card key={card.id} isHoverable className="py-4 bg-default-200">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-end gap-2">
                        {card.isPrivate && <Chip color="danger">Privado</Chip>}
                    </CardHeader>
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start gap-2">
                        <div>
                            <h4 className="font-bold text-large">{card.title}</h4>
                            <small className="text-default-500">{card.description}</small>
                        </div>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                        <Image
                            alt="Card background"
                            className="object-cover rounded-xl"
                            src={card.imageSrc}
                            width={1920}
                            isZoomed
                        />
                    </CardBody>
                    <CardFooter className="flex justify-between items-center px-4 py-2">
                        <Button onPress={() => handleOpen(card)}>
                            conhecer mais sobre <lucide.ArrowRight />
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
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="warning" variant="light" onPress={handleClose}>
                                        Close
                                    </Button>
                                    <Button color="warning" onPress={handleClose}>
                                        Action
                                    </Button>
                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </Modal>
            )}
        </div>
    );
};

export default CardList;
