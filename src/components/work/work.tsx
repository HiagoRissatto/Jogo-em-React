interface WorkProps {
  recurso: number;
  energia: number;
  setRecurso: (value: number) => void;
  setEnergia: (value: number) => void;
}

function Work({ recurso, energia, setRecurso, setEnergia }: WorkProps) {
  function trabalhar() {
    if (energia >= 25) {
      setEnergia(Math.max(energia - 25, 0));
      setRecurso(Math.max(recurso + 10, 0));
    }else{
        alert("Você não tem energia suficiente para trabalhar!");
    }
  }
    return (
      <>
        <button onClick={trabalhar}>Trabalhar</button>
      </>
    );
  }
export default Work;
