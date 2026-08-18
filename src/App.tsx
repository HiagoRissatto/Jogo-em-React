import { useState } from 'react'
import Status from './components/status/status.tsx'
import Sleep from './components/sleeping/sleep.tsx'
import Eat from './components/eat/eat.tsx';
import Work from './components/work/work.tsx';
import Exploration from './components/exploration/exploration.tsx';
import app from "./css/app.module.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
const [acoes,setAcoes] = useState(0);
const [vida,setVida] = useState(100);
const [energia,setEnergia] = useState(100);
const [comida,setComida] = useState(5);
const [recurso,setRecurso] = useState(0);
  

  return (
    <div className={`min-vh-100 bg-dark text-light ${app.app}`}>
      <div className="container py-5">
        <h1 className={`text-center mb-4 ${app.titulo}`}>Jogo de sobrevivência</h1>
        <Status vida={vida} energia={energia} comida={comida} recurso={recurso}/>
        <div className="card bg-secondary bg-opacity-25 border-secondary p-4 mt-4">
          <h3 className={`text-center mb-3 text-light ${app.acoes}`}>Ações</h3>
          <div className='d-flex justify-content-center flex-wrap'>
            <Eat acoes={acoes} vida={vida} comida={comida} setComida={setComida} setVida={setVida} setAcoes={setAcoes}/>
            <Sleep acoes={acoes} vida={vida} energia={energia} setVida={setVida} setEnergia={setEnergia} setAcoes={setAcoes}/>
            <Exploration vida={vida} energia={energia} comida={comida} recurso={recurso} setVida={setVida} setEnergia={setEnergia} setComida={setComida} setRecurso={setRecurso} setAcoes={setAcoes}/>
            <Work acoes={acoes} recurso={recurso} energia={energia} setRecurso={setRecurso} setEnergia={setEnergia} setAcoes={setAcoes}/> 
          </div>

        </div>
      </div>
    </div>
  );
}

export default App
