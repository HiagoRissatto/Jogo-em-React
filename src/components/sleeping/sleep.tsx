import sleep from "../../css/sleep.module.css"
interface SleepProps{
    acoes: number,
    vida:number,
    energia:number,
    historico:{ id: number; acao: string; resultado: string }[],
    setVida:(value:number)=>void,
    setEnergia:(value:number)=>void
    setAcoes:(value:number)=>void
    setHistorico:(historico:{ id: number; acao: string; resultado: string }[])=>void
}

function Sleep({historico, acoes, vida, energia, setVida, setEnergia, setAcoes, setHistorico}:SleepProps){
    function descansar(){
    setHistorico([...historico, { id: historico.length + 1, acao: "Descansar", resultado: `Você descansou e recuperou 5 de vida e 30 de energia. Vida atual: ${Math.min(vida + 5, 100)}. Energia atual: ${Math.min(energia + 30, 100)}` }]);
    setVida(Math.min(vida+5,100));
    setEnergia(Math.min(energia+30,100));
    setAcoes(acoes + 1);
    }
    return(
        <>  
            <button className={`btn btn-info m-2 ${sleep.botao}`} onClick={descansar} disabled={acoes >= 2}>Descansar</button>
        </>
    )
}
export default Sleep;