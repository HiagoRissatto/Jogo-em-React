interface EatProps{
    acoes:number,
    vida:number,
    comida:number,
    historico:{ id: number; acao: string; resultado: string }[]
    setComida:(value:number)=>void
    setVida:(value:number)=>void
    setAcoes:(value:number)=>void
    setHistorico:(historico:{ id: number; acao: string; resultado: string }[])=>void
}

function Eat({historico, acoes, vida, comida, setComida, setVida, setAcoes, setHistorico}:EatProps){
    function comer(){
        if(comida>0){
            setHistorico([...historico, { id: historico.length + 1, acao: "Comer", resultado: `Você comeu e recuperou 20 de vida. Vida atual: ${Math.min(vida + 20, 100)}. Comida restante: ${comida - 1}` }]);
            setComida(Math.max(comida-1,0));
            setVida(Math.min(vida+20,100));
            setAcoes(acoes + 1);
        }else{
            alert("Você não tem comida suficiente para comer!");
        }
    }
    return(
        <>
            <button className="btn btn-success m-2" onClick={comer} disabled={acoes >= 2}>Comer</button>
        </>
    )
}
export default Eat;