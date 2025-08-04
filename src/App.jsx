import { useState } from 'react'
import './App.css'
import { Busqueda } from './Componentes/Busqueda'
import { Inicio } from './Componentes/Inicio'
import { ResultadoBusqueda } from './Componentes/ResultadoBusqueda'

function App() {
  const [buscarPerro, setBuscarPerro] = useState("")
  const [perros, setPerros] = useState([])

  return (
    <>
    <h1>Catalogo de razas de perros</h1>
    <Busqueda setBuscarPerro={setBuscarPerro}/> 
      {buscarPerro === ""
      ? <Inicio perros={perros} setPerros={setPerros}/>
      :  <ResultadoBusqueda buscarPerros={buscarPerro} perros={perros} setPerros={setPerros}/>}
    </>
  )
}

export default App
