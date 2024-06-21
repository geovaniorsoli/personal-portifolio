import Nav from "../components/Nav"
import Home from "../components/Home"
import Project from "@/components/project"
import Contato from "@/components/Contatos"
import Footer from "@/components/Footer"
export default function index() {
  return (
    <>
      <Nav />
      <Home />
      <Project />
      <Contato />
      <Footer />
    </>
  )
}
