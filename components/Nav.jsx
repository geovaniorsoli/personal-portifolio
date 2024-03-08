import sty from '../styles/styComponents/nav.module.css'
export default function Navbars() {

  return (
    <>
      <div className={sty.containerNav}>
        <nav className={sty.nav}>
          <a className={sty.link} href="#home">Home</a>
          <a className={sty.link} href="#sobre">Sobre</a>
          <a className={sty.link} href="#projeto">Projetos</a>
          <a className={sty.link} href="#contato">Contatos</a>
        </nav>
      </div>
    </>
  )
}