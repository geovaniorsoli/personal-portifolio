import { useState } from 'react'
import sty from '../styles/contato.module.css'
import { Input } from '../components/ui/input'
import { Textarea } from "@/components/ui/textarea"
import { Toaster, toast } from 'sonner'
import { Button } from "@/components/ui/button"

export default function Contato() {
  const textoOriginal = {
    github: 'Github',
    email: 'Email',
    cv: 'Curriculo',
    carta: 'Apresentação'
  }

  const TextoIndicado = {
    github: 'github/geovaniorsoli',
    email: 'geovanispop@gmail.com',
    cv: 'Visualizar Curriculo',
    carta: 'Visualizar Apresentação'
  }

  const [btnTxt, setBtnTxt] = useState(textoOriginal)

  const mouseOn = (btn) => {
    const novoTxt = {
      ...btnTxt,
      [btn]: TextoIndicado[btn]
    }
    setBtnTxt(novoTxt)
  }

  const mouseOff = () => {
    setBtnTxt({ ...textoOriginal })
  }

  const [copiado, setCopiado] = useState(false)

  return (
    <>
    <div id="contato"></div>
      <div className={sty.containerCenter}>
        <h1 className={sty.title}>ENTRE EM CONTATO</h1>
      </div>

      <div className={sty.containerCenter}>
        <form className={sty.form} action="https://formspree.io/f/mjvqzowo" method="POST">
          <div className={sty.inputGroup}>
            <Input placeholder='Nome' type="text" id='nome' name='nome' className={sty.InputForm} />
            <Input placeholder='Email' type="email" id='email' name='email' className={sty.InputForm} />
          </div>
          <Textarea placeholder='Digite uma mensagem!' id='msg' name='msg' className={sty.InputFormTextArea} />
          <Button type='submit' className={sty.InputButton}> Enviar </Button>
        </form>
      </div>

      <div className={sty.containerCenter}>
        <h1 className={sty.title}>MÍDIA SOCIAIS</h1>
      </div>


      <div className={sty.containerCenterButton}>
        <a target='_blank' href='https://github.com/geovaniorsoli'
          onMouseOver={() => mouseOn('github')}
          onMouseOut={mouseOff}
          className={sty.buttonGithub}>
          {btnTxt.github}
        </a>
        <Toaster />

        <a
        onMouseOver={() => mouseOn('email')}
        onMouseOut={mouseOff}
        className={sty.buttonEmail}
        onClick={() => {
          toast("Copiado para área de transferência");
        }}
      >
        {btnTxt.email}
      </a>

      </div>
      

      <div className={sty.containerCenter}>
        <h1 className={sty.title}>PROFISSIONAL</h1>
      </div>


      <div className={sty.containerCenterButton}>
        <a target='_blank' href='https://docs.google.com/document/d/1FHFtmjtRmnku5u-4lX7I7-nhoJ9Ifd9NLdoI6Lx5vs8/edit?usp=sharing'
          onMouseOver={() => mouseOn('cv')}
          onMouseOut={mouseOff}
          className={sty.buttonGithub}>
          {btnTxt.cv}
        </a>
        <Toaster />

        <a
        target='_black' href='https://docs.google.com/document/d/1sCBlbTlkLLsgNg7HTDTt_NsUv-4iGNZJ1ASakRvGRDM/edit?usp=sharing'
        onMouseOver={() => mouseOn('carta')}
        onMouseOut={mouseOff}
        className={sty.buttonGithub}
      >
        {btnTxt.carta}
      </a>

      </div>
    </>

    
  )
}