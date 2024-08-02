"use client"
import { useEffect, useState } from "react";
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
import CardList from "../components/projects"
import * as lucide from "lucide-react"
import Footer from '../components/footer'
import FlipWords from '@/components/ui/flipWords'
import TextGenerateEffect from '@/components/ui/textEffect'

const cardsProjects = [
  {
    id: 1,
    title: "Weon",
    description: "Sistema GED customizável que gera dashboards.",
    imageSrc: ["/img/weon1.png", "/img/weon2.png", "/img/weon3.png",],
    isPrivate: false,
    modalContent: ["Um sistema do tipo GED (GERENCIAMENTO ELETRONICO DE DOCUMENTOS) com o diferencial de ser customizável pelo cliente, com facilidade é possivel criar tabelas e gerenciar dados, além disso é possivel visualizar dados em dashboards."],
    stack: ["TS", "JS", "NEXT.JS", "ShadcnUI", "Dockers", "MongoBD", "AWS"],
    privateName: "Privado, em progresso",
    url: "http://its-porsche-time.vercel.app",
    githubUrl: "https://github.com/nowecompany",
    githubPrivate: false,
    urlPrivate: true
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
    description: ["Ciência da computação, Unimetrocamp (Mar 2024 - Dez 2029)", "Inglês avançado"],
  },
  {
    icon: lucide.Code,
    id: 4,
    title: "Programas",
    description: ["Figma", "Powerbi", "Premiere", "AfterEffects", "Photoshop", "Github",],
  },

]

const words = ["Tecnologia.", "Programação.", "UI/UX.", "Design.", "IA.", "Interfaces."]

const sobreMim = "Me chamo Geovani Orsoli, sou de São Paulo, tenho 18 anos e estou cursando ciência da computação. Desde sempre gostei de programar e produzir conteúdo audio-visual, Sou cativado por programação desde quando a conheci, procuro sempre estudar coisas nova, tudo pode ser alcançado com paciência e estudo."

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
                <Link showAnchorIcon href={CurriculumLink} className="text-tiny">Currículo</Link>
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
        <div className={sty.containerCard}>
          {cardsMe.map((card) => (
            <Card key={card.id} className={sty.card}>
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
        <p className='align-center flex justify-center'> <lucide.Crown className='text-default-500' /> </p>
        <h2 className={sty.subtitleSobre}>Nowe company</h2>
        <div className='margin'>
          <h2 className='align-center flex justify-center text-default-500'>
            Um Projeto de TCC que virou realidade.
          </h2>
        </div>
        <CardList cards={cardsProjects} />
      </div>
      <div className='flex items-center justify-center py-4'>
        <Button radius='full' className='mt-3' as={Link} variant='flat' color='warning' href="/projetos">
          Ver todos Projetos
        </Button>
      </div>
      <Footer />
    </>
  )
}
