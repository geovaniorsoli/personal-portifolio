"use client";
import NavigationBar from '@/components/nav';
import {
  Avatar,
  Button,
  useDisclosure,
  Card,
  CardHeader,
  CardBody,
  Divider,
} from "@nextui-org/react";
import sty from "../styles/main.module.css";
import { useState } from 'react';
import CardList from "../components/projects";
import { LucideDot } from 'lucide-react';

const buttonColor = "warning";

const cardsProjects = [
  {
    id: 1,
    title: "Porsche Time",
    description: "Simples projeto e divertido",
    imageSrc: "/img/911.png",
    isPrivate: false,
    modalContent: "Detalhes do carro 911...",
  }
];

interface CardsMe {
  id: number;
  title: string;
  description: string[];
}

const cardsMe: CardsMe[] = [
  {
    id: 1,
    title: "Habilidades",
    description: ["WEB (HTML, CSS, JS)", "React (Next.js)", "Python", "Tailwind", "UI/UX", "Design", "Scrum"],
  },
  {
    id: 2,
    title: "Experiência",
    description: ["Sócio & Desenvolvedor FrontEnd nowe", "Estágio na Mottasul (Jan 2024, Jul 2024)", "Freelance", ],
  },
  {
    id: 3,
    title: "Educação",
    description: ["Ciência da computação, Unimetrocamp (Mar 2024 - Dez 2029)",],
  },
  {
    id: 4,
    title: "Programas",
    description: ["Figma", "Powerbi", "Premiere", "Photoshop", "Github",],
  },
];

export default function Page() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [backdrop, setBackdrop] = useState('blur');

  const handleOpen = (backdrop: any) => {
    setBackdrop(backdrop);
    onOpen();
  };

  return (
    <>
      <NavigationBar />
      <div className={sty.containerCenterFullFlex}>
        <div className='grid gap-2'>
          <h1 className={sty.title}>Olá, sou Geovani Orsoli</h1>
          <h2 className="text-default-500 ml-1">um entusiasta por Desenvolvimento.</h2>
          <Button size='sm' className={sty.button} variant='flat' color={buttonColor} radius='full'>Conhecer</Button>
        </div>
        <div className='grid mx-[500]'>
          <Avatar src="/pic.png" className={sty.avatar} />
        </div>
      </div>

      <div className={sty.containerSobre}>
        <h2 className={sty.subtitleSobre}>Sobre mim</h2>
        <p className={sty.textSobre}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
          molestias officia non, molestiae quia magni in laudantium ipsam vero
          excepturi nemo incidunt officiis libero quidem repellendus sint
          accusantium voluptate? Voluptatibus.
        </p>
      </div>

      <div className={sty.containerSobreCard}>
        <h2 className={sty.subtitleSobre}>Habilidades e Experiência</h2>
      <div className="flex items-center justify-center mb-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cardsMe.map((card) => (
          <Card key={card.id} isHoverable className={sty.card}>
            <CardHeader className="flex gap-3">
              <div className="flex flex-col">
                <p className="font-bold text-large">{card.title}</p>
              </div>
            </CardHeader>
            <CardBody className="flex-1 overflow-y-auto break-words">
              <ul className='text-default-500'>
                {card.description.map((description) => (
                  <div className='flex'>
                    <li className='flex' key={description}> <LucideDot/> {description}</li>
                  </div>
                ))}
              </ul>
            </CardBody>
          </Card>
        ))}
      </div>
</div>

      <div className={sty.containerProjeto}>
        <h2 className={sty.subtitleSobre}>PROJETOS</h2>

        <CardList cards={cardsProjects} />
      </div>
    </>
  );
}
