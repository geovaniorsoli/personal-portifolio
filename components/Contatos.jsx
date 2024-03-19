import { useState } from 'react'
import sty from '../styles/contato.module.css'
import { Input } from "@/components/ui/Input"
import { Textarea } from "@/components/ui/textarea"
import { Toaster, toast } from 'sonner'
import { Button } from "@/components/ui/button"

export default function Contato() {
  //trocar texto do botao ao passar o mouse
  const textoOriginal = {
    github: 'Github',
    email: 'Email',
  }

  const TextoIndicado = {
    github: 'github/geovaniorsoli',
    email: 'geovanispop@gmail.com',
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

  //copiar elemento para area de transfencia
  const [copiado, setCopiado] = useState(false)

  return (
    <>
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
        <a href='#'
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
        <a target="_blank" href="/Geovani Orsoli Gongora (CV) .pdf">
          <h1 className={sty.titleCV}>BAIXAR CURRICULO</h1>
        </a>
      </div>
    </>

    
  )
}