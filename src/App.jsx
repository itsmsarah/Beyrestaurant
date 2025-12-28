
import { Header } from "./components/layouts/header"
import { Main } from "./components/layouts/main"
import { Mestre } from "./components/layouts/sectionMestre"
import { PratosDestaque } from "./components/layouts/sectionPratos"
import { Diferencias } from "./components/layouts/sectionDiferencias"
import { SectionComentarios } from "./components/layouts/sectionComentarios"
import { Mapa } from "./components/layouts/sectionMapa"



function App() {
  

  return (
    <>
      <Header/>
      <Main/>
      <Diferencias/>
      <Mestre/>
      <PratosDestaque/>
      <SectionComentarios/>
      <Mapa/>
    
    </>
  )
}

export default App
