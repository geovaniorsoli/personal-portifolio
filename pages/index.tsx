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
} from "@nextui-org/react";
import * as lucide from "lucide-react"
import sty from "../styles/main.module.css"


const project = [
  {name: "", img: "", desc: "", }
]

export default function Page() {
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
        <Card isHoverable className="py-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start gap-2">
            <div className="items-end">
          <Chip color="danger">Privado</Chip>
            </div>
          <h4 className="font-bold text-large">911</h4>
            <small className="text-default-500">simples e animad</small>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src="/img/911.png"
              width={1920}
            />
          </CardBody>
          <CardFooter className="flex justify-between items-center px-4 py-2">

            <p> conheça mais sobre </p>
          </CardFooter>
        </Card>
      </div>
    </>
  )
}