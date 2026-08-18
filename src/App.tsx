import { useState } from 'react'
import Status from './components/status/status.tsx'
import Sleep from './components/sleeping/sleep.tsx'
import Eat from './components/eat/eat.tsx';
import Work from './components/work/work.tsx';
import Exploration from './components/exploration/exploration.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

const [vida,setVida] = useState(100);
const [energia,setEnergia] = useState(100);
const [comida,setComida] = useState(5);
const [recurso,setRecurso] = useState(0);
  

  return (
    <>
      <Status vida={vida} energia={energia} comida={comida} recurso={recurso}/>
      <Sleep vida={vida} energia={energia} setVida={setVida} setEnergia={setEnergia}/>
      <Work recurso={recurso} energia={energia} setRecurso={setRecurso} setEnergia={setEnergia}/>
      <Exploration vida={vida} energia={energia} comida={comida} recurso={recurso} setVida={setVida} setEnergia={setEnergia} setComida={setComida} setRecurso={setRecurso}/>
      <Eat vida={vida} comida={comida} setComida={setComida} setVida={setVida}/>
    </>
  )
}

export default App
