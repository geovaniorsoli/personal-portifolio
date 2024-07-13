"use client"
import NavigationBar from '@/components/nav';
import {
  Avatar,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
  Chip,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure

} from "@nextui-org/react";
import * as lucide from "lucide-react"
import sty from "../styles/main.module.css"
import { useState } from 'react';


const project = [
  { img: "", title: "", desc: "", isPrivate: "", }
]


export default function Page() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [backdrop, setBackdrop] = useState('blur')

  const handleOpen = (backdrop: any) => {
    setBackdrop(backdrop)
    onOpen();
  }
  return (
    <>
      <NavigationBar />
      <div className={sty.containerCenterFullFlex}>
        <div>
          <h1 className={sty.title} >Olá sou Geovani Orsoli</h1>
          <h2 className={sty.subtitle}> um apaixonado entusiasta por Tecnologia. </h2>
        </div>
        <Avatar src="/pic.png" className={sty.avatar} />
      </div>

      <div className='grid h-screen'>
        <div className={sty.containerSobre}>
          <h2 className={sty.subtitleSobre}> Sobre mim </h2>
          <p className={sty.textSobre}> Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Voluptas
            molestias officia non, molestiae quia magni in
            laudantium ipsam vero excepturi nemo incidunt
            officiis libero quidem repellendus sint accusantium
            voluptate? Voluptatibus. </p>
        </div>

        <div className={sty.containerSobre}>
          <h2 className={sty.subtitleSobre}> Linguas que programo </h2>
          <div className={sty.containerStack}>
            <img className={sty.stack} src="https://skillicons.dev/icons?i=html,css,js,tailwind,next,nodejs,c,python" />
          </div>
        </div>

        <div className={sty.containerSobre}>
          <h2 className={sty.subtitleSobre}> Programas </h2>
          <div className={sty.containerStack}>
            <img className={sty.software} src="https://skillicons.dev/icons?i=ps,ae,premiere,figma" />
          </div>
        </div>

        <div className={sty.containerSobre}>
          <h2 className={sty.subtitleSobre}> Idiomas </h2>
          <div className={sty.lista}>
            <p className='flex items-center'>  <lucide.Dot />  Português Nativo </p>
            <p className='flex items-center'>  <lucide.Dot />  Inglês Avançado <span className='text-danger text-small items-center ml-2'> Estudando* </span> </p>
          </div>
        </div>
      </div>


      <div className={sty.containerProjeto}>
        <h2 className={sty.subtitleSobre}> PROJETOS </h2>

        
        <Card isHoverable className="py-4 bg-default-200">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-end gap-2">
            <Chip color="danger">Privado</Chip>
          </CardHeader>
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start gap-2">
            <div>
              <h4 className="font-bold text-large">911</h4>
              <small className="text-default-500">simples e animad</small>
            </div>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src="/img/911.png"
              width={1920}
              isZoomed
            />
          </CardBody>
          <CardFooter className="flex justify-between items-center px-4 py-2">

            <Button onPress={() => handleOpen(onOpen)}> conhecer mais sobre  <lucide.ArrowRight /> </Button>
            <Modal backdrop="blur" isOpen={isOpen} onClose={onClose}>
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                    <ModalBody>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam pulvinar risus non risus hendrerit venenatis.
                        Pellentesque sit amet hendrerit risus, sed porttitor quam.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nullam pulvinar risus non risus hendrerit venenatis.
                        Pellentesque sit amet hendrerit risus, sed porttitor quam.
                      </p>
                      <p>
                        Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit
                        dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis.
                        Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod.
                        Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur
                        proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
                      </p>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="light" onPress={onClose}>
                        Close
                      </Button>
                      <Button color="primary" onPress={onClose}>
                        Action
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
          </CardFooter>
        </Card>
      </div>
    </>
  )
}