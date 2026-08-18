interface ExplorationProps {
    vida: number;
    energia: number;
    comida: number;
    recurso: number;
    setVida: (value: number) => void;
    setEnergia: (value: number) => void;
    setComida: (value: number) => void;
    setRecurso: (value: number) => void;
  }

  function Exploration({ vida, energia, comida, recurso, setVida, setEnergia, setComida, setRecurso }: ExplorationProps) {

    function explorar() {
      const evento = Math.floor(Math.random() * 5);
      if (evento === 0) {
        setComida(comida + 2);
        alert("Você encontrou comida durante a exploração!");
      } else if (evento === 1) {
        setRecurso(recurso + 10);
        alert("Você encontrou recursos durante a exploração!");
      } else if (evento === 2) {
        setVida(vida - 45);
        alert("Você se machucou durante a exploração!");
      } else if (evento === 3) {
        setEnergia(energia - 40);
        alert("Você se cansou muito durante a exploração!");
      } else {
        alert("Nada aconteceu durante a exploração.");
      }
    }
    return (
      <>
        <button onClick={explorar}>Explorar</button>
      </>
    );
}
  export default Exploration;