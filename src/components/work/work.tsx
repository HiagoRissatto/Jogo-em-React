interface WorkProps {
  acoes: number;
  recurso: number;
  energia: number;
  setRecurso: (value: number) => void;
  setEnergia: (value: number) => void;
  setAcoes: (value: number) => void;
}

function Work({ acoes, recurso, energia, setRecurso, setEnergia, setAcoes }: WorkProps) {
  function trabalhar() {
    if (energia >= 25) {
      setEnergia(Math.max(energia - 25, 0));
      setRecurso(recurso + 10)
        setAcoes(acoes + 1);
    } else {
      alert("Você não tem energia suficiente para trabalhar!");
    }
  }
  return (
    <>
      <button onClick={trabalhar} disabled={acoes >= 2}>Trabalhar</button>
    </>
  );
}
export default Work;
