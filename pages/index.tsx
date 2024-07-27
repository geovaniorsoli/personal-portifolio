"use client"
import NavigationBar from '@/components/nav'
import {
  Avatar,
  Button,
  useDisclosure,
  Card,
  CardHeader,
  CardBody,
  Divider,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@nextui-org/react"
import sty from "../styles/main.module.css"
import React, { useState } from 'react'
import CardList from "../components/projects"
import * as lucide from "lucide-react"
import Footer from '../components/footer'
import FlipWords from '@/components/ui/flipWords'
import TextGenerateEffect from '@/components/ui/textEffect'

const buttonColor = "warning"

const cardsProjects = [
  {
    id: 1,
    title: "Porsche Time",
    description: "Simples projeto e divertido",
    imageSrc: "/img/911.png",
    isPrivate: true,
    modalContent: "Detalhes do carro 911...",
    privateName: "Público",
    url: "http://its-porsche-time.vercel.app"
  }
]

interface CardsMe {
  id: number
  title: string
  description: string[]
  icon: React.ElementType
}

const cardsMe: CardsMe[] = [
  {
    icon: lucide.Terminal,
    id: 1,
    title: "Habilidades",
    description: ["WEB (HTML, CSS, JS)", "React (Next.js)", "Python", "Tailwind", "UI/UX", "Design", "Scrum"],
  },
  {
    icon: lucide.Briefcase,
    id: 2,
    title: "Experiência",
    description: ["Sócio & Dev FrontEnd nowe", "Estágio Mottasul (Jan 24 - Jul 24)", "Freelance",],
  },
  {
    icon: lucide.Book,
    id: 3,
    title: "Educação",
    description: ["Ciência da computação, Unimetrocamp (Mar 2024 - Dez 2029)",],
  },
  {
    icon: lucide.Code,
    id: 4,
    title: "Programas",
    description: ["Figma", "Powerbi", "Premiere", "Photoshop", "Github",],
  },
]

const words = ["Tecnologia.", "Programação.", "UI/UX.", "Design.", "IA.", "Interfaces."]

const sobreMim = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti beatae molestias animi nihil. Magnam, neque?"

const githubLink = "https://github.com/GeovaniOrsoli"
const LinkedinLink = "https://www.linkedin.com/in/geovani-orsoli/"
const CurriculumLink = "https://docs.google.com/document/d/1nnljCgs-6u_tL711w67NUjOt4jQVmVH2jyN3xfTPrEE/edit?usp=sharing"

export default function Page() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [backdrop, setBackdrop] = useState('blur')

  const handleOpen = (backdrop: any) => {
    setBackdrop(backdrop)
    onOpen()
  }

  return (

    <>
      <NavigationBar />
      <div className="w-full h-screen flex flex-col items-center justify-center text-center px-4">
        <Popover showArrow={true} placement="top">
          <PopoverTrigger>
            <Avatar src="/pic.png" className={sty.avatar} />
          </PopoverTrigger>
          <PopoverContent>
            <div className="px-1 py-2">
              <div className="text-small font-bold">Bem vindo ao meu Portfolio.</div>
              <Divider />
              <div className="text-tiny">Guia</div>
              <div className='grid gap-1'>
                <Link href='/Projetos' className="text-tiny">Projetos</Link>
                <Link href='/Projetos' className="text-tiny">Sobre Mim</Link>
                <Link href='/Projetos' className="text-tiny">Contato</Link>
                <div className="text-tiny">Links</div>
                <Link showAnchorIcon href={CurriculumLink} className="text-tiny">Curiculum</Link>
                <Link href={githubLink} showAnchorIcon className="text-tiny">Github</Link>
                <Link href={LinkedinLink} showAnchorIcon className="text-tiny">Linkedin</Link>
              </div>
            </div>
          </PopoverContent>
        </Popover>
        <h1 className={sty.title}>Geovani Orsoli</h1>
        <div className='flex items-center justify-center text-center'>
          <h2 className="text-lg text-default-500">um entusiasta por</h2>
          <div>
            <FlipWords className={sty.warningColor} words={words} duration={100} />
          </div>
        </div>
      </div>
      <div className={sty.containerSobre}>
        <h2 className={sty.subtitleSobre}>Sobre mim</h2>
        <div className={sty.textSobre}>
          <TextGenerateEffect words={sobreMim} />
        </div>
      </div>

      <div className={sty.containerSobreCard}>
        <h2 className={sty.subtitleSobre}>Habilidades e Experiência</h2>
        <div className="flex items-center justify-center mb-3 gap-4">
          {cardsMe.map((card) => (
            <Card key={card.id} isHoverable className={sty.card}>
              <CardHeader className="flex justify-between gap-3">
                <div className="flex flex-col">
                  <p className="font-bold text-large">{card.title}</p>
                </div>
                <Button radius='full' variant='flat' isIconOnly color='warning'>
                  <card.icon size={20} />
                </Button>
              </CardHeader>
              <CardBody className="flex-1 overflow-y-auto break-words">
                <ul className='text-default-500'>
                  {card.description.map((description) => (
                    <div className='flex'>
                      <li className='flex' key={description}> <lucide.Dot /> {description}</li>
                    </div>
                  ))}
                </ul>
              </CardBody>
            </Card>
          ))}
        </div>
        <div className='flex items-center justify-center mt-3'>
          <Button radius='full' className='mt-3' as={Link} isExternal variant='flat' color='warning' href={CurriculumLink}>
            Acessar Curriculum
          </Button>
        </div>
      </div>
      <div className={sty.containerProjeto}>
        <h2 className={sty.subtitleSobre}>Alguns dos meus PROJETOS</h2>
        <CardList cards={cardsProjects} />
      </div>
      <div className='flex items-center justify-center py-4'>
          <Button radius='full' className='mt-3' as={Link} isExternal variant='flat' color='warning' href={CurriculumLink}>
            Ver todos Projetos
          </Button>
        </div>
      <Footer />
    </>
  )
}
